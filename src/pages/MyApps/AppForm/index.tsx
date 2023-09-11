import React, { useEffect, useState } from 'react'
import {
  Affix,
  Button,
  Divider,
  Form,
  Input,
  Modal,
  Select,
  Space,
  Typography,
  message
} from 'antd'
import { fieldNames } from '@utils/index'
import { observer } from 'mobx-react-lite'
import { currentCompanyInfo } from '@api/myAccount'
import { addApp, getAppInfo, updateApp } from '@api/myApp'
import type { TAppParams } from '@api/myApp'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useGetDictionaryLabel } from '@/hooks'

const { Title } = Typography
const { TextArea } = Input

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '请输入${label}'
}

export const formProps = {
  labelCol: { span: 4 },
  wrapperCol: { span: 12 },
  validateMessages,
  autoComplete: 'off'
}

const defaultMaxLength = 20

const AppForm = () => {
  const { accessFormStore } = useGetDictionaryLabel()

  /**
   * 当前单位信息
   */
  const [companyInfo, setCompanyInfo] = useState<TCompanyInfo>()

  /**
   * 获取应用单位信息
   */
  useEffect(() => {
    ;(async () => {
      const { data } = await currentCompanyInfo()
      setCompanyInfo(data)
    })()
  }, [])

  const [searchParams] = useSearchParams()

  const [form] = Form.useForm()

  /**
   * 编辑情况下获取表单初始值
   */
  useEffect(() => {
    const id = searchParams.get('id')
    if (!id) return
    ;(async () => {
      const { data } = await getAppInfo({ id })
      if (!data) return
      form.setFieldsValue(data)
    })()
  }, [])

  /**
   * 提交
   */
  const onFinish = async (values: TAppParams) => {
    const id = searchParams.get('id')
    if (id) {
      // 编辑
      await updateApp({
        ...values,
        ...{ appId: form.getFieldValue('appId') },
        ...{ companyId: companyInfo!.companyId }
      })
    } else {
      // 新增
      await addApp({
        ...values,
        ...{ companyId: companyInfo!.companyId }
      })
    }

    message.success(`${id ? '编辑' : '添加'}成功`)
    navigate(-1)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  const navigate = useNavigate()

  const [modal, contextHolder] = Modal.useModal()

  /**
   * 返回
   */
  const onBack = () => {
    modal.confirm({
      title: '提示',
      content: '返回将清空所有录入的信息',
      okText: '确定',
      onOk: () => {
        navigate(-1)
      }
    })
  }

  return (
    <>
      {contextHolder}
      <Form
        form={form}
        name='appForm'
        {...formProps}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item wrapperCol={{ span: 24 }} className='tr'>
          <Affix offsetTop={140}>
            <Space>
              <Button onClick={onBack}>返回</Button>
              <Button type='primary' htmlType='submit'>
                提交
              </Button>
            </Space>
          </Affix>
        </Form.Item>
        <Title level={5}>应用基本信息</Title>
        <Divider />
        <Form.Item label='应用名称' name='appName' rules={[{ required: true }]}>
          <Input
            placeholder='请输入应用名称'
            showCount
            maxLength={defaultMaxLength}
          />
        </Form.Item>
        <Form.Item
          label='应用类型'
          name='appType'
          rules={[{ required: true, message: '请选择应用类型' }]}
        >
          <Select
            placeholder='请选择应用类型'
            fieldNames={fieldNames}
            options={accessFormStore.getDictionaryItem('appType')}
          />
        </Form.Item>
        <Form.Item
          label='所属级别'
          name='sysLevel'
          rules={[{ required: true, message: '请选择所属级别' }]}
        >
          <Select
            placeholder='请选择所属级别'
            fieldNames={fieldNames}
            options={accessFormStore.getDictionaryItem('systemlevel')}
          />
        </Form.Item>
        <Form.Item
          label='所属网域'
          name='sysInternet'
          rules={[{ required: true, message: '请选择所属网域' }]}
        >
          <Select
            placeholder='请选择系统对外服务范围'
            fieldNames={fieldNames}
            options={accessFormStore.getDictionaryItem('networkType')}
          />
        </Form.Item>
        <Form.Item
          label='应用描述'
          name='remark'
          rules={[{ required: true, message: '请输入使用场景描述' }]}
        >
          <TextArea
            rows={2}
            placeholder='请简要描述应用能力'
            showCount
            maxLength={50}
          />
        </Form.Item>

        <Title level={5}>应用单位信息</Title>
        <Divider />
        <Form.Item label='单位名称' rules={[{ required: true }]}>
          {companyInfo?.companyName}
        </Form.Item>
        <Form.Item label='管理员姓名' rules={[{ required: true }]}>
          {companyInfo?.adminName}
        </Form.Item>
        <Form.Item label='联系电话' rules={[{ required: true }]}>
          {companyInfo?.adminPhone}
        </Form.Item>
        <Form.Item label='联系邮箱' rules={[{ required: true }]}>
          {companyInfo?.adminEmail}
        </Form.Item>

        <Title level={5}>承建单位信息</Title>
        <Divider />
        <Form.Item
          label='承建单位'
          name='undertakeCompany'
          rules={[{ required: true }]}
        >
          <Input
            placeholder='请输入承建单位'
            showCount
            maxLength={defaultMaxLength}
          />
        </Form.Item>
        <Form.Item label='项目负责人' name='projectManager'>
          <Input
            placeholder='请输入项目负责人'
            showCount
            maxLength={defaultMaxLength}
          />
        </Form.Item>
        <Form.Item label='负责人联系电话' name='managerPhone'>
          <Input
            placeholder='请输入负责人联系电话'
            showCount
            maxLength={defaultMaxLength}
          />
        </Form.Item>
        <Form.Item label='负责人联系邮箱' name='managerEmail'>
          <Input
            placeholder='请输入负责人联系邮箱'
            showCount
            maxLength={defaultMaxLength}
          />
        </Form.Item>
      </Form>
    </>
  )
}

export default observer(AppForm)
