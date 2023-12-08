import React, { ComponentType, Suspense, lazy } from 'react'
import { Navigate, Route } from 'react-router-dom'
import { Spin } from 'antd'
// import Home from '@pages/Home'
import Login from '@pages/Login'
import Register from '@pages/Register'
// 从文件系统导入多个模块
const modules = import.meta.glob([
  '../pages/*/*.tsx',
  '../pages/*/*/*.tsx',
  '../pages/*/*/*/*.tsx'
])

/**
 * 路由懒加载
 * @param {string} module 模块名称
 * @returns {JSX.Element} 懒加载组件
 */
const lazyLoad = (module: string) => {
  const Component = lazy(
    modules[`../pages/${module}/index.tsx`] as () => Promise<{
      default: ComponentType<any>
    }>
  )
  return (
    <Suspense fallback={<Spin size='large'></Spin>}>
      <Component />
    </Suspense>
  )
}

export type TRoutes = {
  path: string
  element?: JSX.Element
  elementPath?: string
  inherent?: boolean // 是否默认加载的路由
  children?: TRoutes[]
  meta?: {
    isMenuItem?: boolean // 是否存在于导航菜单栏
    iconName?: string
    icon?: JSX.Element
    breadcrumb: string
  }
}

/**
 * 基础路由
 */
const basicRoutes: TRoutes[] = [
  {
    path: '*', // 未匹配到路由，重定向到首页
    element: <Navigate to='/' />,
    inherent: true
  },
  {
    path: '/', // 首页
    // element: <Home />
    element: <Navigate to='/login' />,
    inherent: true
  },
  {
    path: '/login', // 登录
    element: <Login />,
    inherent: true
  },
  {
    path: '/register', // 注册
    element: <Register />,
    inherent: true
  },
  {
    path: '/register/tour', // 注册引导
    elementPath: 'Register/Tour'
  },
  {
    path: '/register/result', // 注册结果
    elementPath: 'Register/Result'
  }
]

/**
 * 动态路由
 */
const dynamicRoutes = [
  {
    path: '/app', // 布局
    elementPath: 'AppLayout',
    children: [
      {
        path: 'myAccount', // 账号信息
        elementPath: 'MyAccount',
        children: [
          {
            path: 'companyInfo', // 单位信息
            elementPath: 'MyAccount/CompanyInfo',
            meta: {
              breadcrumb: '单位信息'
            }
          },
          {
            path: 'companySettings', // 修改单位信息
            elementPath: 'MyAccount/CompanySettings',
            meta: {
              breadcrumb: '修改单位信息'
            }
          },
          {
            path: 'accountInfo', // 账号信息
            elementPath: 'MyAccount/AccountInfo',
            meta: {
              breadcrumb: '账号信息'
            }
          },
          {
            path: 'accountSettings', // 修改账号信息
            elementPath: 'MyAccount/AccountSettings',
            meta: {
              breadcrumb: '修改账号信息'
            }
          }
        ]
      },
      // {
      //   path: 'main', // 首页
      //   elementPath: 'Main,
      //   meta: {
      //     isMenuItem: true,
      //     iconName: 'HomeOutlined,
      //     breadcrumb: '首页'
      //   }
      // },
      {
        path: 'appServiceCenter', // 基础能力中心
        children: [
          {
            path: '',
            elementPath: 'AppServiceCenter'
          },
          {
            path: 'introduction',
            elementPath: 'AppServiceCenter/Introduction',
            meta: {
              breadcrumb: '查看基础能力介绍'
            }
          }
        ],
        meta: {
          isMenuItem: true,
          iconName: 'RadarChartOutlined',
          breadcrumb: '基础能力中心'
        }
      },
      {
        path: 'devDocument', // 开发文档
        children: [
          {
            path: '',
            elementPath: 'DevDocument'
          },
          {
            path: 'searchDocument',
            elementPath: 'DevDocument/SearchDocument',
            meta: {
              breadcrumb: '搜索'
            }
          }
        ],
        meta: {
          isMenuItem: true,
          iconName: 'FileSearchOutlined',
          breadcrumb: '开发文档'
        }
      },
      {
        path: 'myApps', // 我的应用
        children: [
          {
            path: '',
            elementPath: 'MyApps/Index'
          },
          {
            path: 'appForm',
            elementPath: 'MyApps/AppForm',
            meta: {
              breadcrumb: '填写应用信息'
            }
          },
          {
            path: 'appInfo',
            children: [
              {
                path: '',
                elementPath: 'MyApps/AppInfo'
              },
              {
                path: 'uploadForm',
                elementPath: 'MyApps/AppInfo/UploadForm',
                meta: {
                  breadcrumb: '上传申请表'
                }
              },
              {
                path: 'access',
                elementPath: 'MyApps/AppInfo/Access',
                meta: {
                  breadcrumb: '接入基础能力'
                }
              }
            ],
            meta: {
              breadcrumb: '查看应用详情'
            }
          }
        ],
        meta: {
          isMenuItem: true,
          iconName: 'AppstoreOutlined',
          breadcrumb: '我的应用'
        }
      },
      {
        path: 'myApplications', // 我的申请
        elementPath: 'MyApplications',
        meta: {
          isMenuItem: true,
          iconName: 'SolutionOutlined',
          breadcrumb: '我的申请'
        }
      },
      {
        path: 'myAccount/companyInfo', // 我的单位
        elementPath: 'MyAccount/CompanyInfo',
        meta: {
          isMenuItem: true,
          iconName: 'companyInfoIcon',
          breadcrumb: '我的单位'
        }
      },
      {
        path: 'messageCenter', // 消息中心
        children: [
          {
            path: '',
            elementPath: 'MessageCenter'
          },
          {
            path: 'messageDetail',
            elementPath: 'MessageCenter/MessageDetail',
            meta: {
              breadcrumb: '查看消息'
            }
          }
        ],
        meta: {
          isMenuItem: true,
          iconName: 'BellOutlined',
          breadcrumb: '消息中心'
        }
      }
    ]
  }
]

/**
 * 生成预渲染路由格式
 */
const generateRoute = (routes: TRoutes[]): TRoutes[] => {
  return routes.map((item: TRoutes) => {
    if (item.children) {
      const routeItem: TRoutes = {
        path: item.path,
        element: (item.elementPath &&
          lazyLoad(item.elementPath as string)) as JSX.Element,
        children: generateRoute(item.children)
      }
      return routeItem
    } else {
      const { inherent, ...rest } = item
      if (item.inherent) {
        return rest
      } else {
        const routeItem = {
          ...item,
          element: lazyLoad(item.elementPath as string)
        }
        return routeItem
      }
    }
  })
}

const routes = generateRoute([...basicRoutes, ...dynamicRoutes])

/**
 * 渲染路由
 * @param {TRoutes[]} routes 路由表
 * @returns {(JSX.Element | undefined)[]} 渲染后的路由表
 */
const renderRoute = (routes: TRoutes[]) => {
  return routes.map(item => {
    return (
      <Route path={item.path} element={item.element} key={item.path}>
        {item.children && renderRoute(item.children)}
      </Route>
    )
  })
}

export { dynamicRoutes, routes, generateRoute, renderRoute }
