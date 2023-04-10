import React, { useState } from 'react'
import style from './index.module.scss'
import accountSettingMethod01 from '@/assets/accountSetting-method-01.png'
import accountSettingMethod02 from '@/assets/accountSetting-method-02.png'
import accountSettingMethod03 from '@/assets/accountSetting-method-03.png'
import { Button } from 'antd'

const Methods = ({ onNext }: { onNext: Function }) => {
  /**
   * 认证方式列表
   */
  const methodList = [
    { icon: accountSettingMethod02, text: '手机验证' },
    { icon: accountSettingMethod03, text: '邮箱验证' },
    { icon: accountSettingMethod01, text: '人脸识别' }
  ]

  const [selectedIndex, setSelectedIndex] = useState(0)
  /**
   * 选择认证方式
   */
  const selectMethod = (index: number) => setSelectedIndex(index)

  return (
    <>
      <p className={`${style['method-title']} font-primary-color`}>
        您可以通过选择以下三种认证方式中的一种，进行身份认证
      </p>
      <div className={style['method-list']}>
        {methodList.map((item, index) => (
          <div
            className={`${style['method-item']} ${
              selectedIndex === index && style.active
            }`}
            key={index}
            onClick={() => selectMethod(index)}
          >
            <i className={`${style.select}`}></i>
            <img src={item.icon} />
            <p className='font-primary-color'>{item.text}</p>
          </div>
        ))}
      </div>
      <div className='tc'>
        <Button type='primary' onClick={() => onNext({ type: selectedIndex })}>
          下一步
        </Button>
      </div>
    </>
  )
}

export default Methods
