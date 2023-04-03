import React from 'react'
import { Button, Col, Divider, Form, Modal, Row, Space } from 'antd'

const CheckModal = ({
  open,
  setOpen
}: {
  open: boolean
  setOpen: Function
}) => {
  return (
    <Modal
      title='分类详情'
      open={open}
      width={640}
      onCancel={() => setOpen(false)}
      footer={[]}
    >
      <Divider />
      <Form
        name='check'
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        autoComplete='off'
      >
        <Form.Item label='分类编号'>
          <p>FL2344</p>
        </Form.Item>
        <Form.Item label='分类名称'>
          <p>注册</p>
        </Form.Item>
        <Form.Item label='分类级别'>
          <p>二级分类</p>
        </Form.Item>
        <Form.Item label='排序'>
          <p>2</p>
        </Form.Item>
        <Form.Item label='显示'>
          <p>否</p>
        </Form.Item>
        <Divider />
        <Form.Item noStyle wrapperCol={{ span: 24 }}>
          <Row>
            <Col span={24} className='tr'>
              <Space>
                <Button onClick={() => setOpen(false)}>取消</Button>,
              </Space>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default CheckModal
