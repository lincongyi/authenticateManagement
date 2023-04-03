import React from 'react'
import { phonePattern } from '@utils/index'
import { Button, Form, Input, Modal, Space, message } from 'antd'
import MessageCaptcha from '@components/MessageCaptcha'
import { updateAdminPhoneNum } from '@api/myAccount'

const UpdatePhoneModal = ({
  open,
  setOpen,
  companyInfo,
  callback
}: {
  open: boolean
  setOpen: Function
  companyInfo: TCompanyInfo
  callback: Function
}) => {
  const [form] = Form.useForm()

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '请输入${label}'
  }
  /* eslint-disable no-template-curly-in-string */

  const initialValues = {
    adminPhone: companyInfo.adminPhone
  }

  /**
   * 提交数据
   */
  const onFinish = async (values: any) => {
    const { captcha, adminPhone } = values
    await updateAdminPhoneNum({
      phoneNum: adminPhone,
      captcha,
      dabbyUserId: companyInfo.userId
    })
    callback(adminPhone)
    onCancel()
    message.success({ content: '成功修改手机号！' })
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  /**
   * 取消
   */
  const onCancel = () => {
    form.resetFields()
    setOpen(false)
  }

  return (
    <Modal title='修改管理员手机号' open={open} footer={[]}>
      <Form
        form={form}
        name='update'
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        validateMessages={validateMessages}
        validateTrigger={['onBlur', 'onChange']}
        initialValues={initialValues}
        autoComplete='off'
      >
        <Form.Item
          name='adminPhone'
          label='管理员手机号'
          rules={[
            { required: true },
            {
              validator (_, value) {
                if (!value || phonePattern.test(value)) {
                  return Promise.resolve()
                }
                return Promise.reject(new Error('手机号格式有误，请重新确认'))
              },
              validateTrigger: 'onBlur'
            }
          ]}
        >
          <Input maxLength={11} />
        </Form.Item>
        <Form.Item label='短信验证码' name='captcha' required>
          <MessageCaptcha
            form={form}
            widthList={[180, 130]}
            callback={(code: string) => form.setFieldValue('captcha', code)}
            operation='更新单位信息'
          />
        </Form.Item>

        <Form.Item wrapperCol={{ span: 22 }} style={{ textAlign: 'right' }}>
          <Space>
            <Button onClick={onCancel}>取消</Button>
            <Button type='primary' htmlType='submit'>
              确定
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default UpdatePhoneModal
