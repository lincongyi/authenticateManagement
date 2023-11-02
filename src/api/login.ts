import { request } from '@utils/request'

export type TLoginParams = {
  accountNumber?: string
  password?: string
  systemType: 'user'
  loginType: 'password' | 'qrCode'
  certToken?: string
}

export type TLoginResponse = {
  token: string
  accountNumber: string // 用户名
  userId: string
  idNum: string // 证件号码
  companyName: string // 单位名称
}

/**
 * 登录
 */
const login = (params: TLoginParams): Promise<TResponse<TLoginResponse>> => {
  return request.post('/login', params)
}

export { login }
