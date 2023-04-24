import React, { useState } from 'react'
import style from './index.module.scss'
import {
  Button,
  Col,
  Divider,
  Form,
  Input,
  Modal,
  Radio,
  Row,
  Table,
  Tabs,
  message
} from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import type { RadioChangeEvent } from 'antd'
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table'
import CheckModal from './components/CheckModal'

const MyApps = () => {
  const [activeKey, setActiveKey] = useState('identity')

  /**
   * 切换标签页
   */
  const onChange = (key: string) => {
    setActiveKey(key)
  }

  // 标签页列表
  const items = [
    {
      label: '身份认证能力应用服务（12）',
      key: 'identity',
      children: <></>
    },
    {
      label: '1:N验证应用智感服务（0）',
      key: '2',
      children: <></>
    },
    {
      label: '重点人员核验应用服务（0）',
      key: '3',
      disabled: true,
      children: <></>
    },
    {
      label: '虹膜认证应用服务（0）',
      key: '4',
      disabled: true,
      children: <></>
    }
  ]

  const [environment, setEnvironment] = useState(0)
  /**
   * 切换状态，测试 / 正式
   */
  const onRadioChange = (e: RadioChangeEvent) => {
    setEnvironment(e.target.value)
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

  const [open, setOpen] = useState(false)

  type TDataType = {
    key: string
    applicationName: string
    method: string
    clientId: string
    date: string
  }

  /**
   * 查看
   */
  const onCheck = (item: TDataType) => {
    console.log(item)
    setOpen(true)
  }

  /**
   * 正式申请 | 参数修改申请
   */
  const onApplicate = (item: 0 | 1) => {
    if (!item) {
      Modal.confirm({
        title: '正式申请',
        icon: <ExclamationCircleOutlined />,
        content: '确认提交申请吗？',
        okText: '确认',
        cancelText: '取消',
        onOk: () => message.success({ content: '提交成功' })
      })
    } else {
      console.log('参数修改申请')
    }
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
      title: '有效时间',
      dataIndex: 'date',
      key: 'date'
    },
    {
      title: '操作',
      key: 'action',
      width: 250,
      render: values => (
        <>
          <Button type='link' onClick={() => onCheck(values)}>
            查看
          </Button>
          <Divider type='vertical' />
          {!environment ? (
            <Button type='link' onClick={() => onApplicate(0)}>
              正式申请
            </Button>
          ) : (
            <Button type='link' onClick={() => onApplicate(1)}>
              参数修改申请
            </Button>
          )}
        </>
      )
    }
  ]

  const data: TDataType[] = [
    {
      key: '1',
      applicationName: '广州市城市管理认证应用',
      method: 'SDK接入',
      clientId: 'SDSD231241',
      date: '2023-01-01'
    },
    {
      key: '2',
      applicationName: '广州市城市管理认证应用',
      method: 'SDK接入',
      clientId: 'SDSD231242',
      date: '2023-01-02'
    },
    {
      key: '3',
      applicationName: '广州市城市管理认证应用',
      method: 'SDK接入',
      clientId: 'SDSD231243',
      date: '2023-01-03'
    }
  ]

  return (
    <>
      <Tabs
        className={style.tabs}
        defaultActiveKey={activeKey}
        onChange={onChange}
        items={items}
      />
      <Row>
        <Col span={24}>
          <Form
            name='form'
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
              <Col span={6} offset={12} style={{ textAlign: 'right' }}>
                <Radio.Group
                  onChange={onRadioChange}
                  defaultValue={environment}
                >
                  <Radio.Button value={0}>测试</Radio.Button>
                  <Radio.Button value={1}>正式</Radio.Button>
                </Radio.Group>
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
      <CheckModal environment={environment} open={open} setOpen={setOpen} />
    </>
  )
}

export default MyApps
