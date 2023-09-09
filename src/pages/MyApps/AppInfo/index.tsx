import React, { useEffect, useState } from 'react'
import style from './index.module.scss'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { TGetAppInfoResponse, getAppInfo } from '@api/myApp'
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

const { Paragraph } = Typography

const AppInfo = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const [appInfo, setAppInfo] = useState<TGetAppInfoResponse>()

  /**
   * 初始化应用详情
   */
  useEffect(() => {
    const id = searchParams.get('id')
    if (!id) return navigate(-1)
    ;(async () => {
      const { data } = await getAppInfo({ id })
      if (!data) return
      setAppInfo(data)
    })()
  }, [])

  /**
   * 编辑应用详情
   */
  const onEdit = () => {
    const id = searchParams.get('id')
    navigate(`../appForm?id=${id}`)
  }

  const [env, setEnv] = useState<'sit' | 'prod'>('sit') // 当前active标签

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
          {!!searchParams.get('id') && (
            <SitEnv id={searchParams.get('id') as string} />
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
      children: '正式环境 section'
    }
  ]

  const onChange = (key: 'sit' | 'prod') => {
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
                  ['default', 'processing'][Number(appInfo.appEnv !== 'sit')]
                }
              >
                <>{['测试', '正式'][Number(appInfo.appEnv !== 'sit')]}环境</>
              </Tag>
            )}
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
          <Descriptions.Item label='clientId'>
            <Paragraph copyable>{appInfo?.clientId || '-'}</Paragraph>
          </Descriptions.Item>
          <Descriptions.Item label='应用类型'>
            {appInfo?.appType || '-'}
          </Descriptions.Item>
          <Descriptions.Item label='所属级别'>
            {appInfo?.sysLevel || '-'}
          </Descriptions.Item>
          <Descriptions.Item label='所属网域'>
            {appInfo?.sysInternet || '-'}
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
          onChange={activeKey => onChange(activeKey as 'sit' | 'prod')}
        />
      </div>
    </>
  )
}

export default AppInfo
