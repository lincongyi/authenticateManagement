import Mock from 'mockjs'
import { request } from '@utils/request'

const baseUrl = 'https://mock.presstime.cn/mock/64424800fd89695a4d49ffa7'

export const mockData = Mock.mock({})

/**
 * 获取申请类型
 */
export const mockProcessKeyList = Mock.mock({
  ret: true,
  retCode: 0,
  retMessage: '获取参数成功',
  data: {
    processKeyList: {
      typeName: '流程类型',
      typeValue: 'processKeyList',
      dictList: [
        {
          dictName: '单位相关申请',
          dictValue: [
            {
              key: 'ACCESS_REGISTER',
              value: '接入账号申请'
            },
            {
              key: 'UPDATE_COMPANY_INFO',
              value: '单位信息修改'
            }
          ]
        },
        {
          dictName: '应用接入申请',
          dictValue: [
            {
              key: 'ACCESS_APPLICATION',
              value: '接入应用申请'
            }
          ]
        }
      ]
    }
  }
})

/**
 * 获取申请总数
 */
export const mockApplyCount = Mock.mock({
  ret: true,
  retCode: 0,
  retMessage: '获取申请总数成功',
  'data|5': [
    {
      'state|+1': -1, // 申请状态：0-审批通过；1-审批中；2-审批不通过；3-撤回
      'count|5-10': 1,
      'badgeCount|0-5': 1 // 角标count
    }
  ]
})

type TGetApplyCountParams = {
  startTime: string
  endTime: string
}

/**
 * 获取申请总数
 */
const getApplyCount = (
  params: TGetApplyCountParams
): Promise<TResponse<TState[]>> => {
  return request.post(`${baseUrl}/user/getApplyCount`, params)
}

/**
 * 获取申请列表
 */
export const mockApplyList = Mock.mock({
  ret: true,
  retCode: 0,
  retMessage: '获取申请列表成功',
  data: {
    'pageNum|1-3': 1,
    pageSize: 10,
    'total|0-31': 1,
    'list|10': [
      {
        'id|+1': 100,
        processInstanceId: '@guid', // 审批单号
        'key|1': [
          'ACCESS_REGISTER',
          'UPDATE_COMPANY_INFO',
          'ACCESS_APPLICATION'
        ], // 申请类型
        'state|0-3': 0, // 审批状态
        unifyName: '@ctitle', // 应用/服务名称
        addTime: '@datetime', // 申请时间
        modTime: '@datetime', // 审批时间
        completeTime: '@datetime', // 结束时间
        starter: '@name', // 申请人
        isNoticeUser: false, // 是否被查看过
        'nodes|1-3': [
          {
            'name|1': ['公安审批', '平台审批', '合作方审批', '出资方审批'], // 审批进度节点name
            'userCount|1-3': 1, // 当前节点人数
            'isPass|0-3': 0 // 当前节点状态：0-审批通过；1-审批中；2-审批不通过；3-撤回
          }
        ]
      }
    ]
  }
})

export type TGetApplyListParams = {
  instanceId?: string | undefined // 审批单号,
  keys?: (string | undefined)[] | undefined // 申请类型
  unifyName?: string | undefined // 应用/服务名称
  processState: -1 | 0 | 1 | 2 | 3 // 审批状态
  startTime?: string | undefined // 开始日期
  endTime?: string | undefined // 结束日期
} & TPagination

/**
 * 获取申请列表
 */
const getApplyList = (params: TGetApplyListParams): Promise<TResponse> => {
  return request.post(`${baseUrl}/user/getApplyList`, params)
}

export { getApplyCount, getApplyList }
