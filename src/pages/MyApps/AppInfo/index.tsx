import React, { useEffect, useState } from 'react'
import style from './index.module.scss'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { TGetAppInfoResponse, getAppInfo, getClientId } from '@api/myApp'
import {
  Alert,
  Col,
  Descriptions,
  Row,
  Space,
  Tabs,
  TabsProps,
  Tag,
  Typography
} from 'antd'
import {
  FormOutlined,
  DownCircleOutlined,
  UpCircleOutlined
} from '@ant-design/icons'
import SitEnv from './components/SitEnv'
import { useGetDictionary } from '@/hooks'
import ProdEnv from './components/ProdEnv'
import { useStore } from '@stores/index'

const { Paragraph } = Typography

const appInfoContext = React.createContext<
  | {
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

  const [env, setEnv] = useState<TEnv>() // 应用当前环境（active标签）

  /**
   * 初始化应用详情
   */
  useEffect(() => {
    if (!appId) return navigate('..')
    myAppStore.setAppId(appId)
    if (!searchParams.get('appId')) {
      navigate(`../appInfo?appId=${appId}`, { replace: true })
    }

    if (searchParams.get('env')) {
      setEnv(searchParams.get('env') as TEnv)
    } else {
      setEnv('sit')
    }

    ;(async () => {
      const { data: clientIdData } = await getClientId({ id: appId })
      if (!clientIdData) return
      const { clientId } = clientIdData
      myAppStore.setEnvClientId(clientId)
      setClientId(clientId.sit)

      const { data: appInfoData } = await getAppInfo({ id: clientId.sit })
      if (!appInfoData) return
      setAppInfo(appInfoData)
    })()
  }, [])

  /**
   * 编辑应用详情
   */
  const onEdit = () => {
    navigate(`../appForm?clientId=${clientId}`)
  }

  const [isCollapsed, setIsCollapsed] = useState(true) // 是否折叠（查看全部）

  const [isLoaded, setIsLoaded] = useState(false) // 是否已加载测试or正式环境数据

  const items: TabsProps['items'] = [
    {
      key: 'sit',
      disabled: !isLoaded,
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
          {appId && appInfo && env && (
            <appInfoContext.Provider
              value={{
                env: 'sit',
                isEnable: appInfo?.state !== 3
              }}
            >
              <SitEnv
                activeEnv={env}
                isLoaded={isLoaded}
                setLoaded={() => setIsLoaded(true)}
              />
            </appInfoContext.Provider>
          )}
        </>
      )
    },
    {
      key: 'prod',
      disabled: !isLoaded,
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
          {appId && appInfo && env && (
            <appInfoContext.Provider
              value={{
                env: 'prod',
                isEnable: appInfo?.state !== 3
              }}
            >
              <ProdEnv
                activeEnv={env}
                isLoaded={isLoaded}
                setLoaded={() => setIsLoaded(true)}
              />
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
    navigate(`.?appId=${appId}&env=${key}`)
    setEnv(key)
    setIsLoaded(false)
  }

  return (
    <>
      <div className={`${style.section} ${style['basic-info']}`}>
        <div className={style.primary}>
          <Space>
            <p className={style.name}>{appInfo?.appName}</p>
            {appInfo && (
              <Tag color={appInfo.state === 3 ? 'default' : 'success'}>
                <>{appInfo.state === 3 ? '停用' : '正常启用'}</>
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
          message={appInfo?.remark || '暂无介绍'}
          type='info'
        />
        <Descriptions column={3}>
          {/* 这里之后最好用id来判断 */}
          {appInfo?.appName === '身份认证V2版本' && (
            <Descriptions.Item label='Client Secret' span={4}>
              {appInfo?.clientSecret || '-'}
            </Descriptions.Item>
          )}

          <Descriptions.Item label='测试 Client Id'>
            <Paragraph copyable style={{ marginBottom: 0 }}>
              {myAppStore.envClientId.sit || '-'}
            </Paragraph>
          </Descriptions.Item>
          <Descriptions.Item label='正式 Client Id'>
            {myAppStore.envClientId.prod ? (
              <Paragraph copyable style={{ marginBottom: 0 }}>
                {myAppStore.envClientId.prod}
              </Paragraph>
            ) : (
              '-'
            )}
          </Descriptions.Item>
          <Descriptions.Item label='应用状态'>
            {(appInfo && getDictionaryItemName('appState', appInfo.state)) ||
              '-'}
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
        </Descriptions>
        <Row>
          <Col span={24} className='tr'>
            <div
              className={style.collapse}
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              {isCollapsed ? (
                <>
                  <DownCircleOutlined style={{ marginRight: 4 }} />
                  查看全部
                </>
              ) : (
                <>
                  <UpCircleOutlined style={{ marginRight: 4 }} />
                  收起
                </>
              )}
            </div>
          </Col>
        </Row>
        {appInfo && (
          <div hidden={isCollapsed}>
            <div className={style.container}>
              <div className={style.panel}>
                <div className={style.title}>应用单位信息</div>
                <div className={style.content}>
                  <p className={style.item}>
                    <span className='font-secondary-color'>所属单位：</span>
                    <span className='font-primary-color'>
                      {appInfo.companyInfo.companyName || '-'}
                    </span>
                  </p>
                  <p className={style.item}>
                    <span className='font-secondary-color'>单位经办人：</span>
                    <span className='font-primary-color'>
                      {appInfo.contractor || '-'}
                    </span>
                  </p>
                  <p className={style.item}>
                    <span className='font-secondary-color'>经办人手机号：</span>
                    <span className='font-primary-color'>
                      {appInfo.contractorPhone || '-'}
                    </span>
                  </p>
                  <p className={style.item}>
                    <span className='font-secondary-color'>
                      经办人联系邮箱：
                    </span>
                    <span className='font-primary-color'>
                      {appInfo.contractorEmail || '-'}
                    </span>
                  </p>
                </div>
              </div>
              <div className={style.panel}>
                <div className={style.title}>承建单位信息</div>
                <div className={style.content}>
                  <p className={style.item}>
                    <span className='font-secondary-color'>承建单位：</span>
                    <span className='font-primary-color'>
                      {appInfo.undertakeCompany || '-'}
                    </span>
                  </p>
                  <p className={style.item}>
                    <span className='font-secondary-color'>项目负责人：</span>
                    <span className='font-primary-color'>
                      {appInfo.projectManager || '-'}
                    </span>
                  </p>
                  <p className={style.item}>
                    <span className='font-secondary-color'>
                      负责人联系电话：
                    </span>
                    <span className='font-primary-color'>
                      {appInfo.managerPhone || '-'}
                    </span>
                  </p>
                  <p className={style.item}>
                    <span className='font-secondary-color'>
                      负责人联系邮箱：
                    </span>
                    <span className='font-primary-color'>
                      {appInfo.managerEmail || '-'}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className={`${style.section} ${style['env-info']}`}>
        {env && (
          <Tabs
            activeKey={env}
            items={items}
            onChange={activeKey => onChange(activeKey as TEnv)}
          />
        )}
      </div>
    </>
  )
}

export default AppInfo

export { appInfoContext }
