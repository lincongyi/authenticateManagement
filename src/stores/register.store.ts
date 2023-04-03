// 注册模块
import { makeAutoObservable } from 'mobx'

class RegisterStore {
  constructor () {
    makeAutoObservable(this)
  }

  registerInfo: TProcess = {
    taskId: '',
    state: -1, // 0.审核通过；1.审核中；3.驳回；
    processInstanceId: '',
    starter: '',
    comment: '',
  }

  setRegisterInfo = (info: Partial<TProcess>) => {
    this.registerInfo = { ...this.registerInfo, ...info }
    return this.registerInfo
  }
}

export default RegisterStore
