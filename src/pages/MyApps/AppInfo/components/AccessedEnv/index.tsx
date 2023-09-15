import React, { useContext, useEffect, useState } from 'react'
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
  Typography,
  Divider
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
import { appInfoContext } from '../..'
import { sitEnvContext } from '../SitEnv'
import { prodEnvContext } from '../ProdEnv'
import type { Tab } from 'rc-tabs/lib/interface.d.ts'
import { TFormItem } from '@/api/myApp'

const { RangePicker } = DatePicker
const { Paragraph } = Typography

const AccessedEnv = () => {
  const { env } = useContext(appInfoContext)!
  const { capability } = useContext(
    env === 'sit' ? sitEnvContext : prodEnvContext
  )!

  const [isHide, setIsHide] = useState(true) // 查看or隐藏Client Secret

  /**
   * 查看配置更新记录
   */
  const onCheck = () => {
    console.log('onCheck')
  }

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

  const [increaseModalOpen, setIncreaseModalOpen] = useState(false) // 控制申请增加用量Modal显示隐藏

  const [activeId, setActiveId] = useState<string | undefined>() // 能力API接入情况，当前需要操作的接口id

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

  const [warningModalOpen, setWarningModalOpen] = useState(false) // 控制预警设置Modal显示隐藏

  /**
   * 预警设置
   */
  const onWarningSetting = (id: string) => {
    console.log(id)
    setActiveId(id)
    setWarningModalOpen(true)
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
          {env === 'sit' ? (
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
   * 初始化能力配置信息表单内容
   */

  const [formTabs, setFormTabs] = useState<Tab[]>() // 能力配置信息Tabs
  const [formItems, setFormItems] = useState<TFormItem[]>() // 表单展示的数据

  useEffect(() => {
    const { form } = capability!
    if (form) {
      const tabs = form.formsList.map(item => ({
        label: item.formName,
        key: item.sort.toString()
      }))
      setFormTabs(tabs)
      setFormItems(capability?.form.formsList[0].form)
    }
  }, [capability])

  /**
   * 切换能力配置信息表单内容
   */
  const onChange = (activeKey: string) => {
    const item = capability?.form.formsList.find(
      item => item.sort === Number(activeKey)
    )
    if (!item) return
    setFormItems(item.form)
  }

  const [delayModalOpen, setDelayModalOpen] = useState(false) // 控制申请延期Modal显示隐藏

  /**
   * 申请延期
   */
  const onDelay = () => {
    setDelayModalOpen(true)
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
                {isHide ? '**************' : capability?.clientSecret}
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
                      copyable={{ text: capability?.clientSecret }}
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
              <div className={style.value}>{capability?.path}</div>
            </div>
            <div className={style['info-item']}>
              <div className={style.label}>接入时间</div>
              <div className={style.value}>{capability?.addTime}</div>
            </div>
            <div className={style['info-item']}>
              <div className={style.label}>配置更新时间</div>
              <div className={style.value}>
                {capability?.updateTime}
                <Button type='link' onClick={onCheck}>
                  查看配置更新记录
                </Button>
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
                <Button
                  type='primary'
                  icon={<EditOutlined />}
                  ghost
                  disabled={!formItems || !formItems?.length}
                >
                  申请配置更改
                </Button>
                <Button
                  type='primary'
                  icon={<HistoryOutlined />}
                  ghost
                  onClick={onDelay}
                  disabled={!formItems || !formItems?.length}
                >
                  申请延期
                </Button>
                <Button
                  type='primary'
                  icon={<FileTextOutlined />}
                  ghost
                  onClick={toDevDocument}
                  disabled={!formItems || !formItems?.length}
                >
                  开发文档
                </Button>
              </Space>
            </div>
            {formTabs?.length ? (
              <>
                <Tabs onChange={onChange} items={formTabs} />
                <Form name='accessedForm' {...formProps}>
                  {/* 动态生成form表单内容 */}
                  {formItems?.map((item, index) => (
                    <Form.Item label={item.cnName} key={index}>
                      {item.value}
                    </Form.Item>
                  ))}
                </Form>
              </>
            ) : (
              <>
                <Divider />
                暂无数据
              </>
            )}
          </div>
        </Col>
      </Row>
      {env === 'sit' ? (
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
        />
      )}
      <DelayModal open={delayModalOpen} setOpen={setDelayModalOpen} />
    </>
  )
}

export default AccessedEnv
