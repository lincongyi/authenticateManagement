import React, { useEffect, useState } from 'react'
import { useStore } from '@stores/index'
import { useNavigate } from 'react-router-dom'
import style from './index.module.scss'
import { Alert, Button, Carousel, Col, Row } from 'antd'
import { AlertOutlined } from '@ant-design/icons'
import Panel1 from './components/Panel1'
import Panel2 from './components/Panel2'
import Statistics from './components/Statistics'
import { getApplyCount } from '@api/myApplications'
import { getNews, getMyAppInfo, getService } from '@mock/index'

const Main = () => {
  const { themeStore } = useStore()
  const colorPrimary = themeStore.antdThemeColor

  const navigate = useNavigate()

  /**
   * 初始化招呼语
   */
  const [timeline] = useState(() => {
    const range = [
      { timeScope: [6, 9], description: '早上' },
      { timeScope: [9, 12], description: '上午' },
      { timeScope: [12, 14], description: '中午' },
      { timeScope: [14, 19], description: '下午' }
    ]
    const hour = new Date().getHours()
    const result = range.find(
      item => hour >= item.timeScope[0] && hour < item.timeScope[1]
    )
    return result ? result.description : '晚上'
  })

  /**
   * 用户名
   */
  const [accountNumber, setAccountNumber] = useState('')
  useEffect(() => {
    /**
     * 初始化用户名
     */
    if (!localStorage.getItem('userInfo')) return navigate('/login')
    const userInfo: TUserInfo = JSON.parse(localStorage.getItem('userInfo')!)
    setAccountNumber(userInfo.accountNumber)

    /**
     * 初始化消息推送内容
     */
    ;(async () => {
      const { data } = await getNews()
      setNews(data.news)
    })()

    /**
     * 初始化我的应用
     */
    ;(async () => {
      const { data } = await getMyAppInfo({
        startTime: '',
        endTime: ''
      })
      setMyAppInfo(data)
    })()

    /**
     * 初始化我的基础服务
     */
    ;(async () => {
      const { data } = await getService({
        startTime: '',
        endTime: ''
      })
      setMyService(data)
    })()

    /**
     * 初始化我的申请数据
     */
    ;(async () => {
      const { data } = await getApplyCount({
        startTime: '',
        endTime: ''
      })
      // 审批中
      const item1 = { title: '审批中', count: data![2].count }
      // 审批通过
      const item2 = { title: '审批通过', count: data![1].count }
      // 审批不通过
      const item3 = { title: '审批不通过', count: data![3].count }
      setMyApplications([item1, item2, item3])
    })()
  }, [])

  type TNews = {
    id: string
    message: string
  }

  /**
   * 消息推送内容
   */
  const [news, setNews] = useState<TNews[]>()

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
  const [myAppInfo, setMyAppInfo] = useState<TPannel1Data>()

  /**
   * 我的基础服务
   */
  const [myService, setMyService] = useState<TPannel1Data>()

  /**
   * 我的申请
   */
  const [myApplications, setMyApplications] = useState<TPannel2Info[]>()

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
    { title: '待处理', count: 400 },
    { title: '已处理', count: 500 }
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
            <AlertOutlined style={{ float: 'left', marginTop: 3 }} />
            <Carousel dots={{ className: 'carousel-dot' }} autoplay>
              {news &&
                news.map(item => (
                  <div className={style.news} onClick={toNews} key={item.id}>
                    {item.message}
                  </div>
                ))}
            </Carousel>
          </div>
          <div className={style['update-time']}>数据更新时间：{updateTime}</div>
        </div>
      </div>

      <Row gutter={[20, 20]}>
        <Col span={12}>
          {myAppInfo && <Panel1 title='我的应用' info={myAppInfo} />}
        </Col>
        <Col span={12}>
          {myService && <Panel1 title='我的基础服务' info={myService} />}
        </Col>
        <Col span={12}>
          <Statistics />
        </Col>
        <Col span={12}>
          <Row gutter={[0, 20]}>
            <Col span={24}>
              {myApplications && (
                <Panel2
                  title='我的申请'
                  info={myApplications}
                  getData={getMyApplications}
                />
              )}
            </Col>
            <Col span={24}>
              <Panel2
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
