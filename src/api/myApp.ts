import { request } from '@utils/request'

/**
 * 获取我的应用列表（基础能力中心）
 */
const getMyAppList = (): Promise<TResponse> => {
  return request.post('/access/getMyAppList')
}

type TGetAppListParams = {
  pageNum: number
  pageSize: number
  total: number
  appAbility?: string
  appEnv?: string
  appName?: string
  appType?: string
  startTime?: string
  endTime?: string
  state?: number
}

/**
 * 获取我的应用列表（我的应用）
 */
const getAppList = (params: TGetAppListParams): Promise<TResponse> => {
  return request.post('/access/getAppList', params)
}

export { getMyAppList, getAppList }
