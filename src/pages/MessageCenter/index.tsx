import React, { useEffect, useState } from 'react'
import { Badge, Button, Divider, List, Image, Pagination } from 'antd'
import style from './index.module.scss'
import { useStore } from '@/stores'
import messageCenterBell from '@/assets/messageCenter-bell.png'
import messageCenterBellActive from '@/assets/messageCenter-bell-active.png'
import { getMsgList, getUnReadNum } from '@api/messageCenter'
import type { TMsg } from '@api/messageCenter'
import { useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

const MessageCenter = () => {
  const { unreadCountStore } = useStore()

  /**
   * 针对查看详情，返回后重新获取未读消息
   */
  useEffect(() => {
    ;(async () => {
      const { data } = await getUnReadNum()
      if (!data) return
      unreadCountStore.setUnreadCount(data.unRead)
    })()
  }, [])

  const [messageList, setMessageList] = useState<TMsg[]>()

  const fetchMsgList = async () => {
    const { data } = await getMsgList({
      pageNum: pagination.pageNum,
      pageSize: pagination.pageSize
    })
    if (!data) return
    const { list, pageNum, pageSize, total } = data
    setMessageList(list)
    setPagination({ pageNum, pageSize, total })
  }

  /**
   * 表格分页参数
   */
  const [pagination, setPagination] = useState<TPagination>({
    pageNum: 1,
    pageSize: 10,
    total: 0
  })

  /**
   * 初始化消息列表数据 && 监听翻页事件
   */
  useEffect(() => {
    fetchMsgList()
  }, [pagination.pageNum])

  /**
   * 监听翻页事件
   */
  const onChange = (page: number) => {
    setPagination({ ...pagination, pageNum: page })
  }

  const navigate = useNavigate()

  const onCheck = async (id: number) => {
    navigate(`./messageDetail?id=${id}`)
  }

  return (
    <>
      <Badge count={unreadCountStore.unreadCount}>
        <Button type='primary' size='large'>
          系统消息
        </Button>
      </Badge>
      <Divider />
      <List
        itemLayout='horizontal'
        dataSource={messageList}
        renderItem={item => (
          <List.Item className={style.item} onClick={() => onCheck(item.id)}>
            <List.Item.Meta
              avatar={
                <Image
                  width={25}
                  preview={false}
                  src={
                    item.isRead ? messageCenterBell : messageCenterBellActive
                  }
                />
              }
              title={
                <>
                  <div
                    className={`${style.content} ${
                      !item.isRead && style.active
                    }`}
                  >
                    <div className={style.title}>{item.title}</div>
                    <div className={style.date}>{item.sendTime}</div>
                  </div>
                </>
              }
            />
          </List.Item>
        )}
      />
      <div className={style['pagination-wrap']}>
        <Pagination {...pagination} onChange={onChange} />
      </div>
    </>
  )
}

export default observer(MessageCenter)
