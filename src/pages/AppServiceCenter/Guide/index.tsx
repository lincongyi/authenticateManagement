import React, { useEffect, useState } from 'react'
import style from './index.module.scss'
import { Card, Col, Row } from 'antd'
import { useNavigate } from 'react-router-dom'
import { getCapabilityList } from '@api/capability'
import type { TGetCapabilityListResponse } from '@api/capability'

const AppServiceCenter = () => {
  const [capabilityList, setCapabilityList] =
    useState<TGetCapabilityListResponse[]>() // 基础能力列表

  /**
   * 初始化基础能力列表
   */
  useEffect(() => {
    ;(async () => {
      const { data } = await getCapabilityList()
      setCapabilityList(data)
    })()
  }, [])

  const navigate = useNavigate()
  /**
   * 申请服务应用
   */
  const selectService = (id: number) => {
    navigate(`./ability/introduction/${id}`)
  }

  return (
    <>
      <div className={style.container}>
        <div className={style.title}>请选择以下基础能力进行查看和申请</div>
        <Row gutter={20}>
          {capabilityList &&
            capabilityList.map((item, index) => (
              <Col span={8} key={index}>
                <Card
                  style={{ marginBottom: 20 }}
                  hoverable
                  onClick={() => selectService(item.id)}
                >
                  <div className={style['card-content']}>
                    <img
                      width={80}
                      height={80}
                      style={{ borderRadius: 10 }}
                      src={item.baseInfo.iconPath}
                    />
                    <p className={style['card-name']}>{item.baseInfo.name}</p>
                  </div>
                </Card>
              </Col>
            ))}
        </Row>
      </div>
    </>
  )
}

export default AppServiceCenter
