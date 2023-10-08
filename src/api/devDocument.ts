import { request } from '@utils/request'
import { DataNode } from 'antd/es/tree'

export interface TDirectory extends DataNode {
  id: number
  enabled: boolean
  leafDirectory?: TDirectory[]
  name: string
  parentId: number
  sort: number
  type: string
  icon?: JSX.Element
}

export type TGetDirectoryResponse = {
  component: 'DEV_FILE_LIST' // 开发文档字段标识
  directoryList: TDirectory[]
  capabilityId: number
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
  capabilityId: number // 能力id
  directoryId: number // 目录id
  name: string // 标题
  content: string // 内容
}

/**
 * 文档搜索
 */
const devfileSearch = (params: {
  capabilityId: number | undefined // 能力id
  searchStr: string // 搜索内容
}): Promise<TResponse<TDevfileSearchResponse[]>> => {
  return request.post('/access/devfileSearch', params)
}

export { getDirectory, queryDocument, devfileSearch }
