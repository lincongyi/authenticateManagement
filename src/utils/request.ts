import axios, { AxiosRequestConfig } from 'axios'
import { message } from 'antd'
import { loadEnv } from '@utils/index'
const { MODE, VITE_AUTH_BASE_URL } = loadEnv()
const request = axios.create({
  baseURL: MODE === 'development' ? '/api' : VITE_AUTH_BASE_URL,
  timeout: 5000
})

/**
 * 获取请求的key值
 */
const getRequestKey = (config: AxiosRequestConfig) => {
  if (!config) return ''
  const { method, url } = config
  return [method, url].join('')
}

const requestMap = new Map()

/**
 * 添加请求标记
 */
const addRequest = (config: AxiosRequestConfig) => {
  const requestKey = getRequestKey(config)
  if (requestMap.has(requestKey)) return

  const CancelToken = axios.CancelToken
  config.cancelToken =
    config.cancelToken ||
    new CancelToken(cancel => {
      requestMap.set(requestKey, cancel)
    })
}

/**
 * 移除请求标记
 */
const removeRequest = (config: AxiosRequestConfig) => {
  const requestKey = getRequestKey(config)
  if (!requestMap.has(requestKey)) return

  const cancel = requestMap.get(requestKey)
  cancel()
  requestMap.delete(requestKey)
}

// 添加请求拦截器
request.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    config.headers!.token = `${token}`
    removeRequest(config)
    addRequest(config)
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 添加响应拦截器
request.interceptors.response.use(
  response => {
    removeRequest(response.config)
    const { retCode } = response.data
    if (!retCode) return response.data
    else {
      const { retMessage } = response.data
      message.warning({
        content: retMessage,
        onClose: () => {
          if (retCode === 40512) {
            const redirect = window.location.hash.substring(1)
            window.location.href = `#/login?redirect=${redirect}`
          }
        }
      })
      return Promise.reject(retMessage)
    }
  },
  error => {
    removeRequest(error.config)
    if (error.response) {
      const { retMessage = '网络错误' } = error.response.data
      message.warning(retMessage)
      return Promise.reject(error)
    } else {
      return Promise.reject(error.message)
    }
  }
)

export { request }
