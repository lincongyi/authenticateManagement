import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { useStore } from '@stores/index'
import { Breadcrumb, Layout, Menu, Space, Switch, theme } from 'antd'
import type { MenuProps } from 'antd'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  AlertOutlined,
  BulbOutlined,
  ChromeOutlined
} from '@ant-design/icons'
import { ColorChangeHandler, SketchPicker } from 'react-color'
import Header, { dropdownList } from '@components/Header'
import { getMenu } from './index.config'
import { runInAction } from 'mobx'
const { Content, Sider } = Layout

const items: MenuProps['items'] = getMenu()

const AppLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer }
  } = theme.useToken()

  const menu = getMenu()
  const { pathname } = useLocation()

  // 面包屑导航标题
  const [breadcrumbName, setBreadcrumbName] = useState('')
  useEffect(() => {
    let name = ''
    const getName = (menu: TMenuItem[]) => {
      menu.forEach(item => {
        if (!item.children) {
          if (pathname.includes(item.key)) name = item.label
        } else getName(item.children)
      })
    }
    getName([...menu, ...dropdownList])
    name && setBreadcrumbName(name)
  }, [pathname])

  // 匹配当前地址菜单高亮
  const [path, setPath] = useState('')
  useEffect(() => {
    let hightLightPath = ''
    const getPath = (menu: TMenuItem[]) => {
      menu.forEach(item => {
        if (!item.children) {
          if (pathname.includes(item.key)) hightLightPath = item.key
        } else getPath(item.children)
      })
    }
    getPath(menu)
    setPath(hightLightPath)
  }, [pathname])

  const navigate = useNavigate()
  /**
   * 菜单切换地址
   */
  const switchMenu: MenuProps['onClick'] = e => {
    setPath(e.key)
    navigate(`/app/${e.key}`)
  }

  const { themeStore } = useStore()
  useEffect(() => {
    document
      .getElementsByTagName('body')[0]
      .setAttribute('data-theme', themeStore.mainTheme)
  }, [themeStore.mainTheme])
  /**
   * 切换全局主题
   */
  const onMainThemeChange = (checked: boolean) => {
    themeStore.setMainTheme(checked ? 'light' : 'dark')
  }

  const [color, setColor] = useState(themeStore.antdThemeColor)
  const [colorPickerOpen, setColorPickerOpen] = useState(false)

  const switchColorPickerOpen = () => {
    setColorPickerOpen(!colorPickerOpen)
  }

  /**
   * 切换UI框架主题颜色
   */
  const onUIThemeChangeComplete: ColorChangeHandler = color => {
    setColor(color.hex)
    runInAction(() => {
      themeStore.antdThemeColor = color.hex
    })
  }

  return (
    <Layout>
      <Header />
      <Layout>
        <Sider
          width={200}
          style={{
            background: colorBgContainer,
            position: 'fixed',
            overflow: 'auto',
            left: 0,
            top: 64,
            bottom: 0
          }}
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
          <Menu
            mode='inline'
            selectedKeys={[path]}
            style={{ height: '100%', borderRight: 0 }}
            items={items}
            defaultOpenKeys={['issues']}
            onClick={switchMenu}
          />
        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px',
            marginLeft: `${collapsed ? '80px' : '200px'}`,
            marginTop: 64,
            minHeight: 'calc(100vh - 64px)'
          }}
        >
          <Space>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: 'trigger',
                onClick: () => setCollapsed(!collapsed)
              }
            )}
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>{breadcrumbName}</Breadcrumb.Item>
            </Breadcrumb>
          </Space>
          <Content
            style={{
              padding: 20,
              margin: 0,
              minHeight: 280,
              background: colorBgContainer
            }}
          >
            {/* 二级路由出口 */}
            <Outlet></Outlet>
          </Content>
        </Layout>
        <div className='tool'>
          <Switch
            className='theme-switch'
            checkedChildren={<AlertOutlined />}
            unCheckedChildren={<BulbOutlined />}
            defaultChecked
            onChange={onMainThemeChange}
          />
          <ChromeOutlined
            style={{
              fontSize: 30,
              color: themeStore.mainTheme === 'dark' ? 'white' : 'black'
            }}
            onClick={switchColorPickerOpen}
          />
          {colorPickerOpen && (
            <div className='color-picker-wrap'>
              <div
                className='color-picker-layout'
                onClick={switchColorPickerOpen}
              />
              <SketchPicker
                color={color}
                onChangeComplete={onUIThemeChangeComplete}
              />
            </div>
          )}
        </div>
      </Layout>
    </Layout>
  )
}

export default observer(AppLayout)
