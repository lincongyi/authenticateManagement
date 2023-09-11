import React, { useState } from 'react'
import {
  Button,
  Checkbox,
  Col,
  Divider,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Space
} from 'antd'
import type { CheckboxChangeEvent } from 'antd/es/checkbox'
import type { CheckboxValueType } from 'antd/es/checkbox/Group'
import style from './index.module.scss'

const CheckboxGroup = Checkbox.Group

const options = [
  '南沙分局微信小程序',
  '南沙分局支付宝小程序',
  '陕西分局微信小程序',
  '陕西分局支付宝小程序'
]
const defaultCheckedList = [options[1], options[2]]

const AddModal = ({ open, setOpen }: { open: boolean; setOpen: Function }) => {
  const [form] = Form.useForm()

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '请输入${label}'
  }
  /* eslint-disable no-template-curly-in-string */

  const formProps = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
    validateMessages,
    autoComplete: 'off'
  }

  /**
   * 关闭
   */
  const onCancel = () => {
    form.resetFields()
    setOpen(false)
  }

  const [checkAll, setCheckAll] = useState(false)
  /**
   * 全选
   */
  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    const { checked } = e.target
    const list = checked ? options : []
    setCheckedList(list)
    form.setFieldValue('apps', list)
    setCheckAll(checked)
  }

  const [checkedList, setCheckedList] =
    useState<CheckboxValueType[]>(defaultCheckedList)
  /**
   * 单选
   */
  const onChange = (list: CheckboxValueType[]) => {
    setCheckedList(list)
    setCheckAll(list.length === options.length)
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

  return (
    <Modal
      title='新增自动回复关键字'
      open={open}
      width={640}
      forceRender={true}
      onCancel={onCancel}
      footer={[]}
    >
      <Divider />
      <Form
        form={form}
        name='add'
        {...formProps}
        initialValues={{ apps: [] }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label='关键字/词'
          name='keyword'
          rules={[{ required: true }]}
        >
          <Input
            placeholder='请输入关键字/词，多个关键字/词请用“、”隔开'
            maxLength={20}
          />
        </Form.Item>
        <Form.Item
          label='是否生效'
          name='isEffective'
          rules={[{ required: true, message: '请选择是否生效' }]}
        >
          <Select
            placeholder='请选择是否显示'
            options={[
              { value: 0, label: '否' },
              { value: 1, label: '是' }
            ]}
          />
        </Form.Item>
        <Form.Item label='对应的问题'>
          <Row gutter={10}>
            <Col span={18}>
              <Form.Item name='issue' noStyle>
                <Input placeholder='去选择问题后自动获取' readOnly />
              </Form.Item>
            </Col>
            <Col span={6} className='tr'>
              <Button type='primary' style={{ width: '100%' }}>
                去选择
              </Button>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item label='对应应用回答' name='answer'>
          <Input.TextArea
            rows={4}
            placeholder='自动获取选中问题的回答'
            readOnly
          />
        </Form.Item>
        <Form.Item label='关联应用名称'>
          <>
            <Checkbox
              onChange={onCheckAllChange}
              checked={checkAll}
              style={{ paddingTop: 6 }}
            >
              全选
            </Checkbox>

            <div className={`${style['checkbox-group']} gray-bg`}>
              <Form.Item name='apps' noStyle>
                <CheckboxGroup onChange={onChange}>
                  <Row gutter={[0, 20]}>
                    {options.map(item => (
                      <Col span={12} key={item}>
                        <Checkbox value={item}>{item}</Checkbox>
                      </Col>
                    ))}
                  </Row>
                </CheckboxGroup>
              </Form.Item>
            </div>
          </>
        </Form.Item>
        <Form.Item
          label='排序'
          name='order'
          rules={[{ required: true }]}
          extra='从1-N进行排序，数字越大显示越后，如果设置了同样的数值，则按最新设置的时间进行排序'
        >
          <Input placeholder='请输入排序' maxLength={3} />
        </Form.Item>
        <Divider />
        <Form.Item noStyle wrapperCol={{ span: 24 }}>
          <Row>
            <Col span={24} className='tr'>
              <Space>
                <Button onClick={onCancel}>关闭</Button>,
                <Button type='primary' htmlType='submit'>
                  确定
                </Button>
              </Space>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default AddModal
