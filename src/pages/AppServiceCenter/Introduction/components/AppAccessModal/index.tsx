import React, { useState } from 'react'
import { Col, Modal, Row, Divider, message } from 'antd'
import { useNavigate } from 'react-router-dom'
import style from './index.module.scss'
import { TgetAccessListResponse } from '@api/ability'
import { CheckCircleOutlined } from '@ant-design/icons'

const AppAccessModal = ({
  open,
  setOpen,
  appList
}: {
  open: boolean
  setOpen: Function
  appList: TgetAccessListResponse[] | undefined
}) => {
  const navigate = useNavigate()

  const [selectedIndex, setSelectedIndex] = useState<number>() // 当前选中应用的index

  /**
   * 选择应用
   */
  const onSelect = (item: TgetAccessListResponse, index: number) => {
    if (item.accessType) return
    setSelectedIndex(index)
  }

  const [messageApi, contextHolder] = message.useMessage()

  /**
   * 申请接入
   */
  const onOk = () => {
    if (!appList) return
    if (!selectedIndex) return messageApi.warning('请选择接入应用')
    console.log(appList[selectedIndex])
    // navigate('./access')
  }

  return (
    <>
      {contextHolder}
      <Modal
        title='申请接入'
        centered
        open={open}
        onOk={onOk}
        onCancel={() => setOpen(false)}
        width={640}
      >
        <Divider />
        <Row gutter={[20, 20]}>
          {appList &&
            appList.map((item, index) => {
              return (
                <Col
                  span={8}
                  key={item.clientId}
                  onClick={() => onSelect(item, index)}
                >
                  <div
                    className={`${style['app-box']} ${
                      item.accessType && style['is-accessed']
                    } ${index === selectedIndex && style.active}`}
                  >
                    {item.accessType ? (
                      <div className={style.tips}>
                        <CheckCircleOutlined style={{ marginRight: 8 }} />
                        已接入
                      </div>
                    ) : (
                      <i className={style.icon}></i>
                    )}
                    {item.appName}
                  </div>
                </Col>
              )
            })}
        </Row>
        <Divider />
      </Modal>
    </>
  )
}

export default AppAccessModal
