import React, { useEffect, useState } from 'react'
import {
  Button,
  Checkbox,
  Col,
  DatePicker,
  Form,
  Input,
  Modal,
  Radio,
  Row,
  Select,
  Space,
  Switch,
  Table,
  Typography,
  Upload,
  message
} from 'antd'
import type { FormInstance } from 'antd'
import { PlusOutlined, UploadOutlined } from '@ant-design/icons'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import type { UploadRequestOption } from 'rc-upload/lib/interface'
import { getBase64, imgBeforeUpload, saveAsFile } from '@/utils'
import { RcFile, UploadFile } from 'antd/es/upload'
import type { TFormContent, TRuleList } from '@/api/ability'
import { getSecretKey, upload } from '@/api'
import type { DefaultOptionType } from 'antd/es/select'

const DynamicForm = React.forwardRef<
  FormInstance,
  {
    formId: number | 'defaultForm'
    formList: TFormContent[]
  }
>(({ formId, formList }, ref) => {
  const [form] = Form.useForm()

  const formProps = {
    labelCol: { span: 4 },
    wrapperCol: { span: 12 },
    autoComplete: 'off'
  }

  /**
   * 获取接入能力表单默认值
   */
  useEffect(() => {
    ;(async () => {
      const formValues: Record<string, any> = formList.reduce(
        (prev: Record<string, any>, next: TFormContent) => {
          if (next.type === 'privateKey' && next.value) {
            // 初始化密钥对
            setKeyPair({ ...keyPair, [next.field]: { publicKey: next.value } })
          } else if (['imageUpload'].includes(next.type)) {
            // 初始化上传图片队列
            setImageList({
              ...imageList,
              [next.field]: next.value
            })
          } else if (['fileUpload'].includes(next.type)) {
            // 初始化上传文件队列
            setFileList({
              ...fileList,
              [next.field]: next.value
            })
          }
          let value = next.value
          if (next.type === 'dateTime' && next.value) {
            value = dayjs(next.value)
          } else if (next.type === 'switch' && !next.value) {
            value = false
          }
          return {
            ...prev,
            [next.field]: value
          }
        },
        {}
      )
      form.setFieldsValue(formValues)
    })()
  }, [])

  const [imageList, setImageList] = useState<Record<string, UploadFile[]>>({}) // 缓存上传图片队列

  /**
   * 覆盖默认的图片上传行为
   */
  const imgCustomRequest = (options: UploadRequestOption, field: string) => {
    new Promise((resolve: (value: string) => void) => {
      getBase64(options.file as RcFile, url => {
        resolve(url)
      })
    }).then(url => {
      const imageBase64: string = url.substring(
        url.indexOf('base64,') + 'base64,'.length
      )
      const uid = (options.file as RcFile).uid
      const item: UploadFile = {
        uid,
        name: (options.file as File).name,
        status: 'done',
        url: `data:image/png;base64,${imageBase64}`
      }
      form.setFieldValue(
        field,
        imageList[field] ? [...imageList[field], item] : [item]
      )
      setImageList({
        ...imageList,
        [field]: imageList[field] ? [...imageList[field], item] : [item]
      })
    })
  }

  /**
   * 删除上传图片文件
   */
  const onImageRemove = (file: UploadFile, field: string) => {
    const { uid } = file

    form.setFieldValue(
      field,
      imageList[field].filter(item => item.uid !== uid)
    )
    setImageList({
      ...imageList,
      [field]: imageList[field].filter(item => item.uid !== uid)
    })

    // 为了不让Upload组件执行onChange事件
    return false
  }

  const [previewOpen, setPreviewOpen] = useState(false) // 控制预览图片Modal显示隐藏
  const [previewImage, setPreviewImage] = useState<string>() // 预览图片地址

  /**
   * 图片预览
   */
  const onImagePreview = (file: UploadFile) => {
    setPreviewImage(file.url)
    setPreviewOpen(true)
  }

  const [messageApi, contextHolder] = message.useMessage()

  const [fileList, setFileList] = useState<Record<string, UploadFile[]>>({}) // 缓存上传文件队列

  /**
   * 上传前校验文件
   */
  const fileBeforeUpload = (file: RcFile, item: TFormContent) => {
    const { name } = file
    const fileType = name.substring(name.lastIndexOf('.') + 1)
    const isMatched = item.ruleList.includes(fileType as TRuleList)
    if (!isMatched) messageApi.error(`不支持上传${fileType}格式文件`)
    return isMatched || Upload.LIST_IGNORE
  }

  let fileItem: UploadFile
  /**
   * 覆盖默认的文件上传行为
   */
  const fileCustomRequest = async (
    options: UploadRequestOption,
    field: string
  ) => {
    const formData = new FormData()
    const { file } = options
    formData.append('file', file)
    try {
      const { data } = await upload(formData)
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
      form.setFieldValue(
        field,
        fileList[field] ? [...fileList[field], fileItem] : [fileItem]
      )
      setFileList({
        ...fileList,
        [field]: fileList[field] ? [...fileList[field], fileItem] : [fileItem]
      })
    }
  }

  /**
   * 删除上传文件
   */
  const onFileRemove = (file: UploadFile, field: string) => {
    const { uid } = file

    form.setFieldValue(
      field,
      fileList[field].filter(item => item.uid !== uid)
    )
    setFileList({
      ...fileList,
      [field]: fileList[field].filter(item => item.uid !== uid)
    })

    // 为了不让Upload组件执行onChange事件
    return false
  }

  const [keyPair, setKeyPair] =
    useState<Record<string, { publicKey: string; privateKey?: string }>>() // 密钥对

  /**
   * 生成密钥对
   */
  const generateKeyPair = async (field: string) => {
    const { data } = await getSecretKey()
    if (!data) return
    const { publicKey, privateKey } = data
    setKeyPair({ ...keyPair, [field]: { publicKey, privateKey } })
    form.setFieldValue(field, publicKey)
    const content = `公钥：${publicKey}\n私钥：${privateKey}`
    saveAsFile(content, '密钥对')
  }

  type TDataSource = {
    id: number
    key: string
    value: string | undefined
    options: DefaultOptionType[] | undefined
  }
  const [dataSource, setDataSource] = useState<TDataSource[]>()

  useEffect(() => {
    const item = formList.find(__item => __item.type === 'table')
    if (!item) return

    const source: TDataSource[] = item.tableOptions!.map((__item, index) => {
      const defaultValueItem = item.value && item.value[index]
      return {
        ...__item,
        value: defaultValueItem?.value
      }
    })

    setDataSource(source)
  }, [])

  /**
   * 选择调用并发上限（每秒并发）
   */
  const onChange = (value: string, values: TDataSource) => {
    const { id } = values
    const item = {
      id,
      value
    }
    const index = dataSource!.findIndex(item => item.id === id)
    if (index === -1) return
    const upEndTime = form.getFieldValue('upEndTime')
    if (!upEndTime) {
      const limit = Array(dataSource?.length)
      limit[index] = item
      form.setFieldValue('upEndTime', limit)
    } else {
      upEndTime[index] = item
      form.setFieldValue('upEndTime', upEndTime)
    }
  }

  const columns = [
    {
      title: '接口名称',
      width: 200,
      dataIndex: 'key'
    },
    {
      title: '调用并发上限（每秒并发）',
      render: (values: TDataSource) => (
        <>
          <Select
            defaultValue={values.value}
            placeholder='请选择调用并发上限（每秒并发）'
            options={values.options}
            onChange={value => onChange(value, values)}
          />
        </>
      )
    }
  ]

  return (
    <>
      {contextHolder}
      <Form ref={ref} form={form} name={formId.toString()} {...formProps}>
        {formList.map(item => (
          <React.Fragment key={item.field}>
            {/* 单独针对这个表单项进行处理 */}
            {item.cnName !== '接入能力有效期止' && (
              <Form.Item
                {...{
                  noStyle: ['imageUpload', 'fileUpload'].includes(item.type),
                  name: !['imageUpload', 'fileUpload'].includes(item.type)
                    ? item.field
                    : undefined,
                  label:
                    !['imageUpload', 'fileUpload'].includes(item.type) &&
                    item.cnName,
                  rules: [
                    {
                      required: item.required,
                      message: `${
                        [
                          'dateTime',
                          'radio',
                          'checkbox',
                          'select',
                          'selectMultiple',
                          'table'
                        ].includes(item.type)
                          ? '请选择'
                          : '请输入'
                      }${item.cnName}`
                    },
                    {
                      validator (
                        _,
                        value: ({ id: string; value: string } | null)[]
                      ) {
                        if (item.type === 'table' && value) {
                          const existNull = value.some(item => !item)
                          if (existNull) {
                            return Promise.reject(
                              new Error('请录入所有调用并发上限')
                            )
                          }
                        }
                        return Promise.resolve()
                      }
                    }
                  ],
                  valuePropName: ['switch', 'checkbox'].includes(item.type)
                    ? 'checked'
                    : undefined
                }}
              >
                {(() => {
                  switch (item.type) {
                    case 'text':
                      return (
                        <Input
                          {...{
                            placeholder: item.placeholder,
                            maxLength: item.maxLength
                          }}
                          showCount
                        />
                      )
                    case 'textarea':
                      return (
                        <Input.TextArea
                          {...{
                            placeholder: item.placeholder,
                            maxLength: item.maxLength
                          }}
                          showCount
                        />
                      )
                    case 'dateTime':
                      return (
                        <DatePicker
                          style={{ minWidth: 160 }}
                          {...{
                            placeholder: item.placeholder
                          }}
                        />
                      )
                    case 'radio':
                      return (
                        <Radio.Group {...{ options: item.options || [] }} />
                      )
                    case 'checkbox':
                      return (
                        <Checkbox.Group
                          {...{
                            options: item.options || [],
                            defaultValue: item.value
                          }}
                        />
                      )
                    case 'select':
                      return (
                        <Select
                          {...{
                            options: item.options || [],
                            placeholder: item.placeholder
                          }}
                        />
                      )
                    case 'selectMultiple':
                      return (
                        <Select
                          mode='multiple'
                          allowClear
                          {...{
                            options: item.options || [],
                            placeholder: item.placeholder
                          }}
                        />
                      )
                    case 'switch':
                      return (
                        <Switch
                          {...{
                            options: item.options || [],
                            placeholder: item.placeholder,
                            checkedChildren: item.switchText?.split('/')[0],
                            unCheckedChildren: item.switchText?.split('/')[1]
                          }}
                        />
                      )

                    case 'imageUpload':
                      return (
                        <>
                          <Form.Item
                            name={item.field}
                            label={item.cnName}
                            style={{ marginBottom: 0 }}
                            rules={[
                              {
                                required: item.required,
                                message: `请补充${item.cnName}`
                              }
                            ]}
                          >
                            <Upload
                              listType='picture-card'
                              maxCount={1}
                              fileList={imageList[item.field]}
                              beforeUpload={file =>
                                imgBeforeUpload(file, item.fileSize)
                              }
                              customRequest={options =>
                                imgCustomRequest(options, item.field)
                              }
                              onPreview={onImagePreview}
                              onRemove={file => onImageRemove(file, item.field)}
                            >
                              {(!imageList[item.field] ||
                                item.multiple >
                                  imageList[item.field].length) && (
                                <>
                                  <PlusOutlined />
                                  选择图片
                                </>
                              )}
                            </Upload>
                          </Form.Item>
                          <Row>
                            <Col
                              span={20}
                              offset={4}
                              className='font-secondary-color'
                            >
                              上传图片只允许JPG/PNG格式
                            </Col>
                            <Col
                              span={20}
                              offset={4}
                              className='font-secondary-color'
                            >
                              支持图片文件大小：{item.fileSize}M
                            </Col>
                            <Col
                              span={20}
                              offset={4}
                              className='font-secondary-color'
                            >
                              支持上传图片数量：{item.multiple}张
                            </Col>
                          </Row>
                        </>
                      )
                    case 'fileUpload':
                      return (
                        <>
                          <Form.Item
                            name={item.field}
                            label={item.cnName}
                            style={{ marginBottom: 0 }}
                            rules={[
                              {
                                required: item.required,
                                message: `请补充${item.cnName}`
                              }
                            ]}
                          >
                            <Upload
                              maxCount={1}
                              fileList={fileList[item.field]}
                              beforeUpload={file =>
                                fileBeforeUpload(file, item)
                              }
                              customRequest={options =>
                                fileCustomRequest(options, item.field)
                              }
                              onRemove={file => onFileRemove(file, item.field)}
                            >
                              <Button
                                icon={<UploadOutlined />}
                                disabled={
                                  fileList[item.field] &&
                                  item.multiple <= fileList[item.field].length
                                }
                              >
                                上传文件
                              </Button>
                            </Upload>
                          </Form.Item>
                          <Row>
                            <Col
                              span={20}
                              offset={4}
                              className='font-secondary-color'
                            >
                              上传文件只允许{item.ruleList.join()}格式
                            </Col>
                            <Col
                              span={20}
                              offset={4}
                              className='font-secondary-color'
                            >
                              支持文件大小：{item.fileSize}M
                            </Col>
                            <Col
                              span={20}
                              offset={4}
                              className='font-secondary-color'
                            >
                              支持上传文件数量：{item.multiple}
                            </Col>
                          </Row>
                        </>
                      )
                    case 'privateKey':
                      return (
                        <Space>
                          <Button
                            type='primary'
                            onClick={() => generateKeyPair(item.field)}
                          >
                            生成密钥对
                          </Button>
                          {keyPair && (
                            <>
                              <span
                                style={{
                                  minWidth: 50,
                                  display: 'inline-block'
                                }}
                              >
                                公钥：
                              </span>
                              <Typography.Paragraph
                                copyable
                                style={{ marginBottom: 0 }}
                              >
                                {keyPair[item.field].publicKey}
                              </Typography.Paragraph>
                            </>
                          )}
                        </Space>
                      )
                    case 'table':
                      return (
                        <>
                          <Table
                            rowKey='id'
                            bordered
                            dataSource={dataSource}
                            columns={columns}
                            pagination={false}
                          />
                        </>
                      )

                    default:
                      return <></>
                  }
                })()}
              </Form.Item>
            )}
          </React.Fragment>
        ))}
      </Form>
      <Modal
        open={previewOpen}
        footer={null}
        onCancel={() => setPreviewOpen(false)}
      >
        <img alt='image' style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </>
  )
})

DynamicForm.displayName = 'DynamicForm'

export default DynamicForm
