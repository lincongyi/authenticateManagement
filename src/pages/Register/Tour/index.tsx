import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import style from './index.module.scss'
import { Card, Col, Row, Space } from 'antd'
import {
  ArrowLeftOutlined,
  AuditOutlined,
  SolutionOutlined
} from '@ant-design/icons'
import Header from '@components/Header'
import CheckModal from './components/CheckModal'


const Tour = () => {
  const navigate = useNavigate()

  /**
   * 返回
   */
  const onBack = () => navigate(-1)

  const [open, setOpen] = useState(false)

  /**
   * 注册申请
   */
  const onRegister = (index: number) => {
    if (!index) {
      setOpen(true)
    } else {
      navigate('/register')
    }
  }

  return (
    <>
      <Header isLogin={false} />
      <div className='gray-bg'>
        <div className={style.content}>
          <div className={style['back-column']}>
            <div className={style['back-btn']} onClick={onBack}>
              <Space>
                <ArrowLeftOutlined style={{ color: '#999' }} />
                返回
              </Space>
            </div>
          </div>
          <Row gutter={20}>
            <Col span={8}>
              <Card hoverable onClick={() => onRegister(0)}>
                <div className={style['card-content']}>
                  <AuditOutlined style={{ fontSize: 40 }} />
                  <p className={style['card-name']}>查询注册申请进度</p>
                </div>
              </Card>
            </Col>
            <Col span={8}>
              <Card hoverable onClick={() => onRegister(1)}>
                <div className={style['card-content']}>
                  <SolutionOutlined style={{ fontSize: 40 }} />
                  <p className={style['card-name']}>注册申请</p>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      <CheckModal
        open={open}
        setOpen={setOpen}
        toResult={() => navigate('/register/result')}
      />
    </>
  )
}

export default Tour
