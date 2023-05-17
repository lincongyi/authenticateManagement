import React, { useImperativeHandle, useRef } from 'react'
import { Alert, Divider, Form, Input, Typography } from 'antd'
import type { FormInstance } from 'antd/lib/form/hooks/useForm'
import { formProps } from '..'

const { Title } = Typography

const Concurrency = React.forwardRef<
  {
    testRef: React.MutableRefObject<FormInstance<any> | null>
    productionRef: React.MutableRefObject<FormInstance<any> | null>
  },
  { params: { value: TValue; isCheck: 0 | 1 } }
>(({ params }, ref) => {
  const testRef = useRef<FormInstance | null>(null)
  const productionRef = useRef<FormInstance | null>(null)
  useImperativeHandle(ref, () => ({
    testRef,
    productionRef
  }))
  const { value, isCheck } = params

  /**
   * 并发配置默认值
   */
  const initialValues = {
    secondQuota: '50',
    period: '1',
    dayQuota: '100000',
    monthQuota: '0',
    yearQuota: '0',
    totalQuota: '0'
  }
  return (
    <>
      <Alert
        message='请根据需要合理调整，勿一味追求最高值造成资源冗余'
        type='warning'
        showIcon
        style={{
          marginBottom: 20,
          display: value === '2' ? 'flex' : 'none'
        }}
      />
      <Form
        ref={testRef}
        name='concurrencyTest'
        {...formProps}
        initialValues={initialValues}
        style={{ display: value === '2' ? 'block' : 'none' }}
      >
        <Title level={5}>测试环境</Title>
        <Divider />
        <Form.Item
          label='每秒并发限制'
          name='secondQuota'
          extra='(0=不限额，建议区间1-100，单位：次)'
          rules={[{ required: true }]}
        >
          {isCheck ? '' : <Input placeholder='请输入每秒并发限制' />}
        </Form.Item>
        <Form.Item
          label='计算周期'
          name='period'
          extra='(计算周期必须>1，建议周期=1，单位：秒)'
          rules={[{ required: true }]}
        >
          {isCheck ? '' : <Input placeholder='请输入计算周期' />}
        </Form.Item>
        <Form.Item
          label='每日限额'
          name='dayQuota'
          extra='(0=不限额，建议区间10W-100W，单位：次)'
          rules={[{ required: true }]}
        >
          {isCheck ? '' : <Input placeholder='请输入每日限额' />}
        </Form.Item>
        <Form.Item
          label='每月限额'
          name='monthQuota'
          extra='(0=不限额，建议限额=0，单位：次)'
          rules={[{ required: true }]}
        >
          {isCheck ? '' : <Input placeholder='请输入每月限额' />}
        </Form.Item>
        <Form.Item
          label='每年限额'
          name='yearQuota'
          extra='(0=不限额，建议限额=0，单位：次)'
          rules={[{ required: true }]}
        >
          {isCheck ? '' : <Input placeholder='请输入每年限额' />}
        </Form.Item>
        <Form.Item
          label='认证总次数限额'
          name='totalQuota'
          extra='(0=不限额，建议限额=0，单位：次)'
          rules={[{ required: true }]}
        >
          {isCheck ? '' : <Input placeholder='请输入认证总次数限额' />}
        </Form.Item>
      </Form>

      <Form
        ref={productionRef}
        name='concurrencyProduction'
        {...formProps}
        initialValues={initialValues}
        style={{ display: value === '2' ? 'block' : 'none' }}
      >
        <Title level={5}>正式环境</Title>
        <Divider />
        <Form.Item
          label='每秒并发限制'
          name='secondQuota'
          extra='(0=不限额，建议区间1-100，单位：次)'
          rules={[{ required: true }]}
        >
          {isCheck ? '' : <Input placeholder='请输入每秒并发限制' />}
        </Form.Item>
        <Form.Item
          label='计算周期'
          name='period'
          extra='(计算周期必须>1，建议周期=1，单位：秒)'
          rules={[{ required: true }]}
        >
          {isCheck ? '' : <Input placeholder='请输入计算周期' />}
        </Form.Item>
        <Form.Item
          label='每日限额'
          name='dayQuota'
          extra='(0=不限额，建议区间10W-100W，单位：次)'
          rules={[{ required: true }]}
        >
          {isCheck ? '' : <Input placeholder='请输入每日限额' />}
        </Form.Item>
        <Form.Item
          label='每月限额'
          name='monthQuota'
          extra='(0=不限额，建议限额=0，单位：次)'
          rules={[{ required: true }]}
        >
          {isCheck ? '' : <Input placeholder='请输入每月限额' />}
        </Form.Item>
        <Form.Item
          label='每年限额'
          name='yearQuota'
          extra='(0=不限额，建议限额=0，单位：次)'
          rules={[{ required: true }]}
        >
          {isCheck ? '' : <Input placeholder='请输入每年限额' />}
        </Form.Item>
        <Form.Item
          label='认证总次数限额'
          name='totalQuota'
          extra='(0=不限额，建议限额=0，单位：次)'
          rules={[{ required: true }]}
        >
          {isCheck ? '' : <Input placeholder='请输入认证总次数限额' />}
        </Form.Item>
      </Form>
    </>
  )
})

Concurrency.displayName = 'Concurrency'

export default Concurrency
