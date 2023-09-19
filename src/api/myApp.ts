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
  appEnv?: TEnv
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
  appEnv: TEnv
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

export type TFormItem = {
  cnName: string // Form.Item label
  dataType: string // 数据类型
  value: string // Form.Item value
}

type TFormsList = {
  form: TFormItem[]
  formName: string
  sort: number
}

export type TGetAppInfoByEnv = {
  capabilityName: string
  capabilityId: number
  clientSecret: string //
  path: string // 能力访问路径
  addTime: string // 接入时间
  updateTime: string // 配置更新时间
  state: 0 | 1 // 0-未接入该能力；1-已接入该能力
  capabilityExpireTime: string // 有效期止
  applystate: boolean // true-未申请延期；false-已申请延期
  form: {
    formsList: TFormsList[]
  }
}

/**
 * 获取能力信息
 */
const getAppInfoByEnv = (params: {
  clientId: string
  appEnv: TGetAppInfoResponse['appEnv']
}): Promise<TResponse<TGetAppInfoByEnv[]>> => {
  return request.post('/access/getAppInfoByEnv', params)
}

/**
 * 申请启用
 */
const applyStartApp = (params: {
  appId: string
  describe: string
}): Promise<TResponse<TResponse>> => {
  return request.post('/access/applyStartApp', params)
}

/**
 * 申请停用
 */
const applyStopApp = (params: {
  appId: string
  describe: string
}): Promise<TResponse<TResponse>> => {
  return request.post('/access/applyStopApp', params)
}

export type TApplyExtensionParams = {
  clientId: string
  capabilityId: number
  env: TEnv
  type: 0 | 1 // 是否延长有效期：0-否；1-是
  describe: string // 应用描述
}

/**
 * 申请延期
 */
const applyExtension = (params: TApplyExtensionParams): Promise<TResponse> => {
  return request.post('/access/applyExtension', params)
}

type TApiConfigParams = {
  apiId: number // 能力id
  clientId: string // 应用id
  errorNum: number // 报错次数预警值
  proportion: number // 调用量预警值
  timeoutNum: number // 调用超时预警值
}

/**
 * 预警设置
 */
const apiConfig = (params: TApiConfigParams): Promise<TResponse> => {
  return request.post('/access/apiConfig', params)
}

export {
  getAppCount,
  getMyAppList,
  getAppList,
  addApp,
  getAppInfo,
  updateApp,
  getAppInfoByEnv,
  applyStartApp,
  applyStopApp,
  applyExtension,
  apiConfig
}
