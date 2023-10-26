import React from 'react'
import { Descriptions } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import DynamicFormInfo from '@/components/DynamicFormInfo'
import UploadFormInfo from './components/UploadFormInfo'
import DelayInfo from './components/DelayInfo'
import style from './index.module.scss'
import DynamicFormDistinction from './components/DynamicFormDistinction'

const DetailInfo = ({ applyKey, info }: { applyKey: TApplyKey; info: any }) => {
  console.log('info', info)

  return (
    <>
      {/* ['基础能力接入申请信息（测试账号）','基础能力接入申请信息（正式账号）'] */}
      {['ACCESS_CAPABILITY', 'PROD_CAPABILITY'].includes(applyKey) && (
        <div className={style.container}>
          <DynamicFormInfo formList={info.formList} />
        </div>
      )}
      {/* ['盖章申请表/函'] */}
      {['APPLY_FILE_CAPABILITY'].includes(applyKey) && (
        <div className={style.container}>
          <UploadFormInfo formInfo={info} />
        </div>
      )}
      {/* ['基础服务延期申请信息'] */}
      {['DELAY_CAPABILITY'].includes(applyKey) && (
        <div className={style.container}>
          <DelayInfo formInfo={info} />
        </div>
      )}
      {/* ['增加用量申请信息'] */}
      {['ADD_NUM_APPLICATION'].includes(applyKey) && (
        <>
          <Descriptions title={info.apiName} bordered column={2}>
            <Descriptions.Item label='增加用量'>{info.num}次</Descriptions.Item>
          </Descriptions>
        </>
      )}
      {/* ['停用应用信息', '启用应用信息'] */}
      {['STOP_APPLICATION', 'START_APPLICATION'].includes(applyKey) && (
        <>
          <Descriptions title={info.apiName} bordered column={2}>
            <Descriptions.Item
              label={applyKey === 'STOP_APPLICATION' ? '停用原因' : '启用原因'}
            >
              {info.describe}
            </Descriptions.Item>
          </Descriptions>
        </>
      )}
      {/* ['基础服务参数更改申请（测试）','基础服务参数更改申请（正式）] */}
      {['CAPABILITY_UPDATE', 'PROD_CAPABILITY_UPDATE'].includes(applyKey) && (
        <DynamicFormDistinction formInfo={info} />
      )}

      {/*
      <Descriptions title={单位注册信息} bordered className='tc' column={2}>
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
        <Descriptions.Item
          label={onCompare('certificatePhoto', '信用代码证书：')}
        >
          {after.certificatePhoto ? (
            <Image
              width={80}
              src={`data:image/png;base64,${after.certificatePhoto}`}
              fallback='data:image/png;base64,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'
            />
          ) : (
            <>
              <ExclamationCircleOutlined style={{ marginRight: 4 }} />
              未上传
            </>
          )}
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
      </Descriptions> */}
    </>
  )
}

export default DetailInfo
