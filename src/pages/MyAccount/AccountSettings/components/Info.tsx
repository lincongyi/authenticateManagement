import React, { useEffect, useState } from 'react'
import style from './index.module.scss'
import { Button, Form, Input, Radio, Space, Image, message } from 'antd'
import type { RadioChangeEvent } from 'antd'
import { phonePattern, emailPattern } from '@utils/index'
import { imgCaptcha, sendCaptcha } from '@api/index'
import { retrievePassword } from '@api/myAccount'

const Info = ({ onNext }: { onNext: Function }) => {
  const [form] = Form.useForm()

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '请输入${label}'
  }
  /* eslint-disable no-template-curly-in-string */

  const [reservation, setReservation] = useState<0 | 1>(0) // 0-手机；1-邮箱
  /**
   * 切换预留手机或邮箱
   */
  const onChange = (e: RadioChangeEvent) => {
    setReservation(e.target.value)
  }
  const fields = ['adminPhone', 'adminEmail']
  const [imageUrl, setImageUrl] = useState('') // 图片验证码地址
  /**
   * 切换预留方式，清空当前输入框
   */
  useEffect(() => {
    const key = fields[reservation]
    const fieldsValue = form.getFieldsValue(true)
    form.setFieldsValue({ ...fieldsValue, ...{ [key]: '', imgCaptcha: '' } })
    setImageUrl('')
    setGetimgCaptchaBtnStatus(0)
  }, [reservation])

  const btnText = ['获取验证码', '看不清？换一张']
  const [imgCaptchaBtnStatus, setGetimgCaptchaBtnStatus] = useState(0) // 按钮文字状态

  /**
   * 获取图片验证码
   */
  const getImgCaptcha = () => {
    const key = fields[reservation]
    const value = form.getFieldValue(key)

    if (!value) {
      setImageUrl('')
      setGetimgCaptchaBtnStatus(0)
      return message.warning(`请输入${!reservation ? '手机号' : '邮箱'}`)
    }
    if (!reservation && !phonePattern.test(value)) {
      setImageUrl('')
      setGetimgCaptchaBtnStatus(0)
      return message.warning('手机号格式有误，请重新确认')
    } else if (reservation && !emailPattern.test(value)) {
      setImageUrl('')
      setGetimgCaptchaBtnStatus(0)
      return message.warning('邮箱格式有误，请重新确认')
    }

    ;(async () => {
      const blob = await imgCaptcha({ key: value })
      const image = (window.URL || window.webkitURL).createObjectURL(blob)
      setImageUrl(image)
      setGetimgCaptchaBtnStatus(1)
    })()
  }

  /**
   * 提交数据
   */
  const onFinish = async (values: any) => {
    const key = values[fields[reservation]]
    const { data } = await retrievePassword({
      key,
      code: values.imgCaptcha
    })
    const type = data.keyType
    await sendCaptcha({
      type,
      key,
      operation: '更新单位信息'
    })

    onNext({
      type,
      key,
      imgCaptcha: values.imgCaptcha
    })
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <>
      <p className={style.tips}>
        您可以通过输入
        <span className={style.emphasize}>手机号码</span>或者
        <span className={style.emphasize}>电子邮箱</span>
        找回密码
      </p>
      <Radio.Group
        onChange={onChange}
        value={reservation}
        style={{ marginBottom: 14 }}
      >
        <Radio.Button value={0}>手机号</Radio.Button>
        <Radio.Button value={1}>邮箱</Radio.Button>
      </Radio.Group>
      <Form
        form={form}
        name='info'
        layout='vertical'
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        validateMessages={validateMessages}
        validateTrigger={['onBlur', 'onChange']}
        autoComplete='off'
      >
        {!reservation ? (
          <Form.Item
            label='预留手机号'
            name='adminPhone'
            rules={[
              { required: true },
              {
                async validator (_, value) {
                  if (!value || phonePattern.test(value)) {
                    return await Promise.resolve()
                  }
                  return await Promise.reject(
                    new Error('手机号格式有误，请重新确认')
                  )
                },
                validateTrigger: 'onBlur'
              }
            ]}
          >
            <Input placeholder='请输入预留手机号' maxLength={11} showCount />
          </Form.Item>
        ) : (
          <Form.Item
            label='预留邮箱'
            name='adminEmail'
            rules={[
              { required: true },
              {
                async validator (_, value) {
                  const pattern = emailPattern
                  if (!value || pattern.test(value)) {
                    return await Promise.resolve()
                  }
                  return await Promise.reject(
                    new Error('邮箱格式有误，请重新确认')
                  )
                },
                validateTrigger: 'onBlur'
              }
            ]}
          >
            <Input placeholder='请输入预留邮箱' maxLength={30} showCount />
          </Form.Item>
        )}
        <Form.Item label='验证码' required>
          <Space>
            <Form.Item
              name='imgCaptcha'
              rules={[
                {
                  required: true,
                  message: `请输入${!reservation ? '短信' : '邮箱'}验证码`
                }
              ]}
              noStyle
            >
              <Input showCount maxLength={4} />
            </Form.Item>
            {!!imgCaptchaBtnStatus && (
              <Image
                width={128}
                height={32}
                src={imageUrl}
                fallback='data:image/png;base64,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'
              />
            )}
            <Button type='primary' onClick={getImgCaptcha}>
              {btnText[imgCaptchaBtnStatus]}
            </Button>
          </Space>
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            下一步
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default Info
