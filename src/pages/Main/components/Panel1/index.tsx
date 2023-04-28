import React from 'react'
import style from './index.module.scss'
import { Card } from 'antd'

const Panel1 = ({ title, info }: { title: string; info: TPannel1Data }) => {
  return (
    <>
      <Card title={title} headStyle={{ borderBottom: 0 }} bordered={false}>
        <div className={style.container}>
          <div className={style.colunm}>
            <div className={style.title}>已接入</div>
            <div className={`${style.content} ${style.icon01}`}>
              {info.join}
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

export default Panel1
