import React from 'react'
import { Descriptions, Divider, Modal, Typography } from 'antd'
import dayjs from 'dayjs'
import { dateFormat } from '@utils/date'

const { Title } = Typography

const ConfirmModal = ({
  open,
  setOpen,
  data
}: {
  open: boolean
  setOpen: Function
  data: TAccessForm
}) => {
  const { basicInfo, abilityInfo, concurrency } = data
  const { test, production } = concurrency

  /**
   * 提交申请
   */
  const onSubmit = () => {}

  return (
    <Modal
      title='提交审核'
      open={open}
      width={800}
      onOk={() => onSubmit()}
      onCancel={() => setOpen(false)}
    >
      <Divider />

      <>
        <Title level={4}>基本信息</Title>
        <Descriptions title='接入应用信息' column={3}>
          <Descriptions.Item label='应用名称'>
            {basicInfo.appName || '-'}
          </Descriptions.Item>
          <Descriptions.Item label='接入系统类型'>
            {basicInfo.type || '-'}
          </Descriptions.Item>
          <Descriptions.Item label='系统所属级别'>
            {basicInfo.level || '-'}
          </Descriptions.Item>
          <Descriptions.Item label='系统对外服务范围'>
            {basicInfo.serviceRange || '-'}
          </Descriptions.Item>
          <Descriptions.Item label='使用场景描述'>
            {basicInfo.description || '-'}
          </Descriptions.Item>
        </Descriptions>
        <Descriptions title='申请单位信息' column={3}>
          <Descriptions.Item label='申请单位'>
            {basicInfo.company || '-'}
          </Descriptions.Item>
          <Descriptions.Item label='单位经办人'>
            {basicInfo.companyOperator || '-'}
          </Descriptions.Item>
          <Descriptions.Item label='经办人联系电话'>
            {basicInfo.companyPhone || '-'}
          </Descriptions.Item>
          <Descriptions.Item label='经办人联系邮箱'>
            {basicInfo.companyEmail || '-'}
          </Descriptions.Item>
        </Descriptions>
        <Descriptions title='承建单位信息' column={3}>
          <Descriptions.Item label='承建单位'>
            {basicInfo.construction || '-'}
          </Descriptions.Item>
          <Descriptions.Item label='项目负责人'>
            {basicInfo.constructionOperator || '-'}
          </Descriptions.Item>
          <Descriptions.Item label='负责人联系电话'>
            {basicInfo.constructionPhone || '-'}
          </Descriptions.Item>
          <Descriptions.Item label='负责人联系邮箱'>
            {basicInfo.constructionEmail || '-'}
          </Descriptions.Item>
        </Descriptions>
      </>
      <Divider />

      <>
        <Title level={4}>基础能力信息</Title>
        <Descriptions column={3}>
          <Descriptions.Item label='接入基础能力'>
            {abilityInfo.basicAccess || '-'}
          </Descriptions.Item>
          <Descriptions.Item label='接入账号类型'>
            {abilityInfo.accountType || '-'}
          </Descriptions.Item>
          <Descriptions.Item label='接入服务有效期'>
            {dayjs(abilityInfo.period).format(dateFormat) || '-'}
          </Descriptions.Item>
          <Descriptions.Item label='认证类型'>
            {abilityInfo.authType || '-'}
          </Descriptions.Item>
          <Descriptions.Item label='认证模式'>
            {abilityInfo.authMode || '-'}
          </Descriptions.Item>
          <Descriptions.Item label='接入方式'>
            {abilityInfo.accessMethod || '-'}
          </Descriptions.Item>
          <Descriptions.Item label='应用ID（Android）'>
            {abilityInfo.androidId || '-'}
          </Descriptions.Item>
          <Descriptions.Item label='Bundle ID（IOS）'>
            {abilityInfo.bundleId || '-'}
          </Descriptions.Item>
          <Descriptions.Item label='小程序appid'>
            {abilityInfo.appId || '-'}
          </Descriptions.Item>
          <Descriptions.Item label='推送认证结果地址'>
            {abilityInfo.authResultUrl || '-'}
          </Descriptions.Item>
        </Descriptions>
      </>
      <Divider />

      <>
        <Title level={4}>并发配置</Title>
        <Descriptions title='测试环境' column={3}>
          <Descriptions.Item label='每秒并发限制'>
            {test.secondQuota || '-'}
          </Descriptions.Item>
          <Descriptions.Item label='计算周期'>
            {test.period || '-'}
          </Descriptions.Item>
          <Descriptions.Item label='每日限额'>
            {test.dayQuota || '-'}
          </Descriptions.Item>
          <Descriptions.Item label='每月限额'>
            {test.monthQuota || '-'}
          </Descriptions.Item>
          <Descriptions.Item label='每年限额'>
            {test.yearQuota || '-'}
          </Descriptions.Item>
          <Descriptions.Item label='认证总次数限额'>
            {test.totalQuota || '-'}
          </Descriptions.Item>
        </Descriptions>
        <Descriptions title='正式环境' column={3}>
          <Descriptions.Item label='每秒并发限制'>
            {production.secondQuota || '-'}
          </Descriptions.Item>
          <Descriptions.Item label='计算周期'>
            {production.period || '-'}
          </Descriptions.Item>
          <Descriptions.Item label='每日限额'>
            {production.dayQuota || '-'}
          </Descriptions.Item>
          <Descriptions.Item label='每月限额'>
            {production.monthQuota || '-'}
          </Descriptions.Item>
          <Descriptions.Item label='每年限额'>
            {production.yearQuota || '-'}
          </Descriptions.Item>
          <Descriptions.Item label='认证总次数限额'>
            {production.totalQuota || '-'}
          </Descriptions.Item>
        </Descriptions>
      </>
      <Divider />

      <>
        <Title level={4}>上传申请表</Title>
        <Descriptions column={3}>
          <Descriptions.Item label='基础能力接入申请表'>
            {test.secondQuota || '-'}
          </Descriptions.Item>
          <Descriptions.Item label='基础能力接入申请函'>
            {test.secondQuota || '-'}
          </Descriptions.Item>
        </Descriptions>
      </>
    </Modal>
  )
}

export default ConfirmModal
