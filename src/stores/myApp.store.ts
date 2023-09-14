// 身份认证能力表单功能模块
import { makeAutoObservable } from 'mobx'

const MyAppStore = () => {
  return makeAutoObservable({
    appId: '', // 应用id
    setAppId (id: string) {
      this.appId = id
    }
  })
}

export default MyAppStore
