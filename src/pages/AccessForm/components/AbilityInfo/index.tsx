import React from 'react'
import style from './index.module.scss'
import { useStore } from '@stores/index'
import {
  ConfigProvider,
  DatePicker,
  Form,
  Radio,
  Select,
  Checkbox,
  Row,
  Col,
  Input,
  Popover,
  Typography,
  Space
} from 'antd'
import { QuestionCircleOutlined } from '@ant-design/icons'
import type { FormInstance } from 'antd/lib/form/hooks/useForm'
import type { RangePickerProps } from 'antd/es/date-picker'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import locale from 'antd/locale/zh_CN'
import accessFormChooseMethod from '@/assets/accessForm-chooseMethod.png'
import { formProps } from '..'

const CheckboxGroup = Checkbox.Group

const basicAccessOptions = [{ label: '身份认证', value: 1 }]

const defaultMaxLength = 20

/**
 * 接入账号类型options
 */
const accountTypeOptions = [
  { label: '测试账号', value: 1 },
  { label: '正式账号', value: 2 }
]

/**
 * 认证类型options
 */
const authTypeOptions = [
  { label: '第二代居民身份证', value: 1 },
  { label: '港澳居民居住证', value: 2 },
  { label: '港澳居民来往内地通行证', value: 3 },
  { label: '台湾居民来往内地居民证', value: 4 },
  { label: '普通护照', value: 5 },
  { label: '外国人永久居留身份证', value: 6 }
]

/**
 * 认证模式options
 */
const authModeOptions = [
  { label: '实名', value: 1 },
  { label: '实名+实人', value: 2 },
  { label: '实名+实人+实证', value: 3 }
]

/**
 * 接入方式options
 */
const accessMethodOptions = [
  [
    { label: 'SDK认证', value: 1 },
    { label: '出入境SDK认证', value: 2 },
    { label: 'SDK扫码认证', value: 3 }
  ],
  [
    { label: 'API认证', value: 4 },
    { label: '出入境API认证', value: 5 }
  ],
  [
    { label: '公众号跳转认证', value: 6 },
    { label: '小程序跳转认证', value: 7 },
    { label: 'APP认证任务/跳转认证', value: 8 },
    { label: '支付宝小程序跳转认证', value: 9 }
  ],
  [
    { label: '扫码认证', value: 10 },
    { label: '个人二维码', value: 11 },
    { label: '现场个人二维码', value: 12 },
    { label: '获取个人二维码信息', value: 13 },
    { label: '面对面认证', value: 14 },
    { label: '1：N人脸比对认证', value: 15 }
  ]
]

/**
 * Can not select days after todays
 */
const afterToday: RangePickerProps['disabledDate'] = current =>
  current && current <= dayjs().endOf('day')

/**
 * 接入方式Form.Item
 */
const popoverTitle = (
  <div className={style.flex}>
    <img src={accessFormChooseMethod} style={{ marginRight: 8 }} />
    如何选择接入方式？
  </div>
)

const contents = [
  {
    description: '接入APP境内身份认证',
    strong: 'SDK认证'
  },
  {
    description: '接入APP出入境身份认证',
    strong: '出入境SDK认证'
  },
  {
    description: '接入APP进行扫码核验身份',
    strong: 'SDK扫码认证'
  },
  {
    description: '生成个人身份认证二维码',
    strong: '扫码认证'
  },
  {
    description: '接入公众号',
    strong: '公众号跳转认证'
  },
  {
    description: '接入小程序',
    strong: '小程序跳转认证'
  }
]

const popoverContent = (
  <Space direction='vertical'>
    {contents.map((item, index) => (
      <p className={style.flex} key={index}>
        <span className={style['order-number']}>{index + 1}</span>
        应用场景为{item.description}，则选择
        <Typography.Text strong className='primary-color'>
          【{item.strong}】
        </Typography.Text>
      </p>
    ))}
  </Space>
)

const AbilityInfo = React.forwardRef<
  FormInstance,
  { params: { value: TValue; isCheck: 0 | 1 } }
