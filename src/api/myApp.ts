import { request } from '@utils/request'
import type { TAppCount, TDataType } from '@pages/MyApps/Index/index.d'
import type { TFormItem } from './ability'

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
 * 获取我的应用列表
 */
const getAppList = (
  params: TGetAppListParams
): Promise<TResponse<TGetAppListResponse>> => {
  return request.post('/access/getAppList', params)
}

export type TAppParams = {
  clientId: string
  appName: string // 应用名称
  appType: string // 应用类型
  managerEmail: string | undefined
  managerPhone: string | undefined
  projectManager: string | undefined
  remark: string // 应用描述
  sysInternet: string // 所属网域
  sysLevel: string // 所属级别
  undertakeCompany: string
}

/**
 * 添加应用
 */
const addApp = (params: Omit<TAppParams, 'clientId'>): Promise<TResponse> => {
  return request.post('/access/addApp', params)
}

export type TGetAppInfoResponse = {
  state: TDataType['state']
  appEnv: TEnv
  createTime: string
  clientId: string
  clientSecret?: string
  companyName: string // 所属单位
  contractor: string // 单位经办人
  contractorPhone: string // 经办人手机号
  contractorEmail: string // 经办人联系邮箱
  undertakeCompany: string // 承建单位
  projectManager: string // 项目负责人
  managerPhone: string // 负责人联系电话
  managerEmail: string // 负责人联系邮箱
} & TAppParams

export type TClientId = {
  sit: string // 测试环境
  prod?: string // 正式环境
}

/**
 * 根据appId获取clientId
 */
const getClientId = (params: {
  id: string
}): Promise<TResponse<{ clientId: TClientId }>> => {
  return request.post('/access/getClientId', params)
}

/**
 * 根据clientId获取appId
 */
const getAppId = (params: {
  id: string
}): Promise<TResponse<{ appId: string }>> => {
  return request.post('/access/getAppId', params)
}

/**
 * 根据clientId获取应用详情
 */
const getAppInfo = (params: {
  id: string // clientId
}): Promise<TResponse<TGetAppInfoResponse>> => {
  return request.post('/access/getAppInfo', params)
}

/**
 * 编辑应用
 */
const updateApp = (params: TAppParams): Promise<TResponse> => {
  return request.post('/access/updateApp', params)
}

type TFormList = {
  form: TFormItem[]
  defaultFormList?: TFormItem[]
  formName: string
  formId: number
}

export type TGetAppInfoByEnv = {
  capabilityName: string
  capabilityId: number
  clientSecret: string //
  path: string // 能力访问路径
  addTime: string // 接入时间
  updateTime: string // 配置更新时间
  state: 1 | 2 | 3 | 4 | 5 | 6 | 7 // 1-添加基础能力；2-等待审批；3-上传盖章申请表；4-等待审批；5-申请接入正式环境；6-等待审批；7-正式环境接入能力
  capabilityExpireTime: string // 有效期止
  applyState: boolean // true-未申请延期；false-已申请延期
  form: {
    formList: TFormList[]
  }
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

/**
 * 申请增加用量
 */
const applyDateNum = (params: {
  apiId: number
  clientId: string
  num: number
}): Promise<TResponse> => {
  return request.post('/access/applyDateNum', params)
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

export type TApplyExtensionInfoResponse = {
  applyTime: string // 提交申请延期时间
  expireTime: string // 有效期止
  newExpireTime: string // 延长有效期至
  type: 0 | 1 // 是否延长有效期：0-否；1-是
  describe: string // 应用描述
}

/**
 * 获取申请延期信息
 */
const applyExtensionInfo = (params: {
  capabilityId: number
  clientId: string
}): Promise<TResponse<TApplyExtensionInfoResponse>> => {
  return request.post('/access/applyExtensionInfo', params)
}

type TGetApiConfigResponse = {
  errorNum: number // 报错次数预警阈值
  proportion: number // 调用量预警阈值
  timeoutNum: number // 调用超时预警阈值
}

/**
 * 获取预警设置
 */
const getApiConfig = (params: {
  apiId: number
  clientId: string
}): Promise<TResponse<TGetApiConfigResponse>> => {
  return request.post('/access/getApiConfig', params)
}

type TApiConfigParams = {
  apiId: number // 能力id
  clientId: string // 应用id
} & TGetApiConfigResponse

/**
 * 预警设置
 */
const apiConfig = (params: TApiConfigParams): Promise<TResponse> => {
  return request.post('/access/apiConfig', params)
}

type TGetCallDataParams = {
  capabilityId: number
  clientId: string
  startTime: string
  endTime: string
}

export type TGetCallDataResponse = {
  dateList: string[]
  numList: number[]
  total: number
}

/**
 * 获取能力调用数据
 */
const getCallData = (
  params: TGetCallDataParams
): Promise<TResponse<TGetCallDataResponse>> => {
  return request.post('/access/getCallData', params)
}

export type TGetApiDataResponse = {
  id: number
  name: string // 接口名称
  path: string // 接口访问路径
  concurrency: number // 每秒并发数（正式环境）
  dateNum: number // 日用量限额（测试环境）
  reqTotal: number // 请求总次数
  errorNum: number // 请求失败次数
  directoryId: number // 接口对应开发文档的目录id
}

/**
 * 获取能力接口数据
 */
const getApiData = (params: {
  capabilityId: number
  clientId: string
}): Promise<TResponse<TGetApiDataResponse>> => {
  return request.post('/access/getApiData', params)
}

export type TUploadApplyFileParams = {
  applyFile: string // 申请表地址
  applyFileName: string // 申请表名字
  applyLetter: string // 申请函地址
  applyLetterName: string // 申请函名字
  capabilityId: number
  clientId: string
}

/**
 * 提交申请表
 */
const uploadApplyFile = (
  params: TUploadApplyFileParams
): Promise<TResponse> => {
  return request.post('/access/uploadApplyFile', params)
}

export {
  getAppCount,
  getMyAppList,
  getAppList,
  addApp,
  getClientId,
  getAppId,
  getAppInfo,
  updateApp,
  getAppInfoByEnv,
  applyStartApp,
  applyStopApp,
  applyDateNum,
  applyExtension,
  applyExtensionInfo,
  getApiConfig,
  apiConfig,
  getCallData,
  getApiData,
  uploadApplyFile
}
