import type { Dayjs } from 'dayjs'
export type TBasicInfo = {
  appName: string // 应用名称
  systemtype: string // 接入系统类型
  systemlevel: string // 系统所属级别
  systemRange: string // 系统对外服务范围
  description: string // 使用场景描述
  applyCompany: string // 申请单位
  applyCompanyHandleMan: string // 单位经办人
  applyCompanyHandleManPhone: string // 经办人联系电话
  applyCompanyHandleManEmail: string // 经办人联系邮箱
  undertakeCompany: string // 承建单位
  undertakeCompanyHandleMan: string // 项目负责人
  undertakeCompanyHandleManPhone: string // 负责人联系电话
  undertakeCompanyHandleManEmail: string // 负责人联系邮箱
}

export type TAbilityInfo = {
  basepower: string // 接入基础能力
  accountType: string // 接入账号类型
  serviceVaildEnd: Dayjs | string // 接入服务有效期
  authType: string // 认证类型
  authMode: string // 认证模式
  accessMode: string // 接入方式
  androidAppId: string // 应用ID（Android）
  bundleId: string // Bundle
  appId: string // 小程序appid
  authResultAddress: string // 推送认证结果地址
}

export type TConcurrency = {
  sit: {
    sitperSec: string // 每秒并发限制
    sitlimitTime: string // 计算周期
    sitperDay: string // 每日限额
    sitperMonth: string // 每月限额
    sitperAnnum: string // 每年限额
    sittotal: string // 认证总次数限额
  }
  prod: {
    prodperSec: string // 每秒并发限制
    prodlimitTime: string // 计算周期
    prodperDay: string // 每日限额
    prodperMonth: string // 每月限额
    prodperAnnum: string // 每年限额
    prodtotal: string // 认证总次数限额
  }
}

export type TUploadForm = {
  fileUrl: string // 申请表
  fileUrl2: string // 申请函
}

export type TAccessForm = {
  basicInfo: TBasicInfo // 基础信息
  abilityInfo: TAbilityInfo // 基础能力信息
  concurrency: TConcurrency // 并发配置
  uploadForm: TUploadForm // 上传申请表
}

export type TValue = '0' | '1' | '2' | '3' | '4'
