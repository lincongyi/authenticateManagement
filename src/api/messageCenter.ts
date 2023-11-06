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

type MessageItem = {
  label: string
  children: string | number | JSX.Element
  type: 1 | 2 | 3 // 1-纯文本；2-申请状态；3-base64
}

export type TMessage = {
  title: string
  column: number
  items: MessageItem[]
}

export type TGetMsgDetail = {
  title: string
  sendTime: string
  content: string
  tips: string
  list: TMessage[]
}

/**
 * 获取消息详情
 */
const getMsgDetail = (params: {
  id: number
}): Promise<TResponse<TGetMsgDetail>> => {
  return request.post('/access/getMsgDetail', params)
}

export { getUnReadNum, getMsgList, getMsgDetail }
