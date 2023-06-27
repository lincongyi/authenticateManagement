import React, { useImperativeHandle, useRef } from 'react'
import { Alert, Divider, Form, Input, Typography } from 'antd'
import type { FormInstance } from 'antd/lib/form/hooks/useForm'
import { formProps } from '..'
import { useStore } from '@stores/index'
import { TValue } from '../../index.d'

const { Title } = Typography

const Concurrency = React.forwardRef<
  {
    sitRef: React.MutableRefObject<FormInstance<any> | null>
    prodRef: React.MutableRefObject<FormInstance<any> | null>
  },
  { params: { value: TValue } }
>(({ params }, ref) => {
  const sitRef = useRef<FormInstance | null>(null)
  const prodRef = useRef<FormInstance | null>(null)
  useImperativeHandle(ref, () => ({
    sitRef,
    prodRef
  }))
  const { value } = params

  const { accessFormStore } = useStore()

  const isCheck = accessFormStore.current.state === 2

  /**
   * 并发配置默认值
   */
  const sitInitialValues = {
    sitperSec: '50',
    sitlimitTime: '1',
    sitperDay: '100000',
    sitperMonth: '0',
    sitperAnnum: '0',
    sittotal: '0'
  }
  const prodInitialValues = {
    prodperSec: '50',
    prodlimitTime: '1',
    prodperDay: '100000',
    prodperMonth: '0',
    prodperAnnum: '0',
    prodtotal: '0'
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
        ref={sitRef}
        name='concurrencySit'
        {...formProps}
        initialValues={sitInitialValues}
        style={{ display: value === '2' ? 'block' : 'none' }}
      >
        <Title level={5}>测试环境</Title>
        <Divider />
        <Form.Item
          label='每秒并发限制'
          name='sitperSec'
          extra='(0=不限额，建议区间1-100，单位：次)'
          rules={[{ required: true }]}
        >
          {isCheck ? '' : <Input placeholder='请输入每秒并发限制' />}
        </Form.Item>
        <Form.Item
          label='计算周期'
          name='sitlimitTime'
          extra='(计算周期必须>1，建议周期=1，单位：秒)'
          rules={[{ required: true }]}
        >
          {isCheck ? '' : <Input placeholder='请输入计算周期' />}
        </Form.Item>
        <Form.Item
          label='每日限额'
          name='sitperDay'
          extra='(0=不限额，建议区间10W-100W，单位：次)'
          rules={[{ required: true }]}
        >
          {isCheck ? '' : <Input placeholder='请输入每日限额' />}
        </Form.Item>
        <Form.Item
          label='每月限额'
          name='sitperMonth'
          extra='(0=不限额，建议限额=0，单位：次)'
          rules={[{ required: true }]}
        >
          {isCheck ? '' : <Input placeholder='请输入每月限额' />}
        </Form.Item>
        <Form.Item
          label='每年限额'
          name='sitperAnnum'
          extra='(0=不限额，建议限额=0，单位：次)'
          rules={[{ required: true }]}
        >
          {isCheck ? '' : <Input placeholder='请输入每年限额' />}
        </Form.Item>
        <Form.Item
          label='认证总次数限额'
          name='sittotal'
          extra='(0=不限额，建议限额=0，单位：次)'
          rules={[{ required: true }]}
        >
          {isCheck ? '' : <Input placeholder='请输入认证总次数限额' />}
        </Form.Item>
      </Form>

      <Form
        ref={prodRef}
        name='concurrencyProduction'
        {...formProps}
        initialValues={prodInitialValues}
        style={{ display: value === '2' ? 'block' : 'none' }}
      >
        <Title level={5}>正式环境</Title>
        <Divider />
        <Form.Item
          label='每秒并发限制'
          name='prodperSec'
          extra='(0=不限额，建议区间1-100，单位：次)'
          rules={[{ required: true }]}
        >
          {isCheck ? '' : <Input placeholder='请输入每秒并发限制' />}
        </Form.Item>
        <Form.Item
          label='计算周期'
          name='prodlimitTime'
          extra='(计算周期必须>1，建议周期=1，单位：秒)'
          rules={[{ required: true }]}
        >
          {isCheck ? '' : <Input placeholder='请输入计算周期' />}
        </Form.Item>
        <Form.Item
          label='每日限额'
          name='prodperDay'
          extra='(0=不限额，建议区间10W-100W，单位：次)'
          rules={[{ required: true }]}
        >
          {isCheck ? '' : <Input placeholder='请输入每日限额' />}
        </Form.Item>
        <Form.Item
          label='每月限额'
          name='prodperMonth'
          extra='(0=不限额，建议限额=0，单位：次)'
          rules={[{ required: true }]}
        >
          {isCheck ? '' : <Input placeholder='请输入每月限额' />}
        </Form.Item>
        <Form.Item
          label='每年限额'
          name='prodperAnnum'
          extra='(0=不限额，建议限额=0，单位：次)'
          rules={[{ required: true }]}
        >
          {isCheck ? '' : <Input placeholder='请输入每年限额' />}
        </Form.Item>
        <Form.Item
          label='认证总次数限额'
          name='prodtotal'
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
