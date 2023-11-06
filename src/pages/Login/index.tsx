import React, { useState } from 'react'
import style from './index.module.scss'
import { useNavigate, useLocation, To } from 'react-router-dom'
import {
  LockOutlined,
  UserOutlined,
  InfoCircleFilled,
  QuestionCircleOutlined
} from '@ant-design/icons'
import {
  Layout,
  Button,
  Form,
  Input,
  Popover,
  Tabs,
  Divider,
  Typography,
  Space
} from 'antd'
import { login } from '@api/login'
import type { TLoginParams } from '@api/login'
import ScanQrcode from '@components/ScanQrcode'
import type { TabsProps } from 'antd'

const { Content } = Layout

const Login = () => {
  const navigate = useNavigate()

  const { search } = useLocation()

  /**
   * 控制密码显隐
   */
  const [passwordVisible, setPasswordVisible] = React.useState(false)

  /**
   * 账号注册申请
   */
  const toApply = () => {
    navigate('/register')
  }

  /**
   * 登录
   */
  const onLogin = async ({
    loginType,
    ...values
  }: Omit<TLoginParams, 'systemType'>) => {
    const { data } = await login({
      systemType: 'user',
      loginType,
      ...values
    })
    if (!data) return
    localStorage.setItem('token', data!.token)
    localStorage.setItem(
      'userInfo',
      JSON.stringify({
        accountNumber: data!.accountNumber,
        companyName: data!.companyName
      })
    )

    if (!search) navigate('/app/appServiceCenter')
    else {
      const searchParams = new URLSearchParams(search.substring(1))
      navigate(searchParams.get('redirect') as To)
    }
  }

  type TAccountLoginParams = {
    accountNumber: string // 账号
    password: string // 密码
  }

  /**
   * 账号登录
   */
  const onFinish = (values: TAccountLoginParams) => {
    onLogin({ loginType: 'password', ...values })
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log(errorInfo)
  }

  const initialValues = import.meta.env.PROD
    ? undefined
    : {
        accountNumber: 'cy0318',
        password: 'dabby@2019'
      }

  const [isLoop, setIsLoop] = useState(false) // 是否轮询登录接口

  const items: TabsProps['items'] = [
    {
      key: 'account',
      label: '账号登陆',
      children: (
        <>
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
              <Input.Password
                size='large'
                prefix={<LockOutlined className='site-form-item-icon' />}
                placeholder='请输入密码'
                visibilityToggle={{
                  visible: passwordVisible,
                  onVisibleChange: setPasswordVisible
                }}
              />
            </Form.Item>

            <Form.Item>
              <div className={style.tool}>
                <Popover
                  placement='bottomRight'
                  title={
                    <>
                      <p className={style['popover-title']}>
                        <InfoCircleFilled
                          className={style['popover-icon']}
                          style={{ color: '#1e55d1' }}
                        />
                        温馨提示
                      </p>
                    </>
                  }
                  content={
                    <>
                      <p>如已忘记密码，请您通过扫码登录方式进入平台，</p>
                      <p>在“账号信息” - “修改密码”重置登录密码</p>
                    </>
                  }
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
          <Divider />
          <div className='tc'>
            <Space>
              <Button shape='round' size='large' onClick={toApply}>
                没有账号？<span className='primary-color'>去注册</span>
              </Button>
              <Button
                shape='round'
                type='primary'
                size='large'
                onClick={() => navigate('/register/tour')}
              >
                已注册？查看进度
              </Button>
            </Space>
          </div>
        </>
      )
    },
    {
      key: 'qrcode',
      label: '扫码登陆',
      children: (
        <div className={style['qrcode-wrap']}>
          <p className={style.tips}>请使用微警认证App或微信扫描二维码</p>
          <ScanQrcode
            callback={(certToken: string) =>
              onLogin({ loginType: 'qrCode', certToken })
            }
            size={200}
            isLoop={isLoop}
          />
        </div>
      )
    }
  ]

  /**
   * 切换登录方式的回调
   */
  const onChange = (activeKey: string) => setIsLoop(activeKey === 'qrcode')

  return (
    <>
      <Content className={style.content}>
        <div className={style['login-box']}>
          <div className={style['left-side']}>
            <div className={style['login-box-bg']}></div>
          </div>
          <div className={style['right-side']}>
            <Typography.Title level={3} className='tc'>
              欢迎来到微警开发平台·机构端
            </Typography.Title>
            <Tabs
              size='large'
              centered
              defaultActiveKey='1'
              items={items}
              onChange={onChange}
            />
          </div>
        </div>
      </Content>
    </>
  )
}

export default Login
