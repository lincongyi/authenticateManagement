import React from 'react'
import { dynamicRoutes } from '../../router'
import type { TRoutes } from '../../router'
import Icon, {
  // HomeOutlined,
  RadarChartOutlined,
  AppstoreOutlined,
  SolutionOutlined,
  FileSearchOutlined,
  BellOutlined
} from '@ant-design/icons'

const getAppRoutes = () => {
  const appRoutes = dynamicRoutes.find(item => item.path === '/app')
  return appRoutes?.children || []
}

type TMetaRequired = Required<Pick<TRoutes, 'meta'>>
type TMenuRoutes = TRoutes & TMetaRequired

/**
 * 过滤出导航菜单所需的路由表
 * @param {TRoutes[]} routes 管理后台页面路由模块
 * @returns {TMetaRequired[]} 导航菜单所需的路由表
 */
const getMenuRoutes = (routes: TRoutes[]) => {
  const menuRoute: TMenuRoutes[] = []
  routes.forEach(item => {
    if (!item.meta) return

    if (item.meta.isMenuItem) {
      if (!item.children) {
        menuRoute.push(item as TMenuRoutes)
      } else {
        const { children, ...rest } = item
        const childrenRoute = getMenuRoutes(item.children)
        if (!childrenRoute.length) {
          menuRoute.push(rest as TMenuRoutes)
        } else {
          menuRoute.push({
            ...rest,
            children: childrenRoute
          } as TMenuRoutes)
        }
      }
    }
  })
  return menuRoute
}

/**
 * 我的单位icon svg
 */
const companyInfoIcon = () => (
  <svg
    width='16px'
    height='16px'
    viewBox='0 0 16 16'
    version='1.1'
    fill='currentColor'
  >
    <path
      d='M0,15.75 L0,14.25 L1.25,14.25 L1.25,1.25 L10.75,1.25 L10.75,7.25 L14.75,7.25 L14.75,14.25 L16,14.25 L16,15.75 L0,15.75 Z M9.25,2.75 L2.75,2.75 L2.75,14.25 L4.916,14.25 L4.91666667,11.2011757 L6.41666667,11.2011757 L6.416,14.25 L9.25,14.25 L9.25,2.75 Z M13.25,8.75 L10.75,8.75 L10.75,14.25 L13.25,14.25 L13.25,8.75 Z M7.41666667,7.25 L7.41666667,8.75 L3.91666667,8.75 L3.91666667,7.25 L7.41666667,7.25 Z M7.41666667,4.25 L7.41666667,5.75 L3.91666667,5.75 L3.91666667,4.25 L7.41666667,4.25 Z'
      id='我的单位'
      fillRule='nonzero'
    ></path>
  </svg>
)

const iconMap: Record<string, any> = {
  RadarChartOutlined,
  AppstoreOutlined,
  SolutionOutlined,
  FileSearchOutlined,
  BellOutlined,
  companyInfoIcon
}

/**
 * 生成导航菜单
 * @param {TRoutes[]} routes 生成导航菜单所需的路由数组
 * @param {string} key 上一级菜单的key值
 * @returns {TMenuItem[] | undefined} 菜单列表
 */
const generateMenuItems = (routes: TMenuRoutes[], key?: string) => {
  const menuItems = routes.map(item => {
    const menuItem: TMenuItem = {
      label: item.meta.breadcrumb,
      key: `${key ? `${key}/${item.path}` : item.path}`
    }
    if (item.meta.isMenuItem) {
      menuItem.icon = <Icon component={iconMap[item.meta.iconName!]} />
    }

    if (item.children) {
      menuItem.children = generateMenuItems(
        item.children as TMenuRoutes[],
        item.path
      )
    }
    return menuItem
  })
  return menuItems
}

/**
 * 静态菜单列表数据
 */
const getMenu = (): TMenuItem[] => {
  const appRoutes = getAppRoutes()
  const menuRoutes = getMenuRoutes(appRoutes)
  const menuItems = generateMenuItems(menuRoutes)

  return menuItems
}

export { getAppRoutes, getMenu }
