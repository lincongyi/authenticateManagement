import { request } from '@utils/request'

type TLoginResponse = {
  token: string
  accountNumber: string // 用户名
  userId: string
  idNum: string // 证件号码
  companyName: string // 单位名称
}

/**
 * 登录
 */
const login = (params: object): Promise<TResponse<TLoginResponse>> => {
  return request.post('/login', params)
}

export { login }
