import React from 'react'
import style from './index.module.scss'
import { useNavigate } from 'react-router-dom'
import { Button, Dropdown, Space, Modal, message } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import Logo from '@/assets/logo.png'
import { logout } from '@api/index'

export const dropdownList: TMenuItem[] = [
  { key: 'myAccount', label: '用户信息', icon: 'myAccount' },
  { key: 'logout', label: '退出', icon: 'logout' }
]

const Header = ({ isLogin = true }: { isLogin?: boolean }) => {
  let userInfo: TUserInfo | undefined
  let accountNumber: string = ''
  let companyName: string = ''
  if (isLogin) {
    userInfo = JSON.parse(localStorage.getItem('userInfo') as string)
    accountNumber = userInfo?.accountNumber || ''
    companyName = userInfo?.companyName || ''
  }

  const navigate = useNavigate()

  /**
   * 返回首页
   */
  const toHome = () => {
    navigate('/')
  }

  const items: MenuProps['items'] = dropdownList.map((item, index) => {
    return {
      key: index,
      label: (
        <div className={style['dropdown-item']} onClick={() => navTo(item)}>
          <i className={`${style.icon} ${style[item.icon as string]}`}></i>
          {item.label}
        </div>
      )
    }
  })

  const [modal, contextHolder] = Modal.useModal()

  const navTo = ({ key }: { key: string }) => {
    switch (key) {
      case 'logout':
        modal.confirm({
          title: '退出登录',
          content: '是否确认退出登录？',
          okText: '确定',
          cancelText: '取消',
          async onOk () {
            await logout()
            localStorage.removeItem('token')
            localStorage.removeItem('userInfo')
            message.success({
              content: '成功退出登录',
              duration: 2
            })
            navigate('/')
          }
        })
        break
      case 'myAccount':
        navigate('/app/myAccount/companyInfo')
        break
      default:
        break
    }
  }
  return (
    <>
      {contextHolder}
      <div className={`${style.header} ${isLogin && style['is-fixed']}`}>
        <div className={style['left-side']}>
          <div className={style.logo}>
            <img src={Logo} />
          </div>
          <p className={style.title}>认证服务接入平台</p>
        </div>
        <div className={style['right-side']}>
          {isLogin ? (
            <Space>
              <Button
                type='text'
                style={{ color: '#fff', fontSize: 18, lineHeight: 1 }}
                onClick={() => navigate('/app/myAccount/companyInfo')}
              >
                {companyName}
              </Button>
              <UserOutlined />
              <Dropdown menu={{ items }} placement='bottomRight' arrow>
                <Button type='text' style={{ color: '#fff' }}>
                  {accountNumber}
                </Button>
              </Dropdown>
            </Space>
          ) : (
            <Button type='text' className={style['back-btn']} onClick={toHome}>
              返回首页
            </Button>
          )}
        </div>
      </div>
    </>
  )
}

export default Header
