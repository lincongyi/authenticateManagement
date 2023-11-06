import { TGetMsgDetail } from '@/api/messageCenter'

export const data: TGetMsgDetail = {
  list: [
    {
      title: '单位注册信息',
      column: 2,
      items: [
        {
          label: '单位名称',
          children: '大白互联',
          type: 1
        },
        {
          label: '审批状态',
          children: 0,
          type: 2
        },
        {
          label: '统一社会信用代码',
          children: 'base64',
          type: 3
        }
      ]
    }
  ],
  title: '恭喜您注册申请通过，快去应用服务中心探索你想要的服务吧',
  sendTime: '2023-1-1',
  content:
    '您已成功注册单位账号，以下是您的单位注册信息。若需查看或更改单位信息，请前往<a href="/app/myAccount/companyInfo">【单位账号设置】</a>进行查看或发起单位信息更改申请。',
  tips: '通过单位账号，您可前往<a href="/app/appServiceCenter">【基础能力中心】</a>查看和了解多种认证服务详细介绍、接入场景等，并可发起申请接入服务。\n 感谢您的注册和使用！ 如有更多问题，直接联系微警认证客服热线：020-66600778，将有相关人员进行解决处理。'
}
