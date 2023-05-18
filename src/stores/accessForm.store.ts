// 身份认证能力表单功能模块
import { makeAutoObservable, toJS } from 'mobx'
import type { TDictionary } from '@api/index'

type TAccessFormStore = {
  accessMode: TDictionary | undefined // 接入方式
  accessSkill: TDictionary | undefined // 接入基础能力
  appState: TDictionary | undefined // 应用状态
  appType: TDictionary | undefined // 接入系统类型
  authMode: TDictionary | undefined // 认证模式
  authType: TDictionary | undefined // 认证类型
  encryptType: TDictionary | undefined // 鉴权方式
  licenseFileType: TDictionary | undefined // 授权文件
  networkType: TDictionary | undefined // 系统对外服务范围
  pushAsync: TDictionary | undefined // 结果推送类型
  systemlevel: TDictionary | undefined // 系统所属级别
}

const AccessFormStore = () => {
  return makeAutoObservable({
    /**
     * 数据字典
     */
    dictionary: undefined as TAccessFormStore | undefined,

    setDictionary (dictionary: TAccessFormStore) {
      this.dictionary = dictionary
    },

    getDictionaryItem (item: keyof TAccessFormStore) {
      if (!this.dictionary) return undefined
      return this.dictionary[item]?.dictList
    },

    /**
     * 生成select选择器的options内容
     */
    generateOptions (item: keyof TAccessFormStore) {
      const options = toJS(this.getDictionaryItem(item))
      if (!options) return undefined
      return [{ dictValue: -1, dictName: '全部' }, ...options]
    },

    current: {
      id: 0, // 应用id
      state: 0 // 0:默认状态；1-新增；2-查看；3-修改
    }
  })
}

export default AccessFormStore
