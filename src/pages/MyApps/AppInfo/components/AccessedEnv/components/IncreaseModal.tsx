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
import { sitEnvContext } from '../../SitEnv'
import { prodEnvContext } from '../../ProdEnv'

const IncreaseModal = ({
  id,
  open,
  setOpen,
  callback
}: {
  id: string | undefined // 申请增加用量接口id
  open: boolean
  setOpen: Function
  callback: Function
}) => {
  const { appId, env } = useContext(appInfoContext)!

  const { capability, fetchAppInfoByEnv } = useContext(
    env === 'sit' ? sitEnvContext : prodEnvContext
  )!

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
  const onFinish = async (values: any) => {
    console.log('values', {
      ...values,
      apiId: Number(id),
      appId
    })
    // await xxxxxx({
    //   ...values,
    //   apiId: Number(id),
    //   appId
    // })
    message.success({
      content: '申请成功',
      duration: 2
    })
    fetchAppInfoByEnv!(capability)
    onCancel()
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
          <InputNumber
            placeholder='请输入增加用量值'
            addonAfter='次'
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
  )
}

export default IncreaseModal
