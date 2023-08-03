import React, { useState } from 'react'
import style from './index.module.scss'
import {
  Button,
  Col,
  Divider,
  Form,
  Input,
  List,
  Row,
  Space,
  Tabs,
  Typography,
  message
} from 'antd'
import { LikeOutlined, DislikeOutlined } from '@ant-design/icons'
import { handleCopy } from '@utils/index'

const Helps = () => {
  /**
   * 查询
   */
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.'
  ]

  const items = new Array(30).fill(null).map((_, i) => {
    const id = String(i)
    return {
      label: `Tab-${id}`,
      key: id,
      disabled: i === 28,
      children: (
        <List
          dataSource={data}
          renderItem={item => (
            <List.Item
              className={style['list-item']}
              onClick={() => onSelect(item)}
            >
              <Typography.Text mark>[ITEM]</Typography.Text> {item}
            </List.Item>
          )}
        />
      )
    }
  })

  /**
   * 选择问题条目
   */
  const onSelect = (item: string) => {
    setTitle(item)
  }

  const [title, setTitle] = useState(data[0]) // 问题栏目标题

  const description =
    '你好！目前“警快办”身份认证认证模式分为：实名认证、实人认证、实名+实人、这是一条正确答案这是一条正确答案这是一条正确答案，这是一条正确答案这是一条正确答案，这是一条正确答案这是一条正确答案这是一条正确答案。'

  /**
   * 复制
   */
  const onCopy = () => {
    handleCopy(description)
    message.success({
      content: '复制成功',
      duration: 2
    })
  }

  /**
   * 问题反馈，
   */
  /**
   * 问题反馈
   * @param {number} state 有帮助-1；无帮助-0
   * @returns {void}
   */
  const toFeedback = (state: number) => {
    console.log(state)
  }

  return (
    <>
      <Form
        name='search'
        labelCol={{ span: 2 }}
        wrapperCol={{ span: 22 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
        <Row gutter={20}>
          <Col span={12}>
            <Form.Item label='问题' name='issues'>
              <Input placeholder='请输入问题' allowClear maxLength={30} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item>
              <Button type='primary' htmlType='submit'>
                查询
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <Row gutter={20}>
        <Col span={14}>
          <Tabs
            defaultActiveKey='1'
            style={{ lineHeight: '29px' }}
            items={items}
          />
        </Col>
        <Col span={10}>
          <Typography.Title level={4}>{title}</Typography.Title>
          <Divider />
          <div className={`${style.description} font-primary-color`}>
            {description}
            <div className='tr'>
              <Button type='link' onClick={onCopy}>
                复制
              </Button>
            </div>
          </div>
          <Divider style={{ fontSize: 14 }}>问题反馈情况</Divider>
          <Row>
            <Col span={24} style={{ textAlign: 'center' }}>
              <Space>
                <Button
                  shape='round'
                  icon={<LikeOutlined style={{ color: '#0db97f' }} />}
                  onClick={() => toFeedback(1)}
                >
                  有帮助（2）
                </Button>
                <Button
                  shape='round'
                  icon={<DislikeOutlined style={{ color: '#f34646' }} />}
                  onClick={() => toFeedback(0)}
                >
                  没帮助（3）
                </Button>
              </Space>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default Helps
