import React, { useState } from 'react'
import {
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
  message
} from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import type { RangeValue } from 'rc-picker/lib/interface.d'
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table'
import type { Dayjs } from 'dayjs'
import 'dayjs/locale/zh-cn'
import locale from 'antd/locale/zh_CN'
import CheckModal from './components/CheckModal'
import UpdateModal from './components/UpdateModal'

const { RangePicker } = DatePicker

const Recommend = () => {
  const [form] = Form.useForm()

  const classificationOptions = [
    { value: 0, label: '其他' },
    { value: 1, label: '注册' },
    { value: 2, label: '登录' }
  ]

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

  type TDataType = {
    key: string
    number: string
    name: string
    classification: string
    issue: string
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
      onOk: () => message.success({ content: '删除成功' })
    })
  }

  // 表格分页参数
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
      title: '应用编号',
      dataIndex: 'number',
      key: 'number'
    },
    {
      title: '应用名称',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '对应应用问题分类',
      dataIndex: 'classification',
      key: 'classification'
    },
    {
      title: '问题',
      dataIndex: 'issue',
      key: 'issue',
      ellipsis: true
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
      key: 'date',
      sorter: (a, b) => a.sort - b.sort
    },
    {
      title: '显示',
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
      name: '南沙分局APP',
      classification: '登录',
      issue: '如何注册？',
      helpCount: 11,
      unhelpCount: 11,
      sort: 1,
      date: '2023-01-01',
      isDisplay: 1
    },
    {
      key: '2',
      number: 'W00002',
      name: '南沙分局APP',
      classification: '注册',
      issue: '如何注册？',
      helpCount: 2,
      unhelpCount: 12,
      sort: 2,
      date: '2023-01-01',
      isDisplay: 1
    },
    {
      key: '3',
      number: 'W00003',
      name: '南沙分局APP',
      classification: '登录',
      issue: '如何注册？',
      helpCount: 3,
      unhelpCount: 13,
      sort: 3,
      date: '2023-01-01',
      isDisplay: 0
    },
    {
      key: '4',
      number: 'W00004',
      name: '南沙分局APP',
      classification: '注册',
      issue: '如何注册？如何注册？如何注册？如何注册？如何注册？',
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
            initialValues={{ classification: -1 }}
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
                <Form.Item label='问题分类' name='classification'>
                  <Select
                    placeholder='请选择问题分类'
                    options={[
                      { value: -1, label: '全部' },
                      ...classificationOptions
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
      <CheckModal open={checkModalOpen} setOpen={setCheckModalOpen} />
      <UpdateModal open={updateModalOpen} setOpen={setUpdateModalOpen} />
    </>
  )
}

export default Recommend
