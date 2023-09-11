import React from 'react'
import {
  Alert,
  Modal,
  Form,
  Divider,
  Row,
  Col,
  Space,
  Button,
  Input
} from 'antd'

const WarningModal = ({
  id,
  open,
  setOpen,
  callback
}: {
  id: string | undefined
  open: boolean
  setOpen: Function
  callback: Function
}) => {
  const [form] = Form.useForm()

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '请输入${label}'
  }

  const formProps = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
    validateMessages,
    autoComplete: 'off'
  }

  /**
   * 关闭
   */
  const onCancel = () => {
    form.resetFields()
    setOpen(false)
  }

  /**
   * 提交数据
   */
  const onFinish = (values: any) => {
    console.log('values', values)
    onCancel()
    callback()
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <Modal
      title='预警设置'
      centered
      open={open}
      width={640}
      onCancel={onCancel}
      footer={[]}
    >
      <Divider />
      <Alert
        message='平台将根据您的预警设置进行推送系统通知及邮件通知！'
        type='info'
        showIcon
        style={{ marginBottom: 20 }}
      />
      <Form
        form={form}
        name='warning'
        {...formProps}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label='调用量预警阈值'
          name='amount'
          rules={[{ required: true }]}
        >
          <Input placeholder='请输入调用量预警阈值' suffix='%' />
        </Form.Item>
        <Form.Item
          label='报错次数预警阈值'
          name='times'
          rules={[{ required: true }]}
        >
          <Input placeholder='报错次数预警阈值' suffix='次/分钟' />
        </Form.Item>
        <Form.Item
          label='调用超时预警阈值'
          name='timeout'
          rules={[{ required: true }]}
        >
          <Input placeholder='调用超时预警阈值' suffix='毫秒（ms）' />
        </Form.Item>
        <Divider />
        <Form.Item noStyle wrapperCol={{ span: 24 }}>
          <Row>
            <Col span={24} className='tr'>
              <Space>
                <Button onClick={onCancel}>取消</Button>,
                <Button type='primary' htmlType='submit'>
                  确定
                </Button>
              </Space>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default WarningModal
