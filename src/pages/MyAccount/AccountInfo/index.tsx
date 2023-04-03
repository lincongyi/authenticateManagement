import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import style from './index.module.scss'
import { Button, Col, Row } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import { currentUserInfo } from '@api/myAccount'

const AccountInfo = () => {
  const navigate = useNavigate()

  type TUserInfo = {
    accountNumber: string
    password: string
  }

  const [userInfo, setUserInfoInfo] = useState<TUserInfo>()
  useEffect(() => {
    ;(async () => {
      const { data } = await currentUserInfo()
      setUserInfoInfo(data as TUserInfo)
    })()
  }, [])

  /**
   * 修改密码
   */
  const updatePassword = () => {
    navigate('/app/myAccount/accountSettings')
  }

  return (
    <>
      <Row className={style['account-wrap']}>
        <Col span={24}>
          <div className={style.column}>
            <label className={style['column-key']}>登录账号：</label>
            <span className={style['column-value']}>
              {userInfo?.accountNumber}
            </span>
          </div>
        </Col>
        <Col span={24}>
          <div className={style.column}>
            <label className={style['column-key']}>登录密码：</label>
            <span className={style['column-value']}>{userInfo?.password}</span>
          </div>
        </Col>
        <Col span={24}>
          <Button
            type='primary'
            icon={<EditOutlined />}
            onClick={updatePassword}
          >
            修改密码
          </Button>
        </Col>
      </Row>
    </>
  )
}

export default AccountInfo
