import React, { useContext, useEffect, useState } from 'react'
import style from '../index.module.scss'
import { Col, Row, Tabs } from 'antd'
import { CheckCircleOutlined } from '@ant-design/icons'
import { TGetAppInfoByEnv, getAppInfoByEnv } from '@/api/myApp'
import AccessedEnv from '../AccessedEnv'
import { appInfoContext } from '../..'

const prodEnvContext = React.createContext<{
  capability: TGetAppInfoByEnv | undefined
  fetchAppInfoByEnv: Function | undefined
}>({ capability: undefined, fetchAppInfoByEnv: undefined })

const ProdEnv = () => {
  const { appId, env, isEnable } = useContext(appInfoContext)!

  const [appInfoByEnv, setAppInfoByEnv] = useState<TGetAppInfoByEnv[]>()

  const [isAccessed, setIsAccessed] = useState(false) // 应用是否已经接入当前active基础能力

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
    setIsAccessed(!!state)
    if (state) {
      // 该应用已经接入第一个基础能力，需要请求获取详细信息
    }
  }

  useEffect(() => {
    fetchAppInfoByEnv()
  }, [])

  /**
   * 切换基础能力标签
   */
  const onChange = (activeKey: string) => {
    const item = appInfoByEnv?.find(
      item => item.capabilityId === Number(activeKey)
    )
    setActiveCapability(item)
  }

  return (
    <>
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
          {isEnable && isAccessed ? (
            // 启用状态 && 已接入
            <>
              {activeCapability && (
                <prodEnvContext.Provider
                  value={{
                    capability: activeCapability,
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
                      {/* ${style.active} ${style.done} */}
                      <div className={`${style.step}`}>
                        <div className={style.tag}>
                          步骤 <i className={style['step-icon']}>5</i>
                        </div>
                        <div className={style.name}>
                          {/* <i className={style['done-icon']} /> */}
                          添加接入基础能力
                        </div>
                        <div className={style.btn}>
                          <i
                            className={`${style['btn-icon']} ${style.step05}`}
                          />
                          申请接入正式环境
                        </div>
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
                      {/* ${style.active} */}
                      <div className={`${style.dashed}`}>审批通过</div>
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
