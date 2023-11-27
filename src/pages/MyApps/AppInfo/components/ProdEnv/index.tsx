import React, { useContext, useEffect, useState } from 'react'
import style from '../index.module.scss'
import { Col, Row, Spin, Tabs, message } from 'antd'
import { CheckCircleOutlined } from '@ant-design/icons'
import { TGetAppInfoByEnv, getAppInfoByEnv } from '@/api/myApp'
import AccessedEnv from '../AccessedEnv'
import { appInfoContext } from '../..'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useStore } from '@/stores'
import CheckModal from '@/pages/MyApplications/components/CheckModal'

const prodEnvContext = React.createContext<{
  capability: TGetAppInfoByEnv | undefined
  fetchAppInfoByEnv: Function | undefined
}>({
  capability: undefined,
  fetchAppInfoByEnv: undefined
})

const ProdEnv = ({
  isLoaded,
  setLoaded
}: {
  isLoaded: boolean
  setLoaded: Function
}) => {
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
    setLoaded()

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

  const [messageApi, contextHolder] = message.useMessage()

  const navigate = useNavigate()

  /**
   * 申请接入正式环境
   */
  const toApplyForProdEnv = () => {
    if (!isEnable) return messageApi.warning('该应用已停用')
    if (!activeCapability) return
    if (state < 5) return messageApi.warning('请接入测试环境基础能力')
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
                  {item.state >= 7 && (
                    <CheckCircleOutlined style={{ marginLeft: 10 }} />
                  )}
                </>
              ),
              key: item.capabilityId.toString()
            }
          })}
        />
      ) : !isLoaded ? (
        <Spin size='large' />
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
                          state >= 5 && style.active
                        } ${state > 5 && style.done}`}
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
                      <div
                        className={`${style.dashed} ${
                          state > 5 && style.active
                        }`}
                      ></div>
                    </Col>
                    <Col span={6} className={style.flex}>
                      <div
                        className={`${style.step} ${
                          state >= 6 && style.active
                        } ${state > 6 && style.done}`}
                      >
                        <div className={style.tag}>
                          步骤 <i className={style['step-icon']}>6</i>
                        </div>
                        <div className={style.name}>等待审批</div>
                        {state <= 6 && (
                          <div className={style.btn} onClick={() => onView(6)}>
                            <i
                              className={`${style['btn-icon']} ${style.step02}`}
                            />
                            查看审批单
                          </div>
                        )}
                      </div>
                      <div
                        className={`${style.dashed} ${
                          state > 6 && style.active
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
      {instanceId && (
        <CheckModal instanceId={instanceId} open={open} setOpen={setOpen} />
      )}
    </>
  )
}

export default ProdEnv

export { prodEnvContext }
