import React from 'react'
import style from './index.module.scss'
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
import { useStore } from '@stores/index'
import { observer } from 'mobx-react-lite'
import { fieldNames } from '@utils/index'

const CheckboxGroup = Checkbox.Group

const defaultMaxLength = 20

/**
 * 接入账号类型options
 */
const accountTypeOptions = [
  { label: '测试账号', value: 1 },
  { label: '正式账号', value: 2 }
]

/**
 * 接入方式options
 */
const accessModeOptions = [
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
  { params: { value: TValue } }
>(({ params }, ref) => {
  const { themeStore } = useStore()
  const colorPrimary = themeStore.antdThemeColor

  const { value } = params

  const { accessFormStore } = useStore()

  const isCheck = accessFormStore.current.state === 2

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
        name='basepower'
        rules={[{ required: true, message: '请选择接入基础能力' }]}
      >
        {isCheck ? (
          ''
        ) : (
          <Select
            placeholder='请选择接入基础能力'
            fieldNames={fieldNames}
            options={accessFormStore.getDictionaryItem('accessSkill')}
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
          name='serviceVaildEnd'
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
              {accessFormStore.dictionary &&
                accessFormStore.getDictionaryItem('authType')?.map(item => {
                  return (
                    <Col span={6} key={item.dictValue}>
                      <Checkbox value={item.dictValue}>
                        {item.dictName}
                      </Checkbox>
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
              {accessFormStore.dictionary &&
                accessFormStore.getDictionaryItem('authMode')?.map(item => {
                  return (
                    <Col span={6} key={item.dictValue}>
                      <Checkbox value={item.dictValue}>
                        {item.dictName}
                      </Checkbox>
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
        name='accessMode'
        rules={[{ required: true, message: '请选择接入方式' }]}
      >
        {isCheck ? (
          ''
        ) : (
          <CheckboxGroup style={{ display: 'block' }}>
            {accessModeOptions.map((item, index) => {
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
      <Form.Item label='应用ID（Android）' name='androidAppId'>
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
      <Form.Item label='推送认证结果地址' name='authResultAddress'>
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

export default observer(AbilityInfo)
