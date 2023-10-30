import React from 'react'
import { Badge, Button, Divider, List, Image } from 'antd'
import style from './index.module.scss'
import { useStore } from '@/stores'
import messageCenterBell from '@/assets/messageCenter-bell.png'
import messageCenterBellActive from '@/assets/messageCenter-bell-active.png'

const MessageCenter = () => {
  const { unreadCountStore } = useStore()

  const data = [
    {
      title: 'Ant Design Title 1'
    },
    {
      title: 'Ant Design Title 2'
    },
    {
      title: 'Ant Design Title 3'
    },
    {
      title: 'Ant Design Title 4'
    }
  ]

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
        dataSource={data}
        renderItem={item => (
          <List.Item className={style.item}>
            <List.Item.Meta
              className={style.meta}
              avatar={
                <Image width={25} preview={false} src={messageCenterBell} />
              }
              title={
                <>
                  <div className={style.content}>
                    <div className={style.title}>
                      恭喜您注册申请通过，快去应用服务中心探索你想要的服务吧
                    </div>
                    <div className={style.date}>2023.04.25 18:13:12</div>
                  </div>
                </>
              }
            />
          </List.Item>
        )}
      />
    </>
  )
}

export default MessageCenter
