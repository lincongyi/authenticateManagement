// 身份认证能力表单功能模块
import { makeAutoObservable } from 'mobx'

const MyAppStore = () => {
  return makeAutoObservable({
    clientId: '', // 应用id
    setClientId (id: string) {
      this.clientId = id
    }
  })
}

export default MyAppStore
