import React, { useEffect, useState } from 'react'
import { getMsgDetail } from '@api/messageCenter'
import { useSearchParams } from 'react-router-dom'
import AccessRegisterTemplate from './components/AccessRegisterTemplate'

const MessageDetail = () => {
  const [searchParams] = useSearchParams()
  const id = Number(searchParams.get('id'))

  const [content, setContent] = useState<Record<string, string>>() // 消息主要内容

  const [type, setType] = useState<TApplyKey>()

  useEffect(() => {
    ;(async () => {
      const { data } = await getMsgDetail({ id })
      if (!data) return
      console.log(data)
      setContent(JSON.parse(data.content))
      console.log(data.type)
      setType(data.type)
    })()
  }, [])
  return (
    <>
      {(() => {
        switch (type) {
          case 'ACCESS_REGISTER':
            return <AccessRegisterTemplate />
          case 'UPDATE_COMPANY_INFO':
            return <AccessRegisterTemplate />
          case 'ACCESS_CAPABILITY':
            return <AccessRegisterTemplate />
          case 'PROD_CAPABILITY':
            return <AccessRegisterTemplate />
          case 'APPLY_FILE_CAPABILITY':
            return <AccessRegisterTemplate />
          case 'STOP_APPLICATION':
            return <AccessRegisterTemplate />
          case 'START_APPLICATION':
            return <AccessRegisterTemplate />
          case 'CAPABILITY_UPDATE':
            return <AccessRegisterTemplate />
          case 'ADD_NUM_APPLICATION':
            return <AccessRegisterTemplate />
          case 'DELAY_CAPABILITY':
            return <AccessRegisterTemplate />
          default:
            return <></>
        }
      })()}
    </>
  )
}

export default MessageDetail
