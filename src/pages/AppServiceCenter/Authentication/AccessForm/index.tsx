import React, { useRef, useState } from 'react'
import style from './index.module.scss'
import { Button, Radio, Space, message } from 'antd'
import type { RadioChangeEvent } from 'antd'
import type { FormInstance } from 'antd/lib/form/hooks/useForm'
import dayjs from 'dayjs'
import BasicInfo from './components/BasicInfo'
import AbilityInfo from './components/AbilityInfo'
import Concurrency from './components/Concurrency'
import UploadForm from './components/UploadForm'
import ConfirmModal from './components/ConfirmModal'
// import { dateFormat } from '@utils/date'

const AccessForm = () => {
  type TOptions = {
    label: string
    value: '0' | '1' | '2' | '3'
  }
  const options: TOptions[] = [
    { label: '基本信息', value: '0' },
    { label: '基础能力信息', value: '1' },
    { label: '并发配置', value: '2' },
    { label: '上传申请表', value: '3' }
  ]

  const basicInfoRef = useRef<FormInstance | null>(null) // 基本信息表单Ref
  const abilityInfoRef = useRef<FormInstance | null>(null) // 基础能力信息Ref
  const concurrencyRef = useRef<{
    testRef: React.MutableRefObject<FormInstance | null>
    productionRef: React.MutableRefObject<FormInstance | null>
  }>() // 并发配置Ref
  const uploadFormRef = useRef<FormInstance | null>(null) // 上传申请表Ref
  /**
   * 表单渲染
   */
  const renderForm = (value: TOptions['value']) => {
    return (
      <>
        <BasicInfo ref={basicInfoRef} value={value} />
        <AbilityInfo ref={abilityInfoRef} value={value} />
        <Concurrency ref={concurrencyRef} value={value} />
        <UploadForm ref={uploadFormRef} value={value} />
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
   * @param {Ref} ref : 表单Ref
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

  /**
   * 校验所有表单必填项
   * @returns {boolean} 返回所有表单是否录入所有必填项
   */
  const validateAllForms = async () => {
    const isBasicInfoPermitted = await validateForm(basicInfoRef!)
    if (!isBasicInfoPermitted) {
      message.warning('请补充【基本信息】中的必填项')
      return false
    }
    const isAbilityInfoPermitted = await validateForm(abilityInfoRef!)
    if (!isAbilityInfoPermitted) {
      message.warning('请补充【基础能力信息】中的必填项')
      return false
    }
    const isConcurrencyTestPermitted = await validateForm(
      concurrencyRef.current!.testRef
    )
    if (!isConcurrencyTestPermitted) {
      message.warning('请补充【并发配置】测试环境中的必填项')
      return false
    }
    const isConcurrencyProductionPermitted = await validateForm(
      concurrencyRef.current!.testRef
    )
    if (!isConcurrencyProductionPermitted) {
      message.warning('请补充【并发配置】正式环境中的必填项')
      return false
    }
    const isUploadFormPermitted = await validateForm(uploadFormRef!)
    if (!isUploadFormPermitted) {
      message.warning('请补充【上传申请表】中的内容')
      return false
    }
    return true
  }

  /**
   * 保存草稿
   */
  const onSave = async () => {
    if (!validateAllForms()) return false

    // console.log(abilityInfoRef.current?.getFieldsValue())
    // const { abilityPeriod } = abilityInfoRef.current?.getFieldsValue()
    // console.log('abilityPeriod', dayjs(abilityPeriod).format(dateFormat))
  }

  /**
   * 控制二次确认提交审核Modal显示隐藏
   */
  const [open, setOpen] = useState(false)
  /**
   * 整合各个表单数据
   */
  const [formData, setFormData] = useState<TAccessForm>()

  /**
   * 提交审核
   */
  const onSubmit = () => {
    // if (!validateAllForms()) return false

    setFormData({
      basicInfo: basicInfoRef.current?.getFieldsValue(),
      abilityInfo: abilityInfoRef.current?.getFieldsValue(),
      concurrency: {
        test: concurrencyRef.current?.testRef.current?.getFieldsValue(),
        production:
          concurrencyRef.current?.productionRef.current?.getFieldsValue()
      },
      uploadForm: uploadFormRef.current?.getFieldsValue()
    })
    setOpen(true)
  }

  return (
    <>
      <div className={style.header}>
        <Radio.Group
          options={options}
          onChange={onChange}
          value={value}
          optionType='button'
          buttonStyle='solid'
        />
        <Space>
          <Button onClick={() => onSave()}>保存草稿</Button>
          <Button type='primary' onClick={onSubmit}>
            提交审核
          </Button>
        </Space>
      </div>
      {renderForm(value)}
      {open && <ConfirmModal open={open} setOpen={setOpen} data={formData!} />}
    </>
  )
}

export default AccessForm
