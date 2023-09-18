import React, { useEffect, useState } from 'react'
import { QRCode, message } from 'antd'
import { useStore } from '@stores/index'
import { getQrcode } from '@api/index'
import { v4 as uuidv4 } from 'uuid'
import { loadEnv } from '@utils/index'
import { useUpdateEffect } from '@/hooks'

const { VITE_WEBSOCKET_URL } = loadEnv()

let ws: WebSocket
let wsTimer: NodeJS.Timer
let qrcodeTimer: NodeJS.Timer

const ScanQrcode = ({
  callback,
  size
}: {
  callback: Function
  size?: number
}) => {
  const { themeStore } = useStore()

  const [qrcodeColor, setQrcodeColor] = useState('#000')
  /**
   * 监听主题切换时，设置二维码颜色
   */
  useEffect(() => {
    const isLightTheme = themeStore.mainTheme === 'light'
    setQrcodeColor(isLightTheme ? '#000' : '#fff')
  }, [themeStore.mainTheme])

  const [messageApi, contextHolder] = message.useMessage()

  const connWebSocket = () => {
    ws = new WebSocket(VITE_WEBSOCKET_URL)
    ws.addEventListener('open', event => {
      const data = {
        flag: 'getCertCode',
        token: uuidv4(),
        cert_token: qrcode?.certToken
      }
      ws.send(JSON.stringify(data))

      wsTimer = setInterval(() => {
        ws.send('')
      }, 10 * 1000)
    })

    ws.addEventListener('message', ({ data }) => {
      if (JSON.parse(data).certRes === 0) {
        // 扫码认证结果的回调
        ws && ws.close()
        messageApi.success({
          content: '认证已通过！',
          duration: 2,
          onClose: () => {
            // eslint-disable-next-line n/no-callback-literal
            callback({ certToken: qrcode.certToken })
          }
        })
      } else {
        handleQrcode()
      }
    })
  }

  type TQrcode = {
    qrcodeContent: string
    certToken: string
    status: 'active' | 'expired' | 'loading'
  }

  const [qrcode, setQrcode] = useState<TQrcode>({
    qrcodeContent: '',
    certToken: '',
    status: 'loading'
  })

  /**
   * 获取二维码
   */
  const handleQrcode = async () => {
    const { data } = await getQrcode()
    const { qrcodeContent, certToken } = data
    setQrcode({
      qrcodeContent,
      certToken,
      status: 'active'
    })
  }

  useUpdateEffect(() => {
    connWebSocket()
  }, [qrcode])

  useEffect(() => {
    handleQrcode()
    return () => {
      clearInterval(wsTimer)
    }
  }, [])

  /**
   * 设置定时器，二维码过期时间
   */
  useEffect(() => {
    if (!qrcode.qrcodeContent) return
    clearTimeout(qrcodeTimer)
    qrcodeTimer = setTimeout(() => {
      setQrcode({ ...qrcode, status: 'expired' })
      clearInterval(wsTimer)
      ws && ws.close()
    }, 5 * 60 * 1000)
  }, [qrcode.qrcodeContent])
  return (
    <>
      {contextHolder}
      {qrcode.qrcodeContent && (
        <QRCode
          value={qrcode.qrcodeContent}
          status={qrcode.status}
          color={qrcodeColor}
          onRefresh={() => handleQrcode()}
          size={size}
        />
      )}
    </>
  )
}

export default ScanQrcode
