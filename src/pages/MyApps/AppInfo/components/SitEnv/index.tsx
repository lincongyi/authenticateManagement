import React, { useContext, useEffect, useState } from 'react'
import { TGetAppInfoByEnv, getAppInfoByEnv } from '@api/myApp'
import style from '../index.module.scss'
import { Col, Row, Tabs } from 'antd'
import { CheckCircleOutlined } from '@ant-design/icons'
import AccessedEnv from '../AccessedEnv'
import { useNavigate } from 'react-router-dom'
import { appInfoContext } from '../..'

const sitEnvContext = React.createContext<{
  capability: TGetAppInfoByEnv | undefined
  fetchAppInfoByEnv: Function | undefined
}>({
  capability: undefined,
  fetchAppInfoByEnv: undefined
})

const SitEnv = () => {
  const { clientId, env, isEnable } = useContext(appInfoContext)!

  const [appInfoByEnv, setAppInfoByEnv] = useState<TGetAppInfoByEnv[]>()

  const [isAccessed, setIsAccessed] = useState(false) // 应用是否已经接入当前active基础能力

  const [activeCapability, setActiveCapability] = useState<TGetAppInfoByEnv>() // 当前active基础能力

  /**
   * 初始化当前应用所拥有的能力信息
   */
  const fetchAppInfoByEnv = async (capability?: TGetAppInfoByEnv) => {
    const { data } = await getAppInfoByEnv({
      clientId,
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

  const navigate = useNavigate()

  /**
   * 上传盖章申请表
   */
  const toUploadForm = () => {
    if (!isEnable) return
    navigate(`./uploadForm?clientId=${clientId}`)
  }

  return (
    <>
      {appInfoByEnv ? (
        <Tabs
          activeKey={
            activeCapability && activeCapability?.capabilityId.toString()
          }
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
                <sitEnvContext.Provider
                  value={{ capability: activeCapability, fetchAppInfoByEnv }}
                >
                  <AccessedEnv />
                </sitEnvContext.Provider>
              )}
            </>
          ) : (
            // 停用状态 || 未接入
            <div className={`${style.section} ${style.flex}`}>
              <div
                className={`${style['sit-bar']} ${!isEnable && style.disable}`}
              ></div>
              <div className={`${style.process} ${style['sit-env']}`}>
                <div className={style.content}>
                  <div className={`${style.title} ${style.active}`}>
                    能力接入应用流程
                  </div>
                  <Row>
                    <Col span={6} className={style.flex}>
                      {/* ${style.active} ${style.done} */}
                      <div className={`${style.step}`}>
                        <div className={style.tag}>
                          步骤 <i className={style['step-icon']}>1</i>
                        </div>
                        <div className={style.name}>
                          {/* <i className={style['done-icon']} /> */}
                          添加接入基础能力
                        </div>
                        <div className={style.btn}>
                          <i
                            className={`${style['btn-icon']} ${style.step01}`}
                          />
                          添加接入基础能力
                        </div>
                      </div>
                      <div className={style.dashed}></div>
                    </Col>
                    <Col span={6} className={style.flex}>
                      <div className={`${style.step}`}>
                        <div className={style.tag}>
                          步骤 <i className={style['step-icon']}>2</i>
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
                    <Col span={6} className={style.flex}>
                      {/* ${style.active} ${style.done} */}
                      <div className={`${style.step}`}>
                        <div className={style.tag}>
                          步骤 <i className={style['step-icon']}>3</i>
                        </div>
                        <div className={style.name}>
                          {/* <i className={style['done-icon']} /> */}
                          上传盖章申请表
                        </div>
                        <div className={style.btn} onClick={toUploadForm}>
                          <i
                            className={`${style['btn-icon']} ${style.step01}`}
                          />
                          上传盖章申请表
                        </div>
                      </div>
                      <div className={style.dashed}></div>
                    </Col>
                    <Col span={6} className={style.flex}>
                      <div className={`${style.step}`}>
                        <div className={style.tag}>
                          步骤 <i className={style['step-icon']}>4</i>
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
                  <div className={style.title}>接入正式环境流程</div>
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

export default SitEnv

export { sitEnvContext }
