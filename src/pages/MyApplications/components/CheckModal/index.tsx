import React, { useEffect, useState } from 'react'
import style from './index.module.scss'
import { Modal, Button, Steps, Tag, Typography, Space } from 'antd'
import { getApplyDetail } from '@api/myApplications'
import ApprovalBasicInfo from './components/ApprovalBasicInfo'
import DetailInfo from './components/DetailInfo'
import userAvatar from '@/assets/myApplications-default-avatar.png'
import copyActive from '@/assets/myApplications-copy-active.png'
import copyDefault from '@/assets/myApplications-copy-default.png'
import { useGetDictionary } from '@/hooks'
import ApproverList from './components/ApproverList'
import { useStore } from '@/stores'

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
  const { themeStore } = useStore()

  const colorPrimary = themeStore.antdThemeColor

  const isEnded: boolean =
    ![0, 1].includes(item.isPass) || (!item.isPass && item.isLastNode)

  return (
    <div className='font-primary-color' style={{ fontWeight: 'bold' }}>
      {item.name}（{item.userCount}人）
      <Typography.Text
        strong
        style={{
          fontSize: 14,
          color: [colorPrimary, 'gray', 'red', 'orange'][item.isPass]
        }}
      >
        {['已通过', '审批中', '审批未通过', '撤回'][item.isPass]}
      </Typography.Text>
      {isEnded && (
        <Tag style={{ marginLeft: 8, fontWeight: 'normal' }}>已结束</Tag>
      )}
    </div>
  )
}

const CheckModal = ({
  instanceId,
  open,
  setOpen,
  callback
}: {
  instanceId: string
  open: boolean
  setOpen: Function
  callback?: Function
}) => {
  const { dictionaryStore } = useGetDictionary()

  const [info, setInfo] = useState<TApplyDetail>()

  const [current, setCurrent] = useState(0) // 当前节点

  const [status, setStatus] = useState<
    'wait' | 'process' | 'finish' | 'error'
  >() // 当前节点状态

  /**
   * 审批流程
   */
  const [items, setItems] = useState<
    {
      title: JSX.Element
      description: JSX.Element
    }[]
  >()

  /**
   *
   * @param {TSign[]} list 审批抄送人
   * @param {boolean} isCopyed 是否成功抄送
   * @returns {StepProps[]} 审批抄送节点
   */
  const getCopyItems = (list: TSign[], isCopyed: boolean) => {
    if (!list.length) return []
    return [
      {
        title: (
          <p style={{ fontWeight: 'bold', color: '#1e2636' }}>
            抄送人（{list.length}人）
            <span
              className={isCopyed ? 'primary-color' : style.uncopy}
              style={{ fontSize: 14 }}
            >
              {isCopyed ? '已抄送' : '未抄送'}
            </span>
          </p>
        ),
        icon: <img src={isCopyed ? copyActive : copyDefault} />,
        description: (
          <>
            {list.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <div className={style['user-item']}>
                    <p className={style.flex}>
                      <img src={userAvatar} style={{ marginRight: 10 }} />
                      <span className='font-primary-color'>{item.name}</span>
                    </p>
                    <Space>
                      <Typography.Text type='secondary'>
                        {isCopyed ? '已抄送' : '未抄送'}
                      </Typography.Text>
                      {isCopyed && item.completeTime}
                    </Space>
                  </div>
                </React.Fragment>
              )
            })}
          </>
        )
      }
    ]
  }

  const [initial, setInitial] = useState<-1 | 0>(-1)

  /**
   * 监听传入的审批id变更
   */
  useEffect(() => {
    if (!instanceId) return
    ;(async () => {
      const { data } = await getApplyDetail({ instanceId })
      if (!data) return
      setInfo(data)
      const { nodes, isStartCopy, isEndCopy, startCopyList, endCopyList } = data
      /**
       * 格式化审批进度数据
       */
      const items = nodes.map((item, index) => {
        const isLastNode = index === nodes.length - 1
        return {
          title: <NodeTitle item={{ ...item, isLastNode }} />,
          description: <ApproverList list={item.sysUsers} />
        }
      })

      if (!startCopyList.length) setInitial(0)

      const index = nodes.findIndex(item => !item.isPass)

      setCurrent(index + 1)

      const currentNode = index !== -1 ? nodes[index] : nodes[0]
      const { isPass } = currentNode
      setStatus(isPass === 1 ? 'process' : 'error')

      setItems([
        // 起始抄送
        ...getCopyItems(startCopyList, isStartCopy),
        // 审批流程
        ...items,
        // 结束抄送
        ...getCopyItems(endCopyList, isEndCopy)
      ])
    })()
  }, [instanceId])

  const onCancel = () => {
    callback && callback()
    setOpen(false)
  }

  return (
    <Modal
      title='查看审批详情'
      centered
      open={open}
      onCancel={onCancel}
      width={840}
      footer={[
        <Button key='cancel' onClick={() => onCancel()}>
          关闭
        </Button>
      ]}
    >
      <div className={`modal-content ${style['modal-content']}`}>
        <div className='title'>审批单信息</div>
        {info && <ApprovalBasicInfo info={info} />}

        {info && (
          <>
            <div className='title'>
              {dictionaryStore.processKeyListMap[info.key]}
            </div>
            <DetailInfo applyKey={info.key} info={info.info} />
          </>
        )}

        <div className='title'>审批进度</div>
        <Steps
          className={style.approve}
          direction='vertical'
          initial={initial}
          current={current}
          status={status}
          items={items}
        />
      </div>
    </Modal>
  )
}

export default CheckModal
