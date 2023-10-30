// 申请总数
import { makeAutoObservable } from 'mobx'

type TUnreadStore = {
  unreadCount: number | undefined
  setUnreadCount: (count: number) => void
}

const unreadCountStore = () => {
  return makeAutoObservable({
    unreadCount: undefined,

    setUnreadCount (count) {
      this.unreadCount = count
    }
  } as TUnreadStore)
}

export default unreadCountStore
