// 身份认证能力表单功能模块
import { makeAutoObservable } from 'mobx'
import { TClientId } from '@/api/myApp'

const MyAppStore = () => {
  return makeAutoObservable({
    appId: '', // 应用id（唯一）

    setAppId (id: string) {
      this.appId = id
    },

    clientId: {
      sit: '',
      prod: ''
    }, // 分测试环境和正式环境（不唯一）

    setClientId (clientId: TClientId) {
      this.clientId = { ...this.clientId, ...clientId }
    }
  })
}

export default MyAppStore
