type TMenuItem = {
  label: string
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
}

type TProcess = {
  taskId?: string // 任务id
  state: -1 | 0 | 1 | 3 // -1.未知状态，重定向页面；0.审核通过；1.审核中；3.驳回；
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

type TCompanyInfo = {
  companyName: string // 单位名称
  accountNumber: string // 管理员姓名
  certificateNum: string // 统一社会信用代码
  companyShortName: string // 单位简称
  adminPhone: string // 管理员手机号
  areaList: TAreaItem[] // 接入地区
  areaCode: string
  adminEmail: string // 管理员邮箱
  certificatePhoto: string // 信用代码证书
  userId?: string
  companyId?: string
}

type TResetParams = {
  type: 0 | 1 | 2 // 预留方式：0-手机；1-邮箱；2-扫码
  key: string // 手机号 or 邮箱
  imgCaptcha: string // 图片验证码
  captcha: string // 邮箱或短信验证码
  password: string // 密码
  confirmPassword: string // 确认密码
}
