// 身份认证能力表单功能模块
import { makeAutoObservable, toJS } from 'mobx'
import type { TDictionary } from '@api/index'
import { formatDictionary } from '@/utils'

type TProcessKeyList = {
  dictList: TDictList[]
  typeName: string
  typeValue: string
}

export type TDictionaryList = {
  appState: TDictionary | undefined // 应用状态
  appType: TDictionary | undefined // 接入系统类型
  networkType: TDictionary | undefined // 系统对外服务范围
  systemlevel: TDictionary | undefined // 系统所属级别
  appEnv: TDictionary | undefined // 接入环境
  accessMode: TDictionary | undefined // 接入方式
  accessSkill: TDictionary | undefined // 接入基础能力
  accountType: TDictionary | undefined // 接入账号类型
  authMode: TDictionary | undefined // 认证模式
  authType: TDictionary | undefined // 认证类型
  encryptType: TDictionary | undefined // 鉴权方式
  licenseFileType: TDictionary | undefined // 授权文件
  pushAsync: TDictionary | undefined // 结果推送类型
  processKeyList: TProcessKeyList | undefined // 申请类型
}

const DictionaryStore = () => {
  return makeAutoObservable({
    /**
     * 数据字典
     */
    dictionary: undefined as TDictionaryList | undefined,

    setDictionary (dictionary: TDictionaryList) {
      this.dictionary = dictionary
    },

    getDictionaryItem (item: keyof TDictionaryList) {
      if (!this.dictionary) return undefined
      return this.dictionary[item]?.dictList
    },

    /**
     * 生成select选择器的options内容
     */
    generateOptions (item: Exclude<keyof TDictionaryList, 'processKeyList'>) {
      const options = toJS(this.getDictionaryItem(item))
      if (!options) return undefined
      return [{ dictValue: -1, dictName: '全部' }, ...options]
    },

    /**
     * 扁平化处理processKeyList
     */
    flattenProcessKeyList () {
      if (!this.getDictionaryItem('processKeyList')) return undefined
      const processKeyList = formatDictionary(
        this.getDictionaryItem('processKeyList') as TDictList[]
      )
      return processKeyList.reduce(
        (prev: Option[], next: Option) => [...prev, ...next.children!],
        []
      )
    },

    processKeyListMap: {
      ACCESS_REGISTER: '单位账号注册申请',
      UPDATE_COMPANY_INFO: '变更详情',
      ACCESS_CAPABILITY: '基础能力接入申请信息（测试账号）',
      PROD_CAPABILITY: '基础能力接入申请信息（正式账号）',
      APPLY_FILE_CAPABILITY: '盖章申请表/函',
      STOP_APPLICATION: '停用应用信息',
      START_APPLICATION: '启用应用信息',
      CAPABILITY_UPDATE: '基础服务参数更改申请（测试）',
      PROD_CAPABILITY_UPDATE: '基础服务参数更改申请（正式）',
      ADD_NUM_APPLICATION: '增加用量申请信息',
      DELAY_CAPABILITY: '基础服务延期申请信息'
    }
  })
}

export default DictionaryStore
