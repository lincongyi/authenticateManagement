import React from 'react'
import style from './index.module.scss'
import { useNavigate } from 'react-router-dom'
import { Button, Divider, Tabs, Typography } from 'antd'
import type { TabsProps } from 'antd'
import Ability from './components/Ability'
import Interface from './components/Interface'
import { useStore } from '@stores/index'

const { Title } = Typography

const items: TabsProps['items'] = [
  {
    key: '1',
    label: '能力介绍',
    children: <Ability />
  },
  {
    key: '2',
    label: '接口介绍',
    children: <Interface />
  }
]

const Introduction = () => {
  const navigate = useNavigate()

  const { accessFormStore } = useStore()

  /**
   * 添加接入
   */
  const onAccess = () => {
    accessFormStore.current = {
      id: 0,
      state: 1
    }
    navigate('../accessForm')
  }

  return (
    <>
      <div className={style.header}>
        <div className={style['left-side']}>
          <Title level={2}>身份认证能力</Title>
          身份认证能力简介说明，比如“多认证源，多认证链路可配置，支持高并发，安全匿名标识等”
        </div>
        <Button type='primary' onClick={onAccess}>
          添加接入
        </Button>
      </div>
      <Divider />
      <Tabs defaultActiveKey='1' items={items} />
    </>
  )
}

export default Introduction
