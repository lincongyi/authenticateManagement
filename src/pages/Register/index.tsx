import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import style from './index.module.scss'
import {
  Form,
  Input,
  Button,
  Space,
  Upload,
  message,
  Row,
  Col,
  Divider,
  Result
} from 'antd'
import { LeftOutlined, PlusOutlined } from '@ant-design/icons'
import type { UploadRequestOption } from 'rc-upload/lib/interface'
import type { RcFile } from 'antd/es/upload/interface'
import Header from '@components/Header'
import Area from '@components/Area'
import {
  phonePattern,
  passwordPattern,
  emailPattern,
  getBase64,
  imgBeforeUpload,
  idCardPattern
} from '@utils/index'
import { registerApply } from '@api/register'
import MessageCaptcha from '@components/MessageCaptcha'
import EmailCaptcha from '@components/EmailCaptcha'

const Register = () => {
  /**
   * 离开当前页面触发提示
   */
  useEffect(() => {
    window.onbeforeunload = e => {
      return false
    }
    return () => {
      window.onbeforeunload = () => {}
    }
  }, [])

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

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '请输入${label}'
  }
  /* eslint-disable no-template-curly-in-string */

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
      const imageBase64: string = url.substring(
        url.indexOf('base64,') + 'base64,'.length
      )
      setCertificateFile(url)
      form.setFieldValue('certificateFile', imageBase64)
    })
  }

  const normFile = (e: any) => {
    if (Array.isArray(e)) {
      return e
    }
    return e?.fileList
  }

  const [state, setState] = useState<0 | 1>(0) // 申请状态：0-未录入申请信息；1-已录入申请信息；

  const [messageApi, contextHolder] = message.useMessage()

  /**
   * 提交
   */
  const onFinish = async (values: any) => {
    const { retMessage } = await registerApply(values)
    messageApi.success({
      content: retMessage,
      duration: 2,
      onClose () {
        // navigate('/register/tour')
        setState(1)
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
      <Header isLogin={false} />
      <div className='gray-bg'>
        <div className={style.content}>
          <div className={style['title-wrap']}>
            <Space>
              <LeftOutlined
                style={{ color: '#999', cursor: 'pointer' }}
                onClick={onBack}
              />
              单位注册申请
            </Space>
          </div>
          <div className={style.section}>
            {!state ? (
              <Form
                form={form}
                name='register'
                {...layout}
                colon={false}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                validateMessages={validateMessages}
                validateTrigger={['onBlur', 'onChange']}
                autoComplete='off'
              >
                <Row>
                  <Col span={24}>
                    <div className={style['section-title']}>
                      单位机构基本信息
                    </div>
                  </Col>
                  <Divider />
                  <Col span={16} offset={4}>
                    <Form.Item
                      name='companyName'
                      label='单位名称'
                      rules={[{ required: true }]}
                    >
                      <Input
                        showCount
                        maxLength={20}
                        placeholder='请输入单位名称'
                      />
                    </Form.Item>
                    <Form.Item name='companyShortName' label='单位简称'>
                      <Input
                        showCount
                        maxLength={10}
                        placeholder='请输入单位简称'
                      />
                    </Form.Item>
                    <Form.Item name='certificateNum' label='统一信用代码'>
                      <Input
                        showCount
                        maxLength={20}
                        placeholder='请输入统一信用代码'
                      />
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
                        beforeUpload={file => imgBeforeUpload(file)}
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
                  </Col>
                  <Col span={24}>
                    <div className={style['section-title']}>单位管理员信息</div>
                  </Col>
                  <Divider />
                  <Col span={16} offset={4}>
                    <Form.Item
                      name='adminName'
                      label='单位管理员姓名'
                      rules={[{ required: true }]}
                    >
                      <Input
                        showCount
                        maxLength={20}
                        placeholder='请输入单位管理员姓名'
                      />
                    </Form.Item>

                    <Form.Item
                      name='adminIdNum'
                      label='管理员身份证号'
                      rules={[
                        { required: true },
                        {
                          validator (_, value) {
                            if (idCardPattern.test(value)) {
                              return Promise.resolve()
                            }
                            return Promise.reject(
                              new Error('证件号码格式有误，请重新确认')
                            )
                          },
                          validateTrigger: 'onBlur'
                        }
                      ]}
                    >
                      <Input
                        showCount
                        maxLength={20}
                        placeholder='请输入管理员身份证号'
                      />
                    </Form.Item>
                    <Form.Item
                      name='adminPhone'
                      label='管理员手机号'
                      rules={[
                        { required: true },
                        {
                          validator (_, value) {
                            if (phonePattern.test(value)) {
                              return Promise.resolve()
                            }
                            return Promise.reject(
                              new Error('手机号格式有误，请重新确认')
                            )
                          },
                          validateTrigger: 'onBlur'
                        }
                      ]}
                      extra='管理员手机号码为平台的登录账号，并保证手机号真实有效，并妥善保管！'
                    >
                      <Input maxLength={11} placeholder='请输入管理员手机号' />
                    </Form.Item>
                    <Form.Item
                      label='短信验证码'
                      name='messageCaptcha'
                      required
                    >
                      <MessageCaptcha
                        form={form}
                        widthList={[400, 150]}
                        callback={(code: string) =>
                          form.setFieldValue('messageCaptcha', code)
                        }
                      />
                    </Form.Item>
                    <Form.Item
                      label='单位管理员邮箱'
                      name='adminEmail'
                      rules={[
                        { required: true },
                        {
                          validator (_, value) {
                            if (emailPattern.test(value)) {
                              return Promise.resolve()
                            }
                            return Promise.reject(
                              new Error('邮箱格式有误，请重新确认')
                            )
                          },
                          validateTrigger: 'onBlur'
                        }
                      ]}
                      extra='管理员邮箱为获取平台审批信息的重要邮箱，请保证邮箱真实有效，并妥善保管！'
                    >
                      <Input
                        maxLength={30}
                        placeholder='请输入单位管理员邮箱'
                        showCount
                        autoComplete='new-email'
                      />
                    </Form.Item>
                    <Form.Item label='邮箱验证码' required>
                      <EmailCaptcha
                        form={form}
                        widthList={[400, 150]}
                        callback={(code: string) =>
                          form.setFieldValue('emailCaptcha', code)
                        }
                      />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <div className={style['section-title']}>登录账号信息</div>
                  </Col>
                  <Divider />
                  <Col span={16} offset={4}>
                    <Form.Item
                      name='accountNumber'
                      label='账户登录名'
                      rules={[
                        { required: true, message: '请输入账户登录名' },
                        {
                          min: 5,
                          max: 50,
                          message: '账户登录名的长度需要在5-50个字之间'
                        }
                      ]}
                    >
                      <Input
                        showCount
                        maxLength={50}
                        placeholder='请输入账户登录名'
                      />
                    </Form.Item>
                    <Form.Item
                      label='密码'
                      name='password'
                      rules={[
                        { required: true },
                        {
                          validator (_, value) {
                            const pattern = passwordPattern
                            if (pattern.test(value)) {
                              return Promise.resolve()
                            }
                            return Promise.reject(
                              new Error('密码格式有误，请重新确认')
                            )
                          }
                        }
                      ]}
                      extra='平台登录密码，密码必须包含数字、小写字母、大写字母、特殊符号其中的三种及以上，至少8个字符'
                    >
                      <Input.Password
                        maxLength={20}
                        placeholder='请输入密码'
                        showCount
                        autoComplete='new-password'
                      />
                    </Form.Item>
                    <Form.Item
                      label='确认密码'
                      name='passwordConfirmation'
                      rules={[
                        { required: true },
                        ({ getFieldValue }) => ({
                          validator (_, value) {
                            if (getFieldValue('password') === value) {
                              return Promise.resolve()
                            }
                            return Promise.reject(
                              new Error('两次密码不一致请重新确认')
                            )
                          }
                        })
                      ]}
                      extra='平台登录密码，密码必须包含数字、小写字母、大写字母、特殊符号其中的三种及以上，至少8个字符'
                    >
                      <Input.Password
                        maxLength={20}
                        placeholder='请输入密码'
                        showCount
                        autoComplete='new-password'
                      />
                    </Form.Item>

                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
                      <Space>
                        <Button onClick={onReset}>重置</Button>
                        <Button type='primary' htmlType='submit'>
                          提交注册申请
                        </Button>
                      </Space>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            ) : (
              <Result
                status='success'
                title='已提交单位注册申请'
                subTitle='审批结果将通过短情，邮通知，请注意查收!'
                extra={[
                  <Button key='back' onClick={() => navigate('/login')}>
                    返回
                  </Button>
                ]}
              />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
