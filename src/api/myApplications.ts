import { request } from '@utils/request'

type TGetApplyCountParams = {
  startTime: string
  endTime: string
}

/**
 * 获取申请总数
 */
const getApplyCount = (
  params: TGetApplyCountParams
): Promise<TResponse<TState[]>> => {
  return request.post('/user/getApplyCount', params)
}

export type TGetApplyListParams = {
  instanceId?: string | undefined // 审批单号,
  keys?: (applicationType | undefined)[] | undefined // 申请类型
  unifyName?: string | undefined // 应用/服务名称
  processState: -1 | 0 | 1 | 2 | 3 // 审批状态
  startTime?: string | undefined // 开始日期
  endTime?: string | undefined // 结束日期
  pageNum: number
  pageSize: number
}

/**
 * 获取申请列表
 */
const getApplyList = (params: TGetApplyListParams): Promise<TResponse> => {
  return request.post('/user/getApplyList', params)
}

/**
 * 根据id获取申请详情
 */
const getApplyDetail = (params: {
  instanceId: string
}): Promise<TResponse<TApplyDetail>> => {
  return request.post('/user/getApplyDetail', params)
}

/**
 * 催办
 */
const handleUrging = (params: { instanceId: string }): Promise<TResponse> => {
  return request.post('/user/urging', params)
}

/**
 * 撤回
 */
const handleStopApply = (params: {
  instanceId: string
}): Promise<TResponse> => {
  return request.post('/user/stopApply', params)
}

export {
  getApplyCount,
  getApplyList,
  getApplyDetail,
  handleUrging,
  handleStopApply
}
