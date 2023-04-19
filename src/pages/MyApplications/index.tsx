import React, { useEffect, useState } from 'react'
import style from './index.module.scss'
import {
  Badge,
  Button,
  Cascader,
  Col,
  ConfigProvider,
  DatePicker,
  Divider,
  Form,
  Input,
  Row,
  Space,
  Table
} from 'antd'
import { SingleValueType } from 'rc-cascader/lib/Cascader'
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table'
import type { Dayjs } from 'dayjs'
import 'dayjs/locale/zh-cn'
import locale from 'antd/locale/zh_CN'
import { rangePresets, disabledDate } from '@utils/date'
import { dictList } from './index.config'
import { Option, TDictValue, TDictList, TDataType } from './index.d'
// import { getApplyCount } from '@api/myApplications'

const { RangePicker } = DatePicker

/**
 * 格式化数据字典
 * @param {TDictList[] | TDictValue[]} array
 * @returns {Option[]} list 符合Cascader组件使用的options
 */
const formatData = (array: TDictList[] | TDictValue[]) => {
  const list: Option[] = []
  array.forEach(item => {
    if ((item as TDictList).dictValue) {
      list.push({
        label: (item as TDictList).dictName,
        value: (item as TDictList).dictName,
        children: formatData((item as TDictList).dictValue)
      })
    } else {
      list.push({
        label: (item as TDictValue).value,
        value: (item as TDictValue).key
      })
    }
  })
  return list
}

const options = formatData(dictList)

