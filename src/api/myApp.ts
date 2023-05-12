import { request } from '@utils/request'

/**
 * 获取我的应用列表
 */
const getMyAppList = (): Promise<TResponse> => {
  return request.get('/user/getMyAppList')
}

export { getMyAppList }
