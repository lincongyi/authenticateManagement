import React, { useState } from 'react'
import {
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
  Table,
  Tag,
  message
} from 'antd'
import type { DatePickerProps } from 'antd'
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import 'dayjs/locale/zh-cn'
import locale from 'antd/locale/zh_CN'
import TestCheckModal from './components/TestCheckModal'

const Test = () => {
  const [form] = Form.useForm()

  // 审核状态对应的标签类型
  const options = [
    {
      value: 0,
      label: '全部'
    },
    {
      value: 1,
      label: '待审核',
      color: 'orange'
    },
    {
      value: 2,
      label: '审核通过',
      color: 'green'
    },
    {
      value: 3,
      label: '审核不通过',
      color: 'magenta'
    }
  ]

  /**
   * 设置表单中日期的值
   */
  const onChange: DatePickerProps['onChange'] = (date, dateString) =>
    form.setFieldValue('date', dateString)

  /**
   * 提交数据
   */
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  const [open, setOpen] = useState(false)
  const [activeItem, setActiveItem] = useState({})

  /**
   * 查看
   */
  const onCheck = (item: IdentityTestDataType) => {
    console.log(item)
    setActiveItem(item)
    setOpen(true)
  }

  /**
   * 撤销
   */
  const onRevoke = (item: IdentityTestDataType) => {
    Modal.confirm({
      title: '谨慎操作',
      icon: <ExclamationCircleOutlined />,
      content: '确认撤回该申请吗？',
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        message.success({
          content: '撤销成功'
        })
      }
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

  const columns: ColumnsType<IdentityTestDataType> = [
    {
      title: '应用名称',
      dataIndex: 'applicationName',
      key: 'applicationName'
    },
    {
      title: '接入方式',
      dataIndex: 'method',
      key: 'method'
    },
    {
      title: 'clientId',
      dataIndex: 'clientId',
      key: 'clientId'
    },
    {
      title: '审批状态',
      key: 'status',
      dataIndex: 'status',
      render: status => (
        <Tag color={options[status].color}>{options[status].label}</Tag>
      )
    },
    {
      title: '申请时间',
      dataIndex: 'date',
      key: 'date'
    },
    {
      title: '操作',
      key: 'action',
      render: values => (
        <>
          <Button type='link' onClick={() => onCheck(values)}>
            查看
          </Button>
          {values.status === 1 && (
            <>
              <Divider type='vertical' />
              <Button type='link' onClick={() => onRevoke(values)}>
                撤销
              </Button>
            </>
          )}
        </>
      )
    }
  ]

  const data: IdentityTestDataType[] = [
    {
      key: '1',
      applicationName: '在线公正服务',
      method: 'SDK接入',
      clientId: 'SDSD231241',
      status: 1,
      date: '2023-01-01'
    },
    {
      key: '2',
      applicationName: '在线公正服务',
      method: 'SDK接入',
      clientId: 'SDSD231242',
      status: 2,
      date: '2023-01-02'
    },
    {
      key: '3',
      applicationName: '公积金查询认证服务',
      method: 'SDK接入',
      clientId: 'SDSD231243',
      status: 3,
      date: '2023-01-03'
    }
  ]

  return (
    <>
      <Row>
        <Col span={24}>
          <Form
            name='form'
            form={form}
            initialValues={{ status: 0 }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'
          >
            <Row gutter={20}>
              <Col span={6}>
                <Form.Item label='应用名称' name='applicationName'>
                  <Input placeholder='请输入应用名称' maxLength={20} />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label='审批状态' name='status'>
                  <Select style={{ width: '100%' }} options={options} />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label='审批日期' name='date'>
                  <ConfigProvider locale={locale}>
                    <DatePicker style={{ width: '100%' }} onChange={onChange} />
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
          </Form>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Table
            columns={columns}
            dataSource={data}
            pagination={pagination}
            onChange={onTableChange}
          />
        </Col>
      </Row>
      <TestCheckModal
        item={activeItem as IdentityTestDataType}
        open={open}
        setOpen={setOpen}
      />
    </>
  )
}

export default Test
