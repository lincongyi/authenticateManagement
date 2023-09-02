import React, { useState } from 'react'
import { Col, Modal, Row, Divider } from 'antd'
import { useNavigate } from 'react-router-dom'
import { useStore } from '@stores/index'
import style from './index.module.scss'

const AppAccessModal = ({
  open,
  setOpen
}: {
  open: boolean
  setOpen: Function
}) => {
  const navigate = useNavigate()

  const { accessFormStore } = useStore()

  /**
   * 申请接入
   */
  const onOk = () => {
    accessFormStore.current = {
      id: 0,
      state: 1
    }
    navigate('../access')
  }

  const appList = [
    {
      appEnv: 0, // 接入环境：0-测试环境；1-正式环境；2-未接入
      accessType: true, // 是否已接入
      appName: '微警小程序', // 应用名称
      clientId: 1 // 应用id
    },
    {
      appEnv: 1,
      accessType: false,
      appName: '政务办理',
      clientId: 2
    },
    {
      appEnv: 2,
      accessType: true,
      appName: '便民生活',
      clientId: 3
    }
  ]

  const [selectedIndex, setSelectedIndex] = useState<number>()

  /**
   * 选择应用
   */
  const onSelect = (index: number) => {
    setSelectedIndex(index)
  }

  return (
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
        {appList.map((item, index) => {
          return (
            <Col span={8} key={item.clientId} onClick={() => onSelect(index)}>
              <div
                className={`${style['app-box']} ${
                  index === selectedIndex && style.active
                }`}
              >
                <i className={style.icon}></i>
                {item.appName}
                {item.appEnv !== 2 && `(${['测试', '正式'][item.appEnv]})`}
              </div>
            </Col>
          )
        })}
      </Row>
      <Divider />
    </Modal>
  )
}

export default AppAccessModal
