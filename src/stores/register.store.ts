// 注册模块
import { makeAutoObservable } from 'mobx'

type TRegisterStore = {
  registerInfo: TProcess
  setRegisterInfo: (info: Partial<TProcess>) => TProcess
}

const RegisterStore = () => {
  return makeAutoObservable({
    registerInfo: {
      taskId: '',
      state: -1, // 0.审核通过；1.审核中；3.驳回；
      processInstanceId: '',
      starter: '',
      comment: ''
    },

    setRegisterInfo (info: Partial<TProcess>) {
      this.registerInfo = { ...this.registerInfo, ...info }
      return this.registerInfo
    }
  } as TRegisterStore)
}

export default RegisterStore
