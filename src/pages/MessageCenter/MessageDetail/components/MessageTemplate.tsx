import React from 'react'
import style from './index.module.scss'
import { TGetMsgDetail } from '@/api/messageCenter'
import { Descriptions, Divider, Typography, Image } from 'antd'
import { useNavigate } from 'react-router-dom'

const { Link } = Typography

const MessageTemplate = ({ info }: { info: TGetMsgDetail }) => {
  const { list } = info

  const navigate = useNavigate()

  return (
    <>
      <div className={style.title}>{info.title}</div>
      <div className={style.date}>{info.sendTime}</div>
      <Divider />
      <div className={style.content}>{info.content}</div>
      {list.map((item, index) => (
        <Descriptions
          key={index}
          title='单位注册信息'
          column={2}
          bordered
          style={{ margin: '20px 0' }}
          items={item.items}
        />
      ))}

      <div className={style.tips}>{info.tips}</div>
    </>
  )
}

export default MessageTemplate
