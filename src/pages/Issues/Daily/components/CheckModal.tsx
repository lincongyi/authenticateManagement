import React, { useState } from 'react'
import style from './index.module.scss'
import {
  Button,
  Col,
  Divider,
  Form,
  Input,
  Modal,
  Row,
  Space,
  message
} from 'antd'
import { LikeOutlined, DislikeOutlined } from '@ant-design/icons'
import appIcon01 from '@/assets/issue-app-icon-01.png'
import appIcon02 from '@/assets/issue-app-icon-02.png'
import appIcon03 from '@/assets/issue-app-icon-03.png'
import { handleCopy } from '@utils/index'

const { TextArea } = Input

const CheckModal = ({
  open,
  setOpen
}: {
  open: boolean
  setOpen: Function
}) => {
  const formProps = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
    autoComplete: 'off'
  }

  const [relevanceAppList] = useState([
    { name: '认证服务管理平台', icon: appIcon01 },
    { name: '微警认证APP', icon: appIcon02 },
    { name: '微警认证小程序', icon: appIcon03 }
  ])

  const [messageApi, contextHolder] = message.useMessage()

  /**
   * 复制
   */
  const onCopy = () => {
    handleCopy(item.answer)
    messageApi.success({ content: '复制成功' })
  }

  const item = {
    issue: '如何登录？',
    answer:
      '步骤1：输入手机，获取验证码，设置密码，点击“下一步”进行刷脸操作。步骤2：刷脸需要用户根据提示进行操作，左/右脸/张嘴/眨眼操作后，就可以登录进系统了。'
  }

  return (
    <>
      {contextHolder}
      <Modal
        title='问题详情'
        open={open}
        width={640}
        onCancel={() => setOpen(false)}
        footer={[]}
      >
        <Divider />
        <Form name='check' {...formProps} initialValues={{ ...item }}>
          <Form.Item label='问题编号' name='number'>
            <p>WTP23445</p>
          </Form.Item>
          <Form.Item label='帮助问题' name='issue'>
            <TextArea
              rows={4}
              placeholder='请输入帮助问题，建议文字控制在30字内'
              showCount
              maxLength={30}
              disabled
            />
          </Form.Item>
          <Form.Item label='回答' name='answer'>
            <TextArea
              rows={4}
              placeholder='请输入回答，建议文字控制在100字内'
              showCount
              maxLength={100}
              disabled
            />
          </Form.Item>
          <Form.Item wrapperCol={{ span: 20, offset: 4 }}>
            <div className={style['copy-btn']}>
              <Button type='link' onClick={onCopy}>
                复制
              </Button>
            </div>
          </Form.Item>
          <Form.Item label='已关联' name='relevance'>
            <Space direction='vertical' style={{ width: '100%' }}>
              <div className={style['client-app']}>
                {relevanceAppList.map(item => (
                  <Space
                    direction='vertical'
                    style={{ textAlign: 'center' }}
                    key={item.name}
                  >
                    <div className={style['app-icon-item']}>
                      <img src={item.icon} className={style['app-icon']} />
                    </div>
                    <p>{item.name}</p>
                  </Space>
                ))}
              </div>
            </Space>
          </Form.Item>
          <Form.Item label='创建时间' name='date'>
            <p>2022-07-12 10:00:00</p>
          </Form.Item>
          <Form.Item name='feedback' wrapperCol={{ span: 20, offset: 4 }}>
            <Space>
              <Button
                shape='round'
                icon={<LikeOutlined style={{ color: '#0db97f' }} />}
              >
                有帮助（2）
              </Button>
              <Button
                shape='round'
                icon={<DislikeOutlined style={{ color: '#f34646' }} />}
              >
                没帮助（3）
              </Button>
            </Space>
          </Form.Item>
          <Divider />
          <Form.Item noStyle wrapperCol={{ span: 24 }}>
            <Row>
              <Col span={24} className='tr'>
                <Button onClick={() => setOpen(false)}>关闭</Button>,
              </Col>
            </Row>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default CheckModal
