import React, { useState } from 'react'
import style from './index.module.scss'
import { Badge, Button, Col, Divider, Modal, Row, Typography } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import templateIcon from '@/assets/issues-template-icon.png'
import uploadIcon from '@/assets/issues-upload-icon.png'

const UploadModal = ({
  open,
  setOpen
}: {
  open: boolean
  setOpen: Function
}) => {
  /**
   * 下载模板
   */
  const onDownload = () => {
    console.log('download')
  }

  const [btnLoading, setBtnLoading] = useState(false)
  /**
   * 点击上传
   */
  const onUpload = () => {
    setBtnLoading(true)
    setTimeout(() => {
      setBtnLoading(false)
    }, 2000)
  }

  return (
    <Modal
      title='批量导入应用问题'
      open={open}
      width={640}
      onCancel={() => {
        if (!btnLoading) setOpen(false)
      }}
      footer={[
        <Button key='back' onClick={() => setOpen(false)} loading={btnLoading}>
          关闭
        </Button>
      ]}
    >
      <Divider />
      <Row>
        <Col span={24} className={style.column}>
          <Badge count={1} color='#1E55D1'></Badge>
          <span className={style['step-name']}>下载模板</span>
          <div className={style.content}>
            <img src={templateIcon} className={style.icon} />
            <Typography.Text
              underline
              className={style.tips}
              onClick={onDownload}
            >
              请下载模板 《问题填写模板.xlsx》
            </Typography.Text>
          </div>
        </Col>
        <Col span={24} className={style.column}>
          <Badge count={2} color='#1E55D1'></Badge>
          <span className={style['step-name']}>上传填好的文件</span>
          <div className={style.content}>
            <img src={uploadIcon} className={style.icon} />
            <Button icon={<UploadOutlined />} onClick={onUpload}>
              点击上传
            </Button>
          </div>
        </Col>
      </Row>
      <Divider />
    </Modal>
  )
}

export default UploadModal
