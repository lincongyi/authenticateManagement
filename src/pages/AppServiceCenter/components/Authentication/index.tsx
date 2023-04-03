import React from 'react'
import style from './index.module.scss'
import {
  Alert,
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  Modal,
  Row,
  Space,
  Upload,
  message
} from 'antd'
import { UploadOutlined, FileTextOutlined } from '@ant-design/icons'
import type { UploadProps } from 'antd'
import type { CheckboxValueType } from 'antd/es/checkbox/Group'

/**
 * 接入方式
 */
const methodList = [
  { value: 'SDK认证', method: 'SDK认证' },
  { value: '公众号跳转认证', method: '公众号跳转认证' },
  { value: 'APP认证/跳转认证', method: 'APP认证/跳转认证' },
  { value: 'API认证', method: 'API认证' },
  { value: '扫码认证', method: '扫码认证' },
  { value: '小程序跳转认证', method: '小程序跳转认证' },
  { value: '常规认证', method: '常规认证' },
  { value: '出入境SDK认证', method: '出入境SDK认证' },
  { value: 'H5跳转认证', method: 'H5跳转认证' },
  { value: '获取个人二维码信息', method: '获取个人二维码信息' },
  { value: '个人二维码', method: '个人二维码' },
  { value: '现场个人二维码', method: '现场个人二维码' },
  { value: '网证二维码信息', method: '网证二维码信息' },
  { value: 'SDK扫码认证', method: 'SDK扫码认证' },
  { value: '面对面认证', method: '面对面认证' },
  { value: '1:N人脸识别', method: '1:N人脸识别' },
  { value: '虹膜第三方认证', method: '虹膜第三方认证' },
  { value: '好友分享认证', method: '好友分享认证' }
]

type TProps = {
  open: boolean
  setOpen: Function
}

const Authentication = ({ open, setOpen }: TProps) => {
  const props: UploadProps = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text'
    },
    onChange (info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`)
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`)
      }
    }
  }

  /**
   * 选择接入方式
   */
  const onChange = (checkedValues: CheckboxValueType[]) => {
    console.log('checked = ', checkedValues)
  }

  /**
   * 提交申请
   */
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <>
      <Modal
        title='身份认证-应用接入申请'
        centered
        open={open}
        onCancel={() => setOpen(false)}
        width={1000}
        footer={[]}
      >
        <Alert
          message='温馨提示：当前应用接入申请为测试应用！'
          type='info'
          showIcon
        />
        <Form
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete='off'
          style={{ marginTop: 20 }}
          colon={false}
        >
          <Row gutter={10}>
            <Col span={12}>
              <Row>
                <Col span={24}>
                  <Form.Item
                    label='应用名称'
                    name='name'
                    rules={[{ required: true, message: '请输入应用名称' }]}
                  >
                    <Input
                      placeholder='请输入应用名称，限30字符'
                      maxLength={30}
                      showCount
                    />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item
                    label='接入方式'
                    name='method'
                    rules={[{ required: true, message: '请选择接入方式' }]}
                  >
                    <Checkbox.Group
                      className={style['checkbox-group-wrap']}
                      onChange={onChange}
                    >
                      <Row>
                        {methodList.map(item => (
                          <Col
                            span={12}
                            className={style['checkbox-item']}
                            key={item.value}
                          >
                            <Checkbox value={item.value}>
                              {item.method}
                            </Checkbox>
                          </Col>
                        ))}
                      </Row>
                    </Checkbox.Group>
                  </Form.Item>
                </Col>
              </Row>
            </Col>
            <Col span={12}>
              <Row>
                <Col span={24}>
                  <Form.Item
                    label='申请函'
                    name='letter'
                    required
                    valuePropName='fileList'
                    help='支持扩展名：.rar .zip .doc .docx .pdf .jpg...'
                  >
                    <Upload {...props}>
                      <Button type='primary' icon={<UploadOutlined />}>
                        上传文件
                      </Button>
                    </Upload>
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item
                    label='申请表'
                    name='form'
                    required
                    valuePropName='fileList'
                    help='支持扩展名：.rar .zip .doc .docx .pdf .jpg...'
                  >
                    <Upload {...props}>
                      <Button type='primary' icon={<UploadOutlined />}>
                        上传文件
                      </Button>
                    </Upload>
                  </Form.Item>
                </Col>
                <Col span={18} offset={6}>
                  <Form.Item noStyle>
                    <Space>
                      <Button
                        type='link'
                        icon={<FileTextOutlined />}
                        style={{ padding: '4px 0' }}
                      >
                        《申请函模板》下载
                      </Button>
                      <Button
                        type='link'
                        icon={<FileTextOutlined />}
                        style={{ padding: '4px 0' }}
                      >
                        《申请函模板》下载
                      </Button>
                    </Space>
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item
                    label='承建公司'
                    name='name'
                    rules={[{ required: true, message: '请输入承建公司名称' }]}
                  >
                    <Input
                      placeholder='请输入承建公司名称，限30字符'
                      maxLength={30}
                      showCount
                    />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item
                    label='使用场景'
                    name='useCase'
                    rules={[{ required: true, message: '请输入使用场景' }]}
                  >
                    <Input.TextArea
                      placeholder='请输入使用场景 ，限50字符'
                      showCount
                      maxLength={50}
                      rows={3}
                    />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Form.Item
                    label='应用描述'
                    name='description'
                    rules={[{ required: true, message: '请输入应用描述' }]}
                  >
                    <Input.TextArea
                      placeholder='请输入应用描述 ，限50字符'
                      showCount
                      maxLength={50}
                      rows={3}
                    />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col span={24} style={{ textAlign: 'center' }}>
              <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
                <Button type='primary' htmlType='submit'>
                  提交申请
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  )
}

export default Authentication
