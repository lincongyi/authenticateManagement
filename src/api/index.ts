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
    params: query
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
  return request.post('/access/getProcessByKey', params)
}

/**
 * 获取二维码
 */
const loginQrCode = (): Promise<TResponse> => {
  return request.post('/loginQrCode')
}

export type TDictionary = {
  dictList: { dictValue: string | number; dictName: string }[]
  typeName: string
  typeValue: string
}

/**
 * 获取数据字典
 * @param {'typeValues': string[]} params 获取某个数据字典的字段名
 * @returns {key:TDictionary}
 */
const getdictionary = (
  params:
    | {
        typeValues: string[]
      }
    | {
        showType: 'appInfo'
      }
): Promise<TResponse> => {
  return request.post('/getdictionary', params)
}

/**
 * 获取密钥对
 */
const getSecretKey = (): Promise<
  TResponse<{ publicKey: string; privateKey: string }>
> => {
  return request.get('/getSecretKey')
}

export type TUploadResponse = {
  fileName: string
  url: string
}

/**
 * 上传文件
 */
const upload = (params: FormData): Promise<TResponse<TUploadResponse>> => {
  return request.post('/upload', params)
}

export {
  logout,
  getAreacodes,
  sendCaptcha,
  imgCaptcha,
  verifyCaptcha,
  getProcessByKey,
  loginQrCode,
  getdictionary,
  getSecretKey,
  upload
}
