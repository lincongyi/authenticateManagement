import React, { useEffect, useState } from 'react'
import style from './index.module.scss'
import {
  Button,
  Col,
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
import 'dayjs/locale/zh-cn'
import { rangePresets, disabledDate, dateFormat } from '@utils/date'
import { getAppCount, getMyAppList } from '@mock/myApp'
import { getdictionary } from '@api/index'

import { useNavigate } from 'react-router-dom'
// import { getMyAppList } from '@api/myApp'
import Extension from './components/Extension'
import { useStore } from '@stores/index'
import { observer } from 'mobx-react-lite'
import dayjs from 'dayjs'
import type { TAppCount, TDataType, TFormData } from './index.d'
import { getCapabilityList } from '@api/ability'
import { DefaultOptionType } from 'antd/es/select'
import { AppstoreAddOutlined } from '@ant-design/icons'

const { RangePicker } = DatePicker

const Index = () => {
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

  const [capabilityList, setCapabilityList] = useState<DefaultOptionType[]>() // 基础能力列表
  /**
   * 初始化基础能力列表
   */
  useEffect(() => {
    ;(async () => {
      const { data } = await getCapabilityList()
      if (!data) return
      const options: DefaultOptionType[] = data.map(item => ({
        label: item.baseInfo.name,
        value: item.id
      }))
      setCapabilityList(options)
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

  /**
   * 重置
   */
  const onReset = () => {
    form.resetFields()
  }

  /**
   * 查询
   */
  const onFinish = (values: TFormData) => {
    console.log('Success:', values)
    const { expiredRange, dateRange } = values
    // format日期格式
    if (expiredRange || dateRange) {
      const params: {
        expiredRange?: [string, string]
        dateRange?: [string, string]
      } = {}
      if (expiredRange) {
        params.expiredRange = [
          dayjs(expiredRange[0]).format(dateFormat),
          dayjs(expiredRange[1]).format(dateFormat)
        ]
      }
      if (dateRange) {
        params.dateRange = [
          dayjs(dateRange[0]).format(dateFormat),
          dayjs(dateRange[1]).format(dateFormat)
        ]
      }
    }
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

  /**
   * 查看
   */
  const onCheck = ({ id }: { id: TDataType['id'] }) => {
    accessFormStore.current = {
      id,
      state: 2
    }
    navigate('./access')
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
            正式应用<span className={style.count}>{appCount?.prod}</span>
          </div>
        </Col>
        <Col span={8}>
          <div className={`${style.tag} ${style.icon03}`}>
            测试应用<span className={style.count}>{appCount?.sit}</span>
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
                {capabilityList && (
                  <Form.Item label='基础能力' name='appAbility'>
                    <Select
                      placeholder='请选择基础能力'
                      options={capabilityList}
                    />
                  </Form.Item>
                )}
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
              <Col span={6}>
                <Form.Item label='有效期：' name='expiredRange'>
                  <RangePicker presets={rangePresets} />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label='创建时间：' name='dateRange'>
                  <RangePicker
                    presets={rangePresets}
                    disabledDate={disabledDate}
                  />
                </Form.Item>
              </Col>
              <Col span={18} className='tr'>
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

export default observer(Index)
