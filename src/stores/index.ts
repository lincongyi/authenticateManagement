import React from 'react'
import ThemeStore from './theme.store'
import RegisterStore from './register.store'

class RootStore {
  themeStore
  registerStore
  constructor () {
    this.registerStore = new RegisterStore()
    this.themeStore = new ThemeStore()
  }
}

const rootStore = new RootStore()
const context = React.createContext(rootStore)

const useStore = () => React.useContext(context)

export { useStore }
