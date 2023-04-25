import Mock from 'mockjs'

const mockData = Mock.mock({
  retCode: 0,
  retMessage: '成功',
  detailMessage: '成功',
  data: {
    authType: 'ScanAuth',
    certToken: '33fc71a2-1465-4aea-aeea-4e9beb0015a6',
    qrcodeContent:
      'https://rz.weijing.gov.cn/wiiauth/tpauth?cert_token=33fc71a2-1465-4aea-aeea-4e9beb0015a6',
    timestamp: 1682391710353,
    createdAt: '@datetime',
    expireTimeMs: 1682392130353,
    expireAt: '@datetime'
  }
})
export { mockData }
