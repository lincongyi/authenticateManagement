import React from 'react'
import style from './index.module.scss'
import type { TGetMsgDetail, TMessage } from '@/api/messageCenter'
import {
  Descriptions,
  Divider,
  Typography,
  Tag,
  Row,
  Col,
  Badge,
  Space
} from 'antd'
import { useNavigate } from 'react-router-dom'
import type { BadgeProps } from 'antd/es/badge'
import type { BlockProps } from 'antd/es/typography/Base'

const { Link, Text } = Typography

/**
 * 模板link对应的跳转路径
 */
const linkMap: Record<string, string> = {
  '【审批管理】': '',
  '【我的单位信息】': '/app/myAccount/companyInfo',
  '【我的应用】': '/app/myApps',
  '【开发文档】': '/app/devDocument',
  '【基础能力中心】': '/app/appServiceCenter',
  '【微警开放平台管理端】': '/app/main',
  '【单位账号设置】': '/app/myAccount/companyInfo',
  '【微警开放平台机构端】': '/login'
}

const MessageTemplate = ({ info }: { info: TGetMsgDetail }) => {
  const infoList = JSON.parse(info.list) as TMessage[]

  /**
   * Descriptions组件渲染数据
   */
  const list: TMessage[] = infoList.map(item => {
    const items = item.items.map((__item, __index) => {
      switch (__item.type) {
        case 1:
          return __item
        case 2:
          return {
            ...__item,
            children: (
              <Tag
                color={
                  ['success', 'processing', 'error', 'default'][
                    __item.children as number
                  ]
                }
              >
                {
                  ['审批通过', '待审批', '不通过', '撤回'][
                    __item.children as number
                  ]
                }
              </Tag>
            )
          }
        case 3:
          return {
            ...__item,
            children: (
              <Space>
                <Badge
                  status={
                    ['success', 'warning', 'error'][
                      __item.children as number
                    ] as BadgeProps['status']
                  }
                />
                <Text
                  type={
                    ['success', 'warning', 'danger'][
                      __item.children as number
                    ] as BlockProps['type']
                  }
                >
                  {
                    ['审批通过', '待审批', '审批驳回'][
                      __item.children as number
                    ]
                  }
                </Text>
              </Space>
            )
          }
        default:
          return __item
      }
    })
    return {
      ...item,
      items
    }
  })

  const navigate = useNavigate()

  /**
   * 针对处理title、tips中含有跳转操作的字符串，转换Link组件进行渲染
   * @param {string} content 传入字符串
   * @returns {string | JSX.Element} 如果link跳转，直接返回字符串；如果包含跳转功能，返回JSX.Element
   */
  const formatLink = (content: string) => {
    const pattern = /【[\u4e00-\u9fa5]+】/g
    if (!pattern.test(content)) return content
    const match = content.match(pattern) as RegExpMatchArray

    /**
     * firstContent:单独提取出第一句话
     * rest:遍历渲染
     */
    const [firstContent, ...rest] = content.split(pattern)

    return (
      <>
        {firstContent}
        {rest.map((item, index) => (
          <React.Fragment key={index}>
            <Link onClick={() => navigate(linkMap[match[index]])}>
              {match[index]}
            </Link>
            {item}
          </React.Fragment>
        ))}
      </>
    )
  }

  return (
    <>
      <div className={style.title}>{formatLink(info.title)}</div>
      <div className={style.date}>{info.sendTime}</div>
      <Divider />
      <div className={style.content}>{formatLink(info.content)}</div>
      {list.map((item, index) => (
        <Row key={index}>
          <Col span={item.items.length >= 6 ? 24 : 12}>
            <Descriptions
              title='单位注册信息'
              column={item.items.length >= 6 ? 2 : 1}
              bordered
              style={{ margin: '20px 0' }}
              items={item.items}
            />
          </Col>
        </Row>
      ))}

      <div className={style.tips}>{info.tips}</div>
    </>
  )
}

export default MessageTemplate
