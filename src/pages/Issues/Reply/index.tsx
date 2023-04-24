import React, { useState } from 'react'
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
  Select,
  Space,
  Table,
  Tooltip,
  message
} from 'antd'
import { PlusOutlined, ExclamationCircleOutlined } from '@ant-design/icons'
import type { RangeValue } from 'rc-picker/lib/interface.d'
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table'
import type { Dayjs } from 'dayjs'
import 'dayjs/locale/zh-cn'
import locale from 'antd/locale/zh_CN'
import AddModal from './components/AddModal'
// import CheckModal from './components/CheckModal'
import UpdateModal from './components/UpdateModal'
import { useStore } from '@stores/index'

const { RangePicker } = DatePicker

const Reply = () => {
  const [form] = Form.useForm()

  /**
   * 设置表单中日期的值
   */
  const onChange = (date: RangeValue<Dayjs>, dateString: [string, string]) =>
    form.setFieldValue('date', dateString)

  /**
   * 重置
   */
  const onReset = () => {
    form.resetFields()
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
    keyword: string
    issue: string
    apps: string
    date: string
    isEffective: number
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
      onOk: () => message.success({ content: '删除成功' })
    })
  }

  // 表格分页参数
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
      title: '序号',
      dataIndex: 'key',
      key: 'key'
    },
    {
      title: '关键字编号',
      dataIndex: 'number',
      key: 'number'
    },
    {
      title: '关键字',
      dataIndex: 'keyword',
      key: 'keyword'
    },
    {
      title: '对应问题',
      dataIndex: 'issue',
      key: 'issue',
      ellipsis: true
    },
    {
      title: '关联应用',
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
      title: '创建时间',
      dataIndex: 'date',
      key: 'date'
    },
    {
      title: '生效',
      dataIndex: 'isEffective',
      key: 'isEffective',
      render: isEffective => (
        <Space>
          <Badge color={isEffective ? '#52c41a' : '#ff7875'} />
          {isEffective ? '是' : '否'}
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
      keyword: '注册',
      issue: '如何注册？',
      apps: '',
      date: '2023-01-01',
      isEffective: 0
    },
    {
      key: '2',
      number: 'W00002',
      keyword: '注册',
      issue: '如何注册？',
      apps: '',
      date: '2023-01-01',
      isEffective: 1
    },
    {
      key: '3',
      number: 'W00003',
      keyword: '注册',
      issue: '如何注册？',
      apps: '',
      date: '2023-01-01',
      isEffective: 1
    },
    {
      key: '4',
      number: 'W00004',
      keyword: '注册',
      issue: '如何注册？如何注册？如何注册？如何注册？如何注册？',
      apps: '',
      date: '2023-01-01',
      isEffective: 0
    }
  ]

  return (
    <>
      <Row>
        <Col span={24}>
          <Form
            form={form}
            name='search'
            initialValues={{ isEffective: -1 }}
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
              <Col span={6}>
                <Form.Item label='生效' name='isEffective'>
                  <Select
                    placeholder='请选择是否生效'
                    options={[
                      { value: -1, label: '全部' },
                      { value: 0, label: '否' },
                      { value: 1, label: '是' }
                    ]}
                  />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label='创建时间' name='date'>
                  <ConfigProvider locale={locale}>
                    <RangePicker onChange={onChange} />
                  </ConfigProvider>
                </Form.Item>
              </Col>
            </Row>
            <Row>
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
            <Row>
              <Col span={24} className='tr'>
                <Form.Item>
                  <Button icon={<PlusOutlined />} onClick={onAdd}>
                    新增
                  </Button>
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
      <AddModal open={addModalOpen} setOpen={setAddModalOpen} />
      {/* <CheckModal open={checkModalOpen} setOpen={setCheckModalOpen} /> */}
      <UpdateModal open={updateModalOpen} setOpen={setUpdateModalOpen} />
    </>
  )
}

export default Reply
