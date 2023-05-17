import React, { useMemo, useState } from 'react'
import style from './index.module.scss'
import { Button, Form, Input, Modal, Radio, Space, Tag } from 'antd'
import type { RadioChangeEvent } from 'antd'

const { TextArea } = Input

const btnText = ['确认', '提交申请', '查看审批进度']

const Extension = ({
  instanceId,
  open,
  setOpen
}: {
  instanceId: number
  open: boolean
  setOpen: Function
}) => {
  /**
   * 是否延长有效期
   */
  const [isExtended, setIsExtended] = useState<0 | 1>(1)

  const confirmBtnText = useMemo(() => btnText[isExtended], [isExtended])

  /**
   * 切换是否延长有效期
   */
  const onChange = (e: RadioChangeEvent) => {
    const { value } = e.target
    setIsExtended(value)
  }

  /**
   *  确定or提交申请or查看审批进度
   */
  const onConfirm = () => {}
  return (
    <Modal
      title='申请延期'
      centered
      open={open}
      onCancel={() => setOpen(false)}
      width={600}
      footer={[
        <Button key='cancel' onClick={() => setOpen(false)}>
          关闭
        </Button>,
        <Button key='confirm' type='primary' onClick={onConfirm}>
          {confirmBtnText}
        </Button>
      ]}
    >
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        initialValues={{ isExtended: 1 }}
      >
        <Form.Item label='应用创建时间'>2023-05-17</Form.Item>
        <Form.Item label='有效期止'>
          <Space>
            2023-05-17
            <Tag color='error'>已过期</Tag>
            <Tag color='warning'>即将过期</Tag>
          </Space>
        </Form.Item>
        <Form.Item
          label='是否延长有效期'
          name='isExtended'
          rules={[{ required: true }]}
        >
          <Radio.Group onChange={onChange}>
            <Space direction='vertical'>
              <Radio value={1}>
                有效期延长1年
                <span
                  className={`${style.tips} ${
                    isExtended === 1 && style.active
                  }`}
                >
                  自申请审批通过日起始
                </span>
              </Radio>
              <Radio value={0}>
                暂不延期
                <span
                  className={`${style.tips} ${
                    isExtended === 0 && style.active
                  }`}
                >
                  勾选确认后将不再通知提醒延期
                </span>
              </Radio>
            </Space>
          </Radio.Group>
        </Form.Item>
        <Form.Item label='备注说明' name='remark'>
          <TextArea
            rows={2}
            placeholder='请填写备注说明'
            showCount
            maxLength={100}
          />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default Extension
