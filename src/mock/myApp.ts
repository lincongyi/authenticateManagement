import { request } from '@utils/request'
import Mock from 'mockjs'
const baseUrl = 'https://mock.presstime.cn/mock/64424800fd89695a4d49ffa7'

const mockData = Mock.mock({
  ret: true,
  retCode: 0,
  retMessage: '获取参数成功',
  data: {
    list: [
      { description: '第二代居民身份证', count: '@integer(100, 500)' },
      { description: '港澳居民来往内地通行证', count: '@integer(100, 500)' },
      { description: '台湾居民来往大陆通行证', count: '@integer(100, 500)' },
      { description: '港澳台居民居住证', count: '@integer(100, 500)' },
      { description: '外国人永久居留身份证', count: '@integer(100, 500)' },
      { description: '普通护照', count: '@integer(100, 500)' }
    ]
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

/**
 * 获取认证总量
 */
const getAmount = ({
  startDate,
  endDate
}: {
  startDate: string
  endDate: string
}): Promise<TResponse<TLineChart & { total: number }>> => {
  return request.post(`${baseUrl}/user/getAmount`)
}

export type TPercentage = {
  success: number
  fail: number
  xAxis: (string | number)[]
  yAxis: (string | number)[]
}

/**
 * 获取认证成功率
 */
const getPercentage = ({
  startDate,
  endDate
}: {
  startDate: string
  endDate: string
}): Promise<TResponse<TPercentage>> => {
  return request.post(`${baseUrl}/user/getPercentage`)
}

/**
 * 获取各接入方式认证量分布
 */
const getDistribution = ({
  startDate,
  endDate
}: {
  startDate: string
  endDate: string
}): Promise<TResponse<TLineChart>> => {
  return request.post(`${baseUrl}/user/getDistribution`)
}

export type TCard = {
  description: string
  count: number
}

/**
 * 获取各证件类型认证量分布
 */
const getDistributionList = ({
  startDate,
  endDate
}: {
  startDate: string
  endDate: string
}): Promise<TResponse<{ list: TCard[] }>> => {
  return request.post(`${baseUrl}/user/getDistributionList`)
}

export {
  mockData,
  getAppCount,
  getMyAppList,
  getAmount,
  getPercentage,
  getDistribution,
  getDistributionList
}
