export type TState = {
  state: -1 | 0 | 1 | 2 | 3 // 申请状态：0-审批通过；1-审批中；2-审批不通过；3-撤回
  count: number
  badgeCount: number
}

export interface Option {
  label: string
  value: string
  children?: Option[]
}

export type TDictValue = {
  key: string
  value: string
}

export type TDictList = {
  dictName: string
  dictValue: TDictValue[]
}

export type TDataType = {
  id: number
  processInstanceId: string // 审批单号
  key: string // 申请类型
  state: 0 | 1 | 2 | 3 // 申请状态：0-审批通过；1-审批中；2-审批不通过；3-撤回
  count: number
  unifyName: string // 应用/服务名称
  addTime: string // 申请时间
  modTime: string // 审批时间
  completeTime: string // 审批完成时间
  starter: string // 申请人
  isNoticeUser: boolean // 是否被查看过
  nodes: {
    name: string // 审批进度节点name
    userCount: number // 当前节点人数
    isPass: 0 | 1 | 2 | 3 // 当前节点状态：0-审批通过；1-审批中；2-审批不通过；3-撤回
  }[]
  timeline?: {
    color: string
    children: string
  }[]
}

export type IdentityTestDataType = {
  key: string
  applicationName: string
  method: string
  clientId: string
  status: string | number
  date: string
}

export type IdentityFormalDataType = {
  key: string
  applicationName: string
  method: string
  clientId: string
  status: string | number
  date: string
}

export type IdentityUpdateDataType = {
  key: string
  applicationName: string
  method: string
  clientId: string
  status: string | number
  date: string
}

export type OthersUpdateDataType = {
  key: string
  companyName: string
  name: string
  phone: string
  status: string | number
  date: string
}

export type TApprovalItem = {
  status: number
  label: string
  type: 'success' | 'info' | 'warning' | 'error'
}
