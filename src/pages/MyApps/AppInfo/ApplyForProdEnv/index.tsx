import React, { useEffect, useState } from 'react'
import style from './index.module.scss'
import {
  Button,
  Divider,
  Form,
  Space,
  Upload,
  UploadFile,
  UploadProps
} from 'antd'
import { DownloadOutlined, UploadOutlined } from '@ant-design/icons'
import { useStore } from '@/stores'
import { useNavigate, useSearchParams } from 'react-router-dom'

const ApplyForProdEnv = () => {
  const { myAppStore } = useStore()

  const [searchParams] = useSearchParams()

  const navigate = useNavigate()

  useEffect(() => {
    const id = myAppStore.id || searchParams.get('id')
    if (!id) return navigate('..')

    if (!myAppStore.id && id) {
      myAppStore.setId(id)
    } else if (myAppStore.id && !searchParams.get('id')) {
      // 针对点击面包屑导航跳转到该页面的情况，需要补充url query
      navigate(`../appInfo?id=${id}`, { replace: true })
    }
  }, [])

  const capability = '身份认证V2版本'

  const [form] = Form.useForm()

  const formProps = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
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
   * 保存草稿
   */
  const onSave = () => {
    console.log('onSave')
  }

  /**
   * 提交审核
   */
  const onSubmit = () => {
    console.log('onSubmit')
  }

  return (
    <>
      <div className={style.header}>
        <div className={style.title}>接入正式环境 - {capability}</div>
        <Space>
          <Button type='primary' onClick={onSave}>
            保存草稿
          </Button>
          <Button type='primary' onClick={onSubmit}>
            提交审核
          </Button>
        </Space>
      </div>
      <Divider />

      <div className={style.section}>
        <div className={style.tag}>1. 正式接入信息</div>

        <Form form={form} name='uploadForm' {...formProps}>
          <Form.Item label='正式应用介绍：'>
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

export default ApplyForProdEnv
