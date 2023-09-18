import React, { useEffect, useState } from 'react'
import style from './index.module.scss'
import { Divider, Input, Tabs, message } from 'antd'
import { devfileSearch, getDirectory } from '@/api/devDocument'
import type {
  TGetDirectoryResponse,
  TDevfileSearchResponse
} from '@/api/devDocument'
import { useStore } from '@/stores'

const { Search } = Input

const SearchDocument = () => {
  const [messageApi, contextHolder] = message.useMessage()

  /**
   * 搜索
   */
  const onSearch = (value: string) => {
    if (!value) return messageApi.warning('请输入搜索关键字')
    setSearchStr(value)
  }

  const [directoryList, setDirectoryList] = useState<TGetDirectoryResponse[]>()

  const [activeDirectoryId, setActiveDirectoryId] = useState<number>()

  const [searchStr, setSearchStr] = useState<string>()

  const [resultList, setResultList] = useState<TDevfileSearchResponse[]>()

  /**
   * 获取所有项目tabs
   */
  useEffect(() => {
    ;(async () => {
      const { data } = await getDirectory()
      if (!data) return
      setDirectoryList(data)
      setActiveDirectoryId(data[0].projectId)
    })()
  }, [])

  /**
   *  切换项目
   */
  const onChange = (value: string) => {
    setActiveDirectoryId(Number(value))
  }

  useEffect(() => {
    if (activeDirectoryId && searchStr) {
      ;(async () => {
        const { data } = await devfileSearch({
          projectId: activeDirectoryId,
          searchStr
        })
        if (!data) setResultList([])
        setResultList(onReplaceHtml(data!))
      })()
    }
  }, [activeDirectoryId, searchStr])

  const { themeStore } = useStore()
  /**
   * 重置样式
   */
  const onReplaceHtml = (list: TDevfileSearchResponse[]) => {
    const colorPrimary = themeStore.antdThemeColor
    return list.map(item => {
      const { name, content, ...rest } = item
      const pattern = /<span style='color:blue'>/g
      const newName = name.replace(
        pattern,
        `<span style="color:${colorPrimary}; font-weight: bold">`
      )
      const newContent = content.replace(
        pattern,
        `<span style="color:${colorPrimary}; font-weight: bold">`
      )
      return {
        ...rest,
        ...{
          name: newName,
          content: newContent
        }
      }
    })
  }

  return (
    <>
      {contextHolder}
      <Search
        placeholder='请输入搜索关键字'
        size='large'
        onSearch={onSearch}
        enterButton
        allowClear
      />
      {directoryList && (
        <Tabs
          onChange={onChange}
          items={directoryList.map(item => {
            return {
              label: item.projectName,
              key: item.projectId.toString()
            }
          })}
        />
      )}
      {resultList && !!resultList.length ? (
        <>
          <div className={style['result-amount']}>
            搜索到{' '}
            <span className={style.strong}>
              {(resultList && resultList.length) || 0}
            </span>{' '}
            条结果
          </div>
          <Divider />
          <div className={style['result-list']}>
            {resultList &&
              resultList.map((item, index) => (
                <div className={style['result-item']} key={index}>
                  <div
                    className={style.name}
                    dangerouslySetInnerHTML={{ __html: item.name }}
                  />
                  <div
                    className={style.content}
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
                </div>
              ))}
          </div>
        </>
      ) : (
        '暂无数据'
      )}
    </>
  )
}

export default SearchDocument
