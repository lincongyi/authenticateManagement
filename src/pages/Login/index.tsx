import React, { useState } from 'react'
import style from './index.module.scss'
import { useNavigate, useLocation, To } from 'react-router-dom'
import {
  LockOutlined,
  UserOutlined,
  QrcodeOutlined,
  QuestionCircleOutlined
} from '@ant-design/icons'
import { Layout, Button, Form, Input, message, Popover } from 'antd'
import Header from '@components/Header'
import { login } from '@api/login'

const { Content } = Layout

const Login = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  /**
   * 选择登录方式
   */

  const switchLoginMethod = (index: number) => {
    if (index) return message.warning('暂未支持扫码登录')
    setSelectedIndex(index)
  }
  const methodList = [
    {
      icon: (
        <UserOutlined
          style={{
            fontSize: '24px',
            color: selectedIndex ? '#7d7d7d' : '#1e55d1'
          }}
        />
      ),
      name: '账号登录'
    },
    {
      icon: (
        <QrcodeOutlined
          style={{
            fontSize: '24px',
            color: selectedIndex ? '#1e55d1' : '#7d7d7d'
          }}
        />
      ),
      name: '扫码登录'
    }
  ]

  const navigate = useNavigate()
  const { search } = useLocation()

  const content = (
    <>
      <p>如已忘记密码，请您通过扫码登录方式进入平台，</p>
      <p>在“账号信息” - “修改密码”重置登录密码</p>
    </>
  )

  /**
   * 账号注册申请
   */
  const toApply = () => {
    navigate('/register')
  }

  type TloginParams = {
    accountNumber: string // 账号
    password: string // 密码
  }
  /**
   * 登录
   */
  const onFinish = async (values: TloginParams) => {
    const { data } = await login({
      systemType: 'user',
      loginType: 'password',
      ...values
    })
    localStorage.setItem('token', data!.token)
    localStorage.setItem(
      'userInfo',
      JSON.stringify({ accountNumber: data!.accountNumber })
    )

    if (!search) navigate('/app/main')
    else {
      const searchParams = new URLSearchParams(search.substring(1))
      navigate(searchParams.get('redirect') as To)
    }
  }
  const onFinishFailed = (errorInfo: any) => {
    console.log(errorInfo)
  }

  const initialValues = {
    accountNumber: 'cy0318',
    password: 'Aa112233'
  }

  return (
    <>
      <Header isLogin={false} />
      <Content className={style.content}>
        <div className={style['login-box']}>
          <div className={style['left-side']}>
            <div className={style['login-box-bg']}></div>
          </div>
          <div className={style['right-side']}>
            <div className={style.nav}>
              <ul className={style['method-list']}>
                {methodList.map((item, index) => (
                  <li
                    className={`${style.method} ${
                      selectedIndex === index && style.selected
                    }`}
                    key={index}
                    onClick={() => switchLoginMethod(index)}
                  >
                    {item.icon}
                    <p className={style.name}>{item.name}</p>
                    {selectedIndex === index && <i className={style.icon}></i>}
                  </li>
                ))}
              </ul>
            </div>
            <div className={style.account}>
              <Form
                name='login'
                className={style['login-form']}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                initialValues={initialValues}
                autoComplete='off'
              >
                <Form.Item
                  name='accountNumber'
                  rules={[{ required: true, message: '请输入账号!' }]}
                >
                  <Input
                    size='large'
                    prefix={<UserOutlined className='site-form-item-icon' />}
                    placeholder='请输入账号'
                  />
                </Form.Item>
                <Form.Item
                  name='password'
                  rules={[{ required: true, message: '请输入密码!' }]}
                >
                  <Input
                    size='large'
                    prefix={<LockOutlined className='site-form-item-icon' />}
                    type='password'
                    placeholder='请输入密码'
                  />
                </Form.Item>

                <Form.Item>
                  <div className={style.tool}>
                    <p onClick={toApply}>账号注册申请</p>
                    <Popover
                      placement='bottomRight'
                      title='温馨提示'
                      content={content}
                      trigger='click'
                    >
                      <p>
                        忘记密码
                        <QuestionCircleOutlined className={style.fpw} />
                      </p>
                    </Popover>
                  </div>
                </Form.Item>

                <Form.Item>
                  <Button
                    type='primary'
                    htmlType='submit'
                    className={style['submit-btn']}
                    block
                    size='large'
                  >
                    登录
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </Content>
    </>
  )
}

export default Login
