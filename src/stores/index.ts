import React from 'react'
import ThemeStore from './theme.store'
import RegisterStore from './register.store'

const RootStore = React.createContext({
  registerStore: RegisterStore(),
  themeStore: ThemeStore()
})

const useStore = () => React.useContext(RootStore)

export { useStore }
