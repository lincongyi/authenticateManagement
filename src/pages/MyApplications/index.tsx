import React, { useEffect, useState } from 'react'
import style from './index.module.scss'
import { Layout, Menu } from 'antd'
import type { MenuProps } from 'antd'
import { getMenu } from './index.config'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

const { Sider, Header, Content } = Layout

const items: MenuProps['items'] = getMenu()

const MyApplications: React.FC = () => {
  // 当前地址高亮菜单
  const { pathname } = useLocation()
  const parentPath = 'myApplications'
  const name = pathname.substring(
    pathname.indexOf(parentPath) + parentPath.length
  )
  const currentPath = ['', '/'].includes(name) ? '/identity/test' : name

  const [path, setPath] = useState(currentPath)

  const navigate = useNavigate()
  /**
   * 切换菜单
   */
  const switchMenu: MenuProps['onClick'] = e => {
    setPath(e.key)
    navigate(`/app/myApplications${e.key}`)
  }

  // 头部标题
  const [header, setHeader] = useState('')
  useEffect(() => {
    const menu = getMenu()

    /**
     * 获取当前菜单项标题
     */
    const getTitle = (menu: TMenuItem[]): string => {
      let title = ''
      const pathnameList = currentPath.substring(1).split('/')
      for (let i = 0; i < menu.length; i++) {
        const { key, children } = menu[i]
        if (key === pathnameList[0]) {
          for (let j = 0; j < children!.length; j++) {
            const { key, label } = children![j]
            if (key.includes(pathnameList[1])) {
              title = label
              break
            }
          }
        }
        if (title) break
      }
      return title
    }
    const title = getTitle(menu)
    setHeader(title)
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
