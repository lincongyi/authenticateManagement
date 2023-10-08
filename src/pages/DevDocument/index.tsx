import React, { useEffect, useState } from 'react'
import style from './index.module.scss'
import { Row, Col, Tree, Divider, Typography, Tabs, Button } from 'antd'
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
  FolderOpenOutlined,
  DownloadOutlined,
  SearchOutlined
} from '@ant-design/icons'
import { useNavigate, useSearchParams } from 'react-router-dom'
const { Link } = Typography

const DevDocument = () => {
  const [directoryList, setDirectoryList] = useState<TGetDirectoryResponse[]>()
  const [activeDirectory, setActiveDirectory] =
    useState<TGetDirectoryResponse['directoryList']>() // 当前文档目录

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
   * 为目录标题添加上icon
   */
  const setCatalog = (list: TDirectory[]): TDirectory[] => {
    return list.map(item => {
      if (!item.leafDirectory || !item.leafDirectory.length) {
        return {
          ...item,
          icon:
            item.leafDirectory && item.leafDirectory?.length ? (
              <FolderOpenOutlined />
            ) : (
              <FileOutlined />
            )
        }
      } else {
        const { leafDirectory, ...rest } = item
        return {
          ...rest,
          leafDirectory: setCatalog(leafDirectory) as TDirectory[],
          icon:
            item.leafDirectory && item.leafDirectory?.length ? (
              <FolderOpenOutlined />
            ) : (
              <FileOutlined />
            )
        }
      }
    })
  }

  const [searchParams] = useSearchParams()

  /**
   * 获取展开指定的树节点
   */
  const getExpandedKeys = (list: TDirectory[]) => {
    return list.reduce((prev: number[], next: TDirectory): number[] => {
      if (next.leafDirectory && next.leafDirectory?.length) {
        return [...prev, next.id, ...getExpandedKeys(next.leafDirectory)]
      } else return prev
    }, [])
  }

  /**
   * 获取所有项目目录
   */
  useEffect(() => {
    ;(async () => {
      const { data } = await getDirectory()
      if (!data) return
      setDirectoryList(data)
      let directoryItem = data[0]
      if (searchParams.size) {
        const projectId = +searchParams.get('projectId')!
        directoryItem = data.find(item => item.projectId === projectId)!
      }
      setDefaultActiveKey(directoryItem.projectId.toString())
      initNode(directoryItem)
      const { directoryList } = directoryItem
      setExpandedKeys(getExpandedKeys(directoryList))

      const catalog = setCatalog(directoryList)
      setActiveDirectory(catalog)
    })()
  }, [])

  /**
   *  切换项目
   */
  const onChange = (value: string) => {
    const item = directoryList?.find(item => item.projectId === +value)
    if (!item) return false
    initNode(item)
    setExpandedKeys(getExpandedKeys(item.directoryList))
    const catalog = setCatalog(item.directoryList)
    setActiveDirectory(catalog)
  }

  const navigate = useNavigate()

  /**
   * 跳转到文档搜索
   */
  const toSearch = () => {
    navigate('./searchDocument')
  }

  const [defaultActiveKey, setDefaultActiveKey] = useState<string>() // 初始化选中面板的 key

  const [selectedNode, setSelectedNode] = useState<TDirectory>() // 当前选中的子节点

  const [expandedKeys, setExpandedKeys] = useState<number[]>() // （受控）展开指定的树节点

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

  /**
   * 展开/收起节点
   */
  const onExpand = (expandedKeys: number[]) => {
    setExpandedKeys(expandedKeys)
  }

  return (
    <>
      <div className={style.header}>
        <div className={style['left-side']}>
          {activeDirectory && (
            <>
              项目：
              {directoryList && (
                <Tabs
                  defaultActiveKey={defaultActiveKey}
                  style={{ width: 'calc(100% - 80px)' }}
                  onChange={onChange}
                  items={directoryList.map(item => {
                    return {
                      label: item.projectName,
                      key: item.projectId!.toString()
                    }
                  })}
                />
              )}
            </>
          )}
        </div>
        <Button
          size='large'
          type='primary'
          icon={<SearchOutlined />}
          onClick={toSearch}
        >
          文档搜索
        </Button>
      </div>
      <Divider />
      <Row className={style.container}>
        <Col span={6}>
          <div className={`${style.title} ${style['catalog-title']}`}>目录</div>
          <div className={`${style.content} ${style['catalog-content']}`}>
            {activeDirectory && !!activeDirectory.length && selectedNode && (
              <Tree
                fieldNames={{
                  title: 'name',
                  key: 'id',
                  children: 'leafDirectory'
                }}
                showIcon
                selectedKeys={[selectedNode.id]}
                expandedKeys={expandedKeys}
                onSelect={onSelect}
                treeData={activeDirectory}
                onExpand={expandedKeys => onExpand(expandedKeys as number[])}
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
              />
            )}

            {annexUrl && !!annexUrl.length && (
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
