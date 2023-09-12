import React from 'react'
import ThemeStore from './theme.store'
import RegisterStore from './register.store'
import AccessFormStore from './accessForm.store'
import ApplyCountStore from './applyCount.store'
import DictionaryStore from './dictionary.store'

const RootStore = React.createContext({
  registerStore: RegisterStore(),
  themeStore: ThemeStore(),
  accessFormStore: AccessFormStore(),
  applyCountStore: ApplyCountStore(),
  dictionaryStore: DictionaryStore()
})

const useStore = () => React.useContext(RootStore)

export { RootStore, useStore }
