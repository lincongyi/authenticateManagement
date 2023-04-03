import { request } from '@utils/request'

/**
 * 获取当前公司信息
 */
const currentCompanyInfo = (): Promise<TResponse> => {
  return request.get('/account/currentCompanyInfo')
}

/**
 * 获取当前用户信息
 */
const currentUserInfo = (): Promise<TResponse> => {
  return request.get('/account/currentUserInfo')
}

/**
 * 更新管理员手机号
 */
const updateAdminPhoneNum = (params: object): Promise<TResponse> => {
  return request.post('/account/updateAdminPhoneNum', params)
}

/**
 * 更新管理员邮箱
 */
const updateAdminEmail = (params: object): Promise<TResponse> => {
  return request.post('/account/updateAdminEmail', params)
}

/**
 * 单位信息修改申请
 */
const applyUpdateCompanyInfo = (params: object): Promise<TResponse> => {
  return request.post('/account/applyUpdateCompanyInfo', params)
}

/**
 * 重新提交公司更新信息
 */
const resubmitCompany = (params: object): Promise<TResponse> => {
  return request.post('/account/resubmitCompany', params)
}

/**
 * 校验预留手机号or邮箱的图形验证码是否正确
 */
const retrievePassword = (params: object): Promise<TResponse> => {
  return request.post('/account/retrievePassword', params)
}

/**
 * 校验预留手机号or邮箱的图形验证码是否正确
 */
const currentResetPassword = (params: object): Promise<TResponse> => {
  return request.post('/account/currentResetPassword', params)
}

export {
  currentCompanyInfo,
  currentUserInfo,
  updateAdminPhoneNum,
  updateAdminEmail,
  applyUpdateCompanyInfo,
  resubmitCompany,
  retrievePassword,
  currentResetPassword,
}
