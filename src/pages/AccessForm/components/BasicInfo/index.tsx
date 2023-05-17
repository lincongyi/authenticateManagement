import React from 'react'
import { Divider, Form, Input, Select, Typography } from 'antd'
import type { FormInstance } from 'antd/lib/form/hooks/useForm'
import { formProps } from '..'

const { Title } = Typography
const { TextArea } = Input

const defaultMaxLength = 20

/**
 * 接入系统类型
 */
const typeOptions = [
  { value: 1, label: 'APP移动应用' },
  { value: 2, label: 'Web网站应用' },
  { value: 3, label: '微信小程序' },
  { value: 4, label: '微信公众号' },
  { value: 5, label: '支付宝小程序' },
  { value: 6, label: '支付宝生活号' },
  { value: 7, label: 'PC终端' },
  { value: 8, label: '一体机' },
  { value: 9, label: '其他' }
]

/**
 * 系统所属级别
 */
const levelOptions = [
  { value: 1, label: '省级' },
  { value: 2, label: '地市级' },
  { value: 3, label: '其他' }
]

/**
 * 系统对外服务范围
 */
const serviceRangeOptions = [
  { value: 1, label: '互联网' },
  { value: 2, label: '政务外网' },
  { value: 3, label: '公安网' },
  { value: 4, label: '移动警务网' }
]

const BasicInfo = React.forwardRef<
  FormInstance,
  { params: { value: '0' | '1' | '2' | '3'; isCheck: 0 | 1 } }
>(({ params }, ref) => {
  const { value, isCheck } = params
  return (
    <Form
      ref={ref}
      name='basicInfo'
      {...formProps}
      initialValues={{}}
      style={{ display: value === '0' ? 'block' : 'none' }}
    >
      <Title level={5}>接入应用信息</Title>
      <Divider />
      <Form.Item label='应用名称' name='appName' rules={[{ required: true }]}>
        {isCheck ? (
          ''
        ) : (
          <Input
            placeholder='请输入应用名称'
            showCount
            maxLength={defaultMaxLength}
          />
        )}
      </Form.Item>
      <Form.Item
        label='接入系统类型'
        name='type'
        rules={[{ required: true, message: '请选择接入系统类型' }]}
      >
        {isCheck ? (
          ''
        ) : (
          <Select placeholder='请选择接入系统类型' options={typeOptions} />
        )}
      </Form.Item>
      <Form.Item
        label='系统所属级别'
        name='level'
        rules={[{ required: true, message: '请选择系统所属级别' }]}
      >
        {isCheck ? (
          ''
        ) : (
          <Select placeholder='请选择系统所属级别' options={levelOptions} />
        )}
      </Form.Item>
      <Form.Item
        label='系统对外服务范围'
        name='serviceRange'
        rules={[{ required: true, message: '请选择系统对外服务范围' }]}
      >
        {isCheck ? (
          ''
        ) : (
          <Select
            placeholder='请选择系统对外服务范围'
            options={serviceRangeOptions}
          />
        )}
      </Form.Item>
      <Form.Item
        label='使用场景描述'
        name='description'
        rules={[{ required: true, message: '请输入使用场景描述' }]}
      >
        {isCheck ? (
          ''
        ) : (
          <TextArea
            rows={2}
            placeholder='请输入使用场景描述，建议文字控制在50字内'
            showCount
            maxLength={50}
          />
        )}
      </Form.Item>

      <Title level={5}>申请单位信息</Title>
      <Divider />
      <Form.Item label='申请单位' name='company' rules={[{ required: true }]}>
        {isCheck ? (
          ''
        ) : (
          <Input
            placeholder='请输入申请单位'
            showCount
            maxLength={defaultMaxLength}
          />
        )}
      </Form.Item>
      <Form.Item label='单位经办人' name='companyOperator'>
        {isCheck ? (
          ''
        ) : (
          <Input
            placeholder='请输入单位经办人'
            showCount
            maxLength={defaultMaxLength}
          />
        )}
      </Form.Item>
      <Form.Item label='经办人联系电话' name='companyPhone'>
        {isCheck ? (
          ''
        ) : (
          <Input
            placeholder='请输入经办人联系电话'
            showCount
            maxLength={defaultMaxLength}
          />
        )}
      </Form.Item>
      <Form.Item label='经办人联系邮箱' name='companyEmail'>
        {isCheck ? (
          ''
        ) : (
          <Input
            placeholder='请输入经办人联系邮箱'
            showCount
            maxLength={defaultMaxLength}
          />
        )}
      </Form.Item>

      <Title level={5}>承建单位信息</Title>
      <Divider />
      <Form.Item
        label='承建单位'
        name='construction'
        rules={[{ required: true }]}
      >
        {isCheck ? (
          ''
        ) : (
          <Input
            placeholder='请输入承建单位'
            showCount
            maxLength={defaultMaxLength}
          />
        )}
      </Form.Item>
      <Form.Item label='项目负责人' name='constructionOperator'>
        {isCheck ? (
          ''
        ) : (
          <Input
            placeholder='请输入项目负责人'
            showCount
            maxLength={defaultMaxLength}
          />
        )}
      </Form.Item>
      <Form.Item label='负责人联系电话' name='constructionPhone'>
        {isCheck ? (
          ''
        ) : (
          <Input
            placeholder='请输入负责人联系电话'
            showCount
            maxLength={defaultMaxLength}
          />
        )}
      </Form.Item>
      <Form.Item label='负责人联系邮箱' name='constructionEmail'>
        {isCheck ? (
          ''
        ) : (
          <Input
            placeholder='请输入负责人联系邮箱'
            showCount
            maxLength={defaultMaxLength}
          />
        )}
      </Form.Item>
    </Form>
  )
})

BasicInfo.displayName = 'BasicInfo'

export default BasicInfo
