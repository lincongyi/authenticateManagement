import React, { useEffect, useState } from 'react'
import style from './index.module.scss'
import { Col, Row, DatePicker, ConfigProvider, Card } from 'antd'
import dayjs from 'dayjs'
import type { Dayjs } from 'dayjs'
import 'dayjs/locale/zh-cn'
import locale from 'antd/locale/zh_CN'
import { rangePresets, disabledDate, dateFormat } from '@utils/date'
import {
  getAmount,
  getPercentage,
  getDistribution,
  getDistributionList
} from '@mock/myApp'
import type { TPercentage, TCard } from '@mock/myApp'
import AmountChart from './components/AmountChart'
import PercentageChart from './components/PercentageChart'
import DistributionChart from './components/DistributionChart'

const { RangePicker } = DatePicker

const AuthenticationData = () => {
  const [dateRange, setDateRange] = useState<string[]>([
    dayjs().add(-7, 'd').format(dateFormat),
    dayjs().format(dateFormat)
  ])

  /**
   * 日期范围发生变化的回调
   */
  const onRangeChange = (
    dates: null | (Dayjs | null)[],
    dateStrings: string[]
  ) => {
    setDateRange(dateStrings)
  }

  /**
   * 关闭日期选择器的回调
   */
  const onOpenChange = (open: boolean) => {
    if (!open) {
      renderAmountChart()
      renderPercentageChart()
      renderDistributionChart()
      renderDistributionCard()
    }
  }

  /**
   * 认证总量
   */
  const [amount, setAmount] = useState<TLineChart & { total: number }>()

  /**
   * 渲染图表-认证总量
   */
  const renderAmountChart = async () => {
    const { data } = await getAmount({
      startDate: dateRange[0],
      endDate: dateRange[1]
    })
    setAmount(data)
  }

  /**
   * 认证成功率
   */
  const [percentage, setPercentage] = useState<TPercentage>()

  /**
   * 渲染图表-认证成功率
   */
  const renderPercentageChart = async () => {
    const { data } = await getPercentage({
      startDate: dateRange[0],
      endDate: dateRange[1]
    })
    setPercentage(data)
  }

  /**
   * 各接入方式认证量分布
   */
  const [distribution, setDistribution] = useState<TLineChart>()

  /**
   * 渲染图表-各接入方式认证量分布
   */
  const renderDistributionChart = async () => {
    const { data } = await getDistribution({
      startDate: dateRange[0],
      endDate: dateRange[1]
    })
    setDistribution(data)
  }

  /**
   * 各证件类型认证量分布
   */
  const [distributionList, setDistributionList] = useState<TCard[]>()

  /**
   * 渲染card-各证件类型认证量分布
   */
  const renderDistributionCard = async () => {
    const { data } = await getDistributionList({
      startDate: dateRange[0],
      endDate: dateRange[1]
    })
    setDistributionList(data!.list)
  }

  useEffect(() => {
    renderAmountChart()
    renderPercentageChart()
    renderDistributionChart()
    renderDistributionCard()
  }, [])

  return (
    <Row gutter={[20, 20]}>
      <Col span={24}>
        <ConfigProvider locale={locale}>
          <RangePicker
            defaultValue={[dayjs(dateRange[0]), dayjs(dateRange[1])]}
            presets={rangePresets}
            disabledDate={disabledDate}
            onChange={onRangeChange}
            onOpenChange={onOpenChange}
          />
        </ConfigProvider>
      </Col>
      {amount && (
        <Col span={12}>
          <Card
            title={
              <div className={style.title}>
                <span className={style['decoration-line']}></span>认证总量：
                <span className={style.amount}>{amount.total}</span>
              </div>
            }
          >
            <AmountChart chartData={amount} />
          </Card>
        </Col>
      )}

      {percentage && (
        <Col span={12}>
          <Card
            title={
              <div className={`${style.title} ${style['space-between']}`}>
                <div className={`${style['left-side']} ${style.success}`}>
                  <span className={style['decoration-square']}></span>
                  认证成功率：
                  <span className={style.percentage}>
                    {percentage.success}%
                  </span>
                </div>
                <div className={`${style['right-side']} ${style.fail}`}>
                  <span className={style['decoration-square']}></span>
                  认证失败率：
                  <span className={style.percentage}>{percentage.fail}%</span>
                </div>
              </div>
            }
          >
            <PercentageChart chartData={percentage} />
          </Card>
        </Col>
      )}
      <Col span={12}>
        <Card
          style={{ height: 457 }}
          title={
            <div className={style.title}>
              <span className={style['decoration-square']}></span>
              各证件类型认证量分布：
            </div>
          }
        >
          <div className={style['card-wrap']}>
            {distributionList &&
              distributionList.map((item: TCard, index: number) => (
                <div
                  className={`${style['card-content']} ${
                    style['card0' + (index + 1)]
                  }`}
                  key={index}
                >
                  <div className={`${style.count} font-primary-color`}>
                    {item.count}
                  </div>
                  <div className={style.description}>{item.description}</div>
                </div>
              ))}
          </div>
        </Card>
      </Col>
      {distribution && (
        <Col span={12}>
          <Card
            title={
              <div className={style.title}>
                <span className={style['decoration-square']}></span>
                各接入方式认证量分布：
              </div>
            }
          >
            <DistributionChart chartData={distribution} />
          </Card>
        </Col>
      )}
    </Row>
  )
}

export default AuthenticationData
