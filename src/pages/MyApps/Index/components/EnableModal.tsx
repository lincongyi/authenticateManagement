import React from 'react'
import {
  Alert,
  Form,
  Modal,
  message,
  Input,
  Row,
  Col,
  Space,
  Button
} from 'antd'
import { TDataType } from '../index.d'
import { applyStartApp, applyStopApp } from '@/api/myApp'

const { TextArea } = Input

const EnableModal = ({
  open,
  setOpen,
  item,
  callback
}: {
  open: boolean
  setOpen: Function
  item: TDataType
  callback: Function
}) => {
  const isEnable = item.state === 3
  const alertTips = `${isEnable ? '启用' : '停用'}申请通过后，将同时${
    isEnable ? '启用' : '停用'
  }此应用测试、正式环境的应用账号、及已接入能力服务！`

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

  const [messageApi, contextHolder] = message.useMessage()

  /**
   * 提交数据
   */
  const onFinish = async ({ describe }: { describe: string }) => {
    if (isEnable) await applyStartApp({ clientId: item.clientId, describe })
    else await applyStopApp({ clientId: item.clientId, describe })
    messageApi.success({
      content: `已成功${isEnable ? '启用' : '停用'}`
    })
    callback()
    onCancel()
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <>
      {contextHolder}
      <Modal
        title={`申请${isEnable ? '启用' : '停用'}`}
        centered
        open={open}
        width={640}
        onCancel={onCancel}
        footer={[]}
      >
        <Alert
          message={alertTips}
          type='warning'
          style={{ marginBottom: 20 }}
        />
        <Form
          form={form}
          name='enable'
          {...formProps}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label={`${isEnable ? '启用' : '停用'}原因`}
            name='describe'
            rules={[{ required: true }]}
          >
            <TextArea
              showCount
              maxLength={50}
              style={{ height: 120, resize: 'none' }}
              placeholder={`请输入${isEnable ? '启用' : '停用'}原因`}
            />
          </Form.Item>
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
    </>
  )
}

export default EnableModal
