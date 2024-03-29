import React, { useEffect, useState } from 'react'
import {
  Button,
  Divider,
  Form,
  Input,
  Result,
  Space,
  Typography,
  Upload,
  message
} from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import Area from '@components/Area'
import type { UploadRequestOption } from 'rc-upload/lib/interface'
import type { RcFile } from 'antd/es/upload/interface'
import { getBase64, imgBeforeUpload } from '@utils/index'
import { applyUpdateCompanyInfo, currentCompanyInfo } from '@api/myAccount'

const { Title } = Typography

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

  const [process] = useState<TProcess>({
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
      if (!currentInfo) return false

      // const { data } = await getProcessByKey({
      //   userId: currentInfo.accountNumber,
      //   key: 'UPDATE_COMPANY_INFO'
      // })
      // 如果当前任务返回空 or 驳回状态，即可走提交申请流程，否则当前申请审批在审核中，不可重复提交申请
      form.setFieldsValue(currentInfo)
      if (currentInfo!.areaList) {
        form.setFieldValue('areaCode', currentInfo!.areaList[0].code)
      }
      setCompanyInfo(currentInfo)
      setCertificateFile(
        `data:image/png;base64,${currentInfo!.certificatePhoto}`
      )
      // if (data) {
      //   const { state, processInstanceId, starter, comment } = data.instanceInfo
      //   setProcess({
      //     taskId: data.taskId,
      //     state,
      //     processInstanceId,
      //     starter,
      //     comment
      //   })
      // }
    })()
  }, [])

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

  const navigate = useNavigate()

  /**
   * 返回
   */
  const onBack = () => navigate(-1)

  const [messageApi, contextHolder] = message.useMessage()

  /**
   * 提交数据
   */
  const onFinish = async (values: TCompanyInfo & { adminName: string }) => {
    if (!companyInfo) return
    const { companyId, accountNumber, adminName, companyName, adminPhone } =
      companyInfo // 这几项是固定不可编辑的
    const { companyShortName, certificateNum, areaCode, adminEmail } = values
    const certificatePhoto = certificateFile.substring(
      certificateFile.indexOf('base64,') + 'base64,'.length
    )

    const { retMessage } = await applyUpdateCompanyInfo({
      companyId,
      adminAccountNumber: accountNumber,
      adminName,
      companyName,
      adminPhone,
      companyShortName,
      certificateNum,
      certificatePhoto,
      areaCode,
      adminEmail
    })
    messageApi.success({
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
      {contextHolder}
      {process.state === 1 ? (
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
          {process.state === 2 && (
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
            <Title level={5}>单位机构基本信息</Title>
            <Divider />
            <Form.Item label='单位名称' rules={[{ required: true }]}>
              {companyInfo?.companyName}
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
            <Title level={5}>单位管理员信息</Title>
            <Divider />
            <Form.Item label='管理员姓名' rules={[{ required: true }]}>
              {companyInfo?.adminName}
            </Form.Item>
            <Form.Item label='管理员手机号' required>
              {companyInfo?.adminPhone}
            </Form.Item>
            <Form.Item name='adminEmail' label='管理员邮箱' required>
              <Input showCount maxLength={40} />
            </Form.Item>

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
    </>
  )
}

export default CompanySettings
