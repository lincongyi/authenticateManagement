// 主题模块
import { makeAutoObservable } from 'mobx'

type TThemeStore = {
  mainTheme: 'light' | 'dark'
  setMainTheme: (theme: 'light' | 'dark') => 'light' | 'dark'
  antdThemeColor: string
  setAntdThemeColor: (color: string) => string
}

const ThemeStore = () => {
  return makeAutoObservable({
    mainTheme: 'light', // 全局主题样式 'light' | 'dark'

    setMainTheme (theme: 'light' | 'dark') {
      this.mainTheme = theme
      return this.mainTheme
    },

    antdThemeColor: '#1E55D1', // antd主题样式

    setAntdThemeColor (color: string) {
      this.antdThemeColor = color
      return this.antdThemeColor
    }
  } as TThemeStore)
}

export default ThemeStore
