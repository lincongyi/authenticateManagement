import React, { useEffect, useState } from 'react'
import style from './index.module.scss'
import { Button, Form, Input, Result, Space, Upload, message } from 'antd'
import { PlusOutlined, EditOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import UpdatePhoneModal from './components/UpdatePhoneModal'
import UpdateEmailModal from './components/UpdateEmailModal'
import Area from '@components/Area'
import type { UploadRequestOption } from 'rc-upload/lib/interface'
import type { RcFile } from 'antd/es/upload/interface'
import { getBase64, imgBeforeUpload } from '@utils/index'
import { getProcessByKey } from '@api/index'
import { applyUpdateCompanyInfo, currentCompanyInfo } from '@api/myAccount'

const CompanySettings = () => {
  const [form] = Form.useForm()

  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 12 }
  }

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '请输入${label}'
  }
  /* eslint-disable no-template-curly-in-string */

  const [process, setProcess] = useState<TProcess>({
    taskId: '',
    state: -1,
    processInstanceId: '',
    starter: '',
    comment: ''
  })
  const [companyInfo, setCompanyInfo] = useState<TCompanyInfo>() // 单位信息
  useEffect(() => {
    // 初始化表单数据
    ;(async () => {
      const { data: currentInfo } = await currentCompanyInfo()

      const { data } = await getProcessByKey({
        userId: currentInfo!.accountNumber,
        key: 'UPDATE_COMPANY_INFO'
      })
      // 如果当前任务返回空 or 驳回状态，即可走提交申请流程，否则当前申请审批在审核中，不可重复提交申请
      form.setFieldsValue(currentInfo)
      if (currentInfo!.areaList) {
        form.setFieldValue('areaCode', currentInfo!.areaList[0].code)
      }
      setCompanyInfo(currentInfo)
      setCertificateFile(
        `data:image/png;base64,${currentInfo!.certificatePhoto}`
      )
      if (data) {
        const { state, processInstanceId, starter, comment } = data.instanceInfo
        setProcess({
          taskId: data.taskId,
          state,
          processInstanceId,
          starter,
          comment
        })
      }
    })()
  }, [])

  // 修改管理员手机号模态框
  const [updatePhoneModalOpen, setUpdatePhoneModalOpen] = useState(false)
  /**
   * 修改管理员手机号
   */
  const updatePhone = () => {
    setUpdatePhoneModalOpen(true)
  }

  // 修改管理员邮箱模态框
  const [updateEmailModalOpen, setUpdateEmailModalOpen] = useState(false)
  /**
   * 修改管理员邮箱
   */
  const updateEmail = () => {
    setUpdateEmailModalOpen(true)
  }

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

  const navigate = useNavigate()

  /**
   * 返回
   */
  const onBack = () => navigate(-1)

  /**
   * 提交数据
   */
  const onFinish = async (values: TCompanyInfo & { adminName: string }) => {
    if (!companyInfo) return
    const { userId, adminName, adminPhone, adminEmail } = companyInfo
    const { companyName, companyShortName, certificateNum, areaCode } = values
    const certificatePhoto = certificateFile.substring(
      certificateFile.indexOf('base64,') + 7
    )

    const { retMessage } = await applyUpdateCompanyInfo({
      userId,
      companyName,
      companyShortName,
      adminName,
      adminPhone,
      adminEmail,
      certificateNum,
      certificatePhoto,
      areaCode
    })
    message.success({
      content: retMessage,
      duration: 2,
      onClose () {
        navigate(-1)
      }
    })
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <>
      {process!.state === 1 ? (
        <Result
          title='申请审核中，请稍后...'
          extra={
            <Button type='primary' key='console' onClick={() => navigate(-1)}>
              返回
            </Button>
          }
        />
      ) : (
        <>
          {process!.state === 2 && (
            <Result
              title={`${process.comment}，请重新确认信息，再提交申请`}
              status='error'
            />
          )}
          <Form
            form={form}
            name='settings'
            {...layout}
            colon={false}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            validateMessages={validateMessages}
            autoComplete='off'
          >
            <Form.Item
              label='单位名称'
              name='companyName'
              rules={[{ required: true }]}
            >
              <Input showCount maxLength={20} />
            </Form.Item>
            <Form.Item name='companyShortName' label='单位简称'>
              <Input showCount maxLength={10} />
            </Form.Item>
            <Form.Item
              name='adminName'
              label='单位管理员姓名'
              rules={[{ required: true }]}
            >
              <Input showCount maxLength={20} />
            </Form.Item>
            <Form.Item label='管理员手机号' required>
              <>
                {companyInfo?.adminPhone}
                <Button
                  type='text'
                  className={style['update-btn']}
                  icon={<EditOutlined />}
                  onClick={updatePhone}
                >
                  修改
                </Button>
              </>
            </Form.Item>
            <Form.Item label='管理员邮箱' required>
              <>
                {companyInfo?.adminEmail}
                <Button
                  type='text'
                  className={style['update-btn']}
                  icon={<EditOutlined />}
                  onClick={updateEmail}
                >
                  修改
                </Button>
              </>
            </Form.Item>
            <Form.Item name='certificateNum' label='统一信用代码'>
              <Input showCount maxLength={20} />
            </Form.Item>
            <Form.Item
              name='certificateFile'
              label='信用代码证书'
              valuePropName='certificateFile'
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
            {companyInfo && (
              <Form.Item name='areaCode' label='接入地区'>
                <Area
                  callback={(code: number) =>
                    form.setFieldValue('areaCode', code)
                  }
                  destinationList={companyInfo.areaList}
                />
              </Form.Item>
            )}

            <Form.Item wrapperCol={{ offset: 6, span: 12 }}>
              <Space>
                <Button onClick={onBack}>返回</Button>
                <Button type='primary' htmlType='submit'>
                  提交申请
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </>
      )}
      {companyInfo?.adminPhone && (
        <UpdatePhoneModal
          open={updatePhoneModalOpen}
          setOpen={setUpdatePhoneModalOpen}
          companyInfo={companyInfo}
          callback={(phone: string) =>
            setCompanyInfo({ ...companyInfo, ...{ adminPhone: phone } })
          }
        />
      )}

      {companyInfo?.adminEmail && (
        <UpdateEmailModal
          open={updateEmailModalOpen}
          setOpen={setUpdateEmailModalOpen}
          companyInfo={companyInfo}
          callback={(email: string) =>
            setCompanyInfo({ ...companyInfo, ...{ adminEmail: email } })
          }
        />
      )}
    </>
  )
}

export default CompanySettings
