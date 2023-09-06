import React from 'react'
import { Button, Divider, Form, Input, Select, Typography } from 'antd'
import type { FormInstance } from 'antd/lib/form/hooks/useForm'

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

const systemRangeOptions = [
  { label: '互联网', value: 1 },
  { label: '政务外网', value: 2 },
  { label: '公安网', value: 3 },
  { label: '移动警务网', value: 4 }
]

const AppForm = () => {
  return (
    <Form name='appForm' {...formProps} initialValues={{}}>
      <Form.Item wrapperCol={{ span: 24 }} className='tr'>
        <Button type='primary' htmlType='submit'>
          提交
        </Button>
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
      {/* <Form.Item
        label='应用类型'
        name='systemtype'
        rules={[{ required: true, message: '请选择接入系统类型' }]}
      >
        <Select
          placeholder='请选择接入系统类型'
          fieldNames={fieldNames}
          options={accessFormStore.getDictionaryItem('appType')}
        />
      </Form.Item>
      <Form.Item
        label='所属级别'
        name='systemlevel'
        rules={[{ required: true, message: '请选择系统所属级别' }]}
      >
        <Select
          placeholder='请选择系统所属级别'
          fieldNames={fieldNames}
          options={accessFormStore.getDictionaryItem('systemlevel')}
        />
      </Form.Item> */}
      <Form.Item
        label='所属网域'
        name='systemRange'
        rules={[{ required: true, message: '请选择系统对外服务范围' }]}
      >
        <Select
          placeholder='请选择系统对外服务范围'
          options={systemRangeOptions}
        />
      </Form.Item>
      <Form.Item
        label='应用描述'
        name='description'
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
      <Form.Item
        label='所属单位'
        name='applyCompany'
        rules={[{ required: true }]}
      >
        <Input
          placeholder='请输入申请单位'
          showCount
          maxLength={defaultMaxLength}
        />
      </Form.Item>
      <Form.Item label='单位经办人' name='applyCompanyHandleMan'>
        <Input
          placeholder='请输入单位经办人'
          showCount
          maxLength={defaultMaxLength}
        />
      </Form.Item>
      <Form.Item label='经办人联系电话' name='applyCompanyHandleManPhone'>
        <Input
          placeholder='请输入经办人联系电话'
          showCount
          maxLength={defaultMaxLength}
        />
      </Form.Item>
      <Form.Item label='经办人联系邮箱' name='applyCompanyHandleManEmail'>
        <Input
          placeholder='请输入经办人联系邮箱'
          showCount
          maxLength={defaultMaxLength}
        />
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
      <Form.Item label='项目负责人' name='undertakeCompanyHandleMan'>
        <Input
          placeholder='请输入项目负责人'
          showCount
          maxLength={defaultMaxLength}
        />
      </Form.Item>
      <Form.Item label='负责人联系电话' name='undertakeCompanyHandleManPhone'>
        <Input
          placeholder='请输入负责人联系电话'
          showCount
          maxLength={defaultMaxLength}
        />
      </Form.Item>
      <Form.Item label='负责人联系邮箱' name='undertakeCompanyHandleManEmail'>
        <Input
          placeholder='请输入负责人联系邮箱'
          showCount
          maxLength={defaultMaxLength}
        />
      </Form.Item>
    </Form>
  )
}

export default AppForm
