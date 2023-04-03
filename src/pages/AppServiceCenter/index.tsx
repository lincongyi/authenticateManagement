import React, { useState } from 'react'
import style from './index.module.scss'
import { Card, Col, Row, message } from 'antd'
import appServiceCenterCard01 from '@/assets/appServiceCenter-card-01.png'
import appServiceCenterCard02 from '@/assets/appServiceCenter-card-02.png'
import appServiceCenterCard03 from '@/assets/appServiceCenter-card-03.png'
import appServiceCenterCard04 from '@/assets/appServiceCenter-card-04.png'
import appServiceCenterCard05 from '@/assets/appServiceCenter-card-05.png'
import Authentication from './components/Authentication'

const AppServiceCenter: React.FC = () => {
  /**
   * 卡片列表
   */
  const cardList = [
    { icon: appServiceCenterCard01, text: '身份认证能力应用服务' },
    { icon: appServiceCenterCard02, text: '1:N验证应用智感服务' },
    { icon: appServiceCenterCard03, text: '重点人员核验应用服务' },
    { icon: appServiceCenterCard04, text: '虹膜认证应用服务' },
    { icon: appServiceCenterCard05, text: '更多应用服务敬请期待' }
  ]

  /**
   * 申请服务应用
   */
  const selectService = (index: number) => {
    switch (index) {
      case 0:
        setAuthenticationOpen(true)
        break

      default:
        message.warning({
          content: '该功能暂未开通'
        })
        break
    }
  }

  const [authenticationOpen, setAuthenticationOpen] = useState(false) // 控制身份认证dialog显示隐藏

  return (
    <>
      <div className={style.container}>
        <div className={style.title}>请选择下面应用服务进行申请</div>
        <Row gutter={20}>
          {cardList.map((item, index) => (
            <Col span={8} key={index}>
              <Card
                style={{ marginBottom: 20 }}
                hoverable
                onClick={() => selectService(index)}
              >
                <div className={style['card-content']}>
                  <img src={item.icon} />
                  <p className={style['card-name']}>{item.text}</p>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {authenticationOpen && (
        <Authentication
          open={authenticationOpen}
          setOpen={setAuthenticationOpen}
        />
      )}
    </>
  )
}

export default AppServiceCenter
