import { request } from '@utils/request'
/**
 * 获取未读消息数
 */
const getUnReadNum = (): Promise<TResponse<{ unRead: number }>> => {
  return request.get('/access/getUnReadNum')
}

export { getUnReadNum }
