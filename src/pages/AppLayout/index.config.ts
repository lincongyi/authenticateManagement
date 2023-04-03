import React from 'react'
import {
  ProfileOutlined,
  AppstoreOutlined,
  FileExclamationOutlined,
  FileUnknownOutlined,
} from '@ant-design/icons'

/**
 * 返回菜单
 * @returns {Array} 菜单数组
 */
export const getMenu = (): TMenuItem[] => {
  // 菜单项必填写 key
  return [
    {
      label: '应用服务中心',
      key: 'appServiceCenter',
      icon: React.createElement(ProfileOutlined),
    },
    {
      label: '我的应用',
      key: 'myApps',
      icon: React.createElement(AppstoreOutlined),
    },
    {
      label: '问题帮助',
      key: 'helps',
      icon: React.createElement(FileExclamationOutlined),
    },
    {
      label: '业务问题',
      key: 'issues',
      icon: React.createElement(FileUnknownOutlined),
      children: [
        {
          label: '日常问题',
          key: 'issues/daily',
        },
        {
          label: '问题推荐',
          key: 'issues/recommend',
        },
        {
          label: '问题分类',
          key: 'issues/classification',
        },
        {
          label: '自动回复',
          key: 'issues/reply',
        },
        {
          label: '用户咨询',
          key: 'issues/consultation',
        },
      ],
    },
  ]
}
