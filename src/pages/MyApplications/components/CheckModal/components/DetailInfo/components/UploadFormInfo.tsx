import React from 'react'
import { Col, Form, Row, Space, Typography, message } from 'antd'
import { EyeOutlined, DownloadOutlined } from '@ant-design/icons'
import { TUploadApplyFileParams } from '@/api/myApp'

const { Link } = Typography

const UploadFormInfo = ({ formInfo }: { formInfo: TUploadApplyFileParams }) => {
  const formProps = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
  }

  const [messageApi, contextHolder] = message.useMessage()

  /**
   * 预览
   */
  const onPreview = (index: 0 | 1) => {
    if (!index) {
      messageApi.info('预览申请表')
    } else {
      messageApi.info('预览申请函')
    }
  }

  /**
   * 下载
   */
  const onDownLoad = () => {
    messageApi.info('暂未支持下载')
  }
  return (
    <>
      {contextHolder}
      <Form name='uploadFormInfo' {...formProps}>
        <Form.Item label='（附印章）基础能力接入申请表' required>
          <Row>
            <Col span={18}>《{formInfo.applyFileName}》</Col>
            <Col span={6} className='tr'>
              <Space>
                <Link onClick={() => onPreview(0)}>
                  {/* <Link href={formInfo.applyFile} target='_blank'> */}
                  <EyeOutlined style={{ marginRight: 4 }} />
                  预览
                </Link>
                <Link onClick={onDownLoad}>
                  {/* <Link href={formInfo.applyFile} target='_blank'> */}
                  <DownloadOutlined style={{ marginRight: 4 }} />
                  下载
                </Link>
              </Space>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item
          label='（附印章）基础能力接入申请函'
          required
          style={{ marginBottom: 0 }}
        >
          <Row>
            <Col span={18}>《{formInfo.applyLetterName}》</Col>
            <Col span={6} className='tr'>
              <Space>
                <Link onClick={() => onPreview(1)}>
                  {/* <Link href={formInfo.applyFile} target='_blank'> */}
                  <EyeOutlined style={{ marginRight: 4 }} />
                  预览
                </Link>
                <Link onClick={onDownLoad}>
                  {/* <Link href={formInfo.applyFile} target='_blank'> */}
                  <DownloadOutlined style={{ marginRight: 4 }} />
                  下载
                </Link>
              </Space>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </>
  )
}

export default UploadFormInfo
