import React from 'react'
import { Button, Divider, Form, Input, Modal, Space, message } from 'antd'
import { useStore } from '@stores/index'
import { getProcessByKey } from '@api/index'

const CheckModal = ({
  open,
  setOpen,
  toResult
}: {
  open: boolean
  setOpen: Function
  toResult: Function
}) => {
  const [form] = Form.useForm()

  const formProps = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
    autoComplete: 'off'
  }

  /**
   * 关闭
   */
  const onCancel = () => {
    form.resetFields()
    setOpen(false)
  }

  const { registerStore } = useStore()

  const [messageApi, contextHolder] = message.useMessage()

  /**
   * 提交
   */
  const onFinish = async (values: any) => {
    const { data } = await getProcessByKey({
      userId: values.accountNumber,
      key: 'ACCESS_REGISTER'
    })
    if (!data) return messageApi.warning('并未查询到该用户的注册结果')
    const { taskId } = data
    const { state, processInstanceId, starter, comment } = data!.instanceInfo
    // 注册申请信息
    registerStore.setRegisterInfo({
      taskId,
      state,
      processInstanceId,
      starter,
      comment
    })
    onCancel()
    toResult()
  }
  const onFinishFailed = (errorInfo: any) => {
    console.log(errorInfo)
  }
  return (
    <>
      {contextHolder}
      <Modal
        title='查询注册申请结果'
        open={open}
        width={640}
        onCancel={onCancel}
        footer={[]}
      >
        <Divider />
        <Form
          form={form}
          name='check'
          {...formProps}
          colon={false}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name='accountNumber'
            label='账户登录名'
            rules={[{ required: true, message: '请输入账户登录名' }]}
          >
            <Input showCount maxLength={20} />
          </Form.Item>
          <Form.Item wrapperCol={{ span: 20, offset: 4 }}>
            <Space>
              <Button onClick={onCancel}>关闭</Button>
              <Button type='primary' htmlType='submit'>
                提交
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default CheckModal
