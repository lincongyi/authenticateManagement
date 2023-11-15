import React, { useEffect, useState } from 'react'
import { QRCode } from 'antd'
import { useStore } from '@stores/index'
import { loginQrCode } from '@api/index'

let qrcodeTimer: NodeJS.Timer

const ScanQrcode = ({
  callback,
  size,
  isLoop
}: {
  callback?: Function
  size?: number
  isLoop: boolean
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

  type TQrcode = {
    qrCodeContent: string
    certToken: string
    status: 'active' | 'expired' | 'loading'
  }

  const [qrcode, setQrcode] = useState<TQrcode>({
    qrCodeContent: '',
    certToken: '',
    status: 'loading'
  })

  /**
   * 获取二维码
   */
  const handleQrcode = async () => {
    const { data } = await loginQrCode()
    if (!data) return false
    const { qrCodeContent, certToken } = data
    setQrcode({
      qrCodeContent,
      certToken,
      status: 'active'
    })
    return certToken
  }

  let timer: NodeJS.Timer
  /**
   * 扫码登录，轮询登录接口，获取登录结果
   */
  const onLoop = (certToken: string) => {
    timer = setInterval(() => {
      callback && callback(certToken)
    }, 3000)
  }

  useEffect(() => {
    clearInterval(timer)
    if (isLoop) {
      ;(async () => {
        const certToken = await handleQrcode()
        onLoop(certToken)
      })()
    }
    return () => {
      clearInterval(timer)
    }
  }, [isLoop])

  /**
   * 设置定时器，二维码过期时间
   */
  useEffect(() => {
    if (!qrcode.qrCodeContent) return
    clearTimeout(qrcodeTimer)
    qrcodeTimer = setTimeout(() => {
      setQrcode({ ...qrcode, status: 'expired' })
    }, 5 * 60 * 1000)
  }, [qrcode.qrCodeContent])
  return (
    <>
      {qrcode.qrCodeContent && (
        <QRCode
          value={qrcode.qrCodeContent}
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
