import React, { useEffect, useState } from 'react'
import style from './index.module.scss'
import { Modal, Button, Steps, Tag, Typography } from 'antd'
import { getApplyDetail } from '@api/myApplications'
import ApprovalBasicInfo from './components/ApprovalBasicInfo'
import DetailInfo from './components/DetailInfo'
import userAvatar from '@/assets/myApplications-default-avatar.png'
import { useGetDictionary } from '@/hooks'
import ApproverList from './components/ApproverList'
import { StepProps } from 'antd/lib/steps'

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
      <Typography.Text
        strong
        style={{
          fontSize: 14,
          color: ['blue', 'gray', 'red', 'orange'][item.isPass]
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
  callback: Function
}) => {
  const { dictionaryStore } = useGetDictionary()

  const [info, setInfo] = useState<TApplyDetail>()

  const [current, setCurrent] = useState(0)

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
   * 提交审批抄送
   */
  const [startCopyItems, setStartCopyItems] = useState<
    {
      title?: React.ReactNode
      status?: 'wait' | 'error' | 'process' | 'finish' | undefined
      description?: React.ReactNode
    }[]
  >()

  /**
   * 审批结束抄送
   */
  const [endCopyItems, setEndCopyItems] = useState<
    {
      title?: React.ReactNode
      status?: 'wait' | 'error' | 'process' | 'finish' | undefined
      description?: React.ReactNode
    }[]
  >()

  const getCopyItems = (list: TSign[], type: 0 | 1) => {
    return [
      {
        title: (
          <p style={{ fontWeight: 'bold', color: '#1e2636' }}>
            {!type ? '提交审批抄送' : '审批结束抄送'}
          </p>
        ),
        status: 'process',
        description: (
          <>
            {list.map(item => {
              return (
                <>
                  <p className={style.flex}>
                    <img src={userAvatar} style={{ marginRight: 10 }} />
                    {item.name}
                  </p>
                </>
              )
            })}
          </>
        )
      } as StepProps
    ]
  }

  /**
   * 监听传入的审批id变更
   */
  useEffect(() => {
    if (!instanceId) return
    ;(async () => {
      const { data } = await getApplyDetail({ instanceId })
      if (!data) return
      setInfo(data)
      const { nodes, startCopyList, endCopyList } = data
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

      const index = nodes.findIndex(item => item.isPass)

      setCurrent(index)

      setItems(items)

      setStartCopyItems(getCopyItems(startCopyList, 0))

      setEndCopyItems(getCopyItems(endCopyList, 1))
    })()
  }, [instanceId])

  const onCancel = () => {
    callback()
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
      <div className='modal-content'>
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
        <Steps direction='vertical' items={startCopyItems} />
        <Steps direction='vertical' current={current} items={items} />
        <Steps direction='vertical' items={endCopyItems} />
      </div>
    </Modal>
  )
}

export default CheckModal
