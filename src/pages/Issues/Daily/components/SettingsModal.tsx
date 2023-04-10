import React, { useEffect, useState } from 'react'
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

const SettingsModal = ({
  open,
  setOpen
}: {
  open: boolean
  setOpen: Function
}) => {
  const [form] = Form.useForm()

  const [checkedList, setCheckedList] =
    useState<CheckboxValueType[]>(defaultCheckedList)
  const [checkAll, setCheckAll] = useState(false)
  /**
   * 全选
   */
  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    const { checked } = e.target
    const list = checked ? options : []
    setCheckedList(list)
    form.setFieldValue('relavance', list)
    setCheckAll(checked)
  }

  /**
   * 单选
   */
  const onChange = (list: CheckboxValueType[]) => {
    setCheckedList(list)
    setCheckAll(list.length === options.length)
  }

  type TList = {
    classification: string
    order: string
  }
  /**
   * 动态表单
   */
  useEffect(() => {
    const list: TList[] | [] = Array(checkedList.length).fill({
      classification: '',
      order: ''
    })
    form.setFieldValue('apps', list)
  }, [checkedList])

  const classificationOptions = [
    { value: 0, label: '其他' },
    { value: 1, label: '注册' },
    { value: 2, label: '登录' }
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
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Modal
      title='请设置显示规则'
      open={open}
      width={640}
      forceRender={true}
      onCancel={onCancel}
      footer={[]}
    >
      <Divider />
      <Form
        form={form}
        name='settings'
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        initialValues={{
          relavance: defaultCheckedList
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete='off'
      >
        <Form.Item label='关联至应用名称' required labelCol={{ span: 24 }}>
          <>
            <Checkbox onChange={onCheckAllChange} checked={checkAll}>
              全选
            </Checkbox>

            <div className={`${style['checkbox-group']} gray-bg`}>
              <Form.Item
                name='relavance'
                rules={[
                  { required: true, message: '至少需要选择一项关联应用' }
                ]}
              >
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
        {!!checkedList.length && (
          <div className={`${style['setting-rule']} gray-bg`}>
            <div className={style['setting-item']}>
              <Form.List name='apps'>
                {fields => (
                  <>
                    {fields.map(({ key, name, ...restField }, index) => (
                      <React.Fragment key={key}>
                        <div className={`${style.title} font-primary-color`}>
                          {index + 1}.已选中：{checkedList[index]}
                        </div>
                        <Row className={style['selected-item']}>
                          <Col span={24}>
                            <Form.Item
                              label='对应应用问题分类'
                              name={[name, 'classification']}
                              {...restField}
                              rules={[
                                {
                                  required: true,
                                  message: '请选择应用问题分类'
                                }
                              ]}
                            >
                              <Select options={classificationOptions} />
                            </Form.Item>
                          </Col>
                          <Col span={24}>
                            <Form.Item
                              label='排序'
                              name={[name, 'order']}
                              {...restField}
                              rules={[
                                {
                                  required: true,
                                  message: '请输入排序'
                                }
                              ]}
                              extra='从1-N进行排序，数字越大显示越后，如果设置了同样的数值，则按最新设置的时间进行排序'
                            >
                              <Input placeholder='请输入排序' maxLength={3} />
                            </Form.Item>
                          </Col>
                        </Row>
                      </React.Fragment>
                    ))}
                  </>
                )}
              </Form.List>
            </div>
          </div>
        )}

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

export default SettingsModal
