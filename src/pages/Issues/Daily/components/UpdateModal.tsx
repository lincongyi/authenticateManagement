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
import {
  MobileOutlined,
  LikeOutlined,
  DislikeOutlined
} from '@ant-design/icons'
import appIcon01 from '@/assets/issue-app-icon-01.png'
import appIcon02 from '@/assets/issue-app-icon-02.png'
import appIcon03 from '@/assets/issue-app-icon-03.png'

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

  const formProps = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
    validateMessages,
    autoComplete: 'off'
  }

  const [relevanceAppList, setRelevanceAppList] = useState([
    { name: '认证服务管理平台', icon: appIcon01 },
    { name: '微警认证APP', icon: appIcon02 },
    { name: '微警认证小程序', icon: appIcon03 }
  ])
  /**
   * 关联客户端
   */
  const onRelate = () => {
    console.log('onRelate')
  }

  /**
   * 取消关联客户端
   */
  const onDelete = (target: { name: string; icon: string }) => {
    console.log(target)
    setRelevanceAppList(
      relevanceAppList.filter(item => target.name !== item.name)
    )
  }

  /**
   * 关闭
   */
  const onCancel = () => {
    form.resetFields()
    setOpen(false)
  }

  const [messageApi, contextHolder] = message.useMessage()

  /**
   * 提交数据
   */
  const onFinish = (values: any) => {
    console.log('Success:', values)
    messageApi.success({
      content: '新增成功',
      duration: 2,
      onClose: () => setOpen(false)
    })
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <>
      {contextHolder}
      <Modal
        title='修改问答信息'
        open={open}
        width={640}
        onCancel={onCancel}
        footer={[]}
      >
        <Divider />
        <Form
          form={form}
          name='update'
          {...formProps}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item label='问题编号' name='number'>
            <p>WTP23445</p>
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
          <Form.Item label='已关联' name='relevance'>
            <Space direction='vertical' style={{ width: '100%' }}>
              <Button
                type='primary'
                icon={<MobileOutlined />}
                onClick={onRelate}
              >
                客户端推荐
              </Button>
              <div className={style['client-app']}>
                {relevanceAppList.map(item => (
                  <Space
                    direction='vertical'
                    style={{ textAlign: 'center' }}
                    key={item.name}
                  >
                    <div className={style['app-icon-item']}>
                      <i
                        className={style.delete}
                        onClick={() => onDelete(item)}
                      >
                        X
                      </i>
                      <img src={item.icon} className={style['app-icon']} />
                    </div>
                    <p>{item.name}</p>
                  </Space>
                ))}
              </div>
              <p className={style['client-tips']}>
                选择可将问答信息推荐到对应APP/微信小程序/支付宝小程序的帮助中心
              </p>
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
                <Space>
                  <Button onClick={onCancel}>取消</Button>,
                  <Button type='primary' htmlType='submit'>
                    确定
                  </Button>
                </Space>
              </Col>
            </Row>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default UpdateModal
