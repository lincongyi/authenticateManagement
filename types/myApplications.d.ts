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

type TDataType = {
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
  urging: 0 | 1 // 0-未催办；1-已催办
}

type IdentityTestDataType = {
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
