import React, { useState } from 'react'
import {
  Badge,
  Button,
  Col,
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
import { ExclamationCircleOutlined, PlusOutlined } from '@ant-design/icons'
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table'
import 'dayjs/locale/zh-cn'
import AddModal from './components/AddModal'
import CheckModal from './components/CheckModal'
import UpdateModal from './components/UpdateModal'

const { RangePicker } = DatePicker

const Classification = () => {
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
  /**
   * 查询
   * @param {any} values
   * @returns {void}
   */
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  const [addModalOpen, setAddModalOpen] = useState(false) // 控制新增功能Modal显示隐藏

  /**
   * 新增
   */
  const onAdd = () => {
    setAddModalOpen(true)
  }

  type TDataType = {
    key: string
    name: string
    number: string
    level: string
    sort: number
    date: string
    isDisplay: number
  }

  const [checkModalOpen, setCheckModalOpen] = useState(false) // 控制查看功能Modal显示隐藏
  /**
   * 详情
   * @param {TDataType} values
   * @returns {void}
   */
  const onCheck = (values: TDataType) => {
    setCheckModalOpen(true)
  }

  const [updateModalOpen, setUpdateModalOpen] = useState(false) // 控制更新功能Modal显示隐藏

  /**
   * 修改
   * @param {TDataType} values
   * @returns {void}
   */
  const onUpdate = (values: TDataType) => {
    setUpdateModalOpen(true)
  }

  /**
   * 删除
   * @param {TDataType} values
   * @returns {void}
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

  const [pagination, setPagination] = useState({
    pageNum: 1,
    pageSize: 10,
    total: 31
  }) // 表格分页参数

  /**
   * 分页、排序、筛选变化时触发
   */
  const onTableChange = (tablePagination: TablePaginationConfig) => {
    setPagination({ ...pagination, ...tablePagination })
  }

  /**
   * 表格列
   */
  const columns: ColumnsType<TDataType> = [
    {
      title: '序号',
      dataIndex: 'key',
      key: 'key'
    },
    {
      title: '分类名称',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '分类编号',
      dataIndex: 'number',
      key: 'number'
    },
    {
      title: '分类级别',
      dataIndex: 'level',
      key: 'level'
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

  /**
   * 表格数据
   */
  const data: TDataType[] = [
    {
      key: '1',
      name: '注册',
      number: '南沙分局APP',
      level: '一级分类',
      sort: 1,
      date: '2023-01-01',
      isDisplay: 1
    },
    {
      key: '2',
      name: '注册',
      number: '南沙分局APP',
      level: '一级分类',
      sort: 2,
      date: '2023-01-01',
      isDisplay: 0
    },
    {
      key: '3',
      name: '注册',
      number: '南沙分局APP',
      level: '一级分类',
      sort: 3,
      date: '2023-01-01',
      isDisplay: 0
    },
    {
      key: '4',
      name: '注册',
      number: '南沙分局APP',
      level: '一级分类',
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
            initialValues={{ isDisplay: -1 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'
          >
            <Row gutter={20}>
              <Col span={6}>
                <Form.Item label='分类名称' name='issues'>
                  <Input
                    placeholder='请输入分类名称'
                    allowClear
                    maxLength={30}
                  />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label='显示' name='isDisplay'>
                  <Select
                    placeholder='请选择是否显示'
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
                  <RangePicker />
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
                  <Space>
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
          <Table
            className='issue-table'
            columns={columns}
            dataSource={data}
            pagination={pagination}
            onChange={onTableChange}
          />
        </Col>
      </Row>
      <AddModal open={addModalOpen} setOpen={setAddModalOpen} />
      <CheckModal open={checkModalOpen} setOpen={setCheckModalOpen} />
      <UpdateModal open={updateModalOpen} setOpen={setUpdateModalOpen} />
    </>
  )
}

export default Classification
