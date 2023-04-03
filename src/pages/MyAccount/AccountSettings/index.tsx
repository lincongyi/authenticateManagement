import React, { useState } from 'react'
import style from './index.module.scss'
import { Button, Col, Result, Row, Steps } from 'antd'
import Info from './components/Info'
import Code from './components/Code'
import Password from './components/Password'
import { useNavigate } from 'react-router-dom'

const AccountSettings = () => {
  const [current, setCurrent] = useState(0)
  const [resetParams, setResetParams] = useState<TResetParams>({
    type: 0,
    key: '',
    imgCaptcha: '',
    captcha: '',
    password: '',
    confirmPassword: ''
  })

  /**
   * 下一步
   * @param {object} values 表单返回值
   */
  const onNext = (values?: object) => {
    if (values) setResetParams({ ...resetParams, ...values })
    console.log(resetParams)
    setCurrent(current + 1)
  }

  /**
   * 上一步
   */
  const onPrev = () => {
    setCurrent(current - 1)
  }

  const navigate = useNavigate()
  /**
   * 成功后重定向到登录页面
   */
  const toLogin = () => navigate('/login')

  const steps = [
    {
      title: '填写账号信息',
      content: <Info onNext={onNext} />
    },
    {
      title: '输入验证码',
      content: (
        <Code onNext={onNext} onPrev={onPrev} resetParams={resetParams} />
      )
    },
    {
      title: '设置新密码',
      content: (
        <Password onNext={onNext} onPrev={onPrev} resetParams={resetParams} />
      )
    },
    {
      title: '完成',
      content: (
        <Result
          status='success'
          title='修改成功'
          extra={[
            <Button type='primary' key='back' onClick={toLogin}>
              返回
            </Button>
          ]}
        />
      )
    }
  ]

  const items = steps.map(item => ({ key: item.title, title: item.title }))
  return (
    <Row justify='center'>
      <Col span={20}>
        <Steps current={current} items={items} className={style.steps} />
        <Row justify='center'>
          <Col span={20}>
            <div className={style['steps-content']}>
              {steps[current].content}
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default AccountSettings
