import React, { useState } from 'react'
import { Button, Col, Form, Modal, Row, Space, Typography } from 'antd'
import { EyeOutlined, DownloadOutlined } from '@ant-design/icons'
import { TUploadApplyFileParams } from '@/api/myApp'

const { Link } = Typography

const UploadFormInfo = ({ formInfo }: { formInfo: TUploadApplyFileParams }) => {
  const formProps = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
  }

  /**
   * 预览
   */
  const onPreview = (index: 0 | 1) => {
    if (!index) {
      setTitle('预览申请表')
      setPdf(formInfo.applyFile)
    } else {
      setTitle('预览申请函')
      setPdf(formInfo.applyLetterName)
    }
    setOpen(true)
  }

  const [open, setOpen] = useState(false) // 控制预览上传文件显示隐藏

  const [title, setTitle] = useState<'预览申请表' | '预览申请函'>()

  const [pdf, setPdf] = useState<string>()

  return (
    <>
      <Modal
        title={title}
        width={840}
        open={open}
        onCancel={() => setOpen(false)}
        footer={[
          <Button key='cancel' onClick={() => setOpen(false)}>
            关闭
          </Button>
        ]}
      >
        <iframe
          src={pdf}
          // type='application/x-google-chrome-pdf'
          width='100%'
          height='600'
        />
      </Modal>
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
                <Link href={formInfo.applyFile} target='_blank'>
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
                <Link href={formInfo.applyFile} target='_blank'>
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
