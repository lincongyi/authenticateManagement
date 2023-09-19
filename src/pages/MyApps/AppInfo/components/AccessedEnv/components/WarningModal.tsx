import React, { useContext } from 'react'
import {
  Alert,
  Modal,
  Form,
  Divider,
  Row,
  Col,
  Space,
  Button,
  InputNumber,
  message
} from 'antd'
import { appInfoContext } from '../../..'
import { apiConfig } from '@/api/myApp'
import { sitEnvContext } from '../../SitEnv'
import { prodEnvContext } from '../../ProdEnv'

const WarningModal = ({
  id,
  open,
  setOpen
}: {
  id: string | undefined // 预警设置接口id
  open: boolean
  setOpen: Function
}) => {
  const { clientId, env } = useContext(appInfoContext)!

  const { capability, fetchAppInfoByEnv } = useContext(
    env === 'sit' ? sitEnvContext : prodEnvContext
  )!

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

  const [messageApi, contextHolder] = message.useMessage()

  /**
   * 提交数据
   */
  const onFinish = async (values: any) => {
    console.log('values', {
      ...values,
      apiId: Number(id),
      clientId
    })
    await apiConfig({
      ...values,
      apiId: Number(id),
      clientId
    })
    messageApi.success({
      content: '预警设置成功',
      duration: 2
    })
    fetchAppInfoByEnv!(capability)
    onCancel()
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <>
      {contextHolder}
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
          initialValues={{ proportion: 60, errorNum: 1, timeoutNum: 5000 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label='调用量预警阈值'
            name='proportion'
            rules={[{ required: true }]}
          >
            <InputNumber
              placeholder='请输入调用量预警阈值'
              addonAfter='%'
              style={{ width: '100%' }}
            />
          </Form.Item>
          <Form.Item
            label='报错次数预警阈值'
            name='errorNum'
            rules={[{ required: true }]}
          >
            <InputNumber
              placeholder='报错次数预警阈值'
              addonAfter='次/分钟'
              style={{ width: '100%' }}
            />
          </Form.Item>
          <Form.Item
            label='调用超时预警阈值'
            name='timeoutNum'
            rules={[{ required: true }]}
          >
            <InputNumber
              placeholder='调用超时预警阈值'
              addonAfter='毫秒（ms）'
              style={{ width: '100%' }}
            />
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
    </>
  )
}

export default WarningModal
