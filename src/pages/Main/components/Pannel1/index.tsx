import React from 'react'
import style from './index.module.scss'
import { Card } from 'antd'

type TInfo = {
  joined: number
  totalCount: number
  todayCount: number
}
const Pannel1 = ({ title, info }: { title: string; info: TInfo }) => {
  return (
    <>
      <Card title={title} headStyle={{ borderBottom: 0 }} bordered={false}>
        <div className={style.container}>
          <div className={style.colunm}>
            <div className={style.title}>已接入</div>
            <div className={`${style.content} ${style.icon01}`}>
              {info.joined}
            </div>
          </div>
          <div className={style.colunm}>
            <div className={style.title}>总调用量（次）</div>
            <div className={`${style.content} ${style.icon02}`}>
              {info.totalCount}
            </div>
          </div>
          <div className={style.colunm}>
            <div className={style.subtitle}>今日调用量（次）</div>
            <div className={`${style.content} ${style.icon03}`}>
              +{info.todayCount}
            </div>
          </div>
        </div>
      </Card>
    </>
  )
}

export default Pannel1
