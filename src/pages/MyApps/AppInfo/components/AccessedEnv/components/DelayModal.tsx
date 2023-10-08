import React, { useContext, useEffect, useState } from 'react'
import {
  Modal,
  Form,
  Divider,
  Row,
  Col,
  Space,
  Button,
  Input,
  Radio,
  Tag,
  Alert,
  message
} from 'antd'
import type { RadioChangeEvent } from 'antd'
import { TApplyExtensionParams, applyExtension } from '@/api/myApp'
import { appInfoContext } from '../../..'
import { sitEnvContext } from '../../SitEnv'
import { prodEnvContext } from '../../ProdEnv'

const { TextArea } = Input

const DelayModal = ({
  open,
  setOpen
}: {
  open: boolean
  setOpen: Function
}) => {
  const { env } = useContext(appInfoContext)!

  const { capability, clientId } = useContext(
    env === 'sit' ? sitEnvContext : prodEnvContext
  )!

  const { addTime, capabilityExpireTime, applyState } = capability!

  type TExpiration = 0 | 1 | 2
  const [expiration, setExpiration] = useState<TExpiration>(0) // 0-未过期；1-即将过期；2-已过期

  /**
   * 获取应用接入能力配置信息是否过期
   */
  const getExpiration = (time: string): TExpiration => {
    const reg = /^(\d{4})-(\d{2})-(\d{2})$/
    if (!reg.test(time)) return 0
    const now = new Date().getTime()
    const expireTime = new Date(capabilityExpireTime).getTime()
    const difference = expireTime - now
    const timestamp = 30 * 24 * 60 * 60 * 1000 // 默认少于30天就是即将过期
    if (difference < 0) return 2
    else if (difference < timestamp) return 1
    else return 0
  }

  useEffect(() => {
    setExpiration(getExpiration(capabilityExpireTime))
  }, [])

  const [form] = Form.useForm()

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '请输入${label}'
  }

  const formProps = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
    validateMessages,
    autoComplete: 'off'
  }

  /**
   * 关闭
   */
  const onCancel = () => {
    form.resetFields()
    setOpen(false)
  }

  const [type, setType] = useState(true) // 是否延期

  const onChange = (e: RadioChangeEvent) => {
    setType(!!e.target.value)
  }

  const [messageApi, contextHolder] = message.useMessage()

  /**
   * 提交数据
   */
  const onFinish = async (
    values: Pick<TApplyExtensionParams, 'type' | 'describe'>
  ) => {
    await applyExtension({
      clientId: clientId!,
      capabilityId: capability!.capabilityId,
      env,
      ...values
    })
    messageApi.success({
      content: '已成功提交申请',
      duration: 2
    })
    onCancel()
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <>
      {contextHolder}
      <Modal
        title='申请延期'
        centered
        open={open}
        width={640}
        onCancel={onCancel}
        footer={[]}
      >
        <Divider />
        <Form
          form={form}
          name='increase'
          {...formProps}
          initialValues={{ type: 1 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          {!applyState && (
            <Alert
              message='您已提交延期申请，可前往【我的申请】查看审批进度。'
              type='info'
              showIcon
              style={{ marginBottom: 20 }}
            />
          )}
          <Form.Item label='基础服务接入时间'>{addTime}</Form.Item>
          <Form.Item label='有效期止'>
            {capabilityExpireTime}
            {
              [
                undefined,
                <Tag color='error' key={1} style={{ marginLeft: 10 }}>
                  已过期
                </Tag>,
                <Tag color='warning' key={2} style={{ marginLeft: 10 }}>
                  即将过期
                </Tag>
              ][expiration]
            }
          </Form.Item>
          <Form.Item
            label='是否延长有效期:'
            name='type'
            rules={[{ required: true }]}
          >
            {!applyState ? (
              <>是</>
            ) : (
              <Radio.Group onChange={onChange} value={type}>
                <Space direction='vertical' style={{ margin: '6px 0' }}>
                  <Radio value={1}>
                    是
                    <span style={{ color: '#9A9DA4', paddingLeft: 8 }}>
                      (正式应用账号默认延长1年，测试应用账号默认延长6个月）
                    </span>
                  </Radio>
                  <Radio value={0}>
                    否
                    <span style={{ color: '#9A9DA4', paddingLeft: 8 }}>
                      (确认后将不再通知提醒延期）
                    </span>
                  </Radio>
                </Space>
              </Radio.Group>
            )}
          </Form.Item>
          {!applyState && (
            <Form.Item label='延长有效期至'>2024-04-01</Form.Item>
          )}

          <Form.Item label='备注说明' name='describe'>
            {!applyState ? (
              '备注说明备注说明备注说明'
            ) : (
              <TextArea
                showCount
                maxLength={50}
                style={{ height: 120, resize: 'none' }}
                placeholder='备注说明'
              />
            )}
          </Form.Item>
          {!applyState && (
            <Form.Item label='提交申请延期时间:'>2023-04-01</Form.Item>
          )}
          <Divider />
          <Form.Item noStyle wrapperCol={{ span: 24 }}>
            <Row>
              <Col span={24} className='tr'>
                <Space>
                  <Button onClick={onCancel}>取消</Button>,
                  <Button type='primary' htmlType='submit'>
                    {!applyState ? '查看审批进度' : type ? '提交申请' : '确定'}
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

export default DelayModal
