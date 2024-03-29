import React from 'react'
import ThemeStore from './theme.store'
import RegisterStore from './register.store'
import AccessFormStore from './accessForm.store'
import ApplyCountStore from './applyCount.store'
import DictionaryStore from './dictionary.store'
import MyAppStore from './myApp.store'
import unreadCount from './unread.store'

const RootStore = React.createContext({
  registerStore: RegisterStore(),
  themeStore: ThemeStore(),
  accessFormStore: AccessFormStore(),
  applyCountStore: ApplyCountStore(),
  dictionaryStore: DictionaryStore(),
  myAppStore: MyAppStore(),
  unreadCountStore: unreadCount()
})

const useStore = () => React.useContext(RootStore)

export { RootStore, useStore }
