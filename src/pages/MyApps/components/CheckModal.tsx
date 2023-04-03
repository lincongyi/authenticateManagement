import React from 'react'
import { Button, Col, Divider, Modal, Row, Space, Typography } from 'antd'
import { PaperClipOutlined } from '@ant-design/icons'

const CheckModal = ({
  environment,
  open,
  setOpen
}: {
  environment: number
  open: boolean
  setOpen: Function
}) => {
  /**
   * 下载
   */
  const onDownload = (type: number) => {
    console.log(type)
  }

  return (
    <Modal
      title='查看应用信息'
      open={open}
      width={640}
      onCancel={() => setOpen(false)}
      footer={[
        <Button key='back' onClick={() => setOpen(false)}>
          关闭
        </Button>
      ]}
    >
      <Divider />
      <p className='modal-sub-title'>应用接入信息</p>
      <Row gutter={[20, 20]} style={{ marginBottom: 20 }}>
        <Col span={4}>应用名称</Col>
        <Col span={20}>在线公正服务（测试）</Col>
        <Col span={4}>接入方式</Col>
        <Col span={20}>SDK认证、扫码认证、出入境SDK认证</Col>
        <Col span={4}>ClientId</Col>
        <Col span={20}>f51893f78d5892ca</Col>
        <Col span={4}>ClientId Secret</Col>
        <Col span={20}>212312334sdrwerw</Col>
        <Col span={4}>承建公司</Col>
        <Col span={20}>XXX有限公司</Col>
        <Col span={4}>使用场景</Col>
        <Col span={20}>
          这是一段使用场景描述文字，这是一段使用场景描述文字这是一段使用场景描述文字这是一段使用场景描述文字
        </Col>
        <Col span={4}>应用描述</Col>
        <Col span={20}>
          这是一段使用场景描述文字，这是一段使用场景描述文字这是一段使用场景描述文字这是一段使用场景描述文字
        </Col>
        <Col span={4}>有效期止</Col>
        <Col span={20}>2022-10-10</Col>
        <Col span={4}>申请函</Col>
        <Col span={20}>
          <Space>
            <PaperClipOutlined className='primary-color' />
            <Typography.Text underline className='primary-color'>
              申请函.docx
            </Typography.Text>
            <Typography.Link onClick={() => onDownload(0)}>
              下载
            </Typography.Link>
          </Space>
        </Col>
        <Col span={4}>申请表</Col>
        <Col span={20}>
          <Space>
            <PaperClipOutlined className='primary-color' />
            <Typography.Text underline className='primary-color'>
              申请表.docx
            </Typography.Text>
            <Typography.Link onClick={() => onDownload(1)}>
              下载
            </Typography.Link>
          </Space>
        </Col>
      </Row>
      {!!environment && (
        <>
          <p className='modal-sub-title'>并发配置</p>
          <Row gutter={[20, 20]} style={{ marginBottom: 20 }}>
            <Col span={4}>每秒限额</Col>
            <Col span={20}>10</Col>
            <Col span={4}>每日限额</Col>
            <Col span={20}>1000</Col>
            <Col span={4}>每月限额</Col>
            <Col span={20}>不限制</Col>
            <Col span={4}>每年限额</Col>
            <Col span={20}>不限制</Col>
            <Col span={4}>总次数限</Col>
            <Col span={20}>不限制</Col>
          </Row>
        </>
      )}

      <Divider />
    </Modal>
  )
}

export default CheckModal
