import React, { useEffect, useState } from 'react'
import { Card, ConfigProvider, DatePicker } from 'antd'
import dayjs from 'dayjs'
import type { Dayjs } from 'dayjs'
import 'dayjs/locale/zh-cn'
import locale from 'antd/locale/zh_CN'
import LineChart from './LineChart'
import { rangePresets, disabledDate, dateFormat } from '@utils/date'
import { getStatistics } from '@mock/index'

const { RangePicker } = DatePicker

const Statistics = () => {
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
    if (!open) renderChart()
  }

  /**
   * 图表数据
   */
  const [chartData, setChartData] = useState<TLineChart>()

  /**
   * 渲染图表
   */
  const renderChart = async (startTime = '', endTime = '') => {
    const { data } = await getStatistics({
      startTime,
      endTime
    })
    setChartData(data)
  }

  useEffect(() => {
    renderChart()
  }, [])

  return (
    <Card
      title='调用数量统计'
      headStyle={{ borderBottom: 0 }}
      bordered={false}
      extra={
        <ConfigProvider locale={locale}>
          <RangePicker
            defaultValue={[
              dayjs(dateRange[0], dateFormat),
              dayjs(dateRange[1], dateFormat)
            ]}
            presets={rangePresets}
            disabledDate={disabledDate}
            onChange={onRangeChange}
            onOpenChange={onOpenChange}
          />
        </ConfigProvider>
      }
    >
      {chartData && <LineChart chartData={chartData} />}
    </Card>
  )
}

export default Statistics
