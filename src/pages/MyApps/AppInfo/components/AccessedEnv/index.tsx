import React, { useEffect, useState } from 'react'
import style from '../index.module.scss'
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
  Form,
  Typography
} from 'antd'
import dayjs from 'dayjs'
import type { Dayjs } from 'dayjs'
import {
  CheckCircleOutlined,
  EditOutlined,
  HistoryOutlined,
  FileTextOutlined,
  EyeOutlined,
  EyeInvisibleOutlined
} from '@ant-design/icons'
import { dateFormat, disabledDate, rangePresets } from '@utils/date'
import { getStatistics } from '@mock/index'
import LineChart from './components/LineChart'
import { ColumnsType, TablePaginationConfig } from 'antd/es/table'
import IncreaseModal from './components/IncreaseModal'
import WarningModal from './components/WarningModal'
import DelayModal from './components/DelayModal'

const { RangePicker } = DatePicker
const { Paragraph } = Typography

const AccessedEnv = ({ id }: { id: number }) => {
  const [currentEnv, setCurrentEnv] = useState<'sit' | 'prod'>() // 当前环境
  useEffect(() => {
    setCurrentEnv('sit')
  }, [])

  const [clientSecret, setClientSecret] = useState<string>() // Client Secret

  const [isHide, setIsHide] = useState<boolean>(true) // 查看or隐藏Client Secret

  useEffect(() => {
    setClientSecret('12345678-1234-5678')
  }, [])

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

  const amount = 100000 // 今日能力调用量
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

  const [dataSource, setDataSource] = useState<any>()

  /**
   * 渲染表格
   */
  useEffect(() => {
    setDataSource([
      {
        id: '1',
        apiName: '获取人像接口',
        isAccessed: 1,
        apiState: 1,
        apiPath: 'xxx:x234354353/ospaids',
        apiLimitPerDay: 100,
        totalRequest: 20,
        errorRequest: 5
      },
      {
        id: '2',
        apiName: '1：1认证接口',
        isAccessed: 0,
        apiState: 0,
        apiPath: 'xxx:x234354353/ospaids',
        apiLimitPerDay: 10,
        totalRequest: 100,
        errorRequest: 90
      }
    ])
  }, [])

  /**
   * 开发文档
   */
  const toDevDocument = () => {
    console.log('开发文档')
  }

  const [increaseModalOpen, setIncreaseModalOpen] = useState<boolean>(false) // 控制申请增加用量Modal显示隐藏

  const [activeId, setActiveId] = useState<string | undefined>() // 当前需要操作的id

  /**
   * 申请增加用量
   */
  const onIncreaseUsage = (id: string) => {
    console.log(id)
    setActiveId(id)
    setIncreaseModalOpen(true)
  }

  /**
   * 申请增加用量回调函数
   */
  const increaseUsageCallback = () => {}

  const [warningModalOpen, setWarningModalOpen] = useState<boolean>(false) // 控制预警设置Modal显示隐藏

  /**
   * 预警设置
   */
  const onWarningSetting = (id: string) => {
    console.log(id)
    setActiveId(id)
    setWarningModalOpen(true)
  }

  /**
   * 预警设置回调函数
   */
  const warningSettingCallback = () => {}

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
      render: value => (
        <>
          {value.isAccessed ? (
            <>
              <i className={`${style.dot} ${style['accessed-dot']}`} />
              已接入
            </>
          ) : (
            <>
              <i className={`${style.dot} ${style['unaccessed-dot']}`} />
              未接入
            </>
          )}
        </>
      )
    },
    {
      title: '调用状态',
      render: value => (
        <>
          {value.apiState ? (
            <Tag color='success'>正常</Tag>
          ) : (
            <Tag color='error'>异常</Tag>
          )}
        </>
      )
    },
    {
      title: '接口访问路径',
      dataIndex: 'apiPath',
      ellipsis: true
    },
    {
      title: '日用量限额',
      dataIndex: 'apiLimitPerDay',
      ellipsis: true
    },
    {
      title: '请求总次数',
      dataIndex: 'totalRequest',
      ellipsis: true
    },
    {
      title: '请求失败次数',
      dataIndex: 'errorRequest',
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
          {currentEnv === 'sit' ? (
            <Button type='link' onClick={() => onIncreaseUsage(values.id)}>
              申请增加用量
            </Button>
          ) : (
            <Button type='link' onClick={() => onWarningSetting(values.id)}>
              预警设置
            </Button>
          )}
        </>
      )
    }
  ]

  const formProps = {
    labelCol: { span: 4 },
    wrapperCol: { span: 12 }
  }

  /**
   * 切换能力配置信息表单内容
   */
  const onChange = (activeKey: string) => {
    console.log('activeKey', activeKey)
  }

  const [delayModalOpen, setDelayModalOpen] = useState<boolean>(false) // 控制申请延期Modal显示隐藏

  /**
   * 申请延期
   */
  const onDelay = () => {
    // console.log(id)
    setDelayModalOpen(true)
  }

  /**
   * 申请延期回调函数
   */
  const delayCallback = () => {
    setActiveId(undefined)
  }

  return (
    <>
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
                {isHide ? '**************' : clientSecret}
                <Space>
                  <div>
                    {isHide ? (
                      <EyeOutlined
                        style={{
                          color: '#1E55D1',
                          marginRight: 4,
                          cursor: 'pointer'
                        }}
                        onClick={() => setIsHide(!isHide)}
                      />
                    ) : (
                      <EyeInvisibleOutlined
                        style={{
                          color: '#1E55D1',
                          marginRight: 4,
                          cursor: 'pointer'
                        }}
                        onClick={() => setIsHide(!isHide)}
                      />
                    )}
                    {isHide ? '查看' : '隐藏'}
                  </div>
                  <div>
                    <Paragraph
                      copyable={{ text: clientSecret }}
                      style={{
                        marginRight: 4,
                        marginBottom: 0,
                        display: 'inline-block'
                      }}
                    ></Paragraph>
                    复制
                  </div>
                </Space>
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
                <Button
                  type='primary'
                  icon={<HistoryOutlined />}
                  ghost
                  onClick={onDelay}
                >
                  申请延期
                </Button>
                <Button
                  type='primary'
                  icon={<FileTextOutlined />}
                  ghost
                  onClick={toDevDocument}
                >
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
            <Form name='accessedForm' {...formProps}>
              {/* 动态生成form表单内容 */}
              <Form.Item label='接入基础能力' rules={[{ required: true }]}>
                身份认证
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
      {currentEnv === 'sit' ? (
        <IncreaseModal
          id={activeId}
          open={increaseModalOpen}
          setOpen={setIncreaseModalOpen}
          callback={increaseUsageCallback}
        />
      ) : (
        <WarningModal
          id={activeId}
          open={warningModalOpen}
          setOpen={setWarningModalOpen}
          callback={warningSettingCallback}
        />
      )}
      <DelayModal
        id={activeId}
        open={delayModalOpen}
        setOpen={setDelayModalOpen}
        callback={delayCallback}
      />
    </>
  )
}

export default AccessedEnv