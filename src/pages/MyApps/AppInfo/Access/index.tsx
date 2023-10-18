import React, { Ref, useEffect, useRef, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import style from './index.module.scss'
import {
  Affix,
  Button,
  Divider,
  FormInstance,
  Modal,
  Radio,
  RadioChangeEvent,
  Space,
  message
} from 'antd'
import type { UploadFile } from 'antd'
import {
  addAppCapabilityForm,
  getAppCapabilityForm,
  getCapability
} from '@/api/ability'
import type {
  TAddAppCapabilityFormParams,
  TFormContent,
  TFormItemType,
  TFormList,
  TGetCapabilityResponse
} from '@/api/ability'
import DynamicForm from '@/components/DynamicForm'
import dayjs from 'dayjs'
import { useStore } from '@/stores'

const Access = () => {
  const [searchParams] = useSearchParams()

  const navigate = useNavigate()

  const appId = searchParams.get('appId')

  const capabilityId = Number(searchParams.get('capabilityId'))

  const env = searchParams.get('env') as TEnv | null

  if (!appId || !capabilityId || !env) return navigate(-1)

  const { myAppStore } = useStore()

  myAppStore.setAppId(appId)

  const [capability, setCapability] = useState<TGetCapabilityResponse>() // 基础能力信息

  const [capabilityFormList, setCapabilityFormList] =
    useState<TAddAppCapabilityFormParams['formList']>()

  const [defaultForm, setDefaultForm] = useState<TFormContent[]>()

  const defaultFormRef = useRef<FormInstance>()

  /**
   * 初始化动态表单内容
   */
  useEffect(() => {
    ;(async () => {
      const { data } = await getCapability({ id: capabilityId })
      setCapability(data)
    })()
    ;(async () => {
      const { data } = await getAppCapabilityForm({
        appId,
        capabilityId,
        env
      })
      if (!data) return navigate(-1)

      setCapabilityFormList(data.formList)
      setDefaultForm(
        JSON.parse(data.formList[0].defaultFormContent!) as TFormContent[]
      )
      setActiveFormId(data.formList[0].formId)
    })()
  }, [])

  const [activeFormId, setActiveFormId] = useState(0) // 当前active表单项index

  /**
   * 切换能力表单
   */
  const onChange = (e: RadioChangeEvent) => {
    const item = capabilityFormList!.find(
      item => item.formId === e.target.value
    )
    if (!item) return
    setActiveFormId(item.formId)
  }

  const accessRefs = useRef<FormInstance[]>([])

  const [modal, contextHolder] = Modal.useModal()

  const [messageApi, messageApiHolder] = message.useMessage()

  /**
   * 预处理选择器、上传图片、上传文件，在表单展示时候的值
   * @param {TFormItemType} type 表单项类型
   * @param {any} value 初始表单项value
   * @returns {any} 处理过的表单项value
   */
  const formatFormLabelValue = (item: TFormContent, value: any) => {
    const { type } = item
    if (['radio', 'select'].includes(type)) {
      const { options } = item
      if (!options) return undefined
      const optionItem = options.find(__item => __item.value === value)
      return optionItem?.label
    } else if (['checkbox', 'selectMultiple'].includes(type)) {
      const { options } = item
      if (!options) return undefined
      const labelValueList =
        value?.reduce((prev: any[], next: any) => {
          const optionItem = options?.find(__item => __item.value === next)
          const label = optionItem ? optionItem.label : undefined
          return [...prev, label]
        }, []) || undefined
      return labelValueList ? labelValueList.toString() : undefined
    } else if (['dateTime'].includes(type) && value) {
      return dayjs(value).isValid() && dayjs(value).format('YYYY-MM-DD')
    } else if (['switch'].includes(type)) {
      const { switchText } = item
      if (!switchText) return undefined
      const content = switchText?.split('/')
      return content[+!value]
    } else if (['table'].includes(type)) {
      return item.tableOptions!.map((__item, index) => ({
        label: __item.key,
        value: value[index].value
      }))
    } else return value
  }

  /**
   * 预处理部分动态表单数据
   * @param {TFormItemType} type 表单项类型
   * @param {any} value 初始表单项value
   * @returns {any} 处理过的表单项value
   */
  const formatFormItemValue = (type: TFormItemType, value: any) => {
    if (type === 'dateTime') {
      return value && dayjs(value).isValid()
        ? dayjs(value).format('YYYY-MM-DD')
        : value
    } else if (type === 'fileUpload' && value) {
      const list: UploadFile[] = value.filter(
        (item: UploadFile) => item.status === 'done'
      )
      return list.length ? list : undefined
    } else return value
  }

  /**
   * 保存草稿 or 提交审核
   */
  const onSubmit = async (type: TAddAppCapabilityFormParams['type']) => {
    if (!capabilityFormList) return
    if (type) {
      try {
        await defaultFormRef.current!.validateFields()
        for (let i = 0; i < accessRefs.current.length; i++) {
          await accessRefs.current[i].validateFields()
        }
      } catch (error) {
        messageApi.error('请核对表单必填项是否已全部录入')
        return false
      }
    }

    const formList: TFormList[] = []

    for (let i = 0; i < capabilityFormList?.length; i++) {
      const content: TFormContent[] = JSON.parse(
        capabilityFormList[i].formContent
      )

      const formContent = content.map(item => {
        return {
          ...item,
          value: formatFormItemValue(
            item.type,
            accessRefs.current[i].getFieldValue(item.field)
          )
        }
      })
      let item: TFormList = {
        formContent: JSON.stringify(formContent),
        formId: capabilityFormList[i].formId,
        formName: capabilityFormList[i].formName
      }
      // 基础能力信息表单有一块专属的默认表单内容
      if (i === 0) {
        const content: TFormContent[] = JSON.parse(
          capabilityFormList[0].defaultFormContent!
        )
        const defaultFormContent = content.map(item => {
          return {
            ...item,
            labelValue: formatFormLabelValue(
              item,
              defaultFormRef.current!.getFieldValue(item.field)
            ),
            value: formatFormItemValue(
              item.type,
              defaultFormRef.current!.getFieldValue(item.field)
            )
          }
        })
        item.defaultFormContent = JSON.stringify(defaultFormContent)
      }
      // 保存草稿不需要传form，提交审核需要传form
      if (type) {
        const form = content.map(item => {
          const { cnName, dataType, type, field } = item
          return {
            cnName,
            dataType,
            type,
            field,
            labelValue: formatFormLabelValue(
              item,
              accessRefs.current[i].getFieldValue(item.field)
            ),
            value: formatFormItemValue(
              item.type,
              accessRefs.current[i].getFieldValue(item.field)
            )
          }
        })
        if (i === 0) {
          const defaultFormContent: TFormContent[] = JSON.parse(
            capabilityFormList[0].defaultFormContent!
          )
          const defaultFormList = defaultFormContent.map(item => {
            const { cnName, dataType, type, field } = item
            return {
              cnName,
              dataType,
              type,
              field,
              labelValue: formatFormLabelValue(
                item,
                defaultFormRef.current!.getFieldValue(item.field)
              ),
              value: formatFormItemValue(
                item.type,
                defaultFormRef.current!.getFieldValue(item.field)
              )
            }
          })
          item.defaultFormList = defaultFormList
        }
        item = { ...item, form }
      }
      formList.push(item)
    }

    const confirmed = await modal.confirm({
      title: `${type ? '提交审核' : '保存草稿'}`,
      content: `${
        type
          ? '提交审核后会进入审批阶段，请确认是否提交'
          : '保存草稿会覆盖上一次保存的内容，是否确认保存？'
      }`
    })
    if (!confirmed) return

    const params: TAddAppCapabilityFormParams = {
      appId: appId!,
      capabilityId,
      formList,
      type,
      env: env!
    }

    await addAppCapabilityForm(params)

    messageApi.success({
      content: `已成功${type ? '提交审核' : '保存草稿'}`,
      duration: 2,
      onClose: () => navigate(-1)
    })
  }

  return (
    <>
      {contextHolder}
      {messageApiHolder}
      <div className={style.header}>
        <div className={`${style['left-side']} ${style.name}`}>
          {capability?.name}
        </div>
        <div className={style['right-side']}>
          <Affix offsetTop={80}>
            <Space>
              <Button onClick={() => onSubmit(0)}>保存草稿</Button>
              <Button type='primary' onClick={() => onSubmit(1)}>
                提交审核
              </Button>
            </Space>
          </Affix>
        </div>
      </div>
      <Divider />
      <div className={style['form-tabs']}>
        {capabilityFormList && !!capabilityFormList.length && (
          <Affix offsetTop={80} style={{ display: 'inline-block' }}>
            <Radio.Group
              size='large'
              defaultValue={capabilityFormList[0].formId}
              buttonStyle='solid'
              onChange={onChange}
            >
              {capabilityFormList.map(item => (
                <Radio.Button value={item.formId} key={item.formId}>
                  {item.formName}
                </Radio.Button>
              ))}
            </Radio.Group>
          </Affix>
        )}
      </div>

      {appId &&
        env &&
        capabilityId &&
        capabilityFormList &&
        !!capabilityFormList.length &&
        capabilityFormList.map((item, index) => (
          <div
            key={item.formId}
            style={{ display: activeFormId === item.formId ? 'block' : 'none' }}
          >
            {!index && defaultForm && (
              <DynamicForm
                ref={defaultFormRef as Ref<FormInstance>}
                formId='defaultForm'
                formList={defaultForm}
              />
            )}
            <DynamicForm
              ref={(el: FormInstance) => (accessRefs.current[index] = el)}
              formId={item.formId}
              formList={JSON.parse(item.formContent)}
            />
          </div>
        ))}
    </>
  )
}

export default Access
