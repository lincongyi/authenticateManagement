// 身份认证能力表单功能模块
import { makeAutoObservable } from 'mobx'
import { TEnvClientId } from '@/api/myApp'

const MyAppStore = () => {
  return makeAutoObservable({
    appId: '', // 应用id（唯一）

    setAppId (id: string) {
      this.appId = id
    },

    envClientId: {
      sit: '',
      prod: ''
    }, // 分测试环境和正式环境（不唯一）

    setEnvClientId (envClientId: TEnvClientId) {
      this.envClientId = { ...this.envClientId, ...envClientId }
    }
  })
}

export default MyAppStore
