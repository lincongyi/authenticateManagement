import React, { useContext, useEffect, useState } from 'react'
import { TGetAppInfoByEnv, getAppInfoByEnv } from '@api/myApp'
import style from '../index.module.scss'
import { Col, Row, Tabs, message } from 'antd'
import { CheckCircleOutlined } from '@ant-design/icons'
import AccessedEnv from '../AccessedEnv'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { appInfoContext } from '../..'
import { useStore } from '@/stores'
import CheckModal from '@/pages/MyApplications/components/CheckModal'

const sitEnvContext = React.createContext<{
  capability: TGetAppInfoByEnv | undefined
  fetchAppInfoByEnv: Function | undefined
}>({
  capability: undefined,
  fetchAppInfoByEnv: undefined
})

const SitEnv = () => {
  const { env, isEnable } = useContext(appInfoContext)!

  const [appInfoByEnv, setAppInfoByEnv] = useState<TGetAppInfoByEnv[]>()

  const { myAppStore } = useStore()

  const appId = myAppStore.appId

  const [state, setState] = useState<TGetAppInfoByEnv['state']>(1) // 步骤

  const [activeCapability, setActiveCapability] = useState<TGetAppInfoByEnv>() // 当前active基础能力

  const [searchParams] = useSearchParams()

  /**
   * 初始化当前应用所拥有的能力信息
   */
  const fetchAppInfoByEnv = async () => {
    const { data } = await getAppInfoByEnv({
      appId,
      appEnv: env
    })
    if (!data) return
    setAppInfoByEnv(data)

    let index = 0

    const capabilityId = searchParams.get('capabilityId')

    if (capabilityId) {
      const result = data.findIndex(item => item.capabilityId === +capabilityId)
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
  const onChange = (capabilityId: string) => {
    const item = appInfoByEnv?.find(item => item.capabilityId === +capabilityId)
    if (!item) return
    setActiveCapability(item)
    setState(item.state)
  }

  const navigate = useNavigate()

  const [messageApi, contextHolder] = message.useMessage()

  /**
   * 添加接入基础能力
   */
  const toAccess = () => {
    if (!isEnable) return messageApi.warning('该应用已停用')
    if (!activeCapability) return
    const { capabilityId } = activeCapability
    navigate(`./access?appId=${appId}&capabilityId=${capabilityId}&env=${env}`)
  }

  const [instanceId, setInstanceId] = useState('') // 当前active审批单号
  const [open, setOpen] = useState(false) // 控制查看Modal显示隐藏

  /**
   * 查看审批单
   */
  const onView = (stepState: TGetAppInfoByEnv['state']) => {
    if (!activeCapability) return
    if (state < stepState) return
    setInstanceId(activeCapability.flowId)
    setOpen(true)
  }

  /**
   * 上传盖章申请表
   */
  const toUploadForm = () => {
    if (!isEnable) return messageApi.warning('该应用已停用')
    if (state < 3) return
    const clientId = myAppStore.envClientId.sit
    const { capabilityId } = activeCapability!
    navigate(`./uploadForm?clientId=${clientId}&capabilityId=${capabilityId}`)
  }

  return (
    <>
      {contextHolder}
      {appInfoByEnv ? (
        <Tabs
          className={style['capability-tabs']}
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
                  {item.state >= 5 && (
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
          {isEnable && state >= 5 ? (
            // 启用状态 && 已接入
            <>
              {activeCapability && (
                <sitEnvContext.Provider
                  value={{
                    capability: activeCapability,
                    fetchAppInfoByEnv
                  }}
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
                      <div
                        className={`${style.step} ${style.active} ${
                          state !== 1 && style.done
                        }`}
                      >
                        <div className={style.tag}>
                          步骤 <i className={style['step-icon']}>1</i>
                        </div>
                        <div className={style.name}>
                          <i className={style['done-icon']} />
                          添加接入基础能力
                        </div>
                        {state === 1 && (
                          <div className={style.btn} onClick={toAccess}>
                            <i
                              className={`${style['btn-icon']} ${style.step01}`}
                            />
                            添加接入基础能力
                          </div>
                        )}
                      </div>
                      <div
                        className={`${style.dashed} ${
                          state > 1 && style.active
                        }`}
                      ></div>
                    </Col>
                    <Col span={6} className={style.flex}>
                      <div
                        className={`${style.step} ${
                          state >= 2 && style.active
                        } ${state > 2 && style.done}`}
                      >
                        <div className={style.tag}>
                          步骤 <i className={style['step-icon']}>2</i>
                        </div>
                        <div className={style.name}>
                          <i className={style['done-icon']} />
                          等待审批
                        </div>
                        {state <= 2 && (
                          <div className={style.btn} onClick={() => onView(2)}>
                            <i
                              className={`${style['btn-icon']} ${style.step02}`}
                            />
                            查看审批单
                          </div>
                        )}
                      </div>
                      <div
                        className={`${style.dashed} ${
                          state > 2 && style.active
                        }`}
                      >
                        审批通过
                      </div>
                    </Col>
                    <Col span={6} className={style.flex}>
                      <div
                        className={`${style.step} ${
                          state >= 3 && style.active
                        } ${state > 3 && style.done}`}
                      >
                        <div className={style.tag}>
                          步骤 <i className={style['step-icon']}>3</i>
                        </div>
                        <div className={style.name}>
                          <i className={style['done-icon']} />
                          上传盖章申请表
                        </div>
                        {state <= 3 && (
                          <div className={style.btn} onClick={toUploadForm}>
                            <i
                              className={`${style['btn-icon']} ${style.step01}`}
                            />
                            上传盖章申请表
                          </div>
                        )}
                      </div>
                      <div
                        className={`${style.dashed} ${
                          state > 3 && style.active
                        }`}
                      ></div>
                    </Col>
                    <Col span={6} className={style.flex}>
                      <div
                        className={`${style.step} ${
                          state >= 4 && style.active
                        } ${state > 4 && style.done}`}
                      >
                        <div className={style.tag}>
                          步骤 <i className={style['step-icon']}>4</i>
                        </div>
                        <div className={style.name}>等待审批</div>
                        {state <= 4 && (
                          <div className={style.btn} onClick={() => onView(4)}>
                            <i
                              className={`${style['btn-icon']} ${style.step02}`}
                            />
                            查看审批单
                          </div>
                        )}
                      </div>
                      <div
                        className={`${style.dashed} ${
                          state > 4 && style.active
                        }`}
                      >
                        审批通过
                      </div>
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
      {instanceId && (
        <CheckModal instanceId={instanceId} open={open} setOpen={setOpen} />
      )}
    </>
  )
}

export default SitEnv

export { sitEnvContext }
