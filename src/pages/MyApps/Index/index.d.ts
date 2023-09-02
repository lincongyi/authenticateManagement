import type { Dayjs } from 'dayjs'
export type TAppCount = {
  total: number
  prod: number // 正式环境
  sit: number // 测试环境
}

export type TDataType = {
  id: number
  appName: string // 应用名称
  appEnv: 0 | 1 // 接入环境：0-测试环境；1-正式环境
  appAbility: 0 // 接入基础能力：0-身份认证
  clientId: string // clientId
  expiredTime: string // 有效时间
  state: 0 | 1 | 2 | 3 | 4 // 状态：0-正常启用；1-即将过期；2-过期；3-停用；4-缺少授权文件
  addTime: string // 创建时间
}

export type TFormData = {
  appAbility: string
  appName: string
  dateRange: [Dayjs, Dayjs] | undefined
  expiredRange: [Dayjs, Dayjs] | undefined
  state: 0 | 1 | 2 | 3 | 4 // 状态：0-正常启用；1-即将过期；2-过期；3-停用；4-缺少授权文件
}
