import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate, useLocation, Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import { useStore } from '@stores/index'
import { Badge, Breadcrumb, Layout, Menu, Space, Switch, theme } from 'antd'
import type { MenuProps } from 'antd'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  AlertOutlined,
  BulbOutlined,
  ChromeOutlined
} from '@ant-design/icons'
import { ColorChangeHandler, SketchPicker } from 'react-color'
import Header from '@components/Header'
import { getMenu, getAppRoutes } from './index.config'
import { runInAction } from 'mobx'
import { getApplyCount } from '@api/myApplications'
import { ItemType } from 'antd/es/breadcrumb/Breadcrumb'

const { Content, Sider } = Layout

const AppLayout = () => {
  const { applyCountStore } = useStore()
  const [menuItems, setMenuItems] = useState<MenuProps['items']>()
  useEffect(() => {
    // 渲染导航菜单栏并且获取我的申请数
    ;(async () => {
      if (!applyCountStore.applyCount.length) {
        const { data } = await getApplyCount()
        applyCountStore.setApplyCount(data!)
      }
      const items = getMenu()

      setMenuItems(() =>
        items.map(item => {
          if (item.label === '我的申请') {
            item.label = (
              <>
                我的申请
                <Badge
                  count={applyCountStore.getTotal()}
                  style={{ marginLeft: 4, marginBottom: 4 }}
                />
              </>
            )
          }
          return item
        })
      )
    })()
  }, [applyCountStore.getTotal()])

  /**
   * 导航菜单栏折叠
   */
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer }
  } = theme.useToken()

  const menu = getMenu()
  const { pathname } = useLocation()

  /**
   * 面包屑导航
   */
  const [breadcrumbName, setBreadcrumbName] = useState<ItemType[]>()

  useEffect(() => {
    // 生成面包屑导航
    const pathSnippets = pathname
      .split('/')
      .filter(i => i)
      .slice(1)
    let children = getAppRoutes()?.children // 缓存上一级路由
    let url: string = '/app' // 面包屑跳转地址
    const breadcrumb = pathSnippets.reduce(
      (prev: ItemType[], next: string, currentIndex) => {
        const route = children?.find(item => item.path === next)
        children = route?.children
        url += `/${route?.path}`
        if (route?.meta?.breadcrumb) {
          return [
            ...prev,
            {
              key: route?.path,
              title:
                currentIndex === pathSnippets.length - 1 ? (
                  route?.meta?.breadcrumb
                ) : (
                  <Link to={url}>{route?.meta?.breadcrumb}</Link>
                )
            }
          ]
        } else return prev
      },
      []
    )

    setBreadcrumbName(breadcrumb)
  }, [pathname])

  // 匹配当前地址导航菜单高亮
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
   * 导航菜单切换地址
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
            items={menuItems}
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
            <Breadcrumb
              style={{ margin: '16px 0' }}
              items={breadcrumbName}
            ></Breadcrumb>
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
