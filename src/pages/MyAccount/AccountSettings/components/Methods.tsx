import React, { useContext, useState } from 'react'
import style from './index.module.scss'
import accountSettingMethod01 from '@/assets/accountSetting-method-01.png'
import accountSettingMethod02 from '@/assets/accountSetting-method-02.png'
import accountSettingMethod03 from '@/assets/accountSetting-method-03.png'
import { Button } from 'antd'
import { settingContext } from '..'

const Methods = () => {
  const context = useContext(settingContext)

  /**
   * 认证方式列表
   */
  const methodList = [
    { icon: accountSettingMethod01, description: '人脸识别', type: 2 },
    { icon: accountSettingMethod02, description: '手机验证', type: 0 },
    { icon: accountSettingMethod03, description: '邮箱验证', type: 1 }
  ]

  const [selectedIndex, setSelectedIndex] = useState(2)
  /**
   * 选择认证方式
   */
  const selectMethod = (type: number) => setSelectedIndex(type)

  return (
    <div className={style['steps-content']}>
      <p className={`${style['method-title']} font-primary-color`}>
        您可以通过选择以下三种认证方式中的一种，进行身份认证
      </p>
      <div className={style['method-list']}>
        {methodList.map(item => (
          <div
            className={`${style['method-item']} ${
              selectedIndex === item.type && style.active
            }`}
            key={item.type}
            onClick={() => selectMethod(item.type)}
          >
            <i className={`${style.selected}`}></i>
            <p className={`${style['method-name']}`}>{item.description}</p>
            <img src={item.icon} />
          </div>
        ))}
      </div>
      <div className='tc'>
        <Button
          type='primary'
          onClick={() => context && context.onNext({ type: selectedIndex })}
        >
          下一步
        </Button>
      </div>
    </div>
  )
}

export default Methods
