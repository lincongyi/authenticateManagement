import React, { useEffect, useState } from 'react'
import { Tabs } from 'antd'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

const MyAccount = () => {
  /**
   * 标签页列表
   */
  const items = [
    { label: '单位信息', key: 'company' },
    { label: '账号信息', key: 'account' }
  ]

  const { pathname } = useLocation()
  /**
   * 当前标签高亮
   */
  const [activeKey, setActiveKey] = useState('')
  useEffect(() => {
    const item = items.find(item => pathname.includes(item.key))
    setActiveKey(item?.key || 'company')
  }, [pathname])

  const navigate = useNavigate()
  /**
   * 切换标签页
   */
  const onChange = (key: string) => {
    setActiveKey(key)
    navigate(`/app/myAccount/${key}Info`)
  }

  return (
    <>
      <Tabs activeKey={activeKey} onChange={onChange} items={items} />
      <Outlet></Outlet>
    </>
  )
}

export default MyAccount
