import axios from 'axios'
import { message } from 'antd'
import { loadEnv } from '@utils/index'
const { MODE, VITE_AUTH_BASE_URL } = loadEnv()
const request = axios.create({
  baseURL: MODE === 'development' ? '/api' : VITE_AUTH_BASE_URL,
  timeout: 5000,
})

// 添加请求拦截器
request.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) config.headers!.token = `${token}`
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 添加响应拦截器
request.interceptors.response.use(
  (response) => {
    const { retCode } = response.data
    if (!retCode) return response.data
    else {
      const { retMessage } = response.data
      message.warning({
        content: retMessage,
        onClose: () => {
          const redirect = window.location.hash.substring(1)
          if (retCode === 40512) { window.location.href = `#/login?redirect=${redirect}` }
        },
      })
      return Promise.reject(retMessage)
    }
  },
  (error) => {
    const { retMessage = '网络错误' } = error.response.data
    message.warning(retMessage)
    return Promise.reject(error)
  }
)

export { request }
