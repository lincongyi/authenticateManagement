import { request } from '@utils/request'

/**
 * 获取申请总数
 */
const getApplyCount = (
  params = {
    startTime: '',
    endTime: ''
  }
): Promise<TResponse<TState[]>> => {
  return request.post('/access/getApplyCount', params)
}

export type TGetApplyListParams = {
  instanceId?: string | undefined // 审批单号,
  keys?: TApplyKey[] | undefined // 申请类型
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
const getApplyList = (
  params: TGetApplyListParams
): Promise<TResponse<{ list: TApplyDetail[] } & TPagination>> => {
  return request.post('/access/getApplyList', params)
}

/**
 * 根据id获取申请详情
 */
const getApplyDetail = (params: {
  instanceId: string
}): Promise<TResponse<TApplyDetail>> => {
  return request.post('/access/getApplyDetail', params)
}

/**
 * 催办
 */
const handleUrging = (params: { instanceId: string }): Promise<TResponse> => {
  return request.post('/access/urging', params)
}

/**
 * 撤回
 */
const handleStopApply = (params: {
  instanceId: string
}): Promise<TResponse> => {
  return request.post('/access/stopApply', params)
}

export {
  getApplyCount,
  getApplyList,
  getApplyDetail,
  handleUrging,
  handleStopApply
}
