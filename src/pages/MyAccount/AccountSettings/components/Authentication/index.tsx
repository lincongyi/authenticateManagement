import React from 'react'
import Captcha from './components/Captcha'
import Scan from './components/Scan'

const Authentication = ({
  onNext,
  onPrev,
  resetParams
}: {
  onNext: Function
  onPrev: Function
  resetParams: TResetParams
}) => {
  const { type } = resetParams // 0-手机；1-邮箱；2-人脸识别

  return (
    <>
      {type !== 2 ? (
        <Captcha onNext={onNext} onPrev={onPrev} type={type} />
      ) : (
        <Scan onNext={onNext} onPrev={onPrev} />
      )}
    </>
  )
}

export default Authentication
