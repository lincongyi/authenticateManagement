import React, { useEffect, useState } from 'react'
import { TGetMsgDetail, getMsgDetail } from '@api/messageCenter'
import { useSearchParams } from 'react-router-dom'
import AccessRegisterTemplate from './components/AccessRegisterTemplate'
import { Col, Row } from 'antd'

const MessageDetail = () => {
  const [searchParams] = useSearchParams()
  const id = Number(searchParams.get('id'))

  const [info, setInfo] = useState<TGetMsgDetail>() // 消息主要内容

  useEffect(() => {
    ;(async () => {
      const { data } = await getMsgDetail({ id })
      if (!data) return
      setInfo(data)
    })()
  }, [])
  return (
    <>
      {info &&
        (() => {
          switch (info.type) {
            case 'ACCESS_REGISTER':
              return (
                <>
                  {info.content && (
                    <Row style={{ marginTop: 20 }}>
                      <Col
                        xs={{ span: 20, offset: 2 }}
                        xxl={{ span: 16, offset: 4 }}
                      >
                        <AccessRegisterTemplate info={info} />
                      </Col>
                    </Row>
                  )}
                </>
              )
            case 'UPDATE_COMPANY_INFO':
              return (
                <>
                  {info.content && (
                    <Row style={{ marginTop: 20 }}>
                      <Col
                        xs={{ span: 20, offset: 2 }}
                        xxl={{ span: 16, offset: 4 }}
                      >
                        <AccessRegisterTemplate info={info} />
                      </Col>
                    </Row>
                  )}
                </>
              )
            case 'ACCESS_CAPABILITY':
              return (
                <>
                  {info.content && (
                    <Row style={{ marginTop: 20 }}>
                      <Col
                        xs={{ span: 20, offset: 2 }}
                        xxl={{ span: 16, offset: 4 }}
                      >
                        <AccessRegisterTemplate info={info} />
                      </Col>
                    </Row>
                  )}
                </>
              )
            case 'PROD_CAPABILITY':
              return (
                <>
                  {info.content && (
                    <Row style={{ marginTop: 20 }}>
                      <Col
                        xs={{ span: 20, offset: 2 }}
                        xxl={{ span: 16, offset: 4 }}
                      >
                        <AccessRegisterTemplate info={info} />
                      </Col>
                    </Row>
                  )}
                </>
              )
            case 'APPLY_FILE_CAPABILITY':
              return (
                <>
                  {info.content && (
                    <Row style={{ marginTop: 20 }}>
                      <Col
                        xs={{ span: 20, offset: 2 }}
                        xxl={{ span: 16, offset: 4 }}
                      >
                        <AccessRegisterTemplate info={info} />
                      </Col>
                    </Row>
                  )}
                </>
              )
            case 'STOP_APPLICATION':
              return (
                <>
                  {info.content && (
                    <Row style={{ marginTop: 20 }}>
                      <Col
                        xs={{ span: 20, offset: 2 }}
                        xxl={{ span: 16, offset: 4 }}
                      >
                        <AccessRegisterTemplate info={info} />
                      </Col>
                    </Row>
                  )}
                </>
              )
            case 'START_APPLICATION':
              return (
                <>
                  {info.content && (
                    <Row style={{ marginTop: 20 }}>
                      <Col
                        xs={{ span: 20, offset: 2 }}
                        xxl={{ span: 16, offset: 4 }}
                      >
                        <AccessRegisterTemplate info={info} />
                      </Col>
                    </Row>
                  )}
                </>
              )
            case 'CAPABILITY_UPDATE':
              return (
                <>
                  {info.content && (
                    <Row style={{ marginTop: 20 }}>
                      <Col
                        xs={{ span: 20, offset: 2 }}
                        xxl={{ span: 16, offset: 4 }}
                      >
                        <AccessRegisterTemplate info={info} />
                      </Col>
                    </Row>
                  )}
                </>
              )
            case 'ADD_NUM_APPLICATION':
              return (
                <>
                  {info.content && (
                    <Row style={{ marginTop: 20 }}>
                      <Col
                        xs={{ span: 20, offset: 2 }}
                        xxl={{ span: 16, offset: 4 }}
                      >
                        <AccessRegisterTemplate info={info} />
                      </Col>
                    </Row>
                  )}
                </>
              )
            case 'DELAY_CAPABILITY':
              return (
                <>
                  {info.content && (
                    <Row style={{ marginTop: 20 }}>
                      <Col
                        xs={{ span: 20, offset: 2 }}
                        xxl={{ span: 16, offset: 4 }}
                      >
                        <AccessRegisterTemplate info={info} />
                      </Col>
                    </Row>
                  )}
                </>
              )
            default:
              return <></>
          }
        })()}
    </>
  )
}

export default MessageDetail
