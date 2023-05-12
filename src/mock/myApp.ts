import { request } from '@utils/request'
import Mock from 'mockjs'
const baseUrl = 'https://mock.presstime.cn/mock/64424800fd89695a4d49ffa7'

const mockData = Mock.mock({
  ret: true,
  retCode: 0,
  retMessage: '获取参数成功',
  data: {
    'pageNum|1-3': 1,
    pageSize: 10,
    'total|8-31': 31,
    'list|10': [
      {
        'id|+1': 100,
        appName: '@ctitle', // 应用名称
        'environment|0-1': 0, // 接入环境：0-测试环境；1-正式环境
        ability: '@csentence(5)', // 接入基础能力
        clientId: '@natural', // clientId
        expiredTime: '@datetime', // 有效时间
        'state|0-2': 0, // 状态：0-正常启用；1-已过期；2-即将过期；
        addTime: '@datetime' // 创建时间
      }
    ]
  }
})

/**
 * 获取我的应用列表
 */
const getMyAppList = (): Promise<TResponse> => {
  return request.post(`${baseUrl}/user/getMyAppList`)
}

export { mockData, getMyAppList }
