import React from 'react'
import 'reset-css'
import './App.scss'
import { HashRouter, Routes } from 'react-router-dom'
import { ConfigProvider, theme } from 'antd'
import { useStore } from './stores'
import { observer } from 'mobx-react-lite'
import { routes, renderRoute } from './router'

const App = () => {
  const { themeStore } = useStore()
  const colorPrimary = themeStore.antdThemeColor
  const isLightTheme = themeStore.mainTheme === 'light'

  const elements = renderRoute(routes)

  // const GetRoutes = () => useRoutes(routes) // react router v6 useRoutes hook

  return (
    <ConfigProvider
      theme={{
        token: { colorPrimary },
        algorithm: isLightTheme ? theme.defaultAlgorithm : theme.darkAlgorithm
      }}
    >
      <HashRouter>
        <Routes>{elements}</Routes>
        {/* <GetRoutes /> */}
      </HashRouter>
    </ConfigProvider>
  )
}

export default observer(App)
