import React, { useContext, useEffect, useState } from 'react'
import style from '../index.module.scss'
import { Col, Row, Tabs, message } from 'antd'
import { CheckCircleOutlined } from '@ant-design/icons'
import { TGetAppInfoByEnv, getAppInfoByEnv } from '@/api/myApp'
import AccessedEnv from '../AccessedEnv'
import { appInfoContext } from '../..'
import { useNavigate } from 'react-router-dom'
import { useStore } from '@/stores'

const prodEnvContext = React.createContext<{
  capability: TGetAppInfoByEnv | undefined
  clientId: string | undefined
  fetchAppInfoByEnv: Function | undefined
}>({
  capability: undefined,
  clientId: undefined,
  fetchAppInfoByEnv: undefined
})

const ProdEnv = () => {
  const { appId, env, isEnable } = useContext(appInfoContext)!

  const [appInfoByEnv, setAppInfoByEnv] = useState<TGetAppInfoByEnv[]>()

  const [state, setState] = useState<TGetAppInfoByEnv['state']>(1) // 步骤

  const [activeCapability, setActiveCapability] = useState<TGetAppInfoByEnv>() // 当前active基础能力

  /**
   * 初始化当前应用所拥有的能力信息
   */
  const fetchAppInfoByEnv = async (capability?: TGetAppInfoByEnv) => {
    const { data } = await getAppInfoByEnv({
      appId,
      appEnv: env
    })
    if (!data) return
    setAppInfoByEnv(data)

    let index = 0
    if (capability) {
      const result = data.findIndex(
        __item => __item.capabilityId === capability.capabilityId
      )
      if (result !== -1) index = result
    }

    setActiveCapability(data[index])

    const state = data[index].state
    setState(state)
  }

  useEffect(() => {
    fetchAppInfoByEnv()
  }, [])

  /**
   * 切换基础能力标签
   */
  const onChange = (activeKey: string) => {
    const item = appInfoByEnv?.find(item => item.capabilityId === +activeKey)
    if (!item) return
    setActiveCapability(item)
    setState(item.state)
  }

  const { myAppStore } = useStore()

  const [messageApi, contextHolder] = message.useMessage()

  const navigate = useNavigate()

  /**
   * 申请接入正式环境
   */
  const toApplyForProdEnv = () => {
    if (!isEnable || !activeCapability) return
    if (state < 5) return messageApi.warning('请接入测试环境基础能力')
    navigate(
      `./access?appId=${appId}&capabilityId=${activeCapability.capabilityId}`
    )
  }

  return (
    <>
      {contextHolder}
      {appInfoByEnv ? (
        <Tabs
          onChange={onChange}
          type='card'
          items={appInfoByEnv.map(item => {
            return {
              label: (
                <>
                  {item.capabilityName}
                  {!!item.state && (
                    <CheckCircleOutlined style={{ marginLeft: 10 }} />
                  )}
                </>
              ),
              key: item.capabilityId.toString()
            }
          })}
        />
      ) : (
        '没有接入任何基础能力，快去添加接入吧~'
      )}
      {appInfoByEnv && !!appInfoByEnv.length ? (
        <>
          {isEnable && state > 6 ? (
            // 启用状态 && 已接入
            <>
              {activeCapability && (
                <prodEnvContext.Provider
                  value={{
                    capability: activeCapability,
                    clientId: myAppStore.clientId.sit,
                    fetchAppInfoByEnv
                  }}
                >
                  <AccessedEnv />
                </prodEnvContext.Provider>
              )}
            </>
          ) : (
            // 停用状态 || 未接入
            <div className={`${style.section} ${style.flex}`}>
              <div className={style['prod-bar']}></div>
              <div className={`${style.process} ${style['prod-env']}`}>
                <div className={style.content}>
                  <div className={style.title} style={{ marginBottom: 60 }}>
                    能力接入应用流程
                  </div>
                  <div
                    className={`${style.title} ${style.active}`}
                    style={{ marginBottom: 20 }}
                  >
                    接入正式环境流程
                  </div>
                  <Row>
                    <Col span={6} className={style.flex}>
                      <div
                        className={`${style.step} ${
                          state >= 5 ? style.active : ''
                        } ${state > 5 ? style.done : ''}`}
                      >
                        <div className={style.tag}>
                          步骤 <i className={style['step-icon']}>5</i>
                        </div>
                        <div className={style.name}>
                          <i className={style['done-icon']} />
                          添加接入基础能力
                        </div>
                        {state <= 5 && (
                          <div
                            className={style.btn}
                            onClick={toApplyForProdEnv}
                          >
                            <i
                              className={`${style['btn-icon']} ${style.step05}`}
                            />
                            申请接入正式环境
                          </div>
                        )}
                      </div>
                      <div className={style.dashed}></div>
                    </Col>
                    <Col span={6} className={style.flex}>
                      <div className={`${style.step}`}>
                        <div className={style.tag}>
                          步骤 <i className={style['step-icon']}>6</i>
                        </div>
                        <div className={style.name}>等待审批</div>
                        <div className={style.btn}>
                          <i
                            className={`${style['btn-icon']} ${style.step02}`}
                          />
                          查看审批单
                        </div>
                      </div>
                      <div
                        className={`${style.dashed} ${
                          state > 6 ? style.active : ''
                        }`}
                      >
                        审批通过
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        '暂无接入能力'
      )}
    </>
  )
}

export default ProdEnv

export { prodEnvContext }
