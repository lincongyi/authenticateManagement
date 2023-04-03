import React from 'react'
import { Button, Form, Input, Modal, Space, message } from 'antd'
import { updateAdminEmail } from '@api/myAccount'
import EmailCaptcha from '@components/EmailCaptcha'
import { emailPattern } from '@utils/index'

const UpdateEmailModal = ({
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
    adminEmail: companyInfo.adminEmail
  }

  /**
   * 提交数据
   */
  const onFinish = async (values: any) => {
    const { captcha, adminEmail } = values
    await updateAdminEmail({
      email: adminEmail,
      captcha,
      dabbyUserId: companyInfo.userId
    })
    callback(adminEmail)
    onCancel()
    message.success({ content: '成功修改邮箱！' })
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
    <Modal title='修改管理员邮箱' open={open} footer={[]}>
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
          label='管理员邮箱'
          name='adminEmail'
          rules={[
            { required: true },
            {
              validator (_, value) {
                const pattern = emailPattern
                if (!value || pattern.test(value)) {
                  return Promise.resolve()
                }
                return Promise.reject(new Error('邮箱格式有误，请重新确认'))
              },
              validateTrigger: 'onBlur'
            }
          ]}
        >
          <Input maxLength={30} />
        </Form.Item>
        <Form.Item label='邮箱验证码' name='captcha' required>
          <EmailCaptcha
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

export default UpdateEmailModal
