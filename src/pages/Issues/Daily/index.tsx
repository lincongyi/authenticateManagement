import React, { useState } from 'react'
import { useStore } from '@stores/index'
import {
  Avatar,
  Badge,
  Button,
  Col,
  ConfigProvider,
  DatePicker,
  Divider,
  Form,
  Input,
  Modal,
  Row,
  Space,
  Table,
  Tooltip,
  message
} from 'antd'
import {
  UploadOutlined,
  PlusOutlined,
  ExclamationCircleOutlined
} from '@ant-design/icons'
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table'
import type { Dayjs } from 'dayjs'
import 'dayjs/locale/zh-cn'
import locale from 'antd/locale/zh_CN'
import UploadModal from './components/UploadModal'
import AddModal from './components/AddModal'
import CheckModal from './components/CheckModal'
import UpdateModal from './components/UpdateModal'
import SettingsModal from './components/SettingsModal'
import { rangePresets, disabledDate } from '@utils/date'

const { RangePicker } = DatePicker

const Daily = () => {
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
   * 查询
   */
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  const [uploadModalOpen, setUploadModalOpen] = useState(false)
  /**
   * 批量导入
   */
  const onUpload = () => {
    setUploadModalOpen(true)
  }

  const { themeStore } = useStore()
  const colorPrimary = themeStore.antdThemeColor

  const [addModalOpen, setAddModalOpen] = useState(false)
  /**
   * 新增
   */
  const onAdd = () => {
    setAddModalOpen(true)
  }

  type TDataType = {
    key: string
    number: string
    issue: string
    apps: string
    helpCount: number
    unhelpCount: number
    sort: number
    date: string
    isDisplay: number
  }

  const [checkModalOpen, setCheckModalOpen] = useState(false)
  /**
   * 详情
   */
  const onCheck = (values: TDataType) => {
    setCheckModalOpen(true)
  }

  const [updateModalOpen, setUpdateModalOpen] = useState(false)
  /**
   * 修改
   */
  const onUpdate = (values: TDataType) => {
    setUpdateModalOpen(true)
  }

  /**
   * 删除
   */
  const onDelete = (values: TDataType) => {
    Modal.confirm({
      title: '温馨提示',
      icon: <ExclamationCircleOutlined />,
      content: '确定要删除该记录吗？',
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        message.success({ content: '删除成功' })
      }
    })
  }

  const [settingsModalOpen, setSettingsModalOpen] = useState(false)

  /**
   * 表格分页参数
   */
  const [pagination, setPagination] = useState({
    pageNum: 1,
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
      title: '序号',
      dataIndex: 'key',
      key: 'key'
    },
    {
      title: '问题编号',
      dataIndex: 'number',
      key: 'number'
    },
    {
      title: '问题',
      dataIndex: 'issue',
      key: 'issue',
      ellipsis: true
    },
    {
      title: '对应应用',
      dataIndex: 'apps',
      key: 'apps',
      className: 'table-column',
      render: () => (
        <Tooltip
          title='南沙分局支付宝小程序、南沙分局微信小程序（2个）'
          placement='topLeft'
        >
          <>
            <Avatar.Group>
              <Avatar
                shape='square'
                size='large'
                style={{ backgroundColor: colorPrimary }}
              >
                app
              </Avatar>
              <Avatar
                shape='square'
                size='large'
                style={{ backgroundColor: '#FFBF24' }}
              >
                app
              </Avatar>
            </Avatar.Group>
          </>
        </Tooltip>
      )
    },
    {
      title: '有帮助',
      dataIndex: 'helpCount',
      key: 'helpCount',
      sorter: (a, b) => a.helpCount - b.helpCount
    },
    {
      title: '无帮助',
      dataIndex: 'unhelpCount',
      key: 'unhelpCount',
      sorter: (a, b) => a.unhelpCount - b.unhelpCount
    },
    {
      title: '排序',
      dataIndex: 'sort',
      key: 'sort',
      defaultSortOrder: 'ascend',
      sortDirections: ['ascend', 'descend', 'ascend'],
      sorter: (a, b) => a.sort - b.sort
    },
    {
      title: '创建时间',
      dataIndex: 'date',
      key: 'date'
    },
    {
      title: '推荐',
      dataIndex: 'isDisplay',
      key: 'isDisplay',
      render: isDisplay => (
        <Space>
          <Badge color={isDisplay ? '#52c41a' : '#ff7875'} />
          {isDisplay ? '是' : '否'}
        </Space>
      )
    },
    {
      title: '操作',
      key: 'action',
      width: 250,
      render: values => (
        <>
          <Button type='link' onClick={() => onCheck(values)}>
            详情
          </Button>
          <Divider type='vertical' />
          <Button type='link' onClick={() => onUpdate(values)}>
            修改
          </Button>
          <Divider type='vertical' />
          <Button
            type='link'
            style={{ color: '#ff7875' }}
            onClick={() => onDelete(values)}
          >
            删除
          </Button>
        </>
      )
    }
  ]

  const data: TDataType[] = [
    {
      key: '1',
      number: 'W00001',
      issue: '如何注册？',
      apps: '',
      helpCount: 11,
      unhelpCount: 11,
      sort: 1,
      date: '2023-01-01',
      isDisplay: 1
    },
    {
      key: '2',
      number: 'W00002',
      issue: '如何注册？',
      apps: '',
      helpCount: 2,
      unhelpCount: 12,
      sort: 2,
      date: '2023-01-01',
      isDisplay: 1
    },
    {
      key: '3',
      number: 'W00003',
      issue: '如何注册？',
      apps: '',
      helpCount: 3,
      unhelpCount: 13,
      sort: 3,
      date: '2023-01-01',
      isDisplay: 0
    },
    {
      key: '4',
      number: 'W00004',
      issue: '如何注册？如何注册？如何注册？如何注册？如何注册？',
      apps: '',
      helpCount: 44,
      unhelpCount: 4,
      sort: 4,
      date: '2023-01-01',
      isDisplay: 1
    }
  ]

  return (
    <>
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
                <Form.Item label='问题' name='issues'>
                  <Input placeholder='请输入问题' allowClear maxLength={30} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label='创建时间' name='date'>
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
            </Row>
            <Row>
              <Col span={24} className='tr'>
                <Form.Item>
                  <Button type='primary' htmlType='submit'>
                    查询
                  </Button>
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={24} className='tr'>
                <Form.Item>
                  <Space>
                    <Button icon={<UploadOutlined />} onClick={onUpload}>
                      批量导入
                    </Button>
                    <Button icon={<PlusOutlined />} onClick={onAdd}>
                      新增
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
              className='issue-table'
              columns={columns}
              dataSource={data}
              pagination={pagination}
              onChange={onTableChange}
            />
          </ConfigProvider>
        </Col>
      </Row>
      <UploadModal open={uploadModalOpen} setOpen={setUploadModalOpen} />
      <AddModal open={addModalOpen} setOpen={setAddModalOpen} />
      <CheckModal open={checkModalOpen} setOpen={setCheckModalOpen} />
      <UpdateModal open={updateModalOpen} setOpen={setUpdateModalOpen} />
      <SettingsModal open={settingsModalOpen} setOpen={setSettingsModalOpen} />
    </>
  )
}

export default Daily
