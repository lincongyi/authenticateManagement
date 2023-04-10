import React, { useEffect, useState } from 'react'
import { useStore } from '@stores/index'
import style from './index.module.scss'
import { QRCode, Divider, Space, Button, message } from 'antd'
import accountSettingScanStep01 from '@/assets/accountSetting-scan-step-01.png'
import accountSettingScanStep02 from '@/assets/accountSetting-scan-step-02.png'
import accountSettingScanStep03 from '@/assets/accountSetting-scan-step-03.png'
import accountSettingScanArrow from '@/assets/accountSetting-scan-arrow.png'

const Scan = ({ onNext, onPrev }: { onNext: Function; onPrev: Function }) => {
  const { themeStore } = useStore()

  const [qrcodeColor, setQrcodeColor] = useState('#000')
  /**
   * 监听主题切换时，设置二维码颜色
   */
  useEffect(() => {
    const isLightTheme = themeStore.mainTheme === 'light'
    setQrcodeColor(isLightTheme ? '#000' : '#fff')
  }, [themeStore.mainTheme])

  const flowList = [
    { scanIcon: accountSettingScanStep01, scanTips: '手机扫描二维码' },
    { scanIcon: accountSettingScanStep02, scanTips: '唤起手机人脸扫描' },
    {
      scanIcon: accountSettingScanStep03,
      scanTips: '人脸认证通过自动进入下一步'
    }
  ]

  /**
   * 禁用按钮
   */
  const [loading, setLoading] = useState(false)

  /**
   * 获取扫码认证结果
   */
  const getScanResult = () => {
    setLoading(true)
    const result = true
    if (result) {
      message.success({
        content: '认证已通过！即将进入下一步',
        duration: 2,
        onClose: () => {
          setLoading(false)
          onNext()
        }
      })
    }
  }

  return (
    <>
      <div className={style['scan-content']}>
        <div className={`${style.title} font-primary-color`}>请扫描二维码</div>
        <QRCode value='https://ant.design/' color={qrcodeColor} />
        <Divider dashed />
        <div className={`${style.subtitle} font-primary-color`}>
          人脸认证方式如下所示：
        </div>
        <div className={style['scan-flow']}>
          {flowList.map((item, index) => (
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
              {index !== flowList.length - 1 && (
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
          <Button disabled={loading} onClick={() => onPrev()}>
            上一步
          </Button>
          <Button
            type='primary'
            loading={loading}
            onClick={() => getScanResult()}
          >
            下一步
          </Button>
        </Space>
      </div>
    </>
  )
}

export default Scan
