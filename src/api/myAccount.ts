import { request } from '@utils/request'

/**
 * 获取当前公司信息
 */
const currentCompanyInfo = (): Promise<TResponse<TCompanyInfo>> => {
  return request.get('/access/currentCompanyInfo')
}

/**
 * 获取当前用户信息
 */
const currentUserInfo = (): Promise<TResponse> => {
  return request.get('/access/currentUserInfo')
}

/**
 * 单位信息修改申请
 */
const applyUpdateCompanyInfo = (params: object): Promise<TResponse> => {
  return request.post('/access/applyUpdateCompanyInfo', params)
}

/**
 * 校验预留手机号or邮箱的图形验证码是否正确
 */
const retrievePassword = (params: object): Promise<TResponse> => {
  return request.post('/access/retrievePassword', params)
}

/**
 * 重置密码
 */
const currentResetPassword = (params: object): Promise<TResponse> => {
  return request.post('/access/currentResetPassword', params)
}

export {
  currentCompanyInfo,
  currentUserInfo,
  applyUpdateCompanyInfo,
  retrievePassword,
  currentResetPassword
}
