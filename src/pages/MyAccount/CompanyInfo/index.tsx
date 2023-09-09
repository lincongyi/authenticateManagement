import React, { useEffect, useState } from 'react'
import style from './index.module.scss'
import { Button, Collapse, Typography, message } from 'antd'
import { useNavigate } from 'react-router-dom'
import { EditOutlined, ExceptionOutlined } from '@ant-design/icons'
import CompanyDescriptions from './components/CompanyDescriptions'
import { currentCompanyInfo } from '@api/myAccount'

const { Panel } = Collapse

const descriptions = [
  '申请审批通过，已更新单位信息。',
  '',
  '申请审批未通过，请重新提交申请。',
  '申请审批已撤回。'
]

const CompanyInfo = () => {
  /**
   * 当前单位信息
   */
  const [companyInfo, setCompanyInfo] = useState<TCompanyInfo>()
  /**
   * 是否有审批中的单位信息单，禁用修改按钮
   */
  const [isApproving, setIsApproving] = useState(false)

  /**
   * 初始化当前单位信息
   */
  useEffect(() => {
    ;(async () => {
      const { data } = await currentCompanyInfo()
      setCompanyInfo(data)
      setIsApproving(data!.hasApply)
    })()
  }, [])

  const navigate = useNavigate()
  /**
   * 单位注册信息修改申请
   */
  const toEditCompany = () => {
    if (isApproving) {
      message.warning({
        content: '您已提交信息修改申请，且正在审批环节，请勿重复提交！'
      })
    } else {
      navigate('/app/myAccount/companySettings')
    }
  }

  return (
    <>
      <div className={style['tool-bar']}>
        {isApproving && (
          <div className={style.warning}>
            <i className={style['warning-icon']}></i>修改申请审批中
          </div>
        )}
        <Button
          type='primary'
          icon={<EditOutlined />}
          className={`${style['apply-btn']} ${
            isApproving && style['is-approving']
          }`}
          onClick={toEditCompany}
        >
          修改申请信息
        </Button>
      </div>

      <CompanyDescriptions companyInfo={companyInfo} />

      <div className={`${style.title} font-primary-color`}>申请记录</div>

      <div className={style['record-wrap']}>
        {companyInfo && companyInfo.applyRecord ? (
          companyInfo.applyRecord?.map((item: TApplyRecord) => (
            <React.Fragment key={item.id}>
              {item.state !== 1 && (
                <div className={style['approve-tips']}>
                  <ExceptionOutlined style={{ marginRight: 20 }} />
                  {item.completeTime} {descriptions[item.state]}
                </div>
              )}

              <Collapse bordered={false} expandIconPosition='end' ghost={true}>
                <Panel
                  style={{ borderBottom: '1px solid #E8E9EA' }}
                  header={
                    <>
                      <ExceptionOutlined style={{ marginRight: 20 }} />
                      {item.addTime} 提交申请，申请表单如下
                    </>
                  }
                  key={item.id}
                >
                  <CompanyDescriptions companyInfo={item.info} />
                </Panel>
              </Collapse>
            </React.Fragment>
          ))
        ) : (
          <Typography.Text
            type='secondary'
            style={{ marginTop: 20, display: 'block' }}
          >
            暂无申请记录
          </Typography.Text>
        )}
      </div>
    </>
  )
}

export default CompanyInfo
