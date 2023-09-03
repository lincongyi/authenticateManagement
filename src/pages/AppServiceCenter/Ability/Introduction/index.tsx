import React, { useState } from 'react'
import style from './index.module.scss'
import { Button, Divider, Tabs, Modal } from 'antd'
import type { TabsProps } from 'antd'
import BasicAbility from './components/BasicAbility'
import Interface from './components/Interface'
import AppAccessModal from './components/AppAccessModal'

const items: TabsProps['items'] = [
  {
    key: '1',
    label: '能力介绍',
    children: <BasicAbility />
  },
  {
    key: '2',
    label: '接口介绍',
    children: <Interface />
  }
]

const Introduction = () => {
  const [open, setOpen] = useState(false)

  const [modal, contextHolder] = Modal.useModal()

  /**
   * 申请接入
   */
  const onAccess = () => {
    Math.random() >= 0.5
      ? setOpen(true)
      : modal.warning({
          title: '提示',
          content:
            '暂无可接入此基础能力的应用，去【我的应用】创建新应用后再添加此基础能力吧~',
          okText: '确定'
        })
  }

  return (
    <>
      {contextHolder}
      <div className={style['sub-title']}>
        <p>
          身份认证能力简介说明，比如“多认证源，多认证链路可配置，支持高并发，安全匿名标识等”
        </p>
        <Button type='primary' onClick={onAccess}>
          申请接入
        </Button>
      </div>
      <Divider />
      <Tabs defaultActiveKey='1' items={items} />
      <AppAccessModal open={open} setOpen={setOpen} />
    </>
  )
}

export default Introduction