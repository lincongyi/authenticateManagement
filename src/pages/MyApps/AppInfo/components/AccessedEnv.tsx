import React, { useEffect, useState } from 'react'
import style from './index.module.scss'
import {
  Button,
  Col,
  Row,
  Tag,
  DatePicker,
  Alert,
  Table,
  Space,
  Tabs,
  Form
} from 'antd'
import dayjs from 'dayjs'
import type { Dayjs } from 'dayjs'
import {
  CheckCircleOutlined,
  EditOutlined,
  HistoryOutlined,
  FileTextOutlined
} from '@ant-design/icons'
import { dateFormat, disabledDate, rangePresets } from '@utils/date'
import { getStatistics } from '@mock/index'
import LineChart from './LineChart'
import { ColumnsType, TablePaginationConfig } from 'antd/es/table'

const { RangePicker } = DatePicker

const AccessedEnv = () => {
  const [dateRange, setDateRange] = useState<string[]>([
    dayjs().add(-7, 'd').format(dateFormat),
    dayjs().format(dateFormat)
  ])
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
    if (!open) renderChart()
  }

  const amount = 100000
  /**
   * 图表数据
   */
  const [chartData, setChartData] = useState<TLineChart>()

  /**
   * 渲染图表
   */
  const renderChart = async (startTime = '', endTime = '') => {
    const { data } = await getStatistics({
      startTime,
      endTime
    })
    setChartData(data)
  }

  useEffect(() => {
    renderChart()
  }, [])

  const [dataSource, setDataSource] = useState([])

  /**
   * 开发文档
   */
  const toDevDocument = () => {}

  /**
   * 申请增加用量
   */
  const onApply = values => {
    console.log(values)
  }

  /**
   * 表格分页参数
   */
  const [pagination, setPagination] = useState({
    pageNum: 1,
    pageSize: 10,
    total: 0
  })

  /**
   * 分页、排序、筛选变化时触发
   */
  const onTableChange = (tablePagination: TablePaginationConfig) => {
    setPagination({ ...pagination, ...tablePagination })
  }

  const columns: ColumnsType<any> = [
    {
      title: '接口名称',
      dataIndex: 'apiName',
      ellipsis: true
    },
    {
      title: '接口状态',
      dataIndex: 'apiState',
      ellipsis: true
    },
    {
      title: '调用状态',
      dataIndex: 'apiState',
      ellipsis: true
    },
    {
      title: '接口访问路径',
      dataIndex: 'apiState',
      ellipsis: true
    },
    {
      title: '日用量限额',
      dataIndex: 'apiState',
      ellipsis: true
    },
    {
      title: '请求总次数',
      dataIndex: 'apiState',
      ellipsis: true
    },
    {
      title: '请求失败次数',
      dataIndex: 'apiState',
      ellipsis: true
    },
    {
      title: '操作',
      key: 'action',
      width: 250,
      render: values => (
        <>
          <Button type='link' onClick={toDevDocument}>
            开发文档
          </Button>
          <Button type='link' onClick={() => onApply(values)}>
            申请增加用量
          </Button>
        </>
      )
    }
  ]

  /**
   * 切换表单信息
   */
  const onChange = (activeKey: string) => {
    console.log('activeKey', activeKey)
  }

  return (
    <Row gutter={[20, 20]}>
      <Col span={10}>
        <div className={style.panel}>
          <div className={style.title}>能力接入信息</div>
          <div className={style['info-item']}>
            <div className={style.label}>接入状态</div>
            <div className={style.value}>
              <Tag color='green'>
                <CheckCircleOutlined style={{ marginRight: 4 }} />
                已接入
              </Tag>
            </div>
          </div>
          <div className={style['info-item']}>
            <div className={style.label}>Client Secret</div>
            <div className={style.value}>
              <Tag color='green'>
                <CheckCircleOutlined style={{ marginRight: 4 }} />
                已接入
              </Tag>
            </div>
          </div>
          <div className={style['info-item']}>
            <div className={style.label}>能力访问路径</div>
            <div className={style.value}>
              https://open.weijing.com/ausudjjcndjfe
            </div>
          </div>
          <div className={style['info-item']}>
            <div className={style.label}>接入时间</div>
            <div className={style.value}>2023-07-01 09:12:14</div>
          </div>
          <div className={style['info-item']}>
            <div className={style.label}>配置更新时间</div>
            <div className={style.value}>
              2023-07-01 09:12:14
              <Button type='link'>查看配置更新记录</Button>
            </div>
          </div>
        </div>
      </Col>

      <Col span={14}>
        <div className={style.panel}>
          <div className={style.title}>
            能力调用数据
            <RangePicker
              defaultValue={[
                dayjs(dateRange[0], dateFormat),
                dayjs(dateRange[1], dateFormat)
              ]}
              presets={rangePresets}
              disabledDate={disabledDate}
              onChange={onRangeChange}
              onOpenChange={onOpenChange}
            />
          </div>
          <Alert
            style={{ margin: '10px 0' }}
            message={
              <>
                今日能力调用量
                <span className={style.amount}>{amount}</span>
              </>
            }
            type='info'
            showIcon
          />
          {chartData && <LineChart chartData={chartData} />}
        </div>
      </Col>

      <Col span={24}>
        <div className={style.panel}>
          <div className={style.title}>能力API接入情况</div>
          <Alert
            style={{ margin: '10px 0' }}
            message='测试环境限制接口每日用量限额，每日可发起3次申请增加用量，次日将重置用量限额'
            type='info'
            showIcon
          />
          <Table
            rowKey='id'
            columns={columns}
            dataSource={dataSource}
            pagination={pagination}
            onChange={onTableChange}
          />
        </div>
      </Col>

      <Col span={24}>
        <div className={style.panel}>
          <div className={style.title}>
            能力配置信息
            <Space>
              <Button type='primary' icon={<EditOutlined />} ghost>
                申请配置更改
              </Button>
              <Button type='primary' icon={<HistoryOutlined />} ghost>
                申请延期
              </Button>
              <Button type='primary' icon={<FileTextOutlined />} ghost>
                开发文档
              </Button>
            </Space>
          </div>
          <Tabs
            onChange={onChange}
            items={[
              { label: '基础能力信息', key: '1' },
              { label: '并发配置', key: '2' },
              { label: '开发配置', key: '3' }
            ]}
          />
          <Form
            name='accessedForm'
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 12 }}
          >
            {/* 动态生成form表单内容 */}
            <Form.Item label='接入基础能力' rules={[{ required: true }]}>
              身份认证
            </Form.Item>
          </Form>
        </div>
      </Col>
    </Row>
  )
}

export default AccessedEnv
