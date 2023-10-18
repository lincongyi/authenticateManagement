import React, { useEffect, useState } from 'react'
import { Empty, Form, Table, Tabs, Image, Typography } from 'antd'
import type { UploadFile } from 'antd'
import { Tab } from 'rc-tabs/lib/interface.d'
import type { TFormItem, TFormTabledataSource } from '@/api/ability'
import type { TGetAppInfoByEnv } from '@/api/myApp'

const FormInfo = ({ capability }: { capability: TGetAppInfoByEnv }) => {
  const formProps = {
    labelCol: { span: 4 },
    wrapperCol: { span: 12 }
  }

  const [formTabs, setFormTabs] = useState<Tab[]>() // 能力配置信息Tabs

  const [formItems, setFormItems] = useState<TFormItem[]>() // 表单展示的数据

  /**
   * 初始化能力配置信息表单内容
   */
  useEffect(() => {
    const { form } = capability
    if (form) {
      const tabs = form.formList.map(item => ({
        label: item.formName,
        key: item.formId.toString()
      }))
      setFormTabs(tabs)
      setFormItems([
        ...capability.form.formList[0].defaultFormList!,
        ...capability.form.formList[0].form
      ])
    }
  }, [capability])

  /**
   * 切换能力配置信息表单内容
   */
  const onChange = (activeKey: string) => {
    const item = capability?.form.formList.find(
      item => item.formId === +activeKey
    )
    if (!item) return
    const index = formTabs?.findIndex(__item => __item.key === activeKey)
    if (!index) {
      setFormItems([...item.defaultFormList!, ...item.form])
    } else {
      setFormItems(item.form)
    }
  }

  /**
   * 预处理部分动态表单数据
   */
  const formatFormItemValue = (item: TFormItem) => {
    if (item.type === 'imageUpload') {
      return (
        <>
          {(item.labelValue as UploadFile[]).map(__item => (
            <Image width={200} height={200} src={__item.url} key={__item.uid} />
          ))}
        </>
      )
    } else if (item.type === 'fileUpload') {
      return (
        <>
          {(item.labelValue as UploadFile[]).map(__item => (
            <Typography.Link href={__item.url} target='_blank' key={__item.uid}>
              {__item.name}
            </Typography.Link>
          ))}
        </>
      )
    } else if (item.type === 'table') {
      const defaultFormColumns = [
        {
          title: '接口名称',
          width: 200,
          dataIndex: 'label'
        },
        {
          title: '调用并发上限（每秒并发）',
          dataIndex: 'value'
        }
      ]
      return (
        <Table
          rowKey='label'
          bordered
          dataSource={item.labelValue as TFormTabledataSource[]}
          columns={defaultFormColumns}
          pagination={false}
        />
      )
    }
    return item.labelValue as string
  }

  return (
    <>
      {formTabs && formTabs.length ? (
        <>
          <Tabs onChange={onChange} items={formTabs} />
          {formItems && !!formItems.length && (
            <Form {...formProps}>
              {formItems.map((item, index) => (
                <div key={item.field}>
                  <Form.Item label={item.cnName}>
                    {formatFormItemValue(item)}
                  </Form.Item>
                </div>
              ))}
            </Form>
          )}
        </>
      ) : (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      )}
    </>
  )
}

export default FormInfo
