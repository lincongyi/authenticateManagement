import React from 'react'
import { Descriptions, Typography } from 'antd'

const { Text } = Typography

const DetailInfo = ({
  info
}: {
  info: {
    before: TCompanyInfo
    after: TCompanyInfo
  }
}) => {
  const { before, after } = info

  /**
   * 比对数据差异
   * @param {string} key
   * @returns {JSX.Element}
   */
  const onCompare = (key: keyof TCompanyInfo, title?: string) => {
    return before[key] === after[key] ? (
      <Text>{title || (after[key] as string)}</Text>
    ) : (
      <Text type='danger'>{title || (after[key] as string)}</Text>
    )
  }

  return (
    <>
      <Typography.Title level={5}>单位注册信息</Typography.Title>
      <Descriptions bordered className='tc' column={2}>
        <Descriptions.Item label={onCompare('companyName', '单位名称：')}>
          {after.companyName ? onCompare('companyName') : '-'}
        </Descriptions.Item>
        <Descriptions.Item label={onCompare('companyShortName', '单位简称：')}>
          {after.companyShortName ? onCompare('companyShortName') : '-'}
        </Descriptions.Item>
        <Descriptions.Item
          label={onCompare('certificateNum', '统一社会信用代码：')}
        >
          {after.certificateNum ? onCompare('certificateNum') : '-'}
        </Descriptions.Item>
        <Descriptions.Item label={onCompare('companyName', '信用代码证书：')}>
          {after.companyName ? onCompare('companyName') : '-'}
        </Descriptions.Item>
        <Descriptions.Item label={onCompare('areaCode', '接入地区：')}>
          {after.areaCode ? onCompare('areaCode') : '-'}
        </Descriptions.Item>
      </Descriptions>

      <Typography.Title level={5}>管理员账号信息</Typography.Title>
      <Descriptions bordered className='tc' column={2}>
        <Descriptions.Item label={onCompare('adminName', '管理员姓名：')}>
          {after.adminName ? onCompare('adminName') : '-'}
        </Descriptions.Item>
        <Descriptions.Item label='管理员账号：'>
          {JSON.parse(localStorage.getItem('userInfo')!).accountNumber}
        </Descriptions.Item>
        <Descriptions.Item label={onCompare('adminPhone', '管理员手机号：')}>
          {after.adminPhone ? onCompare('adminPhone') : '-'}
        </Descriptions.Item>
        <Descriptions.Item label={onCompare('adminEmail', '管理员邮箱：')}>
          {after.adminEmail ? onCompare('adminEmail') : '-'}
        </Descriptions.Item>
      </Descriptions>
    </>
  )
}

export default DetailInfo
