import React, { useEffect, useState } from 'react'
import style from './index.module.scss'
import {
  Badge,
  Button,
  Cascader,
  Col,
  DatePicker,
  Divider,
  Form,
  Input,
  Popconfirm,
  Row,
  Space,
  Table,
  Tag,
  Timeline,
  message
} from 'antd'
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table'
import 'dayjs/locale/zh-cn'
import { rangePresets, disabledDate, dateFormat } from '@utils/date'
import {
  getApplyCount,
  getApplyList,
  handleUrging,
  handleStopApply
} from '@api/myApplications'
import type { TGetApplyListParams } from '@api/myApplications'
import { formatDictionary } from '@utils/index'
import CheckModal from './components/CheckModal'
import { useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'
import { useStore } from '@stores/index'
import { useUpdateEffect, useGetDictionary } from '@/hooks'
import { observer } from 'mobx-react-lite'
import {
  CheckCircleFilled,
  ClockCircleFilled,
  CloseCircleFilled,
  ExclamationCircleFilled
} from '@ant-design/icons'

const { RangePicker } = DatePicker

const stateInfo = [
  { title: '全部申请' },
  { title: '审批通过', options: ['check'] },
  { title: '审批中', options: ['check', 'urge', 'withdraw'] },
  { title: '审批不通过', options: ['check'] },
  { title: '撤回', options: ['check', 'reapply'] }
]

const MyApplications = () => {
  type TStateList = TState & { title: string; options?: string[] }

  const [stateList, setStateList] = useState<TStateList[]>() // 审批状态数据统计

  const { dictionaryStore } = useGetDictionary()

  /**
   * @param {number} state 审批状态
   * @returns {string} 审批状态中文
   */
  const stateToString = (state: number) => {
    const result = stateList && stateList.find(item => item.state === state)
    return result?.title || ''
  }

  /**
   * 申请状态按钮group
   */
  const [activeState, setActiveState] = useState<0 | 1 | 2 | 3 | 4>(0)

  const { applyCountStore } = useStore()

  /**
   * 获取申请总数
   */
  const initApplyCount = async () => {
    const { data } = await getApplyCount()
    if (!data) return
    applyCountStore.setApplyCount(data)
    renderApplyCount(data)
  }

  /**
   * 渲染申请总数
   */
  const renderApplyCount = (data: TState[]) => {
    const list = data.map((item: TState, index: number) => ({
      ...item,
      ...stateInfo[index]
    }))
    setStateList(list)
  }

  /**
   * 获取申请数量
   */
  useEffect(() => {
    initApplyCount()
  }, [])

  const [processKeyList, setProcessKeyList] = useState<Option[]>()

  useEffect(() => {
    const keyList: TDictList[] | undefined = dictionaryStore.getDictionaryItem(
      'processKeyList'
    ) as TDictList[] | undefined
    if (!keyList) return
    setProcessKeyList(formatDictionary(keyList))
  }, [dictionaryStore.getDictionaryItem('processKeyList')])

  /**
   * 初始化表格数据
   */
  useEffect(() => {
    renderTable({
      processState: -1,
      ...defaultPagination
    })
  }, [])

  /**
   * 根据key值返回中文字符串
   */
  const formatDictValue = (key: string) => {
    /**
     * 扁平化处理options
     * @returns {Option[]}
     */
    const flattenOptions = processKeyList?.reduce(
      (prev: Option[], next: Option) => [...prev, ...next.children!],
      []
    )
    const result = flattenOptions?.find(item => item.value === key)
    return result?.label || ''
  }

  const [dataSource, setDataSource] = useState<TApplyDetail[]>([])

  /**
   * 渲染表格数据
   */
  const renderTable = async (params: TGetApplyListParams) => {
    const { data } = await getApplyList(params)
    if (!data) return
    const list = data.list.map(item => {
      const { state } = item
      /**
       * 处理审批进度组件数据
       */
      const timeline = item.nodes.map((__item, __index) => {
        return {
          dot:
            __index === item.nodes.length - 1 ? (
              [
                <CheckCircleFilled key={state} />,
                <ClockCircleFilled key={state} />,
                <CloseCircleFilled style={{ color: '#FF4050' }} key={state} />,
                <ExclamationCircleFilled
                  style={{ color: '#bfbfbf' }}
                  key={state}
                />
              ][state]
            ) : (
              <CheckCircleFilled />
            ),
          color: ['blue', 'gray', 'red', 'orange'][__item.isPass],
          children: (
            <span
              style={{
                color: ['blue', 'gray', 'red', 'orange'][__item.isPass]
              }}
            >
              {__item.name}({__item.userCount})
            </span>
          )
        }
      })
      return { ...item, timeline }
    })
    setDataSource(list)
    const { pageNum, pageSize, total } = data

    setPagination({ ...pagination, pageNum, pageSize, total })
  }

  /**
   * 监听申请状态切换
   */
  useUpdateEffect(() => {
    form.resetFields()
    setPagination({ ...pagination, pageNum: defaultPagination.pageNum })
    renderTable({
      processState: activeState - 1,
      ...defaultPagination
    } as TGetApplyListParams)
  }, [activeState])

  const [form] = Form.useForm()

  /**
   * 重置
   */
  const onReset = () => {
    setPagination({ ...pagination, ...defaultPagination })
    form.resetFields()
  }

  type TValues = {
    instanceId?: string | undefined
    keys?: [string[]] | undefined
    unifyName?: string | undefined
    dateRange?: string[]
  }

  /**
   * 查询
   */
  const onFinish = (values: TValues) => {
    const keys = values.keys?.map((item: string[]) => item.at(-1))
    const [startTime, endTime] = values.dateRange
      ? [
          dayjs(values.dateRange[0]).format(dateFormat),
          dayjs(values.dateRange[1]).format(dateFormat)
        ]
      : [undefined, undefined]
    const params = {
      ...values,
      keys,
      startTime,
      endTime,
      processState: activeState - 1,
      ...defaultPagination
    } as TGetApplyListParams
    renderTable(params)

    initApplyCount()
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  const [instanceId, setInstanceId] = useState('') // 当前active审批单号
  const [open, setOpen] = useState(false) // 控制查看Modal显示隐藏
  /**
   * 查看
   */
  const onCheck = ({
    processInstanceId
  }: {
    processInstanceId: TApplyDetail['processInstanceId']
  }) => {
    setInstanceId(processInstanceId)
    setOpen(true)
  }

  const [messageApi, contextHolder] = message.useMessage()

  /**
   * 催办
   */
  const onUrge = async (value: TApplyDetail) => {
    if (value.urging) {
      return messageApi.warning({
        content: '当前审批节点已发送催办，请勿重复操作',
        duration: 2
      })
    }
    await handleUrging({
      instanceId: value.processInstanceId
    })
    messageApi.success({
      content: '已成功对审批人发送催办提醒！',
      duration: 2
    })
    renderTable({
      processState: activeState - 1,
      ...defaultPagination
    } as TGetApplyListParams)
  }

  /**
   * 撤回
   */
  const onWithdraw = async (value: TApplyDetail) => {
    await handleStopApply({
      instanceId: value.processInstanceId
    })
    messageApi.success({
      content: '已成功撤回！',
      duration: 2
    })
    renderTable({
      processState: activeState - 1,
      ...defaultPagination
    } as TGetApplyListParams)
  }

  const navigate = useNavigate()

  /**
   * 重新申请
   */
  const onReapply = (values: TApplyDetail) => {
    const { key } = values
    /**
     * 针对还有个别类型进行跳转区分
     */
    if (['UPDATE_COMPANY_INFO'].includes(key)) {
      navigate('/app/myAccount/companySettings')
    } else if (
      [
        'ACCESS_CAPABILITY',
        'PROD_CAPABILITY',
        'APPLY_FILE_CAPABILITY',
        'STOP_APPLICATION',
        'START_APPLICATION',
        'CAPABILITY_UPDATE',
        'ADD_NUM_APPLICATION',
        'DELAY_CAPABILITY'
      ].includes(key)
    ) {
      const { appId } = values.info
      navigate(`/app/myApps/appInfo?appId=${appId}`)
    }
  }

  const defaultPagination = {
    pageNum: 1,
    pageSize: 10
  }

  /**
   * 表格分页参数
   */
  const [pagination, setPagination] = useState<TPagination>({
    ...defaultPagination,
    total: 0
  })

  /**
   * 翻页
   */
  const onTableChange = (tablePagination: TablePaginationConfig) => {
    const pageNum = tablePagination.current || 1
    setPagination({ ...pagination, pageNum })
  }

  useUpdateEffect(() => {
    const dateRange: [string, string] | undefined =
      form.getFieldValue('dateRange')
    const [startTime, endTime] = dateRange || [undefined, undefined]
    const { pageNum, pageSize } = pagination
    const params: TGetApplyListParams = {
      processState: activeState - 1,
      ...form.getFieldsValue(),
      startTime,
      endTime,
      pageNum,
      pageSize
    }
    renderTable(params)
  }, [pagination.pageNum])

  const columns: ColumnsType<TApplyDetail> = [
    {
      title: '序号',
      key: 'order',
      width: 60,
      align: 'center',
      render: (values: TApplyDetail, record, index) => `${index + 1}`
    },
    {
      title: '审批单号',
      dataIndex: 'processInstanceId',
      ellipsis: true
    },
    {
      title: '申请类型',
      ellipsis: true,
      render: (values: TApplyDetail) => formatDictValue(values.key)
    },
    {
      title: '应用/服务名称',
      dataIndex: 'unifyName',
      ellipsis: true
    },
    {
      title: '审批状态',
      align: 'center',
      render: (values: TApplyDetail) => (
        <Tag
          color={['success', 'processing', 'error', 'default'][values.state]}
        >
          {stateToString(values.state)}
        </Tag>
      )
    },
    {
      title: '审批进度',
      width: 150,
      render: (values: TApplyDetail) => (
        <>
          <Timeline items={values.timeline} />
        </>
      )
    },
    {
      title: '申请时间',
      dataIndex: 'addTime'
    },
    {
      title: '审批时间',
      dataIndex: 'modTime'
    },
    {
      title: '操作',
      key: 'action',
      width: 300,
      render: (values: TApplyDetail) => (
        <>
          {stateList?.length &&
            stateList[values.state + 1].options?.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  {item === 'check' && (
                    <>
                      <Badge dot={!values.isNoticeUser} offset={[-15, 10]}>
                        <Button type='link' onClick={() => onCheck(values)}>
                          查看
                        </Button>
                      </Badge>
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
                      <Popconfirm
                        title='撤回申请单'
                        description='申请单正在审批中，是否确认撤回当前申请单？'
                        onConfirm={() => onWithdraw(values)}
                        okText='确定'
                        cancelText='取消'
                      >
                        <Button type='link' style={{ color: 'orange' }}>
                          撤回
                        </Button>
                      </Popconfirm>
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
                  {index !==
                    stateList[values.state + 1].options!.length - 1 && (
                    <Divider type='vertical' style={{ margin: 0 }} />
                  )}
                </React.Fragment>
              )
            })}
        </>
      )
    }
  ]

  return (
    <>
      {contextHolder}
      <div className={style['state-filter']}>
        {stateList?.length &&
          stateList.map((item, index) => {
            return (
              <div style={{ marginRight: 20 }} key={index}>
                {item.badgeCount ? (
                  <Badge count={item.badgeCount} overflowCount={99}>
                    <Button
                      type={index === activeState ? 'primary' : 'default'}
                      onClick={() => setActiveState(index as 0 | 1 | 2 | 3)}
                    >
                      {item.title} ({item.count})
                    </Button>
                  </Badge>
                ) : (
                  <Button
                    type={index === activeState ? 'primary' : 'default'}
                    onClick={() => setActiveState(index as 0 | 1 | 2 | 3)}
                  >
                    {item.title} ({item.count})
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
                <Form.Item label='申请类型：' name='keys'>
                  <Cascader
                    placeholder='请选择申请类型'
                    style={{ width: '100%' }}
                    options={processKeyList}
                    multiple
                    maxTagCount='responsive'
                    showCheckedStrategy={Cascader.SHOW_CHILD}
                  />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label='审批单号' name='instanceId'>
                  <Input placeholder='请输入审批单号' maxLength={40} />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label='应用/服务名称：' name='unifyName'>
                  <Input placeholder='请输入应用/服务名称' maxLength={10} />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label='申请日期：' name='dateRange'>
                  <RangePicker
                    presets={rangePresets}
                    disabledDate={disabledDate}
                  />
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
            className={style['my-applications-table']}
            columns={columns}
            dataSource={dataSource}
            pagination={pagination}
            onChange={onTableChange}
          />
        </Col>
      </Row>
      {instanceId && (
        <CheckModal
          instanceId={instanceId}
          open={open}
          setOpen={setOpen}
          callback={() => onFinish(form.getFieldsValue())}
        />
      )}
    </>
  )
}

export default observer(MyApplications)
