import { request } from '@utils/request'
import { DataNode } from 'antd/es/tree'

export interface TDirectory extends DataNode {
  id: number
  enabled: boolean
  leafDirectory?: TDirectory[]
  name: string
  parentId: number
  sort: number
  type: 'Folder' | 'File' // 节点类型
  icon?: JSX.Element
}

export type TGetDirectoryResponse = {
  component: 'DEV_FILE_LIST' // 开发文档字段标识
  directoryList: TDirectory[]
  capabilityId: number
  projectId: number
  projectName: string
}

/**
 * 获取文档目录
 */
const getDirectory = (): Promise<TResponse<TGetDirectoryResponse[]>> => {
  return request.post('/access/getDirectory', {
    projectComponent: 'DEV_FILE_LIST'
  })
}

type TQueryDocumentParams = {
  id: number // 文档目录id
}

export type TAnnexUrl = {
  id: number
  name: string // 下载文件名
  url: string // 下载文件地址
}

type TQueryDocumentResponse = {
  annexUrl: TAnnexUrl[]
  htmlContent: string // 文档内容
  mdContent: string // 文档内容
}

/**
 * 获取文档详情
 */
const queryDocument = (
  params: TQueryDocumentParams
): Promise<TResponse<TQueryDocumentResponse>> => {
  return request.post('/access/queryDocument', params)
}

export type TDevfileSearchResponse = {
  projectId: number // 能力id
  directoryId: number // 目录id
  name: string // 标题
  content: string // 内容
}

/**
 * 文档搜索
 */
const devfileSearch = (params: {
  projectId: number | undefined // 项目id
  searchStr: string // 搜索内容
}): Promise<TResponse<TDevfileSearchResponse[]>> => {
  return request.post('/access/devfileSearch', params)
}

/**
 * 获取能力项目id
 */
const getProjectId = (params: {
  id: number // 能力id
}): Promise<TResponse> => {
  return request.post('/access/getProjectId', params)
}

export { getDirectory, queryDocument, devfileSearch, getProjectId }
