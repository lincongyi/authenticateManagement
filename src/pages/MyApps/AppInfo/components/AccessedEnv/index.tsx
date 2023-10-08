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
  Empty,
  Image
} from 'antd'
import type { UploadFile } from 'antd'
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
import LineChart from './components/LineChart'
import { ColumnsType } from 'antd/es/table'
import IncreaseModal from './components/IncreaseModal'
import WarningModal from './components/WarningModal'
import DelayModal from './components/DelayModal'
import { appInfoContext } from '../..'
import { sitEnvContext } from '../SitEnv'
import { prodEnvContext } from '../ProdEnv'
import type { Tab } from 'rc-tabs/lib/interface.d.ts'
import { getApiData, getCallData } from '@/api/myApp'
import type { TGetApiDataResponse, TGetCallDataResponse } from '@/api/myApp'
import type { TFormItem, TFormTabledataSource } from '@/api/ability'
import { useNavigate } from 'react-router-dom'

const { RangePicker } = DatePicker
const { Paragraph } = Typography

const AccessedEnv = () => {
  const { env } = useContext(appInfoContext)!
  const { capability, clientId } = useContext(
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

  /**
   * 能力调用数据
   */
  const [callData, setCallData] = useState<TGetCallDataResponse>()

  /**
   * 渲染图表
   */
  const renderChart = async () => {
    if (!capability || !clientId) return

    const { data } = await getCallData({
      capabilityId: capability.capabilityId,
      clientId,
      startTime: dateRange[0],
      endTime: dateRange[1]
    })
    setCallData(data)
  }

  useEffect(() => {
    renderChart()
  }, [])

  const [dataSource, setDataSource] = useState<any>() // 能力接口表格数据

  /**
   * 渲染能力接口表格数据
   */
  useEffect(() => {
    ;(async () => {
      if (!capability || !clientId) return
      const { data } = await getApiData({
        capabilityId: capability.capabilityId,
        clientId
      })
      setDataSource(data)
    })()
  }, [])

  /**
   * 开发文档
   */
  const toDevDocument = (id?: number) => {
    if (!capability) return
    let url = `../../devDocument?capabilityId=${capability.capabilityId}`
    if (id) url += `&directoryId=${id}`
    navigate(url)
  }

  const [increaseModalOpen, setIncreaseModalOpen] = useState(false) // 控制申请增加用量Modal显示隐藏

  const [activeId, setActiveId] = useState<number>() // 能力API接入情况，当前需要操作的接口id

  /**
   * 申请增加用量
   */
  const onIncreaseUsage = (id: number) => {
    setActiveId(id)
    setIncreaseModalOpen(true)
  }

  const [warningModalOpen, setWarningModalOpen] = useState(false) // 控制预警设置Modal显示隐藏

  /**
   * 预警设置
   */
  const onWarningSetting = (id: number) => {
    setActiveId(id)
    setWarningModalOpen(true)
  }

  const columns: ColumnsType<any> = [
    {
      title: '接口名称',
      dataIndex: 'name',
      ellipsis: true
    },
    {
      title: '接口访问路径',
      dataIndex: 'path',
      ellipsis: true
    },
    {
      title: env === 'sit' ? '日用量限额' : '每秒并发数',
      dataIndex: env === 'sit' ? 'dateNum' : 'concurrency',
      ellipsis: true
    },
    {
      title: '请求总次数',
      dataIndex: 'reqTotal',
      ellipsis: true
    },
    {
      title: '请求失败次数',
      dataIndex: 'errorNum',
      ellipsis: true
    },
    {
      title: '操作',
      key: 'action',
      width: 250,
      render: (values: TGetApiDataResponse) => (
        <>
          <Button type='link' onClick={() => toDevDocument(values.directoryId)}>
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

  /**
   * 预处理部分动态表单数据
   */
  const formatFormItemValue = (item: TFormItem) => {
    if (item.type === 'imageUpload') {
      return (
        <>
          {(item.labelValue as UploadFile[]).map(__item => (
            <Image width={200} height={200} src={__item.url} key={__item.uid} />
          ))}
        </>
      )
    } else if (item.type === 'fileUpload') {
      return (
        <>
          {(item.labelValue as UploadFile[]).map(__item => (
            <Typography.Link href={__item.url} target='_blank' key={__item.uid}>
              {__item.name}
            </Typography.Link>
          ))}
        </>
      )
    } else if (item.type === 'table') {
      const defaultFormColumns = [
        {
          title: '接口名称',
          width: 200,
          dataIndex: 'label'
        },
        {
          title: '调用并发上限（每秒并发）',
          dataIndex: 'value'
        }
      ]
      return (
        <Table
          rowKey='label'
          bordered
          dataSource={item.labelValue as TFormTabledataSource[]}
          columns={defaultFormColumns}
          pagination={false}
        />
      )
    }
    return item.labelValue as string
  }

  useEffect(() => {
    if (!capability) return
    const { form } = capability
    if (form) {
      const tabs = form.formList.map(item => ({
        label: item.formName,
        key: item.formId.toString()
      }))
      setFormTabs(tabs)
      setFormItems([
        ...capability.form.formList[0].defaultFormList!,
        ...capability.form.formList[0].form
      ])
    }
  }, [capability])

  /**
   * 切换能力配置信息表单内容
   */
  const onChange = (activeKey: string) => {
    const item = capability?.form.formList.find(
      item => item.formId === +activeKey
    )
    if (!item) return
    const index = formTabs?.findIndex(__item => __item.key === activeKey)
    if (!index) {
      setFormItems([...item.defaultFormList!, ...item.form])
    } else {
      setFormItems(item.form)
    }
  }

  const navigate = useNavigate()

  /**
   * 申请配置更改
   */
  const onEdit = () => {
    if (!capability) return
    navigate(
      `./access?clientId=${clientId}&capabilityId=${capability.capabilityId}`
    )
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
          <div className={`${style.panel} ${style['flex-column']}`}>
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
            {callData && callData.total ? (
              <>
                <Alert
                  style={{ margin: '10px 0' }}
                  message={
                    <>
                      能力调用总量
                      <span className={style.amount}>{callData?.total}</span>
                    </>
                  }
                  type='info'
                  showIcon
                />
                <LineChart
                  chartData={{
                    xAxis: callData.dateList,
                    yAxis: callData.numList
                  }}
                />
              </>
            ) : (
              <div className='flex-center' style={{ flex: 1 }}>
                <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
              </div>
            )}
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
            <Table rowKey='id' columns={columns} dataSource={dataSource} />
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
                  onClick={onEdit}
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
                  onClick={() => toDevDocument()}
                  disabled={!formItems || !formItems?.length}
                >
                  开发文档
                </Button>
              </Space>
            </div>
            {formTabs?.length ? (
              <>
                <Tabs onChange={onChange} items={formTabs} />
                {formItems && !!formItems.length && (
                  <Form {...formProps}>
                    {formItems.map((item, index) => (
                      <div key={item.field}>
                        <Form.Item label={item.cnName}>
                          {formatFormItemValue(item)}
                        </Form.Item>
                      </div>
                    ))}
                  </Form>
                )}
              </>
            ) : (
              <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
            )}
          </div>
        </Col>
      </Row>
      {activeId && (
        <>
          {env === 'sit' ? (
            <IncreaseModal
              id={activeId}
              open={increaseModalOpen}
              setOpen={setIncreaseModalOpen}
            />
          ) : (
            <WarningModal
              id={activeId}
              open={warningModalOpen}
              setOpen={setWarningModalOpen}
            />
          )}
        </>
      )}

      <DelayModal open={delayModalOpen} setOpen={setDelayModalOpen} />
    </>
  )
}

export default AccessedEnv
