import React, { useContext } from 'react'
import style from '../index.module.scss'
import Captcha from './components/Captcha'
import Scan from './components/Scan'
import { settingContext } from '../..'

const Authentication = () => {
  const context = useContext(settingContext)

  const { type } = context?.resetParams! // 0-手机；1-邮箱；2-人脸识别

  return (
    <>
      {type !== 2 ? (
        <div className={style['steps-content']}>
          <Captcha type={type} />
        </div>
      ) : (
        <Scan />
      )}
    </>
  )
}

export default Authentication
