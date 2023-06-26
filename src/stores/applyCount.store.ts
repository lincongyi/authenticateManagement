// 申请总数
import { makeAutoObservable } from 'mobx'

type TApplyCountStore = {
  applyCount: TState[]
  getTotal: () => number
  setApplyCount: (info: TState[]) => TState[]
}

const applyCountStore = () => {
  return makeAutoObservable({
    applyCount: [],

    /**
     * 获取全部申请总数
     */
    getTotal () {
      return this.applyCount.length ? this.applyCount[0].badgeCount : 0
    },

    setApplyCount (info: TState[]) {
      this.applyCount = info
      return this.applyCount
    }
  } as TApplyCountStore)
}

export default applyCountStore