const MyApplications = () => {
  // useEffect(() => {
  //   ;(async () => {
  //     const { data } = await getApplyCount()
  //     console.log(data)
  //   })()
  // }, [])

  const [stateList] = useState([
    { text: '全部申请', count: 10, badgeCount: 1, hasBadge: true },
    {
      state: 0,
      text: '审批中',
      count: 2,
      badgeCount: 1,
      hasBadge: true,
      options: ['check', 'urge', 'withdraw']
    },
    {
      state: 1,
      text: '审批通过',
      count: 3,
      badgeCount: 2,
      hasBadge: true,
      options: ['check']
    },
    {
      state: 2,
      text: '审批未通过',
      count: 4,
      badgeCount: 3,
      hasBadge: false,
      options: ['check']
    },
    {
      state: 3,
      text: '撤回',
      count: 1,
      badgeCount: 1,
      hasBadge: true,
      options: ['check', 'reapply']
    }
  ])
  const [activeState, setActiveState] = useState(0)

  const [form] = Form.useForm()

  /**
   * 申请类型发生变化的回调
   */
  const onChange = (value: SingleValueType[]) => {
    console.log(value)
  }

  const [dateRange, setDateRange] = useState<string[]>([])

  /**
   * 日期范围发生变化的回调
   */
  const onRangeChange = (
    dates: null | (Dayjs | null)[],
    dateStrings: string[]
  ) => {
    setDateRange(dateStrings)
  }

  /**
   * 关闭日期选择器的回调
   */
  const onOpenChange = (open: boolean) => {
    if (!open) form.setFieldValue('dateRange', dateRange)
  }

  /**
   * 重置
   */
  const onReset = () => {
    form.resetFields()
    setActiveState(0)
  }

  /**
   * 查询
   */
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  /**
   * 查看
   */
  const onCheck = (value: TDataType) => {}

  /**
   * 催办
   */
  const onUrge = (value: TDataType) => {}

  /**
   * 撤回
   */
  const onWithdraw = (value: TDataType) => {}

  /**
   * 重新申请
   */
  const onReapply = (value: TDataType) => {}

  /**
   * 表格分页参数
   */
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 31
  })

  /**
   * 分页、排序、筛选变化时触发
   */
  const onTableChange = (tablePagination: TablePaginationConfig) => {
    setPagination({ ...pagination, ...tablePagination })
  }

  const columns: ColumnsType<TDataType> = [
    {
      title: '序号',
      dataIndex: 'key',
      key: 'key'
    },
    {
      title: '审批单号',
      dataIndex: 'number',
      key: 'number'
    },
    {
      title: '申请类型',
      dataIndex: 'type',
      key: 'type',
      ellipsis: true
    },
    {
      title: '应用/服务名称',
      dataIndex: 'name',
      key: 'name',
      ellipsis: true
    },
    {
      title: '审批状态',
      dataIndex: 'state',
      key: 'state',
      ellipsis: true
    },
    {
      title: '审批进度',
      dataIndex: 'schedule',
      key: 'schedule',
      ellipsis: true
    },
    {
      title: '申请时间',
      dataIndex: 'applyDate',
      key: 'date'
    },
    {
      title: '审批时间',
      dataIndex: 'approveDate',
      key: 'date'
    },
    {
      title: '操作',
      key: 'action',
      width: 300,
      render: (values: TDataType) => (
        <>
          {stateList[values.state].options!.map((item, index) => {
            return (
              <React.Fragment key={index}>
                {item === 'check' && (
                  <>
                    <Button type='link' onClick={() => onCheck(values)}>
                      查看
                    </Button>
                  </>
                )}
                {item === 'urge' && (
                  <>
                    <Button type='link' onClick={() => onUrge(values)}>
                      催办
                    </Button>
                  </>
                )}
                {item === 'withdraw' && (
                  <>
                    <Button
                      type='link'
                      style={{ color: '#ff7875' }}
                      onClick={() => onWithdraw(values)}
                    >
                      撤回
                    </Button>
                  </>
                )}
                {item === 'reapply' && (
                  <>
                    <Button
                      type='link'
                      style={{ color: '#ff7875' }}
                      onClick={() => onReapply(values)}
                    >
                      重新申请
                    </Button>
                  </>
                )}
                {index !== stateList[values.state].options!.length - 1 && (
                  <Divider type='vertical' />
                )}
              </React.Fragment>
            )
          })}
        </>
      )
    }
  ]

  const data: TDataType[] = [
    {
      key: '1',
      number: '0002390126',
      type: '1-1',
      name: '大白互联科技',
      state: 1,
      schedule: 'schedule',
      applyDate: '2023.03.12 13:56:47'
    },
    {
      key: '2',
      number: '0002390127',
      type: '1-1',
      name: '南沙政务网',
      state: 2,
      schedule: 'schedule',
      applyDate: '2023.03.12 13:56:47',
      approveDate: '2023.03.12 13:56:47'
    },
    {
      key: '3',
      number: '0002390128',
      type: '1-1',
      name: '实人+实名认证',
      state: 3,
      schedule: 'schedule',
      applyDate: '2023.03.12 13:56:47',
      approveDate: '2023.03.12 13:56:47'
    },
    {
      key: '4',
      number: '0002390129',
      type: '1-1',
      name: '实人+实名认证',
      state: 4,
      schedule: 'schedule',
      applyDate: '2023.03.12 13:56:47',
      approveDate: '2023.03.12 13:56:47'
    }
  ]

  return (
    <>
      <div className={style['state-filter']}>
        {stateList.map((item, index) => {
          return (
            <div style={{ marginRight: 20 }} key={item.text}>
              {item.hasBadge ? (
                <Badge count={item.badgeCount} overflowCount={99}>
                  <Button
                    type={index === activeState ? 'primary' : 'default'}
                    onClick={() => setActiveState(index)}
                  >
                    {item.text} ({item.count})
                  </Button>
                </Badge>
              ) : (
                <Button
                  type={index === activeState ? 'primary' : 'default'}
                  onClick={() => setActiveState(index)}
                >
                  {item.text} ({item.count})
                </Button>
              )}
            </div>
          )
        })}
      </div>
      <Divider />

      <Row>
        <Col span={24}>
          <Form
            form={form}
            name='search'
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'
          >
            <Row gutter={20}>
              <Col span={6}>
                <Form.Item label='审批单号' name='number'>
                  <Input placeholder='请输入审批单号' maxLength={10} />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label='申请类型：' name='type'>
                  <Cascader
                    style={{ width: '100%' }}
                    options={options}
                    onChange={e => onChange(e)}
                    multiple
                    maxTagCount='responsive'
                    showCheckedStrategy={Cascader.SHOW_CHILD}
                  />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label='应用/服务名称：' name='bane'>
                  <Input placeholder='请输入应用/服务名称' maxLength={10} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label='申请日期：' name='dateRange'>
                  <ConfigProvider locale={locale}>
                    <RangePicker
                      presets={rangePresets}
                      disabledDate={disabledDate}
                      onChange={onRangeChange}
                      onOpenChange={onOpenChange}
                    />
                  </ConfigProvider>
                </Form.Item>
              </Col>
              <Col span={24} className='tr'>
                <Form.Item>
                  <Space>
                    <Button onClick={onReset}>重置</Button>
                    <Button type='primary' htmlType='submit'>
                      查询
                    </Button>
                  </Space>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <ConfigProvider locale={locale}>
            <Table
              className='myApplications-table'
              columns={columns}
              dataSource={data}
              pagination={pagination}
              onChange={onTableChange}
            />
          </ConfigProvider>
        </Col>
      </Row>
    </>
  )
}

export default MyApplications
