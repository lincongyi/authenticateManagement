import React from 'react'
import { Form } from 'antd'
import { TApplyExtensionInfoResponse } from '@/api/myApp'

type TExtra = {
  capabilityName: string // 接入能力名称
  addTime: string // 基础服务接入时间
}

const DelayInfo = ({
  formInfo
}: {
  formInfo: TApplyExtensionInfoResponse & TExtra
}) => {
  const formProps = {
    labelCol: { span: 6 },
    wrapperCol: { span: 12 }
  }

  return (
    <Form name='uploadFormInfo' {...formProps}>
      <Form.Item label='接入应用名称' required>
        {formInfo.capabilityName}
      </Form.Item>
      <Form.Item label='基础服务接入时间'>{formInfo.addTime}</Form.Item>
      <Form.Item label='有效期止'>{formInfo.expireTime}</Form.Item>
      <Form.Item label='是否延长有效期' required>
        {['否', '是'][formInfo.type]}
      </Form.Item>
      <Form.Item label='延长有效期至'>{formInfo.newExpireTime}</Form.Item>
      <Form.Item label='备注说明'>{formInfo.describe}</Form.Item>
      <Form.Item label='提交申请延期时间'>{formInfo.applyTime}</Form.Item>
    </Form>
  )
}

export default DelayInfo
