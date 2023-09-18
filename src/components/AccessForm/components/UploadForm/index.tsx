import React, { useState } from 'react'
import { Button, Form, Typography, Upload, message } from 'antd'
import style from './index.module.scss'
import {
  LinkOutlined,
  SwapRightOutlined,
  UploadOutlined
} from '@ant-design/icons'
import type { FormInstance } from 'antd/lib/form/hooks/useForm'
import type { RcFile } from 'antd/es/upload/interface'
import type { UploadRequestOption } from 'rc-upload/lib/interface'
import accessFormGuide from '@/assets/accessForm-guide.png'
import accessFormDownload from '@/assets/accessForm-download.png'
import accessFormFillIn from '@/assets/accessForm-fillIn.png'
import accessFormStamp from '@/assets/accessForm-stamp.png'
import accessFormUpload from '@/assets/accessForm-upload.png'
import { formProps } from '..'
import { TValue } from '../../index.d'

/**
 * 操作指引
 */
const processList = [
  [
    { description: '下载申请表', icon: accessFormDownload },
    { description: '线下印章', icon: accessFormStamp },
    { description: '上传扫描件', icon: accessFormUpload }
  ],
  [
    { description: '下载申请函模板', icon: accessFormDownload },
    { description: '填写申请函', icon: accessFormFillIn },
    { description: '线下印章', icon: accessFormStamp },
    { description: '上传扫描件', icon: accessFormUpload }
  ]
]

const UploadForm = React.forwardRef<
  FormInstance,
  { params: { value: TValue } }
>(({ params }, ref) => {
  /**
   * 下载申请表（函）links
   */
  const [links] = useState<[string, string]>([
    'https://www.baidu.com',
    'https://www.baidu.com'
  ])

  const [messageApi, contextHolder] = message.useMessage()

  /**
   * 上传前校验文件格式
   */
  const beforeUpload = (file: RcFile) => {
    const reg = /application\/vnd|application\/pdf|image\/jpeg/
    const isPermitted = reg.test(file.type)
    if (!isPermitted) messageApi.error('上传只支持doc/docx/pdf/jpg格式')
    return isPermitted
  }

  /**
   * 覆盖默认的上传行为
   */
  const customRequest = (options: UploadRequestOption) => {
    console.log(options)
  }

  return (
    <>
      {contextHolder}
      <div
        className={style['guide-box']}
        style={{
          display: params.value === '3' ? 'block' : 'none'
        }}
      >
        <div className={`${style.title} font-primary-color`}>
          <img src={accessFormGuide} style={{ marginRight: 8 }} />
          操作指引
        </div>
        <div className={style.content}>
          {processList.map((item, index) => (
            <div className={`${style.process} font-primary-color`} key={index}>
              <div className={`${style.tag} ${style['tag-title']}`}>
                {index + 1}.{!index ? '申请表' : '申请函'}
              </div>
              {item.map((__item, __index) => (
                <React.Fragment key={__index}>
                  <div className={`${style.tag} ${style['tag-item']}`}>
                    <img src={__item.icon} />
                    {__item.description}
                  </div>
                  {__index !== item.length - 1 && <SwapRightOutlined />}
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>
      </div>

      <Form
        ref={ref}
        name='uploadForm'
        {...formProps}
        initialValues={{}}
        style={{ display: params.value === '3' ? 'block' : 'none' }}
      >
        <Form.Item label='申请表下载：'>
          <Typography.Link href={links[0]} target='_blank'>
            <LinkOutlined />
            《基础能力接入申请表.pdf》下载
          </Typography.Link>
        </Form.Item>
        <Form.Item label='申请表下载：'>
          <Typography.Link href={links[1]} target='_blank'>
            <LinkOutlined />
            《基础能力接入申请函模板.docx》下载
          </Typography.Link>
        </Form.Item>
        <Form.Item
          name='fileUrl'
          label='（附印章）基础能力接入申请表：'
          valuePropName='fileUrl'
          extra='支持文件格式：doc/docx/pdf/jpg'
          rules={[{ required: true, message: '请上传申请表' }]}
        >
          <Upload
            maxCount={1}
            beforeUpload={beforeUpload}
            customRequest={customRequest}
          >
            <Button icon={<UploadOutlined />}>上传文件</Button>
          </Upload>
        </Form.Item>
        <Form.Item
          name='fileUrl2'
          label='（附印章）基础能力接入申请函：'
          valuePropName='fileUrl2'
          extra='支持文件格式：doc/docx/pdf/jpg'
          rules={[{ required: true, message: '请上传申请函' }]}
        >
          <Upload
            maxCount={1}
            beforeUpload={beforeUpload}
            customRequest={customRequest}
          >
            <Button icon={<UploadOutlined />}>上传文件</Button>
          </Upload>
        </Form.Item>
      </Form>
    </>
  )
})

UploadForm.displayName = 'UploadForm'

export default UploadForm
