import { TAppCount, TDataType } from '@pages/MyApps/Index/index.d'
import { request } from '@utils/request'

/**
 * 获取应用数量
 */
const getAppCount = (): Promise<TResponse<TAppCount>> => {
  return request.get('/access/getAppCount')
}

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
  appEnv?: 'sit' | 'prod'
  appName?: string
  appType?: string
  startTime?: string
  endTime?: string
  state?: TDataType['state']
}

type TGetAppListResponse = {
  list: TDataType[]
  pageNum: number
  pageSize: number
  total: number
}

/**
 * 获取我的应用列表（我的应用）
 */
const getAppList = (
  params: TGetAppListParams
): Promise<TResponse<TGetAppListResponse>> => {
  return request.post('/access/getAppList', params)
}

export type TAppParams = {
  appName: string
  appType: string
  managerEmail: string | undefined
  managerPhone: string | undefined
  projectManager: string | undefined
  remark: string
  sysInternet: string
  sysLevel: string
  undertakeCompany: string
}

/**
 * 添加应用
 */
const addApp = (params: TAppParams): Promise<TResponse> => {
  return request.post('/access/addApp', params)
}

export type TGetAppInfoResponse = {
  state: TDataType['state']
  appEnv: 'sit' | 'prod'
  createTime: string
  clientId: string
  clientSecret?: string
} & TAppParams

/**
 * 根据id获取应用详情
 */
const getAppInfo = (params: {
  id: string
}): Promise<TResponse<TGetAppInfoResponse>> => {
  return request.post('/access/getAppInfo', params)
}

/**
 * 编辑应用
 */
const updateApp = (params: TAppParams): Promise<TResponse> => {
  return request.post('/access/updateApp', params)
}

export type TGetAppInfoByEnv = {
  capabilityName: string
  capabilityId: number
  clientSecret: string //
  path: string // 能力访问路径
  addTime: string // 接入时间
  updateTime: string // 配置更新时间
  state: 0 | 1 // 0-未接入该能力；1-已接入该能力
}

/**
 * 获取能力信息
 */
const getAppInfoByEnv = (params: {
  appId: string
  appEnv: TGetAppInfoResponse['appEnv']
}): Promise<TResponse<TGetAppInfoByEnv[]>> => {
  return request.post('/access/getAppInfoByEnv', params)
}

export {
  getAppCount,
  getMyAppList,
  getAppList,
  addApp,
  getAppInfo,
  updateApp,
  getAppInfoByEnv
}
