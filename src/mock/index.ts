import { request } from '@utils/request'
import Mock from 'mockjs'
const baseUrl = 'https://mock.presstime.cn/mock/64424800fd89695a4d49ffa7'

const mockData = Mock.mock({
  ret: true,
  retCode: 0,
  retMessage: '获取参数成功',
  data: {
    'news|5': [
      {
        id: '@increment( 10 )',
        message: '@cparagraph(1, 3)'
      }
    ]
  }
})

/**
 * 获取消息推送内容
 */
const getNews = (): Promise<TResponse> => {
  return request.post(`${baseUrl}/getNews`)
}

/**
 * 获取我的应用
 */
const getMyAppInfo = (params: TDateRange): Promise<TResponse> => {
  return request.post(`${baseUrl}/getMyAppInfo`, params)
}

/**
 * 获取我的基础服务
 */
const getService = (params: TDateRange): Promise<TResponse> => {
  return request.post(`${baseUrl}/getService`, params)
}

/**
 * 获取调用数量统计
 */
const getStatistics = (params: TDateRange): Promise<TResponse> => {
  return request.post(`${baseUrl}/getStatistics`, params)
}

/**
 * 获取申请类型
 */
const getdictionary = (params: {
  typeValues: string[]
}): Promise<TResponse> => {
  return request.post(`${baseUrl}/getdictionary`, params)
}

export {
  mockData,
  getNews,
  getMyAppInfo,
  getService,
  getStatistics,
  getdictionary
}
