import { request } from '@utils/request'

/**
 * 登录
 */
const login = (params: object): Promise<TResponse> => {
  return request.post('/login', params)
}

export { login }
