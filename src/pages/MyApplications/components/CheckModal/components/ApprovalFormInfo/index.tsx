import React from 'react'
import { Descriptions, Tag } from 'antd'

const ApprovalFormInfo = ({ info }: { info: TApplyDetail | undefined }) => {
  return (
    <>
      <Descriptions bordered className='tc' column={2}>
        <Descriptions.Item label='审批状态：'>
          <Tag
            color={['success', 'processing', 'error', 'default'][info!.state]}
          >
            {['审批通过', '审批中', '审批不通过', '撤回'][info!.state] || '-'}
          </Tag>
        </Descriptions.Item>
        <Descriptions.Item label='最近审批时间：'>
          {info?.modTime || '-'}
        </Descriptions.Item>
        <Descriptions.Item label='审批单号：'>
          {info?.processInstanceId || '-'}
        </Descriptions.Item>
        <Descriptions.Item label='申请时间：'>
          {info?.addTime || '-'}
        </Descriptions.Item>
        <Descriptions.Item label='申请单位：'>
          {info?.unifyName || '-'}
        </Descriptions.Item>
        <Descriptions.Item label='单位管理员：'>
          {info?.starter || '-'}
        </Descriptions.Item>
        <Descriptions.Item label='审批单类型：'>
          {info?.processName || '-'}
        </Descriptions.Item>
        <Descriptions.Item label='应用服务名称：'>
          {info?.processName || '-'}
        </Descriptions.Item>
      </Descriptions>
    </>
  )
}

export default ApprovalFormInfo
