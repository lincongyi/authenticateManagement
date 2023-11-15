import React, { ComponentType, Suspense, lazy } from 'react'
import { Navigate, Route } from 'react-router-dom'
import { Spin } from 'antd'
// import Home from '@pages/Home'
import Login from '@pages/Login'
import AppLayout from '@pages/AppLayout'
import Register from '@pages/Register'
import Icon, {
  // HomeOutlined,
  RadarChartOutlined,
  AppstoreOutlined,
  SolutionOutlined,
  FileSearchOutlined,
  BellOutlined
} from '@ant-design/icons'

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
  children?: TRoutes[]
  meta?: {
    isMenuItem?: boolean // 是否存在于导航菜单栏
    icon?: JSX.Element
    breadcrumb: string
  }
}

const routes: TRoutes[] = [
  {
    path: '*', // 未匹配到路由，重定向到首页
    element: <Navigate to='/' />
  },
  {
    path: '/', // 首页
    // element: <Home />
    element: <Navigate to='/login' />
  },
  {
    path: '/login', // 登录
    element: <Login />
  },
  {
    path: '/register', // 注册
    element: <Register />
  },
  {
    path: '/register/tour', // 注册引导
    element: lazyLoad('Register/Tour')
  },
  {
    path: '/register/result', // 注册结果
    element: lazyLoad('Register/Result')
  },
  {
    path: '/app', // 布局
    element: <AppLayout />,
    children: [
      {
        path: 'myAccount', // 账号信息
        element: lazyLoad('MyAccount'),
        children: [
          {
            path: 'companyInfo', // 单位信息
            element: lazyLoad('MyAccount/CompanyInfo'),
            meta: {
              breadcrumb: '单位信息'
            }
          },
          {
            path: 'companySettings', // 修改单位信息
            element: lazyLoad('MyAccount/CompanySettings'),
            meta: {
              breadcrumb: '修改单位信息'
            }
          },
          {
            path: 'accountInfo', // 账号信息
            element: lazyLoad('MyAccount/AccountInfo'),
            meta: {
              breadcrumb: '账号信息'
            }
          },
          {
            path: 'accountSettings', // 修改账号信息
            element: lazyLoad('MyAccount/AccountSettings'),
            meta: {
              breadcrumb: '修改账号信息'
            }
          }
        ]
      },
      // {
      //   path: 'main', // 首页
      //   element: lazyLoad('Main'),
      //   meta: {
      //     isMenuItem: true,
      //     icon: React.createElement(HomeOutlined),
      //     breadcrumb: '首页'
      //   }
      // },
      {
        path: 'appServiceCenter', // 基础能力中心
        children: [
          {
            path: '',
            element: lazyLoad('AppServiceCenter')
          },
          {
            path: 'introduction',
            element: lazyLoad('AppServiceCenter/Introduction'),
            meta: {
              breadcrumb: '查看基础能力介绍'
            }
          }
        ],
        meta: {
          isMenuItem: true,
          icon: React.createElement(RadarChartOutlined),
          breadcrumb: '基础能力中心'
        }
      },
      {
        path: 'devDocument', // 开发文档
        children: [
          {
            path: '',
            element: lazyLoad('DevDocument')
          },
          {
            path: 'searchDocument',
            element: lazyLoad('DevDocument/SearchDocument'),
            meta: {
              breadcrumb: '搜索'
            }
          }
        ],
        meta: {
          isMenuItem: true,
          icon: React.createElement(FileSearchOutlined),
          breadcrumb: '开发文档'
        }
      },
      {
        path: 'myApps', // 我的应用
        children: [
          {
            path: '',
            element: lazyLoad('MyApps/Index')
          },
          {
            path: 'appForm',
            element: lazyLoad('MyApps/AppForm'),
            meta: {
              breadcrumb: '填写应用信息'
            }
          },
          {
            path: 'appInfo',
            children: [
              {
                path: '',
                element: lazyLoad('MyApps/AppInfo')
              },
              {
                path: 'uploadForm',
                element: lazyLoad('MyApps/AppInfo/UploadForm'),
                meta: {
                  breadcrumb: '上传申请表'
                }
              },
              {
                path: 'access',
                element: lazyLoad('MyApps/AppInfo/Access'),
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
          icon: React.createElement(AppstoreOutlined),
          breadcrumb: '我的应用'
        }
      },
      {
        path: 'myApplications', // 我的申请
        element: lazyLoad('MyApplications'),
        meta: {
          isMenuItem: true,
          icon: React.createElement(SolutionOutlined),
          breadcrumb: '我的申请'
        }
      },
      {
        path: 'companyInfo', // 我的单位
        element: lazyLoad('MyAccount/CompanyInfo'),
        meta: {
          isMenuItem: true,
          icon: <Icon component={companyInfoIcon} />,
          breadcrumb: '我的单位'
        }
      },
      {
        path: 'messageCenter', // 消息中心
        children: [
          {
            path: '',
            element: lazyLoad('MessageCenter')
          },
          {
            path: 'messageDetail',
            element: lazyLoad('MessageCenter/MessageDetail'),
            meta: {
              breadcrumb: '查看消息'
            }
          }
        ],
        meta: {
          isMenuItem: true,
          icon: React.createElement(BellOutlined),
          breadcrumb: '消息中心'
        }
      }
    ]
  }
]

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

export { routes, renderRoute }
