import dayjs from 'dayjs'
import type { Dayjs } from 'dayjs'
import 'dayjs/locale/zh-cn'
import type { RangePickerProps } from 'antd/es/date-picker'
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

const dateFormat = 'YYYY-MM-DD'

export { rangePresets, disabledDate, dateFormat }
