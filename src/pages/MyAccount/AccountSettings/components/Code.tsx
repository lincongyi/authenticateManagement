import React from 'react'
import style from './index.module.scss'
import { Button, Form, Input, Space } from 'antd'

const Code = ({
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
  const onFinish = (values: any) => {
    onNext(values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <>
      <p className={style.tips}>
        我们已将验证码发送至您的{!resetParams.type ? '手机' : '邮箱'}
        <span className={style.emphasize}>{resetParams.key}</span>
        ，请尽快填写下方输入框内完成验证 找回密码
      </p>
      <Form
        name='code'
        layout='vertical'
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        validateMessages={validateMessages}
        autoComplete='off'
      >
        <Form.Item
          label={`${!resetParams.type ? '短信' : '邮箱'}验证码`}
          name='captcha'
          rules={[{ required: true }]}
        >
          <Input
            placeholder={`${!resetParams.type ? '短信' : '邮箱'}验证码`}
            showCount
            maxLength={6}
          />
        </Form.Item>
        <Form.Item>
          <Space>
            <Button type='primary' htmlType='submit'>
              下一步
            </Button>
            <Button onClick={() => onPrev()}>上一步</Button>
          </Space>
        </Form.Item>
      </Form>
    </>
  )
}

export default Code
