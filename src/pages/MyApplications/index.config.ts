import { Option } from './index.d'

const dictList = [
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

/**
 * 申请类型枚举
 */
const options: Option[] = [
  {
    label: '单位相关申请',
    value: '1',
    children: [
      {
        label: '单位信息变更申请',
        value: '1-1'
      },
      {
        label: '单位账号注册申请',
        value: '1-2'
      }
    ]
  },
  {
    label: '基础服务申请',
    value: '2',
    children: [
      {
        label: '基础服务接入申请（测试）',
        value: '2-1'
      },
      {
        label: '基础服务接入申请（正式）',
        value: '2-2'
      },
      {
        label: '基础服务参数更改申请（正式）',
        value: '2-3'
      }
    ]
  },
  {
    label: '应用申请',
    value: '3',
    children: [
      {
        label: '应用接入申请（测试）',
        value: '3-1'
      },
      {
        label: '应用接入申请（正式）',
        value: '3-2'
      },
      {
        label: '应用参数更改申请（正式）',
        value: '3-3'
      }
    ]
  }
]

export { options, dictList }
