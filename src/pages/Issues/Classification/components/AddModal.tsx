import React from 'react'
import {
  Button,
  Col,
  Divider,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Space,
  message
} from 'antd'

const AddModal = ({ open, setOpen }: { open: boolean; setOpen: Function }) => {
  const [form] = Form.useForm()

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '请输入${label}'
  }
  /* eslint-disable no-template-curly-in-string */

  const formProps = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
    validateMessages,
    autoComplete: 'off'
  }

  /**
   * 分类级别
   */
  const levelOptions = [
    { value: 1, label: '一级分类' },
    { value: 2, label: '二级分类' },
    { value: 3, label: '三级分类' }
  ]

  /**
   * 关闭
   */
  const onCancel = () => {
    form.resetFields()
    setOpen(false)
  }

  /**
   * 提交数据
   */
  const onFinish = (values: any) => {
    console.log('Success:', values)
    message.success({
      content: '新增成功',
      onClose: () => setOpen(false)
    })
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Modal
      title='新增分类'
      open={open}
      width={640}
      onCancel={onCancel}
      footer={[]}
    >
      <Divider />
      <Form
        form={form}
        name='add'
        {...formProps}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item label='分类名称' name='name' rules={[{ required: true }]}>
          <Input placeholder='请输入分类名称' maxLength={10} />
        </Form.Item>
        <Form.Item
          label='分类级别'
          name='level'
          rules={[{ required: true, message: '请选择分类级别' }]}
        >
          <Select placeholder='请选择分类级别' options={levelOptions} />
        </Form.Item>
        <Form.Item
          label='排序'
          name='order'
          rules={[{ required: true }]}
          extra='从1-N进行排序，数字越大显示越后，如果设置了同样的数值，则按最新设置的时间进行排序'
        >
          <Input placeholder='请输入排序' maxLength={3} />
        </Form.Item>
        <Form.Item
          label='显示'
          name='isDisplay'
          rules={[{ required: true, message: '请选择是否显示' }]}
        >
          <Select
            placeholder='请选择是否显示'
            options={[
              { value: 0, label: '否' },
              { value: 1, label: '是' }
            ]}
          />
        </Form.Item>
        <Divider />
        <Form.Item noStyle wrapperCol={{ span: 24 }}>
          <Row>
            <Col span={24} className='tr'>
              <Space>
                <Button onClick={onCancel}>取消</Button>,
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
