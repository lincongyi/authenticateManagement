/* eslint-disable no-unused-vars */
type TState = {
  state: -1 | 0 | 1 | 2 | 3 // 申请状态：0-审批通过；1-审批中；2-审批不通过；3-撤回
  count: number
  badgeCount: number
}

interface Option {
  label: string
  value: string
  children?: Option[]
}

type TDictValue = {
  key: string
  value: string
}

type TDictList = {
  dictName: string
  dictValue: TDictValue[]
}

type TSysUser = {
  isPassUser: boolean // 是否作为当前节点通过的负责人
  completeTime: string // 完成时间
  passState: 0 | 1 | 2 | 3 // 申请状态：0-审批通过；1-审批中；2-审批不通过；3-撤回
  sysRole: {
    id: number
    name: string // 用户名
  }
}

// 申请类型
type applicationType =
  | 'ACCESS_REGISTER' // 接入账号申请
  | 'UPDATE_COMPANY_INFO' // 单位信息修改
  | 'ACCESS_APPLICATION' // 接入应用申请

type TApplyDetail = {
  id: string
  processInstanceId: string // 审批单号
  key: applicationType
  state: 0 | 1 | 2 | 3 // 申请状态：0-审批通过；1-审批中；2-审批不通过；3-撤回
  count: number
  unifyName: string // 应用/服务名称
  addTime: string // 申请时间
  modTime: string // 审批时间
  completeTime: string // 审批完成时间
  starter: string // 申请人
  isNoticeUser: boolean // 是否被查看过
  info: {
    before: TCompanyInfo
    after: TCompanyInfo
  } | null
  nodes: {
    name: string // 审批进度节点name
    userCount: number // 当前节点人数
    isPass: 0 | 1 | 2 | 3 // 当前节点状态：0-审批通过；1-审批中；2-审批不通过；3-撤回
    sysUsers: TSysUser[]
    isMulti: 0 | 1 // 0-或签节点；1-会签节点
  }[]
  timeline?: {
    color: string
    children: string
  }[]
  processName: string // 审批单类型
  urging: 0 | 1 // 0-未催办；1-已催办
}

type IdentityTesTApplyDetail = {
  key: string
  applicationName: string
  method: string
  clientId: string
  status: string | number
  date: string
}

type IdentityFormalDataType = {
  key: string
  applicationName: string
  method: string
  clientId: string
  status: string | number
  date: string
}

type IdentityUpdateDataType = {
  key: string
  applicationName: string
  method: string
  clientId: string
  status: string | number
  date: string
}

type OthersUpdateDataType = {
  key: string
  companyName: string
  name: string
  phone: string
  status: string | number
  date: string
}

type TApprovalItem = {
  status: number
  label: string
  type: 'success' | 'info' | 'warning' | 'error'
}
