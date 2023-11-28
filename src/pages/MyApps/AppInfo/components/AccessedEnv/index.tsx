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
  Empty
} from 'antd'
import dayjs from 'dayjs'
import type { Dayjs } from 'dayjs'
import {
  CheckCircleOutlined,
  EditOutlined,
  HistoryOutlined,
  FileTextOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
  CopyOutlined,
  ExclamationCircleOutlined,
  CloseCircleOutlined
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
import { getApiData, getCallData } from '@/api/myApp'
import type { TGetApiDataResponse, TGetCallDataResponse } from '@/api/myApp'
import { useNavigate } from 'react-router-dom'
import DynamicFormInfo from '@/components/DynamicFormInfo'
import { useStore } from '@/stores'
import type { RangeValue } from 'rc-picker/lib/interface.d'
import { getProjectId } from '@/api/devDocument'
import { handleCopy } from '@/utils'

const { RangePicker } = DatePicker

const AccessedEnv = () => {
  const { env } = useContext(appInfoContext)!

  const { capability } = useContext(
    env === 'sit' ? sitEnvContext : prodEnvContext
  )!

  const { myAppStore } = useStore()

  const appId = myAppStore.appId

  const clientId = myAppStore.envClientId[env]

  const [isHide, setIsHide] = useState(true) // 查看or隐藏Client Secret

  const [dateRange, setDateRange] = useState<string[]>([
    dayjs().add(-7, 'd').format(dateFormat),
    dayjs().format(dateFormat)
  ])
  /**
   * 日期范围发生变化的回调
   */
  const onRangeChange = (
    dates: RangeValue<Dayjs>,
    dateStrings: [string, string]
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
   * 获取能力API接入情况
   */
  const fetchApiData = async () => {
    if (!capability || !clientId) return

    const { data } = await getApiData({
      capabilityId: capability.capabilityId,
      clientId
    })
    setDataSource(data)
  }

  /**
   * 初始化渲染能力接口表格数据
   */
  useEffect(() => {
    fetchApiData()
  }, [])

  /**
   * 开发文档
   */
  const toDevDocument = async (directoryId?: number) => {
    if (!capability) return
    const { data } = await getProjectId({ id: capability.capabilityId })
    if (!data) return
    let url = `../../devDocument?projectId=${data.projectId}`
    if (directoryId) url += `&directoryId=${directoryId}`
    navigate(url)
  }

  const [increaseModalOpen, setIncreaseModalOpen] = useState(false) // 控制增加用量Modal显示隐藏

  const [apiId, setApiId] = useState<number>() // 接口id

  const [apiAddNum, setApiAddNum] = useState<number>() // 增加用量

  /**
   * 增加用量
   */
  const onIncreaseUsage = (values: TGetApiDataResponse) => {
    setApiId(values.id)
    setApiAddNum(values.addNum)
    setIncreaseModalOpen(true)
  }

  const [warningModalOpen, setWarningModalOpen] = useState(false) // 控制预警设置Modal显示隐藏

  /**
   * 预警设置
   */
  const onWarningSetting = (id: number) => {
    setApiId(id)
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
            <Button type='link' onClick={() => onIncreaseUsage(values)}>
              增加用量
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

  const navigate = useNavigate()

  /**
   * 申请配置更改
   */
  const onEdit = () => {
    if (!capability) return
    navigate(
      `./access?appId=${appId}&capabilityId=${
        capability.capabilityId
      }&env=${env}&isEdit=${true}`
    )
  }

  const [delayModalOpen, setDelayModalOpen] = useState(false) // 控制申请延期Modal显示隐藏

  /**
   * 申请延期
   */
  const onDelay = () => {
    setDelayModalOpen(true)
  }

  const accessStateMap = {
    tagColor: ['success', 'warning', 'error'],
    content: ['已接入', '即将过期', '已过期'],
    icon: [
      <CheckCircleOutlined style={{ marginRight: 4 }} key={1} />,
      <ExclamationCircleOutlined style={{ marginRight: 4 }} key={2} />,
      <CloseCircleOutlined style={{ marginRight: 4 }} key={3} />
    ]
  }

  return (
    <>
      {capability && (
        <Row gutter={[20, 20]}>
          <Col span={10}>
            <div className={style.panel}>
              <div className={style.title}>能力接入信息</div>
              <div className={style['info-item']}>
                <div className={style.label}>接入状态</div>
                <div className={style.value}>
                  <Tag
                    color={
                      accessStateMap.tagColor[
                        capability.accessState ? capability.accessState - 1 : 0
                      ]
                    }
                  >
                    {
                      accessStateMap.icon[
                        capability.accessState ? capability.accessState - 1 : 0
                      ]
                    }
                    {
                      accessStateMap.content[
                        capability.accessState ? capability.accessState - 1 : 0
                      ]
                    }
                  </Tag>
                </div>
              </div>
              <div className={style['info-item']}>
                <div className={style.label}>Client Secret</div>
                <div className={style.value}>
                  {isHide ? '**************' : capability.clientSecret}
                  <Space>
                    <div
                      style={{ cursor: 'pointer' }}
                      onClick={() => setIsHide(!isHide)}
                    >
                      {isHide ? (
                        <EyeOutlined
                          style={{
                            color: '#1E55D1',
                            marginRight: 4
                          }}
                        />
                      ) : (
                        <EyeInvisibleOutlined
                          style={{
                            color: '#1E55D1',
                            marginRight: 4
                          }}
                        />
                      )}
                      {isHide ? '查看' : '隐藏'}
                    </div>
                    <div
                      style={{ cursor: 'pointer' }}
                      onClick={() => handleCopy(capability.clientSecret)}
                    >
                      <CopyOutlined
                        style={{
                          color: '#1E55D1',
                          marginRight: 4
                        }}
                      />
                      复制
                    </div>
                  </Space>
                </div>
              </div>
              <div className={style['info-item']}>
                <div className={style.label}>能力访问路径</div>
                <div className={style.value}>{capability.path}</div>
              </div>
              <div className={style['info-item']}>
                <div className={style.label}>接入时间</div>
                <div className={style.value}>{capability.addTime}</div>
              </div>
              <div className={style['info-item']}>
                <div className={style.label}>配置更新时间</div>
                <div className={style.value}>{capability.updateTime}</div>
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
                message='测试环境限制接口每日用量限额，每日可发起3次增加用量，次日将重置用量限额'
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
                  >
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
                    onClick={() => toDevDocument()}
                  >
                    开发文档
                  </Button>
                </Space>
              </div>

              {capability && (
                <DynamicFormInfo formList={capability.form.formList} />
              )}
            </div>
          </Col>
        </Row>
      )}

      {apiId && (
        <>
          {env === 'sit' ? (
            <>
              {apiAddNum && (
                <IncreaseModal
                  id={apiId}
                  addNum={apiAddNum}
                  open={increaseModalOpen}
                  setOpen={setIncreaseModalOpen}
                  callback={fetchApiData}
                />
              )}
            </>
          ) : (
            <WarningModal
              id={apiId}
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
