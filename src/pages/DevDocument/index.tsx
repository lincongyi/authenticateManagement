import React, { useState } from 'react'
import style from './index.module.scss'
import { Row, Col, Tree, Divider, Select, Input } from 'antd'
import type { DataNode, TreeProps } from 'antd/es/tree'
import pdf from '@/assets/devDocument.pdf'

const { Search } = Input

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
  /**
   * 选择目录节点
   */
  const onSelect: TreeProps['onSelect'] = (selectedKeys, info) => {
    if (info.node.title) {
      const title = !info.node.children ? info.node.title : ''
      setSelectedNode(title as string)
    }
  }

  /**
   * 预览文档地址
   */
  // const [pdfUrl, setpdfUrl] = useState<string>()

  const options = [
    { value: '1', label: '身份认证' },
    { value: '2', label: '人脸识别' },
    { value: '3', label: '活体检测' }
  ]
  /**
   *  切换项目
   */
  const handleChange = (value: string) => {
    console.log(`selected ${value}`)
  }

  /**
   * 搜索
   */
  const onSearch = (value: string) => {
    console.log(`value ${value}`)
  }

  return (
    <>
      <div className={style['document-header']}>
        <div className={style['left-side']}>
          项目：
          <Select
            defaultValue='2'
            style={{ width: 200 }}
            onChange={handleChange}
            options={options}
          />
        </div>
        <div className={style['right-side']}>
          <Search
            placeholder='请输入目录/文档关键词'
            onSearch={onSearch}
            enterButton
          />
        </div>
      </div>
      <Divider />
      <Row className={style.container}>
        <Col span={6}>
          <div className={`${style.title} ${style['catalog-title']}`}>目录</div>
          <div className={`${style.content} ${style['catalog-content']}`}>
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
          <div className={`${style.content} ${style['doc-content']}`}>
            <iframe src={pdf} width='100%' height='100%'></iframe>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default DevDocument
