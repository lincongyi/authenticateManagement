import React from 'react'
import {
  Button,
  Col,
  Divider,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Space
} from 'antd'
import { LikeOutlined, DislikeOutlined } from '@ant-design/icons'

const { TextArea } = Input

const UpdateModal = ({
  open,
  setOpen
}: {
  open: boolean
  setOpen: Function
}) => {
  const [form] = Form.useForm()

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '请输入${label}'
  }
  /* eslint-disable no-template-curly-in-string */

  const classificationOptions = [
    { value: 0, label: '其他' },
    { value: 1, label: '注册' },
    { value: 2, label: '登录' }
  ]

  /**
   * 关闭
   */
  const onCancel = () => {
    form.resetFields()
    setOpen(false)
  }

  /**
   * 提交数据
   */
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  const item = {
    classification: 1,
    order: 2,
    isDisplay: 1,
    issue: '如何登录？',
    answer:
      '如何登录？如何登录？如何登录？如何登录？如何登录？如何登录？如何登录？'
  }

  return (
    <Modal
      title='修改问题详情'
      open={open}
      width={640}
      onCancel={onCancel}
      footer={[]}
    >
      <Divider />
      <Form
        form={form}
        name='update'
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        initialValues={item}
        validateMessages={validateMessages}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
        <Form.Item label='应用名称'>
          <p>南沙分局微信小程序</p>
        </Form.Item>
        <Form.Item label='clientID'>
          <p>SDSD231244</p>
        </Form.Item>
        <Form.Item label='创建时间'>
          <p>2022-07-12 10:00:00</p>
        </Form.Item>
        <Form.Item label='对应应用问题分类' name='classification' required>
          <Select
            placeholder='请选择问题分类'
            options={classificationOptions}
          />
        </Form.Item>
        <Form.Item
          label='排序'
          name='order'
          rules={[{ required: true }]}
          extra='从1-N进行排序，数字越大显示越后，如果设置了同样的数值，则按最新设置的时间进行排序'
        >
          <Input placeholder='请输入排序' maxLength={3} />
        </Form.Item>
        <Form.Item
          label='显示'
          name='isDisplay'
          rules={[{ required: true, message: '请选择是否显示' }]}
        >
          <Select
            placeholder='请选择是否显示'
            options={[
              { value: 0, label: '否' },
              { value: 1, label: '是' }
            ]}
          />
        </Form.Item>
        <Form.Item label='帮助问题' name='issue' rules={[{ required: true }]}>
          <TextArea
            rows={4}
            placeholder='请输入帮助问题，建议文字控制在30字内'
            showCount
            maxLength={30}
          />
        </Form.Item>
        <Form.Item label='回答' name='answer' rules={[{ required: true }]}>
          <TextArea
            rows={4}
            placeholder='请输入回答，建议文字控制在100字内'
            showCount
            maxLength={100}
          />
        </Form.Item>
        <Form.Item name='feedback' wrapperCol={{ span: 18, offset: 6 }}>
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
              <Space>
                <Button onClick={onCancel}>关闭</Button>,
                <Button type='primary' htmlType='submit'>
                  确定
                </Button>
              </Space>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default UpdateModal
