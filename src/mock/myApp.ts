import { request } from '@utils/request'
import Mock from 'mockjs'
const baseUrl = 'https://mock.presstime.cn/mock/64424800fd89695a4d49ffa7'

const mockData = Mock.mock({
  ret: true,
  retCode: 0,
  retMessage: '获取参数成功',
  data: {
    total: '@integer( 0, 10 )',
    test: '@integer( 0, 10 )',
    production: '@integer( 0, 10 )'
  }
})

/**
 * 获取我的应用数
 */
const getAppCount = (): Promise<TResponse> => {
  return request.post(`${baseUrl}/user/getAppCount`)
}

/**
 * 获取我的应用列表
 */
const getMyAppList = (): Promise<TResponse> => {
  return request.post(`${baseUrl}/user/getMyAppList`)
}

export { mockData, getAppCount, getMyAppList }
