import React from 'react'
import {
  HomeOutlined,
  ProfileOutlined,
  AppstoreOutlined,
  SolutionOutlined,
  FileExclamationOutlined,
  FileUnknownOutlined,
} from '@ant-design/icons'

/**
 * 静态菜单列表数据
 * @returns {Array} 菜单列表
 */
export const getMenu = (): TMenuItem[] => {
  // 菜单项必填写 key
  return [
    {
      label: '首页',
      key: 'main',
      icon: React.createElement(HomeOutlined),
    },
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
      label: '我的申请',
      key: 'myApplications',
      icon: React.createElement(SolutionOutlined),
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
