import React, { useEffect, useRef, useState } from 'react'
import style from './index.module.scss'
import { Affix, Button, Radio, Space, message } from 'antd'
import type { RadioChangeEvent } from 'antd'
import type { FormInstance } from 'antd/lib/form/hooks/useForm'
import dayjs from 'dayjs'
import BasicInfo from './components/BasicInfo'
import AbilityInfo from './components/AbilityInfo'
import Concurrency from './components/Concurrency'
import UploadForm from './components/UploadForm'
import AccountInfo from './components/AccountInfo'
import ConfirmModal from './components/ConfirmModal'
import { dateFormat } from '@utils/date'
// import { getdictionary } from '@api/index'
import { useStore } from '@stores/index'
import {
  TAccessForm,
  TBasicInfo,
  TAbilityInfo,
  TConcurrency,
  TUploadForm
} from './index.d'
// import { saveTAppInfo } from '@api/accessForm'

const offsetTop = 64 // 固钉高度

const AccessForm = () => {
  /**
   * mobx存储数据字典
   */
  const { accessFormStore } = useStore()

  const [formState, setFormState] = useState(0)

  /**
   * 初始化表单
   */
  useEffect(() => {
    const { state, id } = accessFormStore.current
    setFormState(state)
    /**
     * 获取表单数据
     */
    if (id) {
      ;(async () => {
        // const { data } = await handlerRequest({id})
        // setFormData(data)
      })()
    }
  }, [])

  type TOptions = {
    label: string
    value: '0' | '1' | '2' | '3' | '4'
  }

  const options: TOptions[] = [
    { label: '基本信息', value: '0' },
    { label: '基础能力信息', value: '1' },
    { label: '并发配置', value: '2' },
    { label: '上传申请表', value: '3' },
    { label: '正式账号信息', value: '4' }
  ]

  /**
   * 整合各个表单数据
   */
  const [formData, setFormData] = useState<TAccessForm>()

  const basicInfoRef = useRef<FormInstance | null>(null) // 基本信息表单Ref
  const abilityInfoRef = useRef<FormInstance | null>(null) // 基础能力信息Ref
  const concurrencyRef = useRef<{
    sitRef: React.MutableRefObject<FormInstance | null>
    prodRef: React.MutableRefObject<FormInstance | null>
  }>(null) // 并发配置Ref
  const uploadFormRef = useRef<FormInstance | null>(null) // 上传申请表Ref
  const AccountInfoRef = useRef<FormInstance | null>(null) // 正式账号信息Ref
  /**
   * 表单渲染
   */
  const renderForm = (value: TOptions['value']) => {
    return (
      <>
        <BasicInfo ref={basicInfoRef} params={{ value }} />
        <AbilityInfo ref={abilityInfoRef} params={{ value }} />
        <Concurrency ref={concurrencyRef} params={{ value }} />
        <UploadForm ref={uploadFormRef} params={{ value }} />
        <AccountInfo ref={AccountInfoRef} params={{ value }} />
      </>
    )
  }

  const [value, setValue] = useState<TOptions['value']>('0')
  /**
   * 切换表单信息
   */
  const onChange = (e: RadioChangeEvent) => {
    const { value } = e.target
    setValue(value)
    renderForm(value)
  }

  /**
   *
   */
  /**
   * 校验表单
   * @param {Ref} ref 表单Ref
   * @returns {boolean} 返回当前表单是否录入所有必填项
   */
  const validateForm = async (
    ref: React.MutableRefObject<FormInstance | null>
  ) => {
    if (!ref || !ref.current) return false
    try {
      await ref.current.validateFields()
      return true
    } catch (error) {
      return false
    }
  }

  const [messageApi, contextHolder] = message.useMessage()

  /**
   * 校验所有表单必填项
   * @returns {boolean} 返回所有表单是否录入所有必填项
   */
  const validateAllForms = async () => {
    const isBasicInfoPermitted = await validateForm(basicInfoRef!)
    if (!isBasicInfoPermitted) {
      messageApi.warning('请补充【基本信息】中的必填项')
      return false
    }
    const isAbilityInfoPermitted = await validateForm(abilityInfoRef!)
    if (!isAbilityInfoPermitted) {
      messageApi.warning('请补充【基础能力信息】中的必填项')
      return false
    }
    const isConcurrencyTestPermitted = await validateForm(
      concurrencyRef.current!.sitRef
    )
    if (!isConcurrencyTestPermitted) {
      messageApi.warning('请补充【并发配置】测试环境中的必填项')
      return false
    }
    const isConcurrencyProductionPermitted = await validateForm(
      concurrencyRef.current!.sitRef
    )
    if (!isConcurrencyProductionPermitted) {
      messageApi.warning('请补充【并发配置】正式环境中的必填项')
      return false
    }
    const isUploadFormPermitted = await validateForm(uploadFormRef!)
    if (!isUploadFormPermitted) {
      messageApi.warning('请补充【上传申请表】中的内容')
      return false
    }
    return true
  }

  /**
   * 保存草稿
   */
  const onSave = async () => {
    const params: TBasicInfo & TAbilityInfo & TConcurrency & TUploadForm = {
      ...basicInfoRef.current?.getFieldsValue(),
      ...abilityInfoRef.current?.getFieldsValue(),
      ...concurrencyRef.current?.sitRef.current?.getFieldsValue(),
      ...concurrencyRef.current?.prodRef.current?.getFieldsValue(),
      ...uploadFormRef.current?.getFieldsValue()
    }
    params.serviceVaildEnd = dayjs(params.serviceVaildEnd).format(dateFormat)
    console.log(params)
    // const { data } = await saveTAppInfo(params)
    // console.log(data)
  }

  /**
   * 控制二次确认提交审核Modal显示隐藏
   */
  const [open, setOpen] = useState(false)

  /**
   * 提交审核
   */
  const onSubmit = () => {
    if (!validateAllForms()) return false

    console.log({
      basicInfo: basicInfoRef.current?.getFieldsValue(),
      abilityInfo: abilityInfoRef.current?.getFieldsValue(),
      concurrency: {
        sit: concurrencyRef.current?.sitRef.current?.getFieldsValue(),
        prod: concurrencyRef.current?.prodRef.current?.getFieldsValue()
      },
      uploadForm: uploadFormRef.current?.getFieldsValue()
    })

    setFormData({
      basicInfo: basicInfoRef.current?.getFieldsValue(),
      abilityInfo: abilityInfoRef.current?.getFieldsValue(),
      concurrency: {
        sit: concurrencyRef.current?.sitRef.current?.getFieldsValue(),
        prod: concurrencyRef.current?.prodRef.current?.getFieldsValue()
      },
      uploadForm: uploadFormRef.current?.getFieldsValue()
    })
    setOpen(true)
  }

  return (
    <>
      {contextHolder}
      <Affix offsetTop={offsetTop}>
        <div className={style.header}>
          <Radio.Group
            options={options}
            onChange={onChange}
            value={value}
            optionType='button'
            buttonStyle='solid'
          />
          {formState !== 2 && (
            <Space>
              <Button type='primary' onClick={onSubmit}>
                提交审核
              </Button>
              <Button onClick={() => onSave()}>保存草稿</Button>
            </Space>
          )}
        </div>
      </Affix>
      {renderForm(value)}
      {open && <ConfirmModal open={open} setOpen={setOpen} data={formData!} />}
    </>
  )
}

export default AccessForm
