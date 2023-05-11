import React, { useState } from 'react'
import { Button, Form, Input, Space, message } from 'antd'
import { sendCaptcha } from '@api/index'
import type { FormInstance } from 'antd/lib/form/hooks/useForm'

/**
 * 发送邮箱验证码组件
 */
const EmailCaptcha = ({
  form,
  widthList,
  callback,
  operation = '注册申请'
}: {
  form: FormInstance
  widthList: number[]
  callback: Function
  operation?: string
}) => {
  let emailCaptchaTimer: NodeJS.Timer
  const [emailCaptcha, setEmailCaptcha] = useState({
    text: '获取验证码',
    isWaiting: false
  })
  /**
   * 发送短信验证码
   */
  const getEmailCaptcha = async () => {
    const adminEmail = form.getFieldValue('adminEmail')
    if (!adminEmail) return message.warning('请输入管理员邮箱')
    await sendCaptcha({
      type: 1,
      key: adminEmail,
      operation
    })
    let duration = 6
    setEmailCaptcha({ text: `${duration}秒后重新获取`, isWaiting: true })
    emailCaptchaTimer = setInterval(() => {
      duration--
      if (!duration) {
        setEmailCaptcha({ text: '获取验证码', isWaiting: false })
        clearInterval(emailCaptchaTimer)
      } else {
        setEmailCaptcha({ text: `${duration}秒后重新获取`, isWaiting: true })
      }
    }, 1000)
  }
  return (
    <Space>
      <Form.Item
        name='emailCaptcha'
        rules={[{ required: true, message: '请输入邮箱验证码' }]}
        noStyle
      >
        <Input
          showCount
          maxLength={6}
          style={{ width: widthList[0] }}
          onBlur={e => callback(e.target.value)}
        />
      </Form.Item>
      <Button
        type='primary'
        onClick={getEmailCaptcha}
        style={{ width: widthList[1] }}
        disabled={emailCaptcha.isWaiting}
      >
        {emailCaptcha.text}
      </Button>
    </Space>
  )
}

export default EmailCaptcha
