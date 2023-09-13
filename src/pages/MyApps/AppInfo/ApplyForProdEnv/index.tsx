import React, { useEffect, useState } from 'react'
import style from './index.module.scss'
import {
  Button,
  Divider,
  Form,
  Input,
  Space,
  Upload,
  UploadFile,
  UploadProps
} from 'antd'
import {
  UploadOutlined,
  PlusOutlined,
  InfoCircleOutlined
} from '@ant-design/icons'
import { useStore } from '@/stores'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { getBase64, imgBeforeUpload } from '@/utils'
import type { UploadRequestOption } from 'rc-upload/lib/interface'
import { RcFile } from 'antd/es/upload'

const { TextArea } = Input

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

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '请输入${label}'
  }
  /* eslint-disable no-template-curly-in-string */

  const formProps = {
    labelCol: { span: 6 },
    wrapperCol: { span: 12 },
    validateMessages,
    autoComplete: 'off'
  }

  const [screenShot, setScreenShot] = useState<string>() // 正式应用截图

  /**
   * 覆盖默认的上传行为
   */
  const customRequest = (options: UploadRequestOption) => {
    new Promise((resolve: (value: string) => void) => {
      getBase64(options.file as RcFile, url => {
        resolve(url)
      })
    }).then(url => {
      const imageBase64: string = url.substring(url.indexOf('base64,') + 7)
      setScreenShot(url)
      form.setFieldValue('screenShot', imageBase64)
    })
  }

  const [url, setUrl] = useState<string>()

  /**
   * 粘贴网址链接输入框
   */
  const onUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value)
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
  const onSubmit = async () => {
    try {
      await form.validateFields()
    } catch (error) {
      console.log(error)
    }
    let announcement
    if (url) announcement = url
    else if (fileList) announcement = fileList
    console.log('announcement', announcement)
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
          <Form.Item
            label='正式应用介绍：'
            name='introduce'
            rules={[{ required: true }]}
          >
            <TextArea
              showCount
              maxLength={100}
              style={{ height: 120, resize: 'none' }}
              placeholder='请简要填写应用介绍'
            />
          </Form.Item>
          <Form.Item
            label='正式应用截图：'
            name='screenShot'
            valuePropName='screenShot'
            rules={[{ required: true, message: '请上传正式应用截图' }]}
          >
            <Upload
              listType='picture-card'
              maxCount={1}
              showUploadList={false}
              beforeUpload={imgBeforeUpload}
              customRequest={customRequest}
            >
              {screenShot ? (
                <img
                  src={screenShot}
                  alt='avatar'
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                />
              ) : (
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>选择图片</div>
                </div>
              )}
            </Upload>
            <p className='font-secondary-color'>支持图片格式：jpg,jpeg,png</p>
          </Form.Item>
          <Form.Item label='正式上线新闻通告：' required>
            <p className='primary-color' style={{ lineHeight: '34px' }}>
              <InfoCircleOutlined />
              下列方式三选一即可
            </p>
            <div className={style.method}>
              <div className={style.label}>方式一：粘贴网址链接</div>
              <Input placeholder='请粘贴网址链接' onChange={onUrlChange} />
            </div>
            <div className={style.method}>
              <div className={style.label}>方式二：上传文件</div>
              <Upload {...props} fileList={fileList}>
                <Button icon={<UploadOutlined />}>上传文件</Button>
                <p
                  className='font-secondary-color'
                  onClick={e => e.stopPropagation()}
                >
                  支持文件格式：doc\docx\pdf\jpg
                </p>
              </Upload>
            </div>
          </Form.Item>
        </Form>
      </div>
    </>
  )
}

export default ApplyForProdEnv
