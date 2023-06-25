import React, { useEffect, useState } from 'react'
import style from './index.module.scss'
import { Modal, Button, Steps, Tag, Typography, Space } from 'antd'
import { getApplyDetail } from '@api/myApplications'
import userAvatar from '@/assets/myApplications-default-avatar.png'
import ApprovalFormInfo from './components/ApprovalFormInfo'
import DetailInfo from './components/DetailInfo'
import { CheckCircleFilled, CloseCircleFilled } from '@ant-design/icons'
import { useStore } from '@stores/index'

const { Text } = Typography

/**
 * 节点title
 */
const NodeTitle = ({
  item
}: {
  item: {
    name: string
    userCount: number
    isPass: TNodes['isPass']
    isLastNode: boolean
  }
}) => {
  const isEnded: boolean =
    ![0, 1].includes(item.isPass) || (!item.isPass && item.isLastNode)
  return (
    <div style={{ fontWeight: 'bold' }}>
      {item.name}（{item.userCount}）
      <Text
        strong
        style={{
          fontSize: 14,
          color: ['blue', 'gray', 'red', 'orange'][item.isPass]
        }}
      >
        {['已通过', '审批中', '审批未通过', '撤回'][item.isPass]}
      </Text>
      {isEnded && (
        <Tag style={{ marginLeft: 8, fontWeight: 'normal' }}>已结束</Tag>
      )}
    </div>
  )
}

/**
 * 遍历负责审批用户列表
 */
const UserList = ({
  list,
  isPass
}: {
  list: TSysUser[]
  isPass: TNodes['isPass']
}) => {
  const { themeStore } = useStore()
  const colorPrimary = themeStore.antdThemeColor

  return (
    <>
      {list.map(item => (
        <div className={style['user-item']} key={item.sysRole.id}>
          <p className={style.flex}>
            <img src={userAvatar} style={{ marginRight: 10 }} />
            {item.sysRole.name}
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
              <Text type='secondary'>
                {['审批通过', '审批中', '审批不通过', '撤回'][isPass]}
              </Text>
            )}
            {item.completeTime}
          </Space>
        </div>
      ))}
    </>
  )
}

const CheckModal = ({
  instanceId,
  open,
  setOpen
}: {
  instanceId: string
  open: boolean
  setOpen: Function
}) => {
  const [info, setInfo] = useState<TApplyDetail>()
  const [current, setCurrent] = useState(0)
  const [items, setItems] = useState<
    {
      title: JSX.Element
      description: JSX.Element
    }[]
  >()

  /**
   * 监听传入的审批id变更
   */
  useEffect(() => {
    if (!instanceId) return
    ;(async () => {
      const { data } = await getApplyDetail({ instanceId })
      setInfo(data)

      const { nodes } = data!

      /**
       * 格式化审批进度数据
       */
      const items = nodes.map((item, index) => {
        const isLastNode = index === nodes.length - 1
        return {
          title: <NodeTitle item={{ ...item, isLastNode }} />,
          description: <UserList list={item.sysUsers} isPass={item.isPass} />
        }
      })

      const index = nodes.findIndex(item => item.isPass)
      setCurrent(index)

      setItems(items)
    })()
  }, [instanceId])

  return (
    <Modal
      title='查看审批详情'
      centered
      open={open}
      onCancel={() => setOpen(false)}
      width={640}
      footer={[
        <Button key='cancel' onClick={() => setOpen(false)}>
          关闭
        </Button>
      ]}
    >
      <div className='modal-content'>
        <div className='title'>审批单信息</div>
        {info && <ApprovalFormInfo info={info} />}

        {info?.info?.after && info.info.before && (
          <>
            <div className='title'>变更详情</div>
            <div className={style.detail}>
              <DetailInfo info={info.info} />
            </div>
          </>
        )}

        <div className='title'>审批进度</div>
        <Steps direction='vertical' current={current} items={items} />
      </div>
    </Modal>
  )
}

export default CheckModal
