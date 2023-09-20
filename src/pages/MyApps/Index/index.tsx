import React, { useEffect, useState } from 'react'
import style from './index.module.scss'
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  Select,
  Space,
  Table,
  Tag
} from 'antd'
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table'
import 'dayjs/locale/zh-cn'
import { rangePresets, disabledDate, dateFormat } from '@utils/date'
import { useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import dayjs from 'dayjs'
import type { TAppCount, TDataType, TFormData } from './index.d'
import { getCapabilityList } from '@api/ability'
import { DefaultOptionType } from 'antd/es/select'
import { AppstoreAddOutlined } from '@ant-design/icons'
import { getAppList, getAppCount } from '@api/myApp'
import { fieldNames } from '@utils/index'
import EnableModal from './components/EnableModal'
import { useGetDictionaryLabel } from '@/hooks'
import { useStore } from '@/stores'

const { RangePicker } = DatePicker

const Index = () => {
  const [appCount, setAppCount] = useState<TAppCount>() // 我的应用数
  useEffect(() => {
    ;(async () => {
      const { data } = await getAppCount()
      setAppCount(data)
    })()
  }, [])

  const { dictionaryStore, getDictionaryItemName } = useGetDictionaryLabel()

  const [capabilityList, setCapabilityList] = useState<DefaultOptionType[]>() // 基础能力列表
  /**
   * 初始化基础能力列表
   */
  useEffect(() => {
    ;(async () => {
      const { data } = await getCapabilityList()
      if (!data) return
      const options: DefaultOptionType[] = data.map((item, indx) => ({
        label: item.baseInfo.name,
        value: item.id
      }))
      setCapabilityList(options)
    })()
  }, [])

  type TDataSource = TDataType & { rowSpan: number }

  const [dataSource, setDataSource] = useState<TDataSource[]>()

  /**
   * 格式化表格数据
   */
  const formatData = (
    list: TDataType[]
  ): (TDataType & { rowSpan: number })[] => {
    const result = []
    for (let i = 0; i < list.length; i++) {
      const prev = { ...list[i] }
      const next = { ...list[i + 1] }
      if (prev.appId === next.appId) {
        result.push({ ...prev, rowSpan: 2 }, { ...next, rowSpan: 0 })
        ++i
      } else {
        result.push({ ...prev, rowSpan: 1 })
      }
    }
    return result
  }

  /**
   * 获取我的应用表格数据
   */
  const fetchAppList = async () => {
    const { dateRange, ...rest } = form.getFieldsValue()
    const params = {
      ...rest
    }
    // format日期格式
    if (dateRange) {
      params.startTime = dayjs(dateRange[0]).format(dateFormat)
      params.endTime = dayjs(dateRange[1]).format(dateFormat)
    }
    const { data } = await getAppList({
      ...params,
      ...pagination
    })
    if (!data) return
    const { list, pageNum, pageSize, total } = data
    const source = formatData(list)
    setDataSource(source)
    setPagination({ pageNum, pageSize, total })
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
    const pageNum = tablePagination.current || 1
    setPagination({ ...pagination, pageNum })
  }

  /**
   * 初始化表格数据 && 监听表格翻页事件
   */
  useEffect(() => {
    fetchAppList()
  }, [pagination.pageNum])

  const [form] = Form.useForm()

  /**
   * 重置
   */
  const onReset = () => {
    form.resetFields()
  }

  /**
   * 查询
   */
  const onFinish = async (values: TFormData) => {
    fetchAppList()
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  const navigate = useNavigate()

  /**
   * 创建单位应用
   */
  const onAdd = () => {
    navigate('./appForm')
  }

  const { myAppStore } = useStore()

  /**
   * 查看
   */
  const onCheck = (id: TDataType['clientId']) => {
    myAppStore.setClientId(id)
    navigate(`./appInfo?clientId=${id}`)
  }

  const [open, setOpen] = useState(false) // 控制启用or停用Modal显示隐藏

  const [activeItem, setActiveItem] = useState<TDataType>() // 传给申请启用or申请停用Modal的item

  /**
   * 申请启用or申请停用
   */
  const onEnable = (values: TDataType) => {
    setActiveItem(values)
    setOpen(true)
  }

  /**
   * 根据id返回基础能力
   */
  const getAccessCapability = (accessCapability: string) => {
    if (!accessCapability) return '-'

    const capability = accessCapability.split(',')
    const capabilityToString = capability.map(item => {
      const result = capabilityList?.find(
        __item => __item.value === Number(item)
      )
      return result?.label || ''
    })
    return capabilityToString.join(',')
  }

  const columns: ColumnsType<TDataSource> = [
    {
      title: '应用名称',
      dataIndex: 'appName',
      ellipsis: true,
      onCell: item => ({ rowSpan: item.rowSpan })
    },
    {
      title: '接入环境',
      render: (values: TDataType) => (
        <>{getDictionaryItemName('appEnv', values.appEnv)}环境</>
      )
    },
    {
      title: '应用类型',
      render: (values: TDataType) => (
        <>{getDictionaryItemName('appType', values.appType)}</>
      )
    },
    {
      title: '已接入基础能力',
      ellipsis: true,
      render: (values: TDataType) => (
        <>{getAccessCapability(values.accessCapability)}</>
      )
    },
    {
      title: 'clientId',
      dataIndex: 'clientId',
      ellipsis: true
    },
    {
      title: '状态',
      ellipsis: true,
      render: (values: TDataType) => (
        <>
          {dictionaryStore.dictionary && (
            <Tag
              color={
                ['success', 'warning', 'default', 'error'][values?.state] ||
                'success'
              }
            >
              <>{getDictionaryItemName('appState', values.state) || '正常'}</>
            </Tag>
          )}
        </>
      )
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      ellipsis: true
    },
    {
      title: '操作',
      key: 'action',
      width: 250,
      onCell: item => ({ rowSpan: item.rowSpan }),
      render: (values: TDataType) => (
        <>
          <Button type='link' onClick={() => onCheck(values.clientId)}>
            查看详情
          </Button>
          <Button type='link' onClick={() => onEnable(values)}>
            {`申请${values.state === 3 ? '启用' : '停用'}`}
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
            <span className={`${style.count} font-primary-color`}>
              {appCount?.total}
            </span>
            <span className='font-secondary-color'>我的应用数</span>
          </div>
        </Col>
        <Col span={8}>
          <div className={`${style.tag} ${style.icon02}`}>
            <span className={`${style.count} font-primary-color`}>
              {appCount?.prod}
            </span>
            <span className='font-secondary-color'>正式应用</span>
          </div>
        </Col>
        <Col span={8}>
          <div className={`${style.tag} ${style.icon03} ${style.last}`}>
            <span className={`${style.count} font-primary-color`}>
              {appCount?.sit}
            </span>
            <span className='font-secondary-color'>测试应用</span>
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
            initialValues={{
              appEnv: null,
              capabilityId: null,
              appType: null,
              state: null
            }}
          >
            <Row gutter={20}>
              <Col span={6}>
                <Form.Item label='应用名称' name='appName'>
                  <Input placeholder='请输入应用名称' maxLength={10} />
                </Form.Item>
              </Col>
              <Col span={6}>
                {dictionaryStore.dictionary && (
                  <Form.Item label='接入环境' name='appEnv'>
                    <Select
                      placeholder='请选择接入环境'
                      fieldNames={fieldNames}
                      options={[
                        { dictName: '全部', dictValue: null },
                        ...dictionaryStore.getDictionaryItem('appEnv')!
                      ]}
                    />
                  </Form.Item>
                )}
              </Col>
              <Col span={6}>
                {capabilityList && (
                  <Form.Item label='基础能力' name='capabilityId'>
                    <Select
                      placeholder='请选择基础能力'
                      options={[
                        { label: '全部', value: null },
                        ...capabilityList
                      ]}
                    />
                  </Form.Item>
                )}
              </Col>
              <Col span={6}>
                {dictionaryStore.dictionary && (
                  <Form.Item label='应用类型' name='appType'>
                    <Select
                      placeholder='请选择应用类型'
                      fieldNames={fieldNames}
                      options={[
                        { dictName: '全部', dictValue: null },
                        ...dictionaryStore.getDictionaryItem('appType')!
                      ]}
                    />
                  </Form.Item>
                )}
              </Col>
              <Col span={6}>
                {dictionaryStore.dictionary && (
                  <Form.Item label='状态' name='state'>
                    <Select
                      placeholder='请选择状态'
                      fieldNames={fieldNames}
                      options={[
                        { dictName: '全部', dictValue: null },
                        ...dictionaryStore.getDictionaryItem('appState')!
                      ]}
                    />
                  </Form.Item>
                )}
              </Col>
              <Col span={6}>
                <Form.Item label='创建时间：' name='dateRange'>
                  <RangePicker
                    presets={rangePresets}
                    disabledDate={disabledDate}
                  />
                </Form.Item>
              </Col>
              <Col span={12} className='tr'>
                <Form.Item>
                  <Space>
                    <Button onClick={onReset}>重置</Button>
                    <Button type='primary' htmlType='submit'>
                      查询
                    </Button>
                  </Space>
                </Form.Item>
              </Col>
              <Col span={24} className='tr'>
                <Form.Item>
                  <Button
                    type='primary'
                    icon={<AppstoreAddOutlined />}
                    onClick={onAdd}
                  >
                    创建单位应用
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <Table
            rowKey='clientId'
            columns={columns}
            dataSource={dataSource}
            pagination={pagination}
            onChange={onTableChange}
          />
        </Col>
      </Row>

      {activeItem && (
        <EnableModal
          open={open}
          setOpen={setOpen}
          item={activeItem}
          callback={() => onFinish(form.getFieldsValue())}
        />
      )}
    </>
  )
}

export default observer(Index)
