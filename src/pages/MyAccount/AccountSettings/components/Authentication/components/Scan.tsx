import React, { useContext } from 'react'
import style from './index.module.scss'
import { Divider, Space, Button } from 'antd'
import accountSettingScanFlow from '@/assets/accountSetting-scan-flow.png'
import ScanQrcode from '@components/ScanQrcode'
import { settingContext } from '@pages/MyAccount/AccountSettings'
import { authResult } from '@api/myAccount'

const Scan = () => {
  const context = useContext(settingContext)

  /**
   * 轮询认证
   */
  const onNext = async (certToken: string) => {
    await authResult({ certToken })
    context?.onNext()
  }

  return (
    <>
      <div className={style['scan-content']}>
        <div className={`${style.title} font-primary-color`}>请扫描二维码</div>
        <ScanQrcode callback={onNext} isLoop={true} />
        <Divider dashed />
        <img src={accountSettingScanFlow} />
      </div>
      <div className='tc'>
        <Space>
          <Button onClick={() => context?.onPrev()}>上一步</Button>
        </Space>
      </div>
    </>
  )
}

export default Scan
