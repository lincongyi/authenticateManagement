import React, { useState } from 'react'
import { Button, Form, Input, Space, message } from 'antd'
import { sendCaptcha } from '@api/index'
import type { FormInstance } from 'antd/lib/form/hooks/useForm'

/**
 * 发送短信验证码组件
 */
const MessageCaptcha = ({
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
  const [messageApi, contextHolder] = message.useMessage()

  let messageCaptchaTimer: NodeJS.Timer
  const [messageCaptcha, setMessageCaptcha] = useState({
    text: '获取验证码',
    isWaiting: false
  })

  /**
   * 发送短信验证码
   */
  const getMessageCaptcha = async () => {
    const adminPhone = form.getFieldValue('adminPhone')
    if (!adminPhone) return messageApi.warning('请输入管理员手机号')
    await sendCaptcha({
      type: 2,
      key: adminPhone,
      operation
    })
    let duration = 6
    setMessageCaptcha({ text: `${duration}秒后重新获取`, isWaiting: true })
    messageCaptchaTimer = setInterval(() => {
      duration--
      if (!duration) {
        setMessageCaptcha({ text: '获取验证码', isWaiting: false })
        clearInterval(messageCaptchaTimer)
      } else {
        setMessageCaptcha({ text: `${duration}秒后重新获取`, isWaiting: true })
      }
    }, 1000)
  }
  return (
    <>
      {contextHolder}
      <Space>
        <Form.Item
          name='messageCaptcha'
          rules={[
            { required: true, message: '请输入短信验证码' },
            { min: 6, message: '请输入6位验证码' }
          ]}
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
          onClick={getMessageCaptcha}
          style={{ width: widthList[1] }}
          disabled={messageCaptcha.isWaiting}
        >
          {messageCaptcha.text}
        </Button>
      </Space>
    </>
  )
}

export default MessageCaptcha
