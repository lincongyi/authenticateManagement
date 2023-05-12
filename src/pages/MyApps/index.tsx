import React, { useEffect, useState } from 'react'
import style from './index.module.scss'
import {
  Button,
  Col,
  ConfigProvider,
  DatePicker,
  Divider,
  Form,
  Input,
  Row,
  Select,
  Space,
  Table,
  Tag,
  Typography
} from 'antd'
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table'
import type { Dayjs } from 'dayjs'
import 'dayjs/locale/zh-cn'
import locale from 'antd/locale/zh_CN'
import { rangePresets, disabledDate } from '@utils/date'
import CheckModal from './components/CheckModal'
import { getMyAppList } from '@mock/myApp'
import { TDictionary, getdictionary } from '@api/index'
// import { getMyAppList } from '@api/myApp'

const { RangePicker } = DatePicker

/**
 * 接入环境options
 */
const environmentOptions = [
  { label: '全部', value: -1 },
  { label: '测试环境', value: 0 },
  { label: '正式环境', value: 1 }
]

/**
 * 基础能力options
 */
const abilityOptions = [
  { label: '全部', value: -1 },
  { label: '身份认证', value: 0 }
]

const MyApps = () => {
  type TDataType = {
    id: number
    appName: string // 应用名称
    environment: number // 接入环境：0-测试环境；1-正式环境
    ability: string // 接入基础能力
    clientId: string // clientId
    expiredTime: string // 有效时间
    state: 0 | 1 | 2 | 3 | 4 // 状态：0-正常启用；1-即将过期；2-过期；3-停用；4-缺少授权文件
    addTime: string // 创建时间
  }

  const [appState, setAppState] = useState<TDictionary['dictList']>()

  useEffect(() => {
    ;(async () => {
      /**
       * 获取状态
       */
      const { data } = await getdictionary({ typeValues: ['appState'] })
      setAppState(data.appState.dictList)
    })()
  }, [])

  const [dataSource, setDataSource] = useState<TDataType[]>()

  /**
   * 获取我的应用列表
   */
  useEffect(() => {
    ;(async () => {
      const { data } = await getMyAppList()
      setDataSource(data.list)
    })()
  }, [])

  const [form] = Form.useForm()

  const [expiredRange, setExpiredRange] = useState<string[]>([])

  /**
   * 有效期-日期范围发生变化的回调
   */
  const onExpiredRangeChange = (
    dates: null | (Dayjs | null)[],
    dateStrings: string[]
  ) => {
    setExpiredRange(dateStrings)
  }

  /**
   * 有效期-关闭日期选择器的回调
   */
  const onExpiredOpenChange = (open: boolean) => {
    if (!open) form.setFieldValue('expiredRange', expiredRange)
  }

  const [dateRange, setDateRange] = useState<string[]>([])

  /**
   * 创建时间-日期范围发生变化的回调
   */
  const onRangeChange = (
    dates: null | (Dayjs | null)[],
    dateStrings: string[]
  ) => {
    setDateRange(dateStrings)
  }

  /**
   * 创建时间-关闭日期选择器的回调
   */
  const onOpenChange = (open: boolean) => {
    if (!open) form.setFieldValue('dateRange', dateRange)
  }

  /**
   * 重置
   */
  const onReset = () => {
    form.resetFields()
  }

  /**
   * 提交数据
   */
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  const [open, setOpen] = useState(false)
  /**
   * 查看
   */
  const onCheck = (item: TDataType) => {
    console.log(item)
  }

  /**
   * 认证数据
   */
  const onViewData = (item: TDataType) => {
    console.log(item)
  }

  /**
   * 注销
   */
  const onLogoff = (item: TDataType) => {
    console.log(item)
  }

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
      title: '应用名称',
      dataIndex: 'appName',
      ellipsis: true
    },
    {
      title: '接入环境',
      ellipsis: true,
      render: (values: TDataType) => (
        <>{environmentOptions[values.environment + 1].label}</>
      )
    },
    {
      title: '接入基础能力',
      dataIndex: 'ability',
      ellipsis: true
    },
    {
      title: 'clientId',
      dataIndex: 'clientId',
      ellipsis: true
    },
    {
      title: '有效时间',
      dataIndex: 'expiredTime',
      ellipsis: true
    },
    {
      title: '状态',
      ellipsis: true,
      render: (values: TDataType) => (
        <>
          {appState && (
            <Tag
              color={
                ['success', 'warning', 'error'][values?.state] || 'default'
              }
            >
              {appState[values.state].dictName}
            </Tag>
          )}
        </>
      )
    },
    {
      title: '创建时间',
      dataIndex: 'addTime',
      ellipsis: true
    },
    {
      title: '操作',
      key: 'action',
      width: 250,
      render: values => (
        <>
          <Button type='link' onClick={() => onCheck(values)}>
            查看
          </Button>
          <Divider type='vertical' style={{ margin: 0 }} />
          <Button type='link' onClick={() => onViewData(values)}>
            认证数据
          </Button>
          <Divider type='vertical' style={{ margin: 0 }} />
          <Button type='link' onClick={() => onLogoff(values)}>
            <Typography.Text type='danger'>注销</Typography.Text>
          </Button>
        </>
      )
    }
  ]

  return (
    <>
      <Row gutter={20} style={{ marginBottom: 20 }}>
        <Col span={8}>
          <div className={`${style.tag} ${style.icon01}`}>
            我的应用数<span className={style.count}>3</span>
          </div>
        </Col>
        <Col span={8}>
          <div className={`${style.tag} ${style.icon02}`}>
            正式应用<span className={style.count}>1</span>
          </div>
        </Col>
        <Col span={8}>
          <div className={`${style.tag} ${style.icon03}`}>
            测试应用<span className={style.count}>2</span>
          </div>
        </Col>
      </Row>

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
                <Form.Item label='应用名称' name='appName'>
                  <Input placeholder='请输入应用名称' maxLength={10} />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label='接入环境' name='environment'>
                  <Select
                    placeholder='请选择接入环境'
                    options={environmentOptions}
                  />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label='基础能力' name='ability'>
                  <Select
                    placeholder='请选择基础能力'
                    options={abilityOptions}
                  />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label='状态' name='state'>
                  <Select
                    placeholder='请选择状态'
                    fieldNames={{ label: 'dictName', value: 'dictValue' }}
                    options={appState}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label='有效期：' name='expiredRange'>
                  <ConfigProvider locale={locale}>
                    <RangePicker
                      presets={rangePresets}
                      onChange={onExpiredRangeChange}
                      onOpenChange={onExpiredOpenChange}
                    />
                  </ConfigProvider>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label='创建时间：' name='dateRange'>
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
          <Table
            rowKey='id'
            columns={columns}
            dataSource={dataSource}
            pagination={pagination}
            onChange={onTableChange}
          />
        </Col>
      </Row>
      <CheckModal open={open} setOpen={setOpen} />
    </>
  )
}

export default MyApps
