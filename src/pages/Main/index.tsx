import React, { useEffect, useState } from 'react'
import { useStore } from '@stores/index'
import { useNavigate } from 'react-router-dom'
import style from './index.module.scss'
import { Alert, Button, Col, Row } from 'antd'
import { AlertOutlined } from '@ant-design/icons'
import Pannel1 from './components/Pannel1'
import Pannel2 from './components/Pannel2'
import Statistics from './components/Statistics'

const Main = () => {
  const { themeStore } = useStore()
  const colorPrimary = themeStore.antdThemeColor

  const navigate = useNavigate()

  /**
   * 初始化招呼语
   */
  const [timeline] = useState(() => {
    const range = [
      { timeScope: [6, 9], text: '早上' },
      { timeScope: [9, 12], text: '上午' },
      { timeScope: [12, 14], text: '中午' },
      { timeScope: [14, 19], text: '下午' }
    ]
    const hour = new Date().getHours()
    const result = range.find(
      item => hour >= item.timeScope[0] && hour < item.timeScope[1]
    )
    return result ? result.text : '晚上'
  })

  /**
   * 用户名
   */
  const [accountNumber, setAccountNumber] = useState('')
  /**
   * 初始化用户名
   */
  useEffect(() => {
    if (!localStorage.getItem('userInfo')) return navigate('/login')
    const userInfo: TUserInfo = JSON.parse(localStorage.getItem('userInfo')!)
    setAccountNumber(userInfo.accountNumber)
  }, [])

  /**
   * 跳转到消息通知
   */
  const toNews = () => {
    console.log('跳转到消息通知')
  }

  /**
   * 最后登录时间
   */
  const [prevLoginTime] = useState('2023-03-03 22:23:12')

  /**
   * 数据更新时间
   */
  const [updateTime] = useState('2023-03-10  12:00:00')

  /**
   * 我的应用
   */
  const [myAppInfo] = useState({
    joined: 100,
    totalCount: 200,
    todayCount: 50
  })

  /**
   * 我的基础服务
   */
  const [myService] = useState({
    joined: 1000,
    totalCount: 2000,
    todayCount: 500
  })

  /**
   * 我的申请
   */
  const [myApplications] = useState([
    { subtitle: '审批中', count: 100 },
    { subtitle: '审批通过', count: 200 },
    { subtitle: '审批未通过', count: 300 }
  ])

  /**
   * 获取我的申请数据
   */
  const getMyApplications = (params: string) => {
    console.log(params)
  }

  /**
   * 我的工单
   */
  const [myWorkOrder] = useState([
    { subtitle: '待处理', count: 400 },
    { subtitle: '已处理', count: 500 }
  ])

  /**
   * 获取我的工单数据
   */
  const getMyWorkOrder = (params: string) => {
    console.log(params)
  }

  return (
    <>
      <Alert
        message={
          <>
            您的单位信息尚未完善，部分功能限制使用。
            <Button
              size='small'
              type='text'
              style={{ color: colorPrimary }}
              onClick={() => navigate('/app/myAccount')}
            >
              点击前往
            </Button>
            完善单位信息
          </>
        }
        type='warning'
        style={{ marginBottom: 24 }}
        showIcon
        closable
      ></Alert>

      <div className={style.notification}>
        <div className={style['left-side']}>
          <div className={style.greeting}>
            {timeline}好！{accountNumber}
          </div>
          <div className={style['prev-login']}>最后登录：{prevLoginTime}</div>
        </div>

        <div className={style['right-side']}>
          <div className={style.notice}>
            <AlertOutlined />
            <div className={style.news} onClick={toNews}>
              3月应用中心全新上架三款企业级应用，当月申请可享不限流3月应用中心全新上架三款企业级应用，当月申请可享不限流
            </div>
          </div>
          <div className={style['update-time']}>数据更新时间：{updateTime}</div>
        </div>
      </div>

      <Row gutter={[20, 20]}>
        <Col span={12}>
          <Pannel1 title='我的应用' info={myAppInfo} />
        </Col>
        <Col span={12}>
          <Pannel1 title='我的基础服务' info={myService} />
        </Col>
        <Col span={12}>
          <Statistics />
        </Col>
        <Col span={12}>
          <Row gutter={[0, 20]}>
            <Col span={24}>
              <Pannel2
                title='我的申请'
                info={myApplications}
                getData={getMyApplications}
              />
            </Col>
            <Col span={24}>
              <Pannel2
                title='我的工单'
                info={myWorkOrder}
                getData={getMyWorkOrder}
              />
            </Col>
            <Col span={24}></Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default Main
