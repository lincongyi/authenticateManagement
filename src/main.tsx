import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ConfigProvider } from 'antd'
import locale from 'antd/locale/zh_CN'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <ConfigProvider locale={locale}>
    <App />
  </ConfigProvider>
  // </React.StrictMode>
)
