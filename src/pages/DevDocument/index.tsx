import React, { useEffect, useState } from 'react'
import style from './index.module.scss'
import { Row, Col, Tree, Divider, Select, Input, Typography } from 'antd'
import type { EventDataNode, TreeProps } from 'antd/es/tree'
import { getDirectory, queryDocument } from '@api/devDocument'
import type {
  TDirectory,
  TGetDirectoryResponse,
  TAnnexUrl
} from '@api/devDocument'
import {
  CloudDownloadOutlined,
  FileOutlined,
  DownloadOutlined
} from '@ant-design/icons'
const { Link } = Typography

const { Search } = Input

const DevDocument = () => {
  const [directoryList, setDirectoryList] = useState<TGetDirectoryResponse[]>()
  const [activeDirectory, setActiveDirectory] =
    useState<TGetDirectoryResponse>() // 当前文档目录

  /**
   * 初始化时选中的第一个node
   */
  const getDefaultNode = (arr: TDirectory[]): TDirectory | undefined => {
    if (!Array.isArray(arr)) return undefined
    if (arr[0].leafDirectory?.length) {
      return getDefaultNode(arr[0].leafDirectory)
    } else return arr[0]
  }

  /**
   * 初始化or切换项目时重置选中的node
   */
  const initNode = async (data: TGetDirectoryResponse) => {
    const { directoryList } = data
    const defaultNode = getDefaultNode(directoryList)
    if (defaultNode) {
      setSelectedNode(defaultNode)
      try {
        const { data } = await queryDocument({
          id: defaultNode.id
        })
        if (!data) return
        setAnnexUrl(data.annexUrl)
        setDocContent(data.htmlContent)
      } catch (error) {
        setAnnexUrl(undefined)
        setDocContent(undefined)
      }
    }
  }

  /**
   * 获取所有项目目录
   */
  useEffect(() => {
    ;(async () => {
      const { data } = await getDirectory()
      if (data) {
        setDirectoryList(data)
        setActiveDirectory(data && data[0])
        initNode(data[0])
      }
    })()
  }, [])

  /**
   *  切换项目
   */
  const handleChange = (value: string) => {
    const item = directoryList?.find(item => item.projectId === Number(value))
    if (!item) return false
    setActiveDirectory(item)
    initNode(item)
  }

  /**
   * 搜索
   */
  const onSearch = (value: string) => {
    console.log(`value ${value}`)
  }

  const [selectedNode, setSelectedNode] = useState<TDirectory>() // 当前选中的子节点

  const [docContent, setDocContent] = useState<string>() // 开发文档内容

  const [annexUrl, setAnnexUrl] = useState<TAnnexUrl[]>() // 开发文档下载信息
  /**
   * 选择目录节点
   */
  const onSelect: TreeProps['onSelect'] = async (selectedKeys, info) => {
    setSelectedNode(info.node as EventDataNode<TDirectory>)
    // 判断当前子节点没有childNode才请求文档
    if (!(info.node as EventDataNode<TDirectory>).leafDirectory?.length) {
      const { data } = await queryDocument({ id: selectedKeys[0] as number })
      setAnnexUrl(data?.annexUrl)
    }
  }

  return (
    <>
      <div className={style['document-header']}>
        <div className={style['left-side']}>
          {activeDirectory?.projectId && (
            <>
              项目：
              <Select
                defaultValue={activeDirectory.projectId}
                style={{ width: 200 }}
                fieldNames={{ label: 'projectName', value: 'projectId' }}
                onChange={handleChange}
                options={directoryList}
              />
            </>
          )}
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
            {activeDirectory?.directoryList.length && selectedNode && (
              <Tree
                fieldNames={{
                  title: 'name',
                  key: 'id',
                  children: 'leafDirectory'
                }}
                defaultSelectedKeys={[selectedNode.id]}
                showLine
                defaultExpandAll={true}
                onSelect={onSelect}
                treeData={activeDirectory?.directoryList}
              />
            )}
          </div>
        </Col>
        <Col span={18}>
          <div className={style.title}>
            {!selectedNode?.leafDirectory?.length && selectedNode?.name}
          </div>
          <div className={style['doc-wrap']}>
            {docContent && (
              <div
                className={`${style['doc-content']} markdown-body`}
                dangerouslySetInnerHTML={{ __html: docContent }}
              ></div>
            )}

            {annexUrl && (
              <div className={style['download-content']}>
                <p className={style['download-title']}>
                  <CloudDownloadOutlined />
                  文件下载
                </p>
                <ul>
                  {annexUrl.map(item => {
                    return (
                      <li className={style['download-item']} key={item.id}>
                        <div className={style['left-side']}>
                          <FileOutlined style={{ marginRight: 4 }} />
                          {item.name}
                        </div>
                        <div className={style['right-side']}>
                          <Link href={item.url} target='_blank'>
                            <DownloadOutlined style={{ marginRight: 4 }} />
                            点击下载
                          </Link>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </>
  )
}

export default DevDocument
