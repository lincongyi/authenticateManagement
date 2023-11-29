import { request } from '@utils/request'
import type { UploadFile } from 'antd/es/upload'

export type TGetCapabilityListResponse = {
  id: number
  baseInfo: {
    iconPath: string // 基础能力示意图
    name: string // 基础能力名称
  }
  introduceInfo: {
    ableRemarkHtml: string // 能力介绍
    apiRemarkHtml: string // 接口介绍
  }
  upStatue: 0 | 1 | 2 | 3 // 0-未上架；1-上架；2-即将下架；3-下架
}

/**
 * 获取基础能力列表
 */
const getCapabilityList = (params: {
  type: 0 | 1 // 0-返回启用状态的基础能力；1-返回所有基础能力
}): Promise<TResponse<TGetCapabilityListResponse[]>> => {
  return request.post('/access/getCapabilityList', params)
}

export type TGetCapabilityResponse = {
  id: number
  iconPath: string // 基础能力示意图
  name: string // 基础能力名称
  remark: string // 基础能力简介
  ableRemarkHtml: string // 能力介绍
  apiRemarkHtml: string // 接口介绍
}

/**
 * 获取能力详情
 */
const getCapability = (params: {
  id: number // 基础能力id
}): Promise<TResponse<TGetCapabilityResponse>> => {
  return request.post('/access/getCapability', params)
}

export type TGetAccessListResponse = {
  appId: string
  appName: string
  accessType: boolean // 应用是否已经接入基础能力\
  appEnv: TEnv
}

/**
 * 获取应用列表
 */
const getAccessList = (params: {
  id: string // 基础能力id
}): Promise<TResponse<TGetAccessListResponse[]>> => {
  return request.post('/access/getAccessList', params)
}

/**
 * 表单项类型
 */
export type TFormItemType =
  | 'text'
  | 'textarea'
  | 'dateTime'
  | 'radio'
  | 'checkbox'
  | 'select'
  | 'selectMultiple'
  | 'switch'
  | 'imageUpload'
  | 'fileUpload'
  | 'privateKey'
  | 'table'

/**
 * 上传文件限制类型
 */
export type TRuleList =
  | 'doc'
  | 'docx'
  | 'xlsx'
  | 'ppt'
  | 'pptx'
  | 'pdf'
  | 'markdown'
  | 'avi'
  | 'mp4'
  | 'wmv'
  | 'mpeg4'
  | 'rm'
  | 'all'

export type TUploadFile = UploadFile & { file?: FormData }

export type TFormContent = {
  type: TFormItemType
  dataType: 'string' | 'number' // 数据类型
  cnName: string // 表单项cnName
  label: string // 表单项label
  field: string // 表单项key值
  required: boolean
  options?: { label: string; value: number | string }[]
  maxLength?: number // 字数限制
  placeholder: string
  switchText: string // 选中时or非选中时的内容
  fileSize: number // 支持图片文件大小(Mb)
  multiple: number // 支持上传图片数量
  labelValue?: string | string[] | undefined // 展示表单项value对应的label值
  value?: any // 表单默认值（编辑的时候有用）
  validateMessage: string
  ruleList: TRuleList[]
  tableOptions?: { id: number; key: string; options: TFormContent['options'] }[]
}

export type TFormTabledataSource = {
  label: string
  value: number
}

export type TFormItem = {
  cnName: string // 表单项label
  dataType: string // 数据类型
  type: TFormItemType // 表单类型
  field: string // 表单项key值
  label?: any[] // 用于渲染多选表单项的值
  labelValue?: string | UploadFile[] | TFormTabledataSource[] // 展示表单项value对应的label值
  value: any
}

export type TFormList = {
  formId: number
  formName: string
  formContent: string // JSON.stringify()表单内容TFormContent[]
  form?: TFormItem[]
  defaultFormContent?: string // JSON.stringify()表单内容，默认第一个表单才有
  defaultFormList?: TFormItem[]
}

export type TAddAppCapabilityFormParams = {
  appId: string
  capabilityId: number
  formList: TFormList[]
  type: 0 | 1 // 0-保存草稿；1-提交审核
  env: TEnv
}

/**
 * 添加能力配置表单信息
 */
const addAppCapabilityForm = (
  params: TAddAppCapabilityFormParams
): Promise<TResponse> => {
  return request.post('/access/addAppCapabilityForm', params)
}

/**
 * 获取应用能力配置表单
 */
const getAppCapabilityForm = (params: {
  appId: string
  capabilityId: number
  env: 'sit' | 'prod'
}): Promise<TResponse<TAddAppCapabilityFormParams>> => {
  return request.post('/access/getAppCapabilityForm', params)
}

/**
 * 编辑能力配置表单信息
 */
const editAppCapabilityForm = (
  params: TAddAppCapabilityFormParams
): Promise<TResponse> => {
  return request.post('/access/editAppCapabilityForm', params)
}

export {
  getCapabilityList,
  getCapability,
  getAccessList,
  addAppCapabilityForm,
  getAppCapabilityForm,
  editAppCapabilityForm
}
