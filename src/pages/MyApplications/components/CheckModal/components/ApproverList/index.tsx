import React from 'react'
import style from './index.module.scss'
import { Space, Typography } from 'antd'
import { CheckCircleFilled, CloseCircleFilled } from '@ant-design/icons'
import { useStore } from '@stores/index'
import userAvatar from '@/assets/myApplications-default-avatar.png'

/**
 * 遍历负责审批的用户列表
 */
const ApproverList = ({ list }: { list: TSysUser[] }) => {
  const { themeStore } = useStore()

  const colorPrimary = themeStore.antdThemeColor

  return (
    <>
      {list.map(item => (
        <React.Fragment key={item.id}>
          <div className={style['user-item']}>
            <p className={style.flex}>
              <img src={userAvatar} style={{ marginRight: 10 }} />
              {item.nickName}
              {item.isPassUser &&
                (item.passState ? (
                  <CloseCircleFilled
                    style={{ color: '#FF3B30', marginLeft: 4 }}
                  />
                ) : (
                  <CheckCircleFilled
                    style={{ color: colorPrimary, marginLeft: 4 }}
                  />
                ))}
            </p>
            <Space>
              {item.completeTime && (
                <Typography.Text type='secondary'>
                  {['审批通过', '审批中', '审批不通过', '撤回'][item.passState]}
                </Typography.Text>
              )}
              {item.completeTime}
            </Space>
          </div>
          {!!item.signList.length && (
            <div className={style['sign-list-wrap']}>
              {item.signList.map((__item, __index) => (
                <p className={style.flex} key={__index}>
                  <img src={userAvatar} style={{ marginRight: 10 }} />
                  {__item.name}
                  {!__item.isPass && (
                    <CheckCircleFilled
                      style={{ color: colorPrimary, marginLeft: 4 }}
                    />
                  )}
                </p>
              ))}
            </div>
          )}
        </React.Fragment>
      ))}
    </>
  )
}

export default ApproverList
