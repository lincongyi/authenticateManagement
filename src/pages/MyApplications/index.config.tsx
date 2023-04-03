import React from 'react'
import { MenuIcon01, MenuIcon02, MenuIcon03, MenuIcon04 } from './icon'

/**
 * 返回菜单
 * @returns {Array} 菜单数组
 */
export const getMenu = (): TMenuItem[] => {
  // 菜单项必填写 key
  return [
    {
      label: '身份认证能力应用服务',
      key: 'identity',
      icon: React.createElement(MenuIcon01),
      children: [
        { label: '测试应用接入申请', key: '/identity/test' },
        { label: '正式应用接入申请', key: '/identity/formal' },
        { label: '正式应用参数修改申请', key: '/identity/update' }
      ]
    },
    // {
    //   label: '1:N验证应用智感服务',
    //   key: '/myApps',
    //   icon: React.createElement(MenuIcon02)
    // },
    {
      label: '其他',
      key: 'others',
      icon: React.createElement(MenuIcon04),
      children: [{ label: '单位注册信息修改申请', key: '/others/update' }]
    }
  ]
}
