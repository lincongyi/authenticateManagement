import type { Dayjs } from 'dayjs'
export type TAppCount = {
  total: number
  prod: number // 正式环境
  sit: number // 测试环境
}

export type TDataType = {
  appId: number
  accessCapability: string // 已接入能力id
  appEnv: 'sit' | 'prod' // 接入环境：sit-测试环境；prod-正式环境
  appName: string // 应用名称
  appType: string // 应用类型
  startTime: string // 创建时间
  endTime: string // 创建时间
  state: 0 | 1 | 2 | 3 // 状态：0-正常启用；1-即将过期；2-过期；3-停用；
}

export type TFormData = {
  appEnv: 'sit' | 'prod'
  appName: string
  capabilityId: number
  appType: string
  dateRange: [Dayjs, Dayjs] | undefined
  startTime?: string
  endTime?: string
  state: 0 | 1 | 2 | 3 // 状态：0-正常启用；1-即将过期；2-过期；3-停用；
  pageNum: number
  pageSize: number
  total: number
}
