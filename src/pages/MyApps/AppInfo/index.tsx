import React, { useEffect, useState } from 'react'
import style from './index.module.scss'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { TGetAppInfoResponse, getAppInfo, getClientId } from '@api/myApp'
import {
  Alert,
  Descriptions,
  Space,
  Tabs,
  TabsProps,
  Tag,
  Typography
} from 'antd'
import { FormOutlined } from '@ant-design/icons'
import SitEnv from './components/SitEnv'
import { useGetDictionary } from '@/hooks'
import ProdEnv from './components/ProdEnv'
import { useStore } from '@stores/index'

const { Paragraph } = Typography

const appInfoContext = React.createContext<
  | {
      appId: string
      env: TEnv
      isEnable: Boolean
    }
  | undefined
>(undefined)

const AppInfo = () => {
  const [appInfo, setAppInfo] = useState<TGetAppInfoResponse>()

  const { getDictionaryItemName } = useGetDictionary()

  const { myAppStore } = useStore()

  const [searchParams] = useSearchParams()

  const appId = searchParams.get('appId') || myAppStore.appId
  const navigate = useNavigate()

  const [clientId, setClientId] = useState<string>()

  /**
   * 初始化应用详情
   */
  useEffect(() => {
    if (!appId) return navigate('..')
    if (appId) {
      myAppStore.setAppId(appId)
      if (!searchParams.get('appId')) {
        navigate(`../appInfo?appId=${appId}`, { replace: true })
      }
    }
    ;(async () => {
      const { data } = await getClientId({ id: appId })
      if (!data) return
      const { clientId } = data
      myAppStore.setClientId(clientId)
      setClientId(clientId.sit)

      const info = await getAppInfo({ id: clientId.sit })
      if (!info.data) return
      setAppInfo(info.data)
    })()
  }, [])

  /**
   * 编辑应用详情
   */
  const onEdit = () => {
    navigate(`../appForm?clientId=${clientId}`)
  }

  const [env, setEnv] = useState<TEnv>('sit') // 当前active标签

  const items: TabsProps['items'] = [
    {
      key: 'sit',
      label: (
        <div className={style['tab-item']}>
          <i
            className={`${style.icon} ${style['sit-icon']} ${
              env === 'sit' && style.active
            }`}
          />
          测试环境
        </div>
      ),
      children: (
        <>
          {appId && appInfo && (
            <appInfoContext.Provider
              value={{
                appId,
                env: 'sit',
                isEnable: appInfo?.state !== 3
              }}
            >
              <SitEnv />
            </appInfoContext.Provider>
          )}
        </>
      )
    },
    {
      key: 'prod',
      label: (
        <div className={style['tab-item']}>
          <i
            className={`${style.icon} ${style['prod-icon']} ${
              env === 'prod' && style.active
            }`}
          />
          正式环境
        </div>
      ),
      children: (
        <>
          {appId && appInfo && (
            <appInfoContext.Provider
              value={{
                appId,
                env: 'prod',
                isEnable: appInfo?.state !== 3
              }}
            >
              <ProdEnv />
            </appInfoContext.Provider>
          )}
        </>
      )
    }
  ]

  /**
   * 切换接入环境
   */
  const onChange = (key: TEnv) => {
    setEnv(key)
  }

  return (
    <>
      <div className={`${style.section} ${style['basic-info']}`}>
        <div className={style.primary}>
          <Space>
            <p className={style.name}>{appInfo?.appName}</p>
            {appInfo && (
              <Tag
                color={
                  ['success', 'warning', 'default', 'error'][appInfo.state]
                }
              >
                <>{['正常启用', '即将过期', '过期', '停用'][appInfo.state]}</>
              </Tag>
            )}
            <p>创建时间：{appInfo?.createTime}</p>
          </Space>
          <FormOutlined className={style.edit} onClick={onEdit} />
        </div>
        <Alert
          className={style.remark}
          banner
          showIcon={false}
          message={appInfo?.remark}
          type='info'
        />
        <Descriptions column={4}>
          {/* 这里之后最好用id来判断 */}
          {appInfo?.appName === '身份认证V2版本' && (
            <Descriptions.Item label='Client Secret' span={4}>
              {appInfo?.clientSecret || '-'}
            </Descriptions.Item>
          )}

          <Descriptions.Item label='Client Id'>
            <Paragraph copyable style={{ marginBottom: 0 }}>
              {appInfo?.clientId || '-'}
            </Paragraph>
          </Descriptions.Item>
          <Descriptions.Item label='应用类型'>
            {(appInfo && getDictionaryItemName('appType', appInfo.appType)) ||
              '-'}
          </Descriptions.Item>
          <Descriptions.Item label='所属级别'>
            {(appInfo &&
              getDictionaryItemName('systemlevel', appInfo.sysLevel)) ||
              '-'}
          </Descriptions.Item>
          <Descriptions.Item label='所属网域'>
            {(appInfo &&
              getDictionaryItemName('networkType', appInfo.sysInternet)) ||
              '-'}
          </Descriptions.Item>

          <Descriptions.Item label='承建单位'>
            {appInfo?.undertakeCompany || '-'}
          </Descriptions.Item>
          <Descriptions.Item label='项目负责人'>
            {appInfo?.projectManager || '-'}
          </Descriptions.Item>
          <Descriptions.Item label='负责人联系电话'>
            {appInfo?.managerPhone || '-'}
          </Descriptions.Item>
          <Descriptions.Item label='负责人联系邮箱'>
            {appInfo?.managerEmail || '-'}
          </Descriptions.Item>
        </Descriptions>
      </div>

      <div className={`${style.section} ${style['env-info']}`}>
        <Tabs
          defaultActiveKey='1'
          items={items}
          onChange={activeKey => onChange(activeKey as TEnv)}
        />
      </div>
    </>
  )
}

export default AppInfo

export { appInfoContext }
