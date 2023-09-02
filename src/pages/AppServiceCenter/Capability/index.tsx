import React from 'react'
import { Outlet } from 'react-router-dom'
import style from './index.module.scss'
import { Typography } from 'antd'

const { Title } = Typography

const Capability = () => {
  return (
    <>
      <div className={style['left-side']}>
        <Title level={2}>身份认证能力</Title>
      </div>
      <Outlet />
    </>
  )
}

export default Capability
