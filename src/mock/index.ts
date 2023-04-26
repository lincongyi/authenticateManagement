import Mock from 'mockjs'

const mockData = Mock.mock({
  'applyRecord|1-4': [
    {
      id: '@increment(10)',
      addTime: '@datetime', // 创建时间
      modTime: '@datetime', // 审批时间
      completeTime: '@datetime', // 审批完成时间
      'state|0-3': 0, // 申请状态：0-审批通过；1-审批中；2-审批不通过；3-撤回
      info: {
        companyId: '@id',
        companyName: '@csentence(10)',
        adminName: '@cname',
        certificateNum: '8888111188888',
        companyShortName: '@csentence(5)',
        areaCode: '@county(true)',
        unifyName: '@csentence(5)',
        certificatePhoto: ''
      }
    }
  ]
})
export { mockData }
