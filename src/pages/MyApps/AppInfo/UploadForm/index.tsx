import React, { useEffect, useState } from 'react'
import style from './index.module.scss'
import { Button, Divider, Form, Upload, UploadFile, message } from 'antd'
import { DownloadOutlined, UploadOutlined } from '@ant-design/icons'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { getCapability } from '@/api/ability'
import type { TGetCapabilityResponse } from '@/api/ability'
import { RcFile } from 'antd/es/upload'
import { UploadRequestOption } from 'rc-upload/lib/interface'
import { upload } from '@/api'
import { uploadApplyFile } from '@/api/myApp'
import type { TUploadApplyFileParams } from '@/api/myApp'
import { useStore } from '@/stores'
import myAppUploadFormPdfIcon from '@/assets/myApp-uploadForm-pdf-icon.png'
import myAppUploadFormWordIcon from '@/assets/myApp-uploadForm-word-icon.png'

const UploadForm = () => {
  const [searchParams] = useSearchParams()

  const navigate = useNavigate()

  const appId = searchParams.get('appId')

  const env = searchParams.get('env')

  const clientId = searchParams.get('clientId')

  const capabilityId = Number(searchParams.get('capabilityId'))

  const [capability, setCapability] = useState<TGetCapabilityResponse>()

  if (!clientId || !capabilityId) navigate(-1)

  useEffect(() => {
    ;(async () => {
      const { data } = await getCapability({ id: capabilityId })
      if (!data) return
      setCapability(data)
    })()
  }, [])

  const [form] = Form.useForm()

  const formProps = {
    labelCol: { span: 6 },
    wrapperCol: { span: 12 },
    autoComplete: 'off'
  }

  const [file1, setFileL1] = useState<UploadFile[]>() // 申请表
  const [file2, setFileL2] = useState<UploadFile[]>() // 申请函

  const [messageApi, contextHolder] = message.useMessage()

  /**
   * 上传前校验文件
   */
  const fileBeforeUpload = (file: RcFile, maxSize: number = 1) => {
    const { name } = file
    const fileType = name.substring(name.lastIndexOf('.') + 1)
    const isMatched = ['doc', 'docx', 'pdf', 'png', 'jpg'].includes(fileType)
    if (!isMatched) messageApi.error(`不支持上传${fileType}格式文件`)
    const isExceeded = file.size / 1024 / 1024 < maxSize
    if (!isExceeded) message.error(`图片文件大小<${maxSize}MB`)
    return (isMatched && isExceeded) || Upload.LIST_IGNORE
  }

  let fileItem: UploadFile
  /**
   * 覆盖默认的文件上传行为
   */
  const fileCustomRequest = async (
    options: UploadRequestOption,
    index: 0 | 1 // 0-申请表；1-申请函
  ) => {
    const formData = new FormData()
    const { file } = options
    formData.append('file', file)
    try {
      const { data } = await upload(formData)
      if (!data) return
      const { fileName: name, url } = data
      fileItem = {
        uid: (options.file as RcFile).uid,
        name,
        status: 'done',
        url
      }
    } catch (error) {
      console.log('error', error)
      fileItem = {
        uid: (options.file as RcFile).uid,
        name: (options.file as RcFile).name,
        status: 'error',
        url: ''
      }
    } finally {
      if (!index) setFileL1([fileItem])
      else setFileL2([fileItem])
      form.setFieldValue(!index ? 'applyFile' : 'applyLetter', fileItem.url)
    }
  }

  /**
   * 删除文件
   */
  const onImageRemove = (index: 0 | 1) => {
    if (!index) {
      setFileL1(undefined)
      form.setFieldValue('applyFile', undefined)
    } else {
      setFileL2(undefined)
      form.setFieldValue('applyLetter', undefined)
    }
  }

  /**
   * 提交
   */
  const onSubmit = async () => {
    try {
      await form.validateFields()
      const params: TUploadApplyFileParams = {
        ...form.getFieldsValue(),
        applyFileName: file1![0].name,
        applyLetterName: file2![0].name,
        capabilityId,
        clientId: clientId!
      }
      await uploadApplyFile(params)
      messageApi.success({
        content: '提交成功',
        onClose: () =>
          navigate(`..?appId=${appId}&capabilityId=${capabilityId}&env=${env}`)
      })
    } catch (error) {
      console.log(error)
    }
  }

  const { themeStore } = useStore()

  const colorPrimary = themeStore.antdThemeColor

  return (
    <>
      {contextHolder}
      <div className={style.header}>
        <div className={style.title}>上传申请表 - {capability?.name}</div>
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
            <div className='flex primary-color'>
              <img src={myAppUploadFormPdfIcon} />
              《基础能力接入申请表.pdf》
              <div className={style.download}>
                <DownloadOutlined />
                下载
              </div>
            </div>
          </Form.Item>
          <Form.Item label='申请函下载：'>
            <div className='flex primary-color'>
              <img src={myAppUploadFormWordIcon} />
              《基础能力接入申请函.docx》
              <div className={style.download}>
                <DownloadOutlined />
                下载
              </div>
            </div>
          </Form.Item>
          <Form.Item
            name='applyFile'
            label='（附印章）基础能力接入申请表：'
            extra={
              <>
                <p>支持文件格式：doc/docx/pdf/png/jpg</p>
                <p>支持文件大小：1Mb</p>
              </>
            }
            rules={[{ required: true, message: '请上传申请表' }]}
          >
            <Upload
              maxCount={1}
              fileList={file1}
              beforeUpload={file => fileBeforeUpload(file)}
              customRequest={options => fileCustomRequest(options, 0)}
              onRemove={() => onImageRemove(0)}
            >
              <Button
                icon={<UploadOutlined />}
                style={{ color: colorPrimary, borderColor: colorPrimary }}
              >
                上传文件
              </Button>
            </Upload>
          </Form.Item>
          <Form.Item
            name='applyLetter'
            label='（附印章）基础能力接入申请函：'
            extra={
              <>
                <p>支持文件格式：doc/docx/pdf/png/jpg</p>
                <p>支持文件大小：1Mb</p>
              </>
            }
            rules={[{ required: true, message: '请上传申请表' }]}
          >
            <Upload
              maxCount={1}
              fileList={file2}
              beforeUpload={file => fileBeforeUpload(file)}
              customRequest={options => fileCustomRequest(options, 1)}
              onRemove={() => onImageRemove(1)}
            >
              <Button
                icon={<UploadOutlined />}
                style={{ color: colorPrimary, borderColor: colorPrimary }}
              >
                上传文件
              </Button>
            </Upload>
          </Form.Item>
        </Form>
      </div>
    </>
  )
}

export default UploadForm
