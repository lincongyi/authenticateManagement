import React, { useEffect, useState } from 'react'
import { TGetAppInfoByEnv, getAppInfoByEnv } from '@api/myApp'
import style from './index.module.scss'
import { Col, Row, Tabs } from 'antd'

const UnAccessedSitEnv = ({ id }: { id: string }) => {
  const [appInfoByEnv, setAppInfoByEnv] = useState<TGetAppInfoByEnv[]>()

  const [isAccessed, setIsAccessed] = useState<boolean>(false) // 应用是否已经接入当前active基础能力

  /**
   * 初始化当前应用所拥有的能力信息
   */
  useEffect(() => {
    ;(async () => {
      const { data } = await getAppInfoByEnv({
        appId: id,
        appEnv: 'sit'
      })
      if (!data) return
      setAppInfoByEnv(data)

      const state = data[0].state
      setIsAccessed(Boolean(state))
      if (state) {
        // 该应用已经接入第一个基础能力，需要请求获取详细信息
      }
    })()
  }, [])

  /**
   * 切换标签
   */
  const onChange = (activeKey: string) => {
    console.log(typeof activeKey)
  }
  return (
    <>
      {appInfoByEnv && (
        <Tabs
          onChange={onChange}
          type='card'
          items={appInfoByEnv.map(item => {
            return {
              label: item.capability.name,
              key: item.capability.id.toString()
            }
          })}
        />
      )}
      {!isAccessed ? (
        // 未接入
        <div className={`${style.section} ${style.flex}`}>
          <div className={style['sit-bar']}></div>
          <div className={style.process}>
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
                      <i className={`${style['btn-icon']} ${style.step01}`} />
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
                      <i className={`${style['btn-icon']} ${style.step02}`} />
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
                    <div className={style.btn}>
                      <i className={`${style['btn-icon']} ${style.step01}`} />
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
                      <i className={`${style['btn-icon']} ${style.step02}`} />
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
      ) : (
        // 已接入
        ''
      )}
    </>
  )
}

export default UnAccessedSitEnv
