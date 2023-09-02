import React, { useState } from 'react'
import style from './index.module.scss'
import { Row, Col, Tree } from 'antd'
import type { DataNode, TreeProps } from 'antd/es/tree'

const DevDocument = () => {
  const treeData: DataNode[] = [
    {
      title: '小程序接入',
      key: '0-0',
      children: [
        {
          title: '基础介绍',
          key: '0-0-0'
        },
        {
          title: '接入准备',
          key: '0-0-1'
        },
        {
          title: '接入指南',
          key: '0-0-2'
        },
        {
          title: 'API列表',
          key: '0-0-3',
          children: [
            {
              title: '登录Userlogin',
              key: '0-0-3-0',
              disableCheckbox: true
            },
            {
              title: '跳转认证',
              key: '0-0-3-1'
            },
            {
              title: '获取认证结果',
              key: '0-0-3-2'
            }
          ]
        }
      ]
    }
  ]

  const [selectedNode, setSelectedNode] = useState<string>()
  const onSelect: TreeProps['onSelect'] = (selectedKeys, info) => {
    if (info.node.title) {
      const title = !info.node.children ? info.node.title : ''
      setSelectedNode(title as string)
    }
  }
  return (
    <Row className={style.container}>
      <Col span={6}>
        <div className={`${style.title} ${style.catalog} ${style.bdr}`}>
          目录
        </div>
        <div className={`${style.content} ${style.bdr}`}>
          <Tree
            defaultExpandedKeys={['0-0', '0-0-3']}
            defaultSelectedKeys={['0-0', '0-0-3']}
            onSelect={onSelect}
            treeData={treeData}
          />
        </div>
      </Col>
      <Col span={18}>
        <div className={style.title}>{selectedNode}</div>
        <div className={style.content}></div>
      </Col>
    </Row>
  )
}

export default DevDocument
