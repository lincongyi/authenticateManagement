import { request } from '@utils/request'
/**
 * 获取未读消息数
 */
const getUnReadNum = (): Promise<TResponse<{ unRead: number }>> => {
  return request.get('/access/getUnReadNum')
}

export type TMsg = {
  id: number
  title: string // 标题
  sendTime: string // 发送时间
  isRead: boolean // 是否已查阅
}

type TGetMsgList = {
  list: TMsg[]
} & TPagination

/**
 * 获取消息列表
 */
const getMsgList = (
  params: Omit<TPagination, 'total'>
): Promise<TResponse<TGetMsgList>> => {
  return request.post('/access/getMsgList', params)
}

export type TGetMsgDetail = {
  content: string // 消息主要内容
  type: TApplyKey
} & TMsg

/**
 * 获取消息详情
 */
const getMsgDetail = (params: {
  id: number
}): Promise<TResponse<TGetMsgDetail>> => {
  return request.post('/access/getMsgDetail', params)
}

export { getUnReadNum, getMsgList, getMsgDetail }
