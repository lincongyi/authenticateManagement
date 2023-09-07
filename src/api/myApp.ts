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
  appEnv?: string
  appName?: string
  appType?: string
  startTime?: string
  endTime?: string
  state?: TDataType['state']
}

type TTGetAppListResponse = {
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
): Promise<TResponse<TTGetAppListResponse>> => {
  return request.post('/access/getAppList', params)
}

export type TAddAppParams = {
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
const addApp = (params: TAddAppParams): Promise<TResponse> => {
  return request.post('/access/addApp', params)
}

export { getAppCount, getMyAppList, getAppList, addApp }
