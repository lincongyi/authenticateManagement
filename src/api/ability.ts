import { request } from '@utils/request'

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
const getCapabilityList = (): Promise<
  TResponse<TGetCapabilityListResponse[]>
> => {
  return request.post('/access/getCapabilityList')
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
  id: string // 基础能力id
}): Promise<TResponse<TGetCapabilityResponse>> => {
  return request.post('/access/getCapability', params)
}

export type TgetAccessListResponse = {
  clientId: string
  appName: string
  accessType: boolean // 应用是否已经接入基础能力
}

/**
 * 获取应用列表
 */
const getAccessList = (params: {
  id: string // 基础能力id
}): Promise<TResponse<TgetAccessListResponse[]>> => {
  return request.post('/access/getAccessList', params)
}

export { getCapabilityList, getCapability, getAccessList }