>(({ params }, ref) => {
  const { themeStore } = useStore()
  const colorPrimary = themeStore.antdThemeColor

  const { value, isCheck } = params

  return (
    <Form
      ref={ref}
      name='abilityInfo'
      {...formProps}
      initialValues={{ accountType: 1 }}
      style={{ display: value === '1' ? 'block' : 'none' }}
    >
      <Form.Item
        label='接入基础能力'
        name='basicAccess'
        rules={[{ required: true, message: '请选择接入基础能力' }]}
      >
        {isCheck ? (
          ''
        ) : (
          <Select
            placeholder='请选择接入基础能力'
            options={basicAccessOptions}
          />
        )}
      </Form.Item>
      <Form.Item
        label='接入账号类型'
        name='accountType'
        rules={[{ required: true, message: '请选择接入账号类型' }]}
      >
        {isCheck ? '' : <Radio.Group options={accountTypeOptions} />}
      </Form.Item>
      <ConfigProvider locale={locale}>
        <Form.Item
          label='接入服务有效期'
          name='period'
          rules={[{ required: true, message: '请选择接入服务有效期' }]}
        >
          {isCheck ? (
            ''
          ) : (
            <DatePicker
              placeholder='请选择接入服务有效期'
              disabledDate={afterToday}
              style={{ width: '100%' }}
            />
          )}
        </Form.Item>
      </ConfigProvider>
      <Form.Item
        label='认证类型'
        name='authType'
        rules={[{ required: true, message: '请选择认证类型' }]}
      >
        {isCheck ? (
          ''
        ) : (
          <CheckboxGroup>
            <Row gutter={[20, 20]}>
              {authTypeOptions.map(item => {
                return (
                  <Col span={6} key={item.value}>
                    <Checkbox value={item.value}>{item.label}</Checkbox>
                  </Col>
                )
              })}
            </Row>
          </CheckboxGroup>
        )}
      </Form.Item>
      <Form.Item
        label='认证模式'
        name='authMode'
        rules={[{ required: true, message: '请选择认证模式' }]}
      >
        {isCheck ? (
          ''
        ) : (
          <CheckboxGroup style={{ display: 'block' }}>
            <Row gutter={[20, 20]}>
              {authModeOptions.map(item => {
                return (
                  <Col span={6} key={item.value}>
                    <Checkbox value={item.value}>{item.label}</Checkbox>
                  </Col>
                )
              })}
            </Row>
          </CheckboxGroup>
        )}
      </Form.Item>
      {/* 这块需要强调Checkbox分组，所以调整数组格式 start */}
      <Form.Item
        label={
          <>
            <Popover
              placement='bottomLeft'
              content={popoverContent}
              title={popoverTitle}
            >
              <QuestionCircleOutlined
                style={{
                  color: colorPrimary,
                  marginRight: 4,
                  cursor: 'pointer'
                }}
              />
            </Popover>
            接入方式
          </>
        }
        name='accessMethod'
        rules={[{ required: true, message: '请选择接入方式' }]}
      >
        {isCheck ? (
          ''
        ) : (
          <CheckboxGroup style={{ display: 'block' }}>
            {accessMethodOptions.map((item, index) => {
              return (
                <Row gutter={[20, 20]} key={index} style={{ marginBottom: 20 }}>
                  {item.map((__item, __index) => {
                    return (
                      <Col span={6} key={__index}>
                        <Checkbox value={__item.value}>{__item.label}</Checkbox>
                      </Col>
                    )
                  })}
                </Row>
              )
            })}
          </CheckboxGroup>
        )}
      </Form.Item>
      {/* 这块需要强调Checkbox分组，所以调整数组格式 end */}
      <Form.Item label='应用ID（Android）' name='androidId'>
        {isCheck ? (
          ''
        ) : (
          <Input
            placeholder='请输入应用ID'
            showCount
            maxLength={defaultMaxLength}
          />
        )}
      </Form.Item>
      <Form.Item label='Bundle ID（IOS）' name='bundleId'>
        {isCheck ? (
          ''
        ) : (
          <Input
            placeholder='请输入Bundle ID'
            showCount
            maxLength={defaultMaxLength}
          />
        )}
      </Form.Item>
      <Form.Item label='小程序appid' name='appId'>
        {isCheck ? (
          ''
        ) : (
          <Input
            placeholder='请输入小程序appid'
            showCount
            maxLength={defaultMaxLength}
          />
        )}
      </Form.Item>
      <Form.Item label='推送认证结果地址' name='authResultUrl'>
        {isCheck ? (
          ''
        ) : (
          <Input
            placeholder='请输入推送认证结果地址'
            showCount
            maxLength={50}
          />
        )}
      </Form.Item>
    </Form>
  )
})

AbilityInfo.displayName = 'AbilityInfo'

export default AbilityInfo
