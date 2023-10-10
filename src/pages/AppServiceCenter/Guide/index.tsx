import React, { useEffect, useState } from 'react'
import style from './index.module.scss'
import { Card, Col, Empty, Row, message } from 'antd'
import { useNavigate } from 'react-router-dom'
import { getCapabilityList } from '@api/ability'
import type { TGetCapabilityListResponse } from '@api/ability'

const AppServiceCenter = () => {
  const [capabilityList, setCapabilityList] =
    useState<TGetCapabilityListResponse[]>() // 基础能力列表

  const [messageApi, contextHolder] = message.useMessage()

  /**
   * 初始化基础能力列表
   */
  useEffect(() => {
    ;(async () => {
      const { data } = await getCapabilityList()
      if (!data) return
      if (!data.length) return messageApi.warning('暂无可接入的基础能力')
      setCapabilityList(data)
    })()
  }, [])

  const navigate = useNavigate()
  /**
   * 申请服务应用
   */
  const selectService = (id: number) => {
    navigate(`./introduction?id=${id}`)
  }

  return (
    <>
      {contextHolder}
      <div className={style.container}>
        <div className={style.title}>请选择以下基础能力进行查看和申请</div>
        {capabilityList ? (
          <Row gutter={20}>
            {capabilityList.map((item, index) => (
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
        ) : (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        )}
      </div>
    </>
  )
}

export default AppServiceCenter
