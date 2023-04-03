import { request } from '@utils/request'

/**
 * 退出登录
 */
const logout = (): Promise<TResponse> => {
  return request.post('/logout')
}

/**
 * 获取接入地区
 */
const getAreacodes = (params: object): Promise<TResponse> => {
  return request.post('/getareacodes', params)
}

/**
 * 获取（短信、邮箱）验证码
 */
const sendCaptcha = (params: object): Promise<TResponse> => {
  return request.post('/captcha/sendCaptcha', params)
}

/**
 * 获取图片验证码
 */
const imgCaptcha = (query: object): Promise<Blob> => {
  return request.get('/captcha/imgCaptcha', {
    responseType: 'blob',
    params: query,
  })
}

/**
 * 校验图片验证码
 */
const verifyCaptcha = (params: object): Promise<TResponse> => {
  return request.get('/captcha/verifyCaptcha', params)
}

/**
 * 获取当前任务
 */
const getProcessByKey = (params: object): Promise<TResponse> => {
  return request.post('/getProcessByKey', params)
}

export {
  logout,
  getAreacodes,
  sendCaptcha,
  imgCaptcha,
  verifyCaptcha,
  getProcessByKey,
}
