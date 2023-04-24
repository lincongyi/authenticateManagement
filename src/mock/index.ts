import Mock from 'mockjs'

const mockData = Mock.mock({
  code: '0',
  msg: 'success',
  'list|5': [{ name: '@name', age: '@integer(18, 25)' }]
})
export { mockData }
