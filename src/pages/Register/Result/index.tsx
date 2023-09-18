import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import style from './index.module.scss'
import { Button, Form, Input, Result, Space, Upload, message } from 'antd'
import { ArrowLeftOutlined, PlusOutlined } from '@ant-design/icons'
import type { RcFile } from 'antd/es/upload/interface'
import type { UploadRequestOption } from 'rc-upload/lib/interface'
import { getBase64, imgBeforeUpload } from '@utils/index'
import Header from '@components/Header'
import Area from '@components/Area'
import { ResultStatusType } from 'antd/es/result'
import { useStore } from '@stores/index'
import { hastenProcess, resubmitRegister } from '@api/register'
import { observer } from 'mobx-react-lite'

const RegisterResult = () => {
  const navigate = useNavigate()
  /**
   * 返回
   */
  const onBack = () => navigate(-1)

  const [form] = Form.useForm()

  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 }
  }

  const { registerStore } = useStore()

  // 账号注册申请结果
  const { state: registerStatus } = registerStore.registerInfo

  useEffect(() => {
    if (registerStatus === -1) navigate(-1)
  }, [])

  const tipsList = [
    { title: '审核通过', subTitle: '请跳转到登录页面进行登录' },
    {
      title: '提示',
      subTitle:
        '您账号注册申请的内容已提交给平台审核中，预计3个工作日内反馈结果会以短信和邮件的形式，发送到单位管理员手机号和邮箱中，请注意查收'
    },
    { title: '审核不通过', subTitle: '' }
  ]
  if (registerStatus === 2) {
    const { comment } = registerStore.registerInfo
    tipsList.at(-1)!.subTitle = comment // 驳回原因
  }
  const tips = registerStatus === 2 ? tipsList.at(-1) : tipsList[registerStatus]

  const statusList = ['success', 'info', 'error']
  const status =
    registerStatus === 2 ? statusList.at(-1) : statusList[registerStatus]

  /**
   * 去登录
   */
  const toLogin = () => navigate('/login')

  const [messageApi, contextHolder] = message.useMessage()

  /**
   * 催办
   */
  const toUrge = async () => {
    const { processInstanceId } = registerStore.registerInfo
    await hastenProcess({ instanceId: processInstanceId })
    messageApi.warning({
      content: '催办信息已发送！5秒后自动关闭',
      duration: 5,
      onClose: () => {
        navigate('/register/tour')
      }
    })
  }

  const backBtn = [
    <Button key='back' onClick={onBack}>
      返回
    </Button>
  ]
  const extraList = [
    [
      <Button type='primary' key='login' onClick={toLogin}>
        去登录
      </Button>,
      ...backBtn
    ],
    [
      <Button type='primary' key='urge' onClick={toUrge}>
        催办
      </Button>,
      ...backBtn
    ],
    []
  ]
  const extra =
    registerStatus === 2 ? extraList.at(-1) : extraList[registerStatus]

  const [certificateFile, setCertificateFile] = useState('')

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
      setCertificateFile(url)
      form.setFieldValue('certificateFile', imageBase64)
    })
  }

  const normFile = (e: any) => {
    console.log('Upload event:', e)
    if (Array.isArray(e)) {
      return e
    }
    return e?.fileList
  }

  /**
   * 提交
   */
  const onFinish = async (values: any) => {
    const { state, comment, processInstanceId, ...rest } =
      registerStore.registerInfo
    const { retMessage } = await resubmitRegister({
      ...values,
      ...rest,
      ...{ instanceId: processInstanceId }
    })
    messageApi.success({
      content: retMessage,
      onClose: () => {
        registerStore.setRegisterInfo({
          taskId: '',
          state: 1,
          processInstanceId: '',
          starter: '',
          comment: ''
        })
      }
    })
  }
  const onFinishFailed = (errorInfo: any) => {
    console.log(errorInfo)
  }

  /**
   * 重置
   */
  const onReset = () => {
    form.resetFields()
  }

  return (
    <>
      {contextHolder}
      {registerStatus !== -1 && (
        <>
          <Header isLogin={false} />
          <div className='gray-bg'>
            <div className={style.content}>
              <div className={style['back-column']}>
                <div className={style['back-btn']} onClick={onBack}>
                  <Space>
                    <ArrowLeftOutlined style={{ color: '#999' }} />
                    返回
                  </Space>
                </div>
              </div>
              <div className={style['result-box']}>
                <Result
                  status={status as ResultStatusType}
                  title={tips!.title}
                  subTitle={tips!.subTitle}
                  extra={extra}
                />
              </div>
              {registerStatus === 2 && (
                <div className={style['register-box']}>
                  <Form
                    form={form}
                    name='register'
                    {...layout}
                    colon={false}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete='off'
                  >
                    <Form.Item
                      name='companyName'
                      label='单位名称'
                      rules={[{ required: true }]}
                    >
                      <Input showCount maxLength={20} />
                    </Form.Item>
                    <Form.Item name='companyShortName' label='单位简称'>
                      <Input showCount maxLength={10} />
                    </Form.Item>
                    <Form.Item name='certificateNum' label='统一信用代码'>
                      <Input showCount maxLength={20} />
                    </Form.Item>
                    <Form.Item
                      name='certificateFile'
                      label='信用代码证书'
                      valuePropName='certificateFile'
                      getValueFromEvent={normFile}
                    >
                      <Upload
                        listType='picture-card'
                        maxCount={1}
                        showUploadList={false}
                        beforeUpload={imgBeforeUpload}
                        customRequest={customRequest}
                      >
                        {certificateFile ? (
                          <img
                            src={certificateFile}
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
                    </Form.Item>
                    <Form.Item name='areaCode' label='接入地区'>
                      <Area
                        callback={(code: number) =>
                          form.setFieldValue('areaCode', code)
                        }
                      />
                    </Form.Item>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
                      <Space>
                        <Button onClick={onReset}>重置</Button>
                        <Button type='primary' htmlType='submit'>
                          提交
                        </Button>
                      </Space>
                    </Form.Item>
                  </Form>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default observer(RegisterResult)
