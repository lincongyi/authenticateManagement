import React, { useEffect, useState } from 'react'
import style from './index.module.scss'
import { Modal, Button, Steps, Tag } from 'antd'
import { getApplyDetail } from '@api/myApplications'
import userAvatar from '@/assets/myApplications-default-avatar.png'
import ApprovalFormInfo from './components/ApprovalFormInfo'
import DetailInfo from './components/DetailInfo'

/**
 * 节点title
 */
const NodeTitle = ({
  item
}: {
  item: {
    name: string
    userCount: number
    isPass: 0 | 1 | 2 | 3
  }
}) => {
  return (
    <div style={{ fontWeight: 'bold' }}>
      {item.name}（{item.userCount}）
      <span
        style={{
          fontSize: 14,
          fontWeight: 'normal',
          color: ['blue', 'gray', 'red', 'orange'][item.isPass]
        }}
      >
        {['审批通过', '审批中', '审批不通过', '撤回'][item.isPass]}
        {Boolean(!item.isPass) && <Tag style={{ marginLeft: 8 }}>已结束</Tag>}
      </span>
    </div>
  )
}

/**
 * 遍历负责审批用户列表
 */
const UserList = ({ list }: { list: TSysUser[] }) => {
  return (
    <>
      {list.map(item => (
        <div
          style={{ display: 'flex', alignItems: 'center', margin: '10px 0' }}
          key={item.sysRole.id}
        >
          <img src={userAvatar} style={{ marginRight: 10 }} />
          {item.sysRole.name}
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
      console.log(data)
      setInfo(data)

      const { nodes } = data!

      /**
       * 格式化审批进度数据
       */
      const items = nodes.map((item, index) => ({
        title: <NodeTitle item={item} />,
        description: <UserList list={item.sysUsers} />
      }))

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
      width={840}
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
