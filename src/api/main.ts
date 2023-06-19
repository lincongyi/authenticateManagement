import { request } from '@utils/request'

export type TAccessIndex = {
  dataUpdateTime: string // 数据更新时间
  greetings: string // 问候语
  isPerfect: boolean // 是否完善单位信息
  lastLoginTime: string // 最后登录
}

/**
 * 获取消息通知
 */
const getAccessIndex = (): Promise<TResponse<TAccessIndex>> => {
  return request.get('/user/accessIndex')
}

export { getAccessIndex }
