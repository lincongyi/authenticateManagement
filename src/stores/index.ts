import React from 'react'
import ThemeStore from './theme.store'
import RegisterStore from './register.store'
import AccessFormStore from './accessForm.store'

const RootStore = React.createContext({
  registerStore: RegisterStore(),
  themeStore: ThemeStore(),
  accessFormStore: AccessFormStore()
})

const useStore = () => React.useContext(RootStore)

export { useStore }
