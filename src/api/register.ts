import { request } from '@utils/request'

/**
 * 注册申请
 */
const registerApply = (params: object): Promise<TResponse> => {
  return request.post('/registerApply', params)
}

/**
 * 重新提交注册申请
 */
const resubmitRegister = (params: object): Promise<TResponse> => {
  return request.post('/resubmitRegister', params)
}

/**
 * 催办任务
 */
const hastenProcess = (params: object): Promise<TResponse> => {
  return request.post('/hastenProcess', params)
}

export { registerApply, resubmitRegister, hastenProcess }
