import { routes } from '../../router'
import type { TRoutes } from '../../router'

/**
 * 生成菜单
 * @param {TRoutes[]} routes 需要生成菜单的路由数组
 * @param {string} key 上一级菜单的key值
 * @returns {TMenuItem[] | undefined} 菜单列表
 */
const generateMenuItem = (routes: TRoutes[], key?: string) => {
  const menu = routes.reduce((prev: TMenuItem[] | undefined, next) => {
    if (next.meta?.isMenuItem) {
      if (!prev) prev = []
      const item: TMenuItem = {
        label: next.meta.breadcrumb,
        key: `${key ? `${key}/${next.path}` : next.path}`, // 兼容子菜单的key值
        icon: next.meta.icon,
        children: next.children
          ? generateMenuItem(next.children, next.path)
          : undefined,
      }
      prev.push(item)
    }
    return prev
  }, undefined) // initialValue初始化为undefined，避免一级路由是导航菜单项，而二级路由不是的情况
  return menu
}

/**
 * 静态菜单列表数据
 */
const getMenu = (): TMenuItem[] => {
  const appRoutes = getAppRoutes()
  if (!appRoutes) return []
  const { children } = appRoutes
  if (!children) return []
  return generateMenuItem(children) || []
}

const getAppRoutes = () => {
  return routes.find((item) => item.path === '/app')
}

export { getMenu, getAppRoutes }
