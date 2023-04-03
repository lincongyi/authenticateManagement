// 主题模块
import { makeAutoObservable } from 'mobx'

class ThemeStore {
  constructor () {
    makeAutoObservable(this)
  }

  mainTheme: 'light' | 'dark' = 'light' // 全局主题样式

  setMainTheme = (theme: 'light' | 'dark') => {
    this.mainTheme = theme
    return this.mainTheme
  }

  antdThemeColor: string = '#1E55D1' // antd主题样式

  setAntdThemeColor = (color: string) => {
    this.antdThemeColor = color
    return this.antdThemeColor
  }
}

export default ThemeStore
