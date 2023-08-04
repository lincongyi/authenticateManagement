import { routes } from '../../router'
import type { TRoutes } from '../../router'

const getAppRoutes = () => {
  const appRoutes = routes.find((item) => item.path === '/app')
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
  routes.forEach((item) => {
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
            children: childrenRoute,
          } as TMenuRoutes)
        }
      }
    }
  })
  return menuRoute
}

/**
 * 生成导航菜单
 * @param {TRoutes[]} routes 生成导航菜单所需的路由数组
 * @param {string} key 上一级菜单的key值
 * @returns {TMenuItem[] | undefined} 菜单列表
 */
const generateMenuItems = (routes: TMenuRoutes[], key?: string) => {
  const menuItems = routes.map((item) => {
    const menuItem: TMenuItem = {
      label: item.meta.breadcrumb,
      key: `${key ? `${key}/${item.path}` : item.path}`,
    }
    if (item.meta.icon) menuItem.icon = item.meta.icon

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
