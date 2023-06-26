import { routes } from '../../router'

/**
 * 静态菜单列表数据
 * @returns {TMenuItem[]} 菜单列表
 */
export const getMenu = (): TMenuItem[] => {
  const appList = routes.find(item => item.path === '/app')
  if (!appList) return []
  const { children } = appList
  return (
    children?.reduce((prev: TMenuItem[], next) => {
      if (next.meta?.isMenuItem) {
        const item = {
          label: next.meta.breadcrumb,
          key: next.path, // 菜单项必须配置 key
          icon: next.meta.icon
        }

        prev.push(item)
      }
      return prev
    }, []) || []
  )
}
