import React, { useEffect, useState } from 'react'
import style from './index.module.scss'
import { Layout, Menu } from 'antd'
import type { MenuProps } from 'antd'
import { getMenu } from './index.config'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

const { Sider, Header, Content } = Layout

const items: MenuProps['items'] = getMenu()

const MyApplications = () => {
  // 当前地址高亮菜单
  const { pathname } = useLocation()
  const parentPath = 'myApplications'

  const [path, setPath] = useState(
    pathname.substring(pathname.indexOf(parentPath) + parentPath.length)
  )

  const navigate = useNavigate()
  /**
   * 切换菜单
   */
  const switchMenu: MenuProps['onClick'] = e => {
    setPath(e.key)
    console.log(e.key)
    navigate(`/app/myApplications${e.key}`)
  }

  /**
   * 头部标题
   */
  const [header, setHeader] = useState('')
  const menu = getMenu()

  /**
   * 获取当前菜单项标题
   */
  useEffect(() => {
    /**
     * 所有子菜单
     */
    const children = menu.reduce(
      (prev: TMenuItem[] | [], next: TMenuItem) => [...prev, ...next.children!],
      []
    )
    /**
     * 当前子菜单
     */
    const item = children.find(item => item.key === path)

    if (!item) return
    setHeader(item.label)
  }, [pathname])

  return (
    <>
      <Layout className={style['menu-layout']}>
        <Sider width={220}>
          <Menu
            mode='inline'
            className={style['menu-sider']}
            defaultOpenKeys={['identity', 'others']}
            selectedKeys={[path]}
            items={items}
            onClick={switchMenu}
          />
        </Sider>
        <Layout>
          <Layout>
            <Header
              style={{
                backgroundColor: '#fff',
                borderBottom: '1px solid rgba(5, 5, 5, 0.06)'
              }}
            >
              {header}
            </Header>
            <Content className={style.content}>
              <Outlet></Outlet>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </>
  )
}

export default MyApplications
