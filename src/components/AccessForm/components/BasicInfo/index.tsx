import React from 'react'
import { Divider, Form, Input, Select, Typography } from 'antd'
import type { FormInstance } from 'antd/lib/form/hooks/useForm'
import { formProps } from '..'
import { useStore } from '@stores/index'
import { observer } from 'mobx-react-lite'
import { fieldNames } from '@utils/index'
import { TValue } from '../../index.d'

const { Title } = Typography
const { TextArea } = Input

const defaultMaxLength = 20

const BasicInfo = React.forwardRef<FormInstance, { params: { value: TValue } }>(
  ({ params }, ref) => {
    const { value } = params

    const { accessFormStore } = useStore()

    const isCheck = accessFormStore.current.state === 2

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
          name='systemtype'
          rules={[{ required: true, message: '请选择接入系统类型' }]}
        >
          {isCheck ? (
            ''
          ) : (
            <Select
              placeholder='请选择接入系统类型'
              fieldNames={fieldNames}
              options={accessFormStore.getDictionaryItem('appType')}
            />
          )}
        </Form.Item>
        <Form.Item
          label='系统所属级别'
          name='systemlevel'
          rules={[{ required: true, message: '请选择系统所属级别' }]}
        >
          {isCheck ? (
            ''
          ) : (
            <Select
              placeholder='请选择系统所属级别'
              fieldNames={fieldNames}
              options={accessFormStore.getDictionaryItem('systemlevel')}
            />
          )}
        </Form.Item>
        <Form.Item
          label='系统对外服务范围'
          name='systemRange'
          rules={[{ required: true, message: '请选择系统对外服务范围' }]}
        >
          {isCheck ? (
            ''
          ) : (
            <Select
              placeholder='请选择系统对外服务范围'
              fieldNames={fieldNames}
              options={accessFormStore.getDictionaryItem('networkType')}
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
        <Form.Item
          label='申请单位'
          name='applyCompany'
          rules={[{ required: true }]}
        >
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
        <Form.Item label='单位经办人' name='applyCompanyHandleMan'>
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
        <Form.Item label='经办人联系电话' name='applyCompanyHandleManPhone'>
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
        <Form.Item label='经办人联系邮箱' name='applyCompanyHandleManEmail'>
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
          name='undertakeCompany'
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
        <Form.Item label='项目负责人' name='undertakeCompanyHandleMan'>
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
        <Form.Item label='负责人联系电话' name='undertakeCompanyHandleManPhone'>
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
        <Form.Item label='负责人联系邮箱' name='undertakeCompanyHandleManEmail'>
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
  }
)

BasicInfo.displayName = 'BasicInfo'

export default observer(BasicInfo)
