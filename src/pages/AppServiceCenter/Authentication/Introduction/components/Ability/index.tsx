import React from 'react'
import { Typography } from 'antd'

const { Title } = Typography

const Ability = () => {
  return (
    <>
      <Title level={4}>能力介绍</Title>
      <p>
        身份认证能力的基本情况介绍，包括是什么，解决什么问题，有什么优势，接入后能实现什么。
      </p>
      <Title level={4}>使用场景</Title>
      <p>
        从三方系统应用类型维度，如支持APP\小程序\公众号\WEB网页；
        从常用应用场景，如认证登录、认证办理业务、线下认证准入等。
        搭配图文流程描述。
      </p>
      <Title level={4}>申请条件</Title>
      <p>如需要申办单位下载申请书印章、承办单位开发者对接等条件</p>
      <Title level={4}>接入流程</Title>
      <p>
        包括添加申请测试号、申请审批、获取client
        id、获取接口文档、申请正式账号等
      </p>
    </>
  )
}

export default Ability
