/* eslint-disable no-unused-vars */
type TMenuItem = {
  label: string | JSX.Element
  key: string
  icon?: React.FunctionComponentElement<{}> | string
  // children?: Partial<Pick<TMenuItem, 'icon'>> & Omit<TMenuItem, 'icon'>[]
  children?: TMenuItem[]
}

type TResponse<T = any> = {
  ret?: boolean
  detailMessage?: string
  retCode: number
  retMessage: string
  data?: T
}

type TUserInfo = {
  accountNumber: string
  companyName: string
}

type TProcess = {
  taskId?: string // 任务id
  state: -1 | 0 | 1 | 2 | 3 // -1.未知状态，重定向页面；0.审核通过；1.审核中；2.驳回；3.撤回
  processInstanceId: string // 流程id
  starter: string // 申请人
  comment: string // 提示信息
}

type TAreaItem = {
  code: string
  id: number
  level: string
  name: string
  parentCode: string
}

type TApplyRecord = {
  id: string
  addTime: string // 创建时间
  modTime: string // 审批时间
  completeTime: string | null // 审批完成时间
  state: 0 | 1 | 2 | 3 // 申请状态：0-审批通过；1-审批中；2-审批不通过；3-撤回
  tips: string // 提示
  info: {
    companyId: string
    companyName: string
    adminName: string
    adminPhone: string
    adminEmail: string
    certificateNum: string
    companyShortName: string
    areaCode: string
    areaList?: TAreaItem[]
    unifyName: string
    certificatePhoto: string
  }
  node:
    | []
    | {
        name: string // 审批进度节点name
        userCount: number // 当前节点人数
        isPass: TNodes['isPass'] // 当前节点状态：0-审批通过；1-审批中；2-审批不通过；3-撤回
      }[]
}

type TCompanyInfo = {
  accountNumber: string
  userId: string
  companyId?: string
  companyName: string // 单位名称
  accountNumber: string // 管理员账号
  certificateNum: string // 统一社会信用代码
  companyShortName: string // 单位简称
  adminPhone: string // 管理员手机号
  areaList?: TAreaItem[] // 接入地区
  areaCode: string
  adminName: string // 管理员姓名
  adminPhone: string // 管理员手机号
  adminEmail: string // 管理员邮箱
  certificatePhoto: string // 信用代码证书base64
  hasApply: boolean // 是否正在审批
  applyRecord?: [] | TApplyRecord[] // 修改记录
}

type TResetParams = {
  type: 0 | 1 | 2 // 预留方式：0-手机；1-邮箱；2-扫码
  key: string | undefined // 手机号 or 邮箱
  imgCaptcha: string | undefined // 图片验证码
  captcha: string | undefined // 邮箱或短信验证码
  password: string | undefined // 密码
  confirmPassword: string | undefined // 确认密码
  certToken?: string // 扫码认证成功获得的certToken
}

type TDateRange = {
  startTime: string
  endTime: string
}

type TPannel1Data = {
  join: number
  totalCount: number
  todayCount: number
}

type TPannel2Info = {
  title: string
  count: number
}

type TLineChart = {
  xAxis: (string | number)[]
  yAxis: (string | number)[]
}

type TEnv = 'sit' | 'prod'

interface URLSearchParams {
  size: number
}

type TPagination = {
  pageNum: number
  pageSize: number
  total: number
}
