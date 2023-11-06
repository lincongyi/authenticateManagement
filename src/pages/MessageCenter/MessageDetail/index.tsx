import React, { useEffect, useState } from 'react'
import { TGetMsgDetail, getMsgDetail } from '@api/messageCenter'
import { useSearchParams } from 'react-router-dom'
import MessageTemplate from './components/MessageTemplate'
import { Col, Row } from 'antd'
import { data } from './components/message'

const MessageDetail = () => {
  const [searchParams] = useSearchParams()
  const id = Number(searchParams.get('id'))

  const [info, setInfo] = useState<TGetMsgDetail>() // 消息主要内容

  useEffect(() => {
    ;(async () => {
      // const { data } = await getMsgDetail({ id })
      // if (!data) return
      setInfo(data)
    })()
  }, [])
  return (
    <>
      {info && (
        <Row style={{ marginTop: 20 }}>
          <Col xs={{ span: 20, offset: 2 }} xxl={{ span: 16, offset: 4 }}>
            <MessageTemplate info={info} />
          </Col>
        </Row>
      )}
    </>
  )
}

export default MessageDetail
