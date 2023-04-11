import React, { useEffect, useState } from 'react'
import style from './index.module.scss'
import { Button, Divider, Collapse } from 'antd'
import { useNavigate } from 'react-router-dom'
import { EditOutlined, ExceptionOutlined } from '@ant-design/icons'
import CompanyDescriptions from './components/CompanyDescriptions'
import { currentCompanyInfo } from '@api/myAccount'

const { Panel } = Collapse

const CompanyInfo = () => {
  const [companyInfo, setCompanyInfo] = useState<TCompanyInfo>()

  useEffect(() => {
    ;(async () => {
      const { data } = await currentCompanyInfo()
      setCompanyInfo(data as TCompanyInfo)
    })()
  }, [])

  const navigate = useNavigate()
  /**
   * 单位注册信息修改申请
   */
  const toEditCompany = () => navigate('/app/myAccount/companySettings')

  return (
    <>
      <div className={style['tool-bar']}>
        <div className={style.warning}>
          <i className={style['warning-icon']}></i>修改申请审批中
        </div>
        <Button
          type='primary'
          icon={<EditOutlined />}
          style={{ marginLeft: 48 }}
          onClick={toEditCompany}
        >
          修改申请信息
        </Button>
      </div>

      <CompanyDescriptions companyInfo={companyInfo} />

      <div className={`${style.title} font-primary-color`}>申请记录</div>
      <Divider />

      <Collapse bordered={false} expandIconPosition='end' ghost={true}>
        <Panel
          style={{ borderBottom: '1px solid #E8E9EA' }}
          header={
            <>
              <ExceptionOutlined style={{ marginRight: 20 }} />
              2023.03.12 23:12:14 提交申请，申请表单如下
            </>
          }
          key='1'
        >
          <CompanyDescriptions companyInfo={companyInfo} />
        </Panel>
        <Panel
          style={{
            borderBottom: `${false} && '1px solid #E8E9EA'`,
            paddingInlineStart: 4
          }}
          header={
            <>
              <ExceptionOutlined
                style={{ marginRight: 20 }}
                className='font-primary-color'
              />
              <span className='font-primary-color'>
                2023.03.12 23:12:14 申请审批通过，已更新单位信息
              </span>
            </>
          }
          collapsible='disabled'
          key='2'
          showArrow={false}
        ></Panel>
      </Collapse>
      <Divider />
    </>
  )
}

export default CompanyInfo
