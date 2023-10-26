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
  id: number
  isPassUser: boolean // 是否作为当前节点通过的负责人
  completeTime: string // 完成时间
  passState: 0 | 1 | 2 | 3 // 申请状态：0-审批通过；1-审批中；2-审批不通过；3-撤回
  nickName: string // 审批人员姓名
}

type TNodes = {
  name: string // 审批进度节点name
  userCount: number // 当前节点人数
  isPass: 0 | 1 | 2 | 3 // 当前节点状态：0-审批通过；1-审批中；2-审批不通过；3-撤回
  sysUsers: TSysUser[]
  isMulti: 0 | 1 // 0-或签节点；1-会签节点
}

type TApplyKey =
  | 'ACCESS_REGISTER' // 单位账号注册申请
  | 'UPDATE_COMPANY_INFO' // 单位账号变更详情
  | 'ACCESS_CAPABILITY' // 基础能力接入申请信息（测试账号）
  | 'PROD_CAPABILITY' // 基础能力接入申请信息（正式账号）
  | 'APPLY_FILE_CAPABILITY' // 盖章申请表/函
  | 'STOP_APPLICATION' // 停用应用信息
  | 'START_APPLICATION' // 启用应用信息
  | 'CAPABILITY_UPDATE' // 基础服务参数更改申请（测试）
  | 'PROD_CAPABILITY_UPDATE' // 基础服务参数更改申请（正式）
  | 'ADD_NUM_APPLICATION' // 增加用量申请信息
  | 'DELAY_CAPABILITY' // 基础服务延期申请信息

type TApplyDetail = {
  id: string
  processInstanceId: string // 审批单号
  state: 0 | 1 | 2 | 3 // 申请状态：0-审批通过；1-审批中；2-审批不通过；3-撤回
  count: number
  unifyName: string // 应用/服务名称
  addTime: string // 申请时间
  modTime: string // 审批时间
  completeTime: string // 审批完成时间
  starter: string // 申请人
  companyName: string // 申请单位
  processName: string // 审批单类型
  isNoticeUser: boolean // 是否被查看过
  info: any
  nodes: TNodes[]
  timeline?: {
    dot: JSX.Element
    color: string
    children: JSX.Element
  }[]
  key: TApplyKey // 审批单类型
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
