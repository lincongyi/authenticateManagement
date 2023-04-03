import React, { ComponentType, Suspense, lazy } from 'react'
import { Navigate, Route } from 'react-router-dom'
import { Spin } from 'antd'
import Home from '@pages/Home'
import Login from '@pages/Login'
import AppLayout from '@pages/AppLayout'
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
    <Suspense fallback={<Spin tip='Loading' size='large'></Spin>}>
      <Component />
    </Suspense>
  )
}

type TRoutes = {
  path: string
  element?: JSX.Element
  children?: TRoutes[]
}

const routes: TRoutes[] = [
  {
    path: '*', // 未匹配到路由，重定向到首页
    element: <Navigate to='/' />
  },
  {
    path: '/', // 首页
    element: <Home />
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
            path: '', // 单位信息
            element: lazyLoad('MyAccount/CompanyInfo')
          },
          {
            path: 'companyInfo', // 单位信息
            element: lazyLoad('MyAccount/CompanyInfo')
          },
          {
            path: 'companySettings', // 修改单位信息
            element: lazyLoad('MyAccount/CompanySettings')
          },
          {
            path: 'accountInfo', // 账号信息
            element: lazyLoad('MyAccount/AccountInfo')
          },
          {
            path: 'accountSettings', // 修改账号信息
            element: lazyLoad('MyAccount/AccountSettings')
          }
        ]
      },
      {
        path: 'myApplications', // 我的申请
        element: lazyLoad('MyApplications'),
        children: [
          {
            path: 'identity/test', // 测试应用接入申请
            element: lazyLoad('MyApplications/Identity/Test')
          },
          {
            path: 'identity/formal', // 正式应用接入申请
            element: lazyLoad('MyApplications/Identity/Formal')
          },
          {
            path: 'identity/update', // 正式应用参数修改申请
            element: lazyLoad('MyApplications/Identity/Update')
          },
          {
            path: 'others/update', // 单位注册信息修改申请
            element: lazyLoad('MyApplications/Others/Update')
          }
        ]
      },
      {
        path: 'appServiceCenter', // 应用服务中心
        element: lazyLoad('AppServiceCenter')
      },
      {
        path: 'myApps', // 我的应用
        element: lazyLoad('MyApps')
      },
      {
        path: 'helps', // 问题帮助
        element: lazyLoad('Helps')
      },
      {
        path: 'issues', // 业务问题
        children: [
          {
            path: 'daily', // 日常问题
            element: lazyLoad('Issues/Daily')
          },
          {
            path: 'recommend', // 问题推荐
            element: lazyLoad('Issues/Recommend')
          },
          {
            path: 'classification', // 问题分类
            element: lazyLoad('Issues/Classification')
          },
          {
            path: 'reply', // 自动回复
            element: lazyLoad('Issues/Reply')
          }
        ]
      }
    ]
  }
]

/**
 * 渲染路由
 * @param {TRoutes[]} 路由表
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
