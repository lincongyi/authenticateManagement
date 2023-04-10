import React from 'react'
import { Button, Form, Input, Space, message } from 'antd'
import { passwordPattern } from '@utils/index'
import { currentResetPassword } from '@api/myAccount'

const Password = ({
  onNext,
  onPrev,
  resetParams
}: {
  onNext: Function
  onPrev: Function
  resetParams: TResetParams
}) => {
  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '请输入${label}'
  }
  /* eslint-disable no-template-curly-in-string */

  /**
   * 提交数据
   */
  const onFinish = async (values: any) => {
    const { type, ...rest } = resetParams
    const { retMessage } = await currentResetPassword({ ...rest, ...values })
    message.success({
      content: retMessage,
      duration: 2,
      onClose () {
        onNext({ ...resetParams, ...values })
      }
    })
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('resetParams', resetParams)
    console.log('Failed:', errorInfo)
  }

  return (
    <Form
      name='password'
      layout='vertical'
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      validateMessages={validateMessages}
      autoComplete='off'
    >
      <Form.Item
        label='新密码'
        name='password'
        rules={[
          { required: true },
          {
            validator (_, value) {
              const pattern = passwordPattern
              if (!value || pattern.test(value)) {
                return Promise.resolve()
              }
              return Promise.reject(new Error('密码格式有误，请重新确认'))
            }
          }
        ]}
        extra='平台登录密码，密码必须包含数字、小写字母、大写字母、特殊符号其中的三种及以上，至少8个字符'
      >
        <Input.Password placeholder='请输入密码' maxLength={20} showCount />
      </Form.Item>
      <Form.Item
        label='确认密码'
        name='confirmPassword'
        rules={[
          { required: true },
          ({ getFieldValue }) => ({
            validator (_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve()
              }
              return Promise.reject(new Error('两次密码不一致请重新确认'))
            }
          })
        ]}
      >
        <Input.Password placeholder='请再次输入密码' maxLength={20} showCount />
      </Form.Item>
      <Form.Item>
        <Space>
          <Button onClick={() => onPrev()}>上一步</Button>
          <Button type='primary' htmlType='submit'>
            下一步
          </Button>
        </Space>
      </Form.Item>
    </Form>
  )
}

export default Password
