import React, { useState } from 'react'
import style from './index.module.scss'
import { Card, Col, Row, ConfigProvider, DatePicker } from 'antd'
import type { RangePickerProps } from 'antd/es/date-picker'
import dayjs from 'dayjs'
import type { Dayjs } from 'dayjs'
import 'dayjs/locale/zh-cn'
import locale from 'antd/locale/zh_CN'

const { RangePicker } = DatePicker

/**
 * 预设常用的日期范围
 */
const rangePresets: {
  label: string
  value: [Dayjs, Dayjs]
}[] = [
  { label: '近7日', value: [dayjs().add(-7, 'd'), dayjs()] },
  { label: '近14日', value: [dayjs().add(-14, 'd'), dayjs()] },
  { label: '近30日', value: [dayjs().add(-30, 'd'), dayjs()] }
]

/**
 * Can not select days after todays
 */
const disabledDate: RangePickerProps['disabledDate'] = current =>
  current && current >= dayjs().endOf('day')

type TInfo = {
  subtitle: string
  count: number
}
const Pannel2 = ({
  title,
  info,
  getData
}: {
  title: string
  info: TInfo[]
  getData: Function
}) => {
  const dateFormat = 'YYYY-MM-DD'
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
   * 关闭日历的回调
   */
  const onOpenChange = (open: boolean) => {
    if (!open) getData(dateRange)
  }
  return (
    <>
      <Card
        title={title}
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
        <Row gutter={20}>
          {info.map((item, index) => (
            <Col span={8} key={index}>
              <div
                className={`${style.colunm} ${style['colunm0' + (index + 1)]}`}
                key={index}
              >
                <div className={style.subtitle}>{item.subtitle}</div>
                <div
                  className={`${style.content} ${style['icon0' + (index + 1)]}`}
                >
                  {item.count}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Card>
    </>
  )
}

export default Pannel2
