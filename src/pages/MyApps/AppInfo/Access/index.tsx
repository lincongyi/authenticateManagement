import React, { useEffect, useRef, useState } from 'react'
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
import {
  addAppCapabilityForm,
  getAppCapabilityForm,
  getCapability
} from '@/api/ability'
import type {
  TAddAppCapabilityFormParams,
  TFormContent,
  TFormList,
  TGetCapabilityResponse
} from '@/api/ability'
import DynamicForm from '@/components/DynamicForm'
import { getAppId } from '@/api/myApp'
import { formatFormItemValue } from '@/utils'

const Access = () => {
  const [searchParams] = useSearchParams()

  const navigate = useNavigate()

  const clientId = searchParams.get('clientId')
  const capabilityId = Number(searchParams.get('capabilityId'))

  if (!clientId || !capabilityId) return navigate(-1)

  const [capability, setCapability] = useState<TGetCapabilityResponse>() // 基础能力信息

  const [capabilityFormList, setCapabilityFormList] =
    useState<TAddAppCapabilityFormParams['formList']>()

  const [appId, setAppId] = useState<string>()

  /**
   * 初始换动态表单内容
   */
  useEffect(() => {
    ;(async () => {
      const { data } = await getCapability({ id: capabilityId })
      setCapability(data)
    })()
    ;(async () => {
      const { data } = await getAppId({ id: clientId })
      if (!data) return navigate(-1)
      setAppId(data.appId)

      const formInfo = await getAppCapabilityForm({
        appId: data.appId,
        clientId,
        capabilityId
      })
      if (!formInfo.data) return navigate(-1)

      setCapabilityFormList(formInfo.data.formList)
      setActiveFormId(formInfo.data.formList[0].formId)
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
   * 保存草稿 or 提交审核
   */
  const onSubmit = async (type: TAddAppCapabilityFormParams['type']) => {
    if (!capabilityFormList) return
    if (type) {
      try {
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

      const formContent = content.map(item => ({
        ...item,
        value: formatFormItemValue(
          item.type,
          accessRefs.current[i].getFieldValue(item.field)
        )
      }))
      let item: TFormList = {
        formContent: JSON.stringify(formContent),
        formId: capabilityFormList[i].formId,
        formName: capabilityFormList[i].formName
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
            value: formatFormItemValue(
              item.type,
              accessRefs.current[i].getFieldValue(item.field)
            )
          }
        })
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
      clientId,
      capabilityId,
      formList,
      type
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
        clientId &&
        capabilityId &&
        capabilityFormList &&
        !!capabilityFormList.length &&
        capabilityFormList.map((item, index) => (
          <div
            key={item.formId}
            style={{ display: activeFormId === item.formId ? 'block' : 'none' }}
          >
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
