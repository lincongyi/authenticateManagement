import React, { useState } from 'react'
import {
  Divider,
  Form,
  Input,
  Radio,
  Space,
  Upload,
  Typography,
  Row,
  Col,
  Button
} from 'antd'
import type { RadioChangeEvent } from 'antd'
import {
  LoadingOutlined,
  PlusOutlined,
  ExclamationCircleOutlined,
  UploadOutlined
} from '@ant-design/icons'
import { useStore } from '@stores/index'
import type { FormInstance } from 'antd/lib/form/hooks/useForm'
import { formProps } from '..'
import { UploadFile } from 'antd/lib/upload/interface'
import type { UploadRequestOption } from 'rc-upload/lib/interface'
import { imgBeforeUpload } from '@utils/index'
import { TValue } from '../../index.d'

const { TextArea } = Input
const { Text } = Typography

const AccountInfo = React.forwardRef<
  FormInstance,
  { params: { value: TValue } }
>(({ params }, ref) => {
  const { value } = params

  const { accessFormStore } = useStore()

  const isCheck = accessFormStore.current.state === 2

  const [loading, setLoading] = useState(false)

  /**
   * 正式应用截图
   */
  const [fileList, setFileList] = useState<UploadFile[]>([])

  /**
   * 覆盖默认的上传行为
   */
  const customRequest = (options: UploadRequestOption) => {}

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  )

  const [radioValue, setRadioValue] = useState(1)

  /**
   * 切换方式
   */
  const onChange = (e: RadioChangeEvent) => {
    setRadioValue(e.target.value)
  }

  /**
   * 正式上线新闻通告截图
   */
  const [imgNotice, setImgNotice] = useState()

  const { themeStore } = useStore()
  const colorPrimary = themeStore.antdThemeColor

  return (
    <>
      <Form
        ref={ref}
        name='accountInfo'
        {...formProps}
        initialValues={{}}
        style={{ display: value === '4' ? 'block' : 'none' }}
      >
        <Divider />
        <Form.Item
          label='正式应用介绍'
          name='description'
          rules={[{ required: true }]}
        >
          {isCheck ? (
            ''
          ) : (
            <TextArea
              rows={4}
              placeholder='请简要填写应用介绍'
              showCount
              maxLength={1000}
            />
          )}
        </Form.Item>
        <Form.Item
          label='正式应用截图'
          name='picture'
          rules={[{ required: true }]}
        >
          {isCheck ? (
            ''
          ) : (
            <Upload
              listType='picture-card'
              fileList={fileList}
              beforeUpload={imgBeforeUpload}
              customRequest={customRequest}
            >
              {fileList.length >= 5 ? null : uploadButton}
            </Upload>
          )}
        </Form.Item>
        <Form.Item label='正式上线新闻通告'>
          {isCheck ? (
            ''
          ) : (
            <>
              <Space style={{ color: colorPrimary, marginTop: 6 }}>
                <ExclamationCircleOutlined />
                <span>下列方式三选一即可，不填写可能影响审批结果</span>
              </Space>
              <Form.Item name='notice' noStyle>
                <Radio.Group
                  onChange={onChange}
                  value={radioValue}
                  style={{ width: '100%', marginTop: 20 }}
                >
                  <Row gutter={[0, 20]}>
                    <Col span={24}>
                      <Radio value={1} style={{ width: '100%' }}>
                        <Text>方式一：粘贴网址链接</Text>
                        <Input placeholder='请粘贴网址链接' />
                      </Radio>
                    </Col>
                    <Col span={24}>
                      <Radio value={2}>
                        <Text>方式二：上传截图</Text>
                        <Upload
                          listType='picture-card'
                          maxCount={1}
                          showUploadList={false}
                          beforeUpload={imgBeforeUpload}
                          customRequest={customRequest}
                        >
                          {imgNotice ? (
                            <img
                              src={imgNotice}
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
                      </Radio>
                    </Col>
                    <Col span={24}>
                      <Radio value={3}>
                        <Text>方式三：上传文件</Text>
                        <br />
                        <Upload
                          maxCount={1}
                          customRequest={customRequest}
                          // fileList={fileList}
                        >
                          <Button icon={<UploadOutlined />}>Upload</Button>
                        </Upload>
                      </Radio>
                    </Col>
                  </Row>
                </Radio.Group>
              </Form.Item>
            </>
          )}
        </Form.Item>
      </Form>
    </>
  )
})

AccountInfo.displayName = 'AccountInfo'

export default AccountInfo
