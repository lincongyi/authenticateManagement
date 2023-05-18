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
import { getAppCount, getMyAppList } from '@mock/myApp'
import { getdictionary } from '@api/index'

import { useNavigate } from 'react-router-dom'
// import { getMyAppList } from '@api/myApp'
import Extension from './components/Extension'
import { useStore } from '@stores/index'
import { observer } from 'mobx-react-lite'
import { fieldNames } from '@utils/index'

const { RangePicker } = DatePicker

const MyApps = () => {
  type TAppCount = {
    total: number
    production: number // 正式环境
    test: number // 测试环境
  }
  /**
   * 我的应用数
   */
  const [appCount, setAppCount] = useState<TAppCount>()
  useEffect(() => {
    ;(async () => {
      const { data } = await getAppCount()
      setAppCount(data)
    })()
  }, [])

  /**
   * mobx存储数据字典
   */
  const { accessFormStore } = useStore()
  useEffect(() => {
    if (!accessFormStore.dictionary) {
      ;(async () => {
        const { data } = await getdictionary({
          showType: 'appAccess'
        })
        accessFormStore.setDictionary(data)
      })()
    }
  }, [])

  type TDataType = {
    id: number
    appName: string // 应用名称
    appEnv: 0 | 1 // 接入环境：0-测试环境；1-正式环境
    appAbility: 0 // 接入基础能力：0-身份认证
    clientId: string // clientId
    expiredTime: string // 有效时间
    state: 0 | 1 | 2 | 3 | 4 // 状态：0-正常启用；1-即将过期；2-过期；3-停用；4-缺少授权文件
    addTime: string // 创建时间
  }

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

  const navigate = useNavigate()
  /**
   * 查看
   */
  const onCheck = ({ id }: { id: TDataType['id'] }) => {
    navigate(`./accessForm?id=${id}&isCheck=1`)
  }

  /**
   * 认证数据
   */
  const onViewData = ({ id }: { id: TDataType['id'] }) => {
    navigate(`./authenticationData?id=${id}`)
  }

  /**
   *  申请参数更改 or 申请正式账号
   */
  const onReapply = (item: TDataType) => {
    console.log(item)
  }

  /**
   * 当前申请延期的应用id
   */
  const [id, setId] = useState<number>()
  /**
   * 控制申请延期Modal显示隐藏
   */
  const [open, setOpen] = useState(true)

  /**
   * 申请延期
   */
  const onDelay = ({ id }: { id: TDataType['id'] }) => {
    setId(id)
    setOpen(true)
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
    // {
    //   title: '接入环境',
    //   ellipsis: true,
    //   render: (values: TDataType) => (
    //     <>{appEnv && appEnv[values.appEnv + 1].dictName}</>
    //   )
    // },
    {
      title: '接入基础能力',
      ellipsis: true,
      render: (values: TDataType) => (
        <>
          {accessFormStore.dictionary
            ? accessFormStore.getDictionaryItem('accessSkill')![
                values.appAbility
              ].dictName
            : '-'}
        </>
      )
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
          {accessFormStore.dictionary && (
            <Tag
              color={
                ['success', 'warning', 'error'][values?.state] || 'default'
              }
            >
              {accessFormStore.dictionary
                ? accessFormStore.getDictionaryItem('appState')![values.state]
                    .dictName
                : '-'}
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
      render: (values: TDataType) => (
        <>
          <Button type='link' onClick={() => onCheck(values)}>
            查看
          </Button>
          <Divider type='vertical' style={{ margin: 0 }} />
          <Button type='link' onClick={() => onViewData(values)}>
            认证数据
          </Button>
          <Divider type='vertical' style={{ margin: 0 }} />
          <Button type='link' onClick={() => onReapply(values)}>
            {values.appEnv ? '申请参数更改' : '申请正式账号'}
          </Button>
          <Divider type='vertical' style={{ margin: 0 }} />

          {[1, 2].includes(values.state) && (
            <>
              <Button type='link' onClick={() => onDelay(values)}>
                申请延期
              </Button>
              <Divider type='vertical' style={{ margin: 0 }} />
            </>
          )}
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
            我的应用数<span className={style.count}>{appCount?.total}</span>
          </div>
        </Col>
        <Col span={8}>
          <div className={`${style.tag} ${style.icon02}`}>
            正式应用<span className={style.count}>{appCount?.production}</span>
          </div>
        </Col>
        <Col span={8}>
          <div className={`${style.tag} ${style.icon03}`}>
            测试应用<span className={style.count}>{appCount?.test}</span>
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
              {/* <Col span={6}>
                <Form.Item label='接入环境' name='appEnv'>
                  <Select
                    placeholder='请选择接入环境'
                    fieldNames={fieldNames}
                    options={appEnv}
                  />
                </Form.Item>
              </Col> */}
              <Col span={6}>
                <Form.Item label='基础能力' name='appAbility'>
                  <Select
                    placeholder='请选择基础能力'
                    fieldNames={fieldNames}
                    options={accessFormStore.getDictionaryItem('accessSkill')}
                  />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label='状态' name='state'>
                  <Select
                    placeholder='请选择状态'
                    fieldNames={{ label: 'dictName', value: 'dictValue' }}
                    options={accessFormStore.getDictionaryItem('appState')}
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

      {open && id && (
        <Extension open={open} setOpen={setOpen} instanceId={id} />
      )}
    </>
  )
}

export default observer(MyApps)
