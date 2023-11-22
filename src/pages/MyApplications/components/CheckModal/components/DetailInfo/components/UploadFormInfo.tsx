import React, { useState } from 'react'
import { Col, Form, Row, Space, Typography, message } from 'antd'
import { EyeOutlined, DownloadOutlined } from '@ant-design/icons'
import { TUploadApplyFileParams, downloadApplicationForm } from '@/api/myApp'

const { Link } = Typography

const UploadFormInfo = ({ formInfo }: { formInfo: TUploadApplyFileParams }) => {
  const formProps = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 }
  }

  const [messageApi, contextHolder] = message.useMessage()

  const [disableDownLoad, setDisableDownLoad] = useState(false)

  /**
   * 预览
   */
  const onView = (fileName: string, url: string) => {
    const pattern = /\.png|\.jpg/
    if (fileName.includes('.pdf') || pattern.test(url)) {
      return window.open(url)
    } else messageApi.info('暂不支持预览该格式文件')
  }

  /**
   * 下载
   */
  const onDownLoad = async (fileName: string, url: string) => {
    if (disableDownLoad) return messageApi.info('请勿频繁请求')
    setDisableDownLoad(true)
    try {
      const res = await downloadApplicationForm({
        url,
        fileName
      })
      const blob = new Blob([res], { type: 'application/pdf' })
      const objectUrl = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = objectUrl
      link.download = fileName

      document.body.appendChild(link) // 如果不需要显示下载链接可以不需要这行代码
      link.click()
      URL.revokeObjectURL(objectUrl)

      messageApi.success('已成功下载文件')
    } catch (error) {
      console.log(error)
    } finally {
      setTimeout(() => {
        setDisableDownLoad(false)
      }, 3000)
    }
  }

  return (
    <>
      {contextHolder}
      <Form name='uploadFormInfo' {...formProps}>
        <Form.Item label='（附印章）基础能力接入申请表' required>
          <Row>
            <Col span={18}>{formInfo.applyFileName}</Col>
            <Col span={6} className='tr'>
              <Space>
                <Link
                  onClick={() =>
                    onView(formInfo.applyFileName, formInfo.applyFile)
                  }
                >
                  <EyeOutlined style={{ marginRight: 4 }} />
                  预览
                </Link>
                <Link
                  style={{ cursor: disableDownLoad ? 'no-drop' : 'pointer' }}
                  onClick={() =>
                    onDownLoad(formInfo.applyFileName, formInfo.applyFile)
                  }
                >
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
            <Col span={18}>{formInfo.applyLetterName}</Col>
            <Col span={6} className='tr'>
              <Space>
                <Link
                  onClick={() =>
                    onView(formInfo.applyLetterName, formInfo.applyLetter)
                  }
                >
                  <EyeOutlined style={{ marginRight: 4 }} />
                  预览
                </Link>
                <Link
                  style={{ cursor: disableDownLoad ? 'no-drop' : 'pointer' }}
                  onClick={() =>
                    onDownLoad(formInfo.applyLetter, formInfo.applyLetterName)
                  }
                >
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
