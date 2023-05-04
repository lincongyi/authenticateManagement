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
  Popconfirm,
  Row,
  Space,
  Table,
  Tag,
  Timeline,
  message
} from 'antd'
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table'
import type { Dayjs } from 'dayjs'
import 'dayjs/locale/zh-cn'
import locale from 'antd/locale/zh_CN'
import { rangePresets, disabledDate } from '@utils/date'
import {
  getdictionary,
  getApplyCount,
  getApplyList,
  handleUrging,
  handleStopApply
} from '@api/myApplications'
// import { getApplyList } from '@mock/myApplications'
import type { TGetApplyListParams } from '@api/myApplications'
import { useUpdateEffect } from '@utils/index'

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

const MyApplications = () => {
  const stateInfo = [
    { title: '全部申请' },
    { title: '审批通过', options: ['check'] },
    { title: '审批中', options: ['check', 'urge', 'withdraw'] },
    { title: '审批不通过', options: ['check'] },
    { title: '撤回', options: ['check', 'reapply'] }
  ]

  type TStateList = TState & { title: string; options?: string[] }
  const [stateList, setStateList] = useState<TStateList[]>()
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

  useEffect(() => {
    ;(async () => {
      /**
       * 初始化审批状态
       */
      const { data: applyCount } = await getApplyCount({
        endTime: '',
        startTime: ''
      })
      const list = applyCount?.map((item: TState, index: number) => ({
        ...item,
        ...stateInfo[index]
      }))
      setStateList(list)
    })()
  }, [])

  const [processKeyList, setProcessKeyList] = useState<Option[]>()
  useEffect(() => {
    ;(async () => {
      /**
       * 初始化申请类型
       */
      const { data } = await getdictionary({
        typeValues: ['processKeyList']
      })
      const { dictList } = data.processKeyList
      setProcessKeyList(formatData(dictList))

      renderTable({
        processState: -1,
        pageNum: 0, // 后端接口接收pageNum是从0开始算的，所以前端传pageNum需要current - 1，赋值current需要pageNum + 1
        pageSize: 10
      })
    })()
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

  /**
   * 渲染表格数据
   */
  const renderTable = async (params: TGetApplyListParams) => {
    const { data } = await getApplyList(params)
    const list = data.list.map((item: TDataType) => {
      /**
       * 处理审批进度组件数据
       */
      const timeline = item.nodes.map(__item => {
        return {
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

    setPagination({ ...pagination, current: pageNum + 1, pageSize, total })
  }

  /**
   * 监听申请状态切换
   */
  useUpdateEffect(() => {
    form.resetFields()
    setPagination({ ...pagination, current: 1 })
    renderTable({
      processState: activeState - 1,
      pageNum: 0,
      pageSize: 10
    } as TGetApplyListParams)
  }, [activeState])

  const [form] = Form.useForm()

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
      ? values.dateRange
      : [undefined, undefined]
    const params = {
      ...values,
      keys,
      startTime,
      endTime,
      processState: activeState - 1,
      pageNum: 0,
      pageSize: 10
    } as TGetApplyListParams
    renderTable(params)
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
  const onUrge = async (value: TDataType) => {
    if (value.urging) {
      return message.warning({
        content: '当前审批节点已发送催办，请勿重复操作',
        duration: 2
      })
    }
    await handleUrging({
      instanceId: value.processInstanceId
    })
    message.success({
      content: '已成功对审批人发送催办提醒！',
      duration: 2
    })
    renderTable({
      processState: activeState - 1,
      pageNum: 0,
      pageSize: 10
    } as TGetApplyListParams)
  }

  /**
   * 撤回
   */
  const onWithdraw = async (value: TDataType) => {
    await handleStopApply({
      instanceId: value.processInstanceId
    })
    renderTable({
      processState: activeState - 1,
      pageNum: 0,
      pageSize: 10
    } as TGetApplyListParams)
  }

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
    total: 0
  })

  useUpdateEffect(() => {
    const dateRange = form.getFieldValue('dateRange')
    const [startTime, endTime] = dateRange || [undefined, undefined]
    const params: TGetApplyListParams = {
      processState: activeState - 1,
      ...form.getFieldsValue(),
      startTime,
      endTime,
      pageNum: pagination.current - 1,
      pageSize: 10
    }
    renderTable(params)
  }, [pagination.current])

  /**
   * 分页、排序、筛选变化时触发
   */
  const onTableChange = (tablePagination: TablePaginationConfig) => {
    setPagination({ ...pagination, ...tablePagination })
  }

  const columns: ColumnsType<TDataType> = [
    {
      title: '序号',
      key: 'order',
      width: 60,
      align: 'center',
      render: (values: TDataType, record, index) => `${index + 1}`
    },
    {
      title: '审批单号',
      dataIndex: 'processInstanceId',
      ellipsis: true
    },
    {
      title: '申请类型',
      ellipsis: true,
      render: (values: TDataType) => formatDictValue(values.key)
    },
    {
      title: '应用/服务名称',
      dataIndex: 'unifyName',
      ellipsis: true
    },
    {
      title: '审批状态',
      align: 'center',
      render: (values: TDataType) => (
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
      render: (values: TDataType) => (
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
      render: (values: TDataType) => (
        <>
          {stateList?.length &&
            stateList[values.state + 1].options?.map((item, index) => {
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
                      <Popconfirm
                        title='撤回申请单'
                        description='申请单正在审批中，是否确认撤回当前申请单？'
                        onConfirm={() => onWithdraw(values)}
                        okText='确定'
                        cancelText='取消'
                      >
                        <Button type='link' style={{ color: '#ff7875' }}>
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
                    <Divider type='vertical' />
                  )}
                </React.Fragment>
              )
            })}
        </>
      )
    }
  ]

  const [dataSource, setDataSource] = useState<TDataType[]>([])

  return (
    <>
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
                <Form.Item label='审批单号' name='instanceId'>
                  <Input placeholder='请输入审批单号' maxLength={10} />
                </Form.Item>
              </Col>
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
                <Form.Item label='应用/服务名称：' name='unifyName'>
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
              rowKey='id'
              className='myApplications-table'
              columns={columns}
              dataSource={dataSource}
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
