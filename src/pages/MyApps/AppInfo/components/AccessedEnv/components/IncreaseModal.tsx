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

const IncreaseModal = ({
  open,
  setOpen,
  callback
}: {
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
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
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
  const onFinish = () => {
    onCancel()
    callback()
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <Modal
      title='申请增加用量'
      centered
      open={open}
      width={640}
      onCancel={onCancel}
      footer={[]}
    >
      <Divider />
      <Alert
        message='每日可发起3次申请增加用量，次日将重置用量限额。'
        type='info'
        showIcon
        style={{ marginBottom: 20 }}
      />
      <Form
        form={form}
        name='increase'
        {...formProps}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item label='增加用量' name='name' rules={[{ required: true }]}>
          <Input placeholder='请输入增加用量' maxLength={10} />
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

export default IncreaseModal
