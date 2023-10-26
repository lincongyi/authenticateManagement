import React from 'react'
import { Descriptions } from 'antd'
import DynamicFormInfo from '@/components/DynamicFormInfo'
import UploadFormInfo from './components/UploadFormInfo'
import DelayInfo from './components/DelayInfo'
import style from './index.module.scss'
import DynamicFormDistinction from './components/DynamicFormDistinction'
import CompanyFormInfo from './components/CompanyFormInfo'

const DetailInfo = ({ applyKey, info }: { applyKey: TApplyKey; info: any }) => {
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
      {/* ['基础服务参数更改申请（测试）','基础服务参数更改申请（正式）'] */}
      {['CAPABILITY_UPDATE', 'PROD_CAPABILITY_UPDATE'].includes(applyKey) && (
        <DynamicFormDistinction formInfo={info} />
      )}

      {/* ['单位账号变更详情'] */}
      {['UPDATE_COMPANY_INFO'].includes(applyKey) && (
        <div className={style.container}>
          <CompanyFormInfo formInfo={info} />
        </div>
      )}
    </>
  )
}

export default DetailInfo
