import React, { useEffect, useState } from 'react'
import style from './index.module.scss'
import { Button, Divider, Form, Upload, UploadFile, UploadProps } from 'antd'
import { DownloadOutlined, UploadOutlined } from '@ant-design/icons'
import { useNavigate, useSearchParams } from 'react-router-dom'

const UploadForm = () => {
  const [searchParams] = useSearchParams()

  const navigate = useNavigate()

  useEffect(() => {
    const clientId = searchParams.get('clientId')
    if (!clientId) return navigate('..')
  }, [])

  const capabilityName = '身份认证V2版本'

  const [form] = Form.useForm()

  const formProps = {
    labelCol: { span: 6 },
    wrapperCol: { span: 12 },
    autoComplete: 'off'
  }

  const [fileList, setFileList] = useState<UploadFile[]>([
    {
      uid: '-1',
      name: 'xxx.png',
      status: 'done',
      url: 'http://www.baidu.com/xxx.png'
    }
  ])

  const handleChange: UploadProps['onChange'] = info => {
    let newFileList = [...info.fileList]

    // 1. Limit the number of uploaded files
    // Only to show two recent uploaded files, and old ones will be replaced by the new
    newFileList = newFileList.slice(-2)

    // 2. Read from response and show file link
    newFileList = newFileList.map(file => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url
      }
      return file
    })

    setFileList(newFileList)
  }

  const props = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange: handleChange
  }

  /**
   * 提交
   */
  const onSubmit = () => {
    console.log('onSubmit')
  }

  return (
    <>
      <div className={style.header}>
        <div className={style.title}>上传申请表 - {capabilityName}</div>
        <Button type='primary' onClick={onSubmit}>
          提交
        </Button>
      </div>
      <Divider />

      <div className={style.section}>
        <div className={style.guide}>操作指引</div>
        <div className={style.step}>
          <div className={style['step-item']}>
            <i className={`${style['step-icon']} ${style.icon01}`} />
            下载申请表
          </div>
          <div className={style.arrow}></div>
          <div className={style['step-item']}>
            <i className={`${style['step-icon']} ${style.icon02}`} />
            线下印章
          </div>
          <div className={style.arrow}></div>
          <div className={style['step-item']}>
            <i className={`${style['step-icon']} ${style.icon03}`} />
            上传扫描件
          </div>
        </div>
      </div>

      <div className={style.section}>
        <Form form={form} name='uploadForm' {...formProps}>
          <Form.Item label='申请表下载：'>
            <div className={style['form-value']}>
              《基础能力接入申请表.pdf》
              <div className={style.download}>
                <DownloadOutlined />
                下载
              </div>
            </div>
          </Form.Item>
          <Form.Item label='申请函下载：'>
            <div className={style['form-value']}>
              《基础能力接入申请函.pdf》
              <div className={style.download}>
                <DownloadOutlined />
                下载
              </div>
            </div>
          </Form.Item>
          <Form.Item label='（附印章）基础能力接入申请表：' required>
            <Upload {...props} fileList={fileList}>
              <Button icon={<UploadOutlined />}>上传文件</Button>
              <p
                className='font-secondary-color'
                onClick={e => e.stopPropagation()}
              >
                支持文件格式：doc\docx\pdf\jpg
              </p>
            </Upload>
          </Form.Item>
          <Form.Item label='（附印章）基础能力接入申请函：' required>
            <Upload {...props} fileList={fileList}>
              <Button icon={<UploadOutlined />}>上传文件</Button>
              <p
                className='font-secondary-color'
                onClick={e => e.stopPropagation()}
              >
                支持文件格式：doc\docx\pdf\jpg
              </p>
            </Upload>
          </Form.Item>
        </Form>
      </div>
    </>
  )
}

export default UploadForm
