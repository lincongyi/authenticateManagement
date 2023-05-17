/* eslint-disable no-unused-vars */
type TBasicInfo = {
  appName: string // 应用名称
  type: string // 接入系统类型
  level: string // 系统所属级别
  serviceRange: string // 系统对外服务范围
  description: string // 使用场景描述
  company: string // 申请单位
  companyOperator: string // 单位经办人
  companyPhone: string // 经办人联系电话
  companyEmail: string // 经办人联系邮箱
  construction: string // 承建单位
  constructionOperator: string // 项目负责人
  constructionPhone: string // 负责人联系电话
  constructionEmail: string // 负责人联系邮箱
}

type TAbilityInfo = {
  basicAccess: string // 接入基础能力
  accountType: string // 接入账号类型
  period: string // 接入服务有效期
  authType: string // 认证类型
  authMode: string // 认证模式
  accessMethod: string // 接入方式
  androidId: string // 应用ID（Android）
  bundleId: string // Bundle
  appId: string // 小程序appid
  authResultUrl: string // 推送认证结果地址
}

type TConcurrency = {
  test: {
    secondQuota: string // 每秒并发限制
    period: string // 计算周期
    dayQuota: string // 每日限额
    monthQuota: string // 每月限额
    yearQuota: string // 每年限额
    totalQuota: string // 认证总次数限额
  }
  production: {
    secondQuota: string // 每秒并发限制
    period: string // 计算周期
    dayQuota: string // 每日限额
    monthQuota: string // 每月限额
    yearQuota: string // 每年限额
    totalQuota: string // 认证总次数限额
  }
}

type TUploadForm = {
  applicationForm1: string // 申请表
  applicationForm2: string // 申请函
}

type TAccessForm = {
  basicInfo: TBasicInfo // 基础信息
  abilityInfo: TAbilityInfo // 基础能力信息
  concurrency: TConcurrency // 并发配置
  uploadForm: TUploadForm // 上传申请表
}

type TValue = '0' | '1' | '2' | '3' | '4'
