import React, { useContext } from 'react'
import style from './index.module.scss'
import { Divider, Space, Button } from 'antd'
import { useStore } from '@stores/index'
import accountSettingScanStep01 from '@/assets/accountSetting-scan-step-01.png'
import accountSettingScanStep02 from '@/assets/accountSetting-scan-step-02.png'
import accountSettingScanStep03 from '@/assets/accountSetting-scan-step-03.png'
import accountSettingScanArrow from '@/assets/accountSetting-scan-arrow.png'
import ScanQrcode from '@components/ScanQrcode'
import { settingContext } from '@pages/MyAccount/AccountSettings'

const Scan = () => {
  const context = useContext(settingContext)

  const { themeStore } = useStore()
  /**
   * 流程步骤
   */
  const setpList = [
    { scanIcon: accountSettingScanStep01, scanTips: '手机扫描二维码' },
    { scanIcon: accountSettingScanStep02, scanTips: '唤起手机人脸扫描' },
    {
      scanIcon: accountSettingScanStep03,
      scanTips: '人脸认证通过自动进入下一步'
    }
  ]

  return (
    <>
      <div className={style['scan-content']}>
        <div className={`${style.title} font-primary-color`}>请扫描二维码</div>
        <ScanQrcode callback={context?.onNext as Function} />
        <Divider dashed />
        <div className={`${style.subtitle} font-primary-color`}>
          人脸认证方式如下所示：
        </div>
        <div className={style['scan-flow']}>
          {setpList.map((item, index) => (
            <React.Fragment key={index}>
              <div className={style['step-item']}>
                <img className={style['step-icon']} src={item.scanIcon} />
                <div
                  className={`${style['step-tips']} font-primary-color`}
                  style={{
                    backgroundColor: `${
                      themeStore.mainTheme === 'light'
                        ? '#edf2fc'
                        : 'transparent'
                    }`
                  }}
                >
                  {item.scanTips}
                </div>
              </div>
              {index !== setpList.length - 1 && (
                <img
                  className={style['scan-arrow']}
                  src={accountSettingScanArrow}
                />
              )}
            </React.Fragment>
          ))}
        </div>
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
