// 身份认证能力表单功能模块
import { makeAutoObservable } from 'mobx'

const MyAppStore = () => {
  return makeAutoObservable({
    id: '', // 应用id
    setId (id: string) {
      this.id = id
    }
  })
}

export default MyAppStore
