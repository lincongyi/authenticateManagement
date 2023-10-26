import React, { useEffect, useState } from 'react'
import style from '../index.module.scss'
import { Empty, Form, Table, Tabs, Image, Typography } from 'antd'
import type { UploadFile } from 'antd'
import { Tab } from 'rc-tabs/lib/interface.d'
import type { TFormItem, TFormList, TFormTabledataSource } from '@/api/ability'

const { Text } = Typography

const DynamicFormDistinction = ({
  formInfo
}: {
  formInfo: {
    formList: TFormList[]
    oldFormList: TFormList[]
  }
}) => {
  const formProps = {
    labelCol: { span: 4 },
    wrapperCol: { span: 12 }
  }

  const { formList, oldFormList } = formInfo

  const [formTabs, setFormTabs] = useState<Tab[]>() // 能力配置信息Tabs

  const [formItems, setFormItems] = useState<TFormItem[]>() // 表单展示的数据

  const [oldFormItems, setOldFormItems] = useState<TFormItem[]>() // 旧表单展示的数据

  /**
   * 初始化能力配置信息表单内容
   */
  useEffect(() => {
    const tabs = formList.map(item => ({
      label: item.formName,
      key: item.formId.toString()
    }))
    setFormTabs(tabs)
    setFormItems([...formList[0].defaultFormList!, ...(formList[0].form || [])])
    setOldFormItems([
      ...oldFormList[0].defaultFormList!,
      ...(oldFormList[0].form || [])
    ])
  }, [formList])

  /**
   * 切换能力配置信息表单内容
   */
  const onChange = (activeKey: string) => {
    const index = formList.findIndex(item => item.formId === +activeKey)
    if (index === -1) return
    if (!index) {
      setFormItems([
        ...formList[index].defaultFormList!,
        ...(formList[index].form || [])
      ])
      setOldFormItems([
        ...oldFormList[0].defaultFormList!,
        ...(oldFormList[0].form || [])
      ])
    } else {
      setFormItems(formList[index].form)
      setOldFormItems(oldFormList[index].form)
    }
  }

  /**
   * 比对数据差异，渲染label
   * @param {number} index formItems下标
   * @param {string | number} value
   * @returns {JSX.Element} label JSX
   */
  const onCompareLabel = (index: number) => {
    // console.log('formItems', formItems)
    // console.log('oldFormItems', oldFormItems)
    if (!formItems || !oldFormItems) return
    const { type, cnName } = formItems[index]
    if (['table'].includes(type)) {
      const labelValue = formItems[index].labelValue as TFormTabledataSource[]
      const oldLabelValue = oldFormItems[index]
        .labelValue as TFormTabledataSource[]
      let isDifferent = false
      for (let i = 0; i < labelValue.length; i++) {
        if (
          JSON.stringify(labelValue[i]) !== JSON.stringify(oldLabelValue[i])
        ) {
          isDifferent = true
          break
        }
      }
      return !isDifferent ? <>{cnName}</> : <Text type='danger'>{cnName}</Text>
    } else if (['imageUpload', 'fileUpload'].includes(type)) {
      const labelValue = formItems[index].labelValue as UploadFile[]
      const oldLabelValue = oldFormItems[index].labelValue as UploadFile[]
      let isDifferent = false
      if (labelValue.length !== oldLabelValue.length) {
        isDifferent = true
      } else {
        // 比对uid
        for (let i = 0; i < labelValue.length; i++) {
          if (labelValue[i].uid !== oldLabelValue[i].uid) {
            isDifferent = true
            break
          }
        }
      }
      return !isDifferent ? <>{cnName}</> : <Text type='danger'>{cnName}</Text>
    } else {
      return formItems[index].labelValue === oldFormItems[index].labelValue ? (
        <>{cnName}</>
      ) : (
        <Text type='danger'>{cnName}</Text>
      )
    }
  }

  /**
   * 比对数据差异，渲染value
   * @param {number} index formItems下标
   * @param {number} __index table类型的下标
   * @returns {boolean} 变更结果：true-未变更；false-已变更
   */
  const onCompareValue = (index: number, __index?: number) => {
    if (!formItems || !oldFormItems) return
    const { type } = formItems[index]
    if (['table'].includes(type)) {
      const labelValue = formItems[index].labelValue as TFormTabledataSource[]
      const oldLabelValue = oldFormItems[index]
        .labelValue as TFormTabledataSource[]
      // value比对
      return labelValue[__index!].value === oldLabelValue[__index!].value
    } else if (['imageUpload', 'fileUpload'].includes(type)) {
      const labelValue = formItems[index].labelValue as UploadFile[]
      const oldLabelValue = oldFormItems[index].labelValue as UploadFile[]
      if (labelValue.length !== oldLabelValue.length) return false

      return labelValue[__index!]?.uid === oldLabelValue[__index!]?.uid
    }
    return formItems[index].labelValue === oldFormItems[index].labelValue
  }

  /**
   * 预处理部分动态表单数据
   */
  const formatFormItemValue = (item: TFormItem, index: number) => {
    if (item.type === 'imageUpload') {
      return (
        <>
          {(item.labelValue as UploadFile[]).map((__item, __index) => (
            <div
              className={`${style['img-wrap']} ${
                !onCompareValue(index, __index) && style.different
              }
              `}
              key={__item.uid}
            >
              <Image width={160} height={160} src={__item.url} />
            </div>
          ))}
        </>
      )
    } else if (item.type === 'fileUpload') {
      return (
        <>
          {(item.labelValue as UploadFile[]).map((__item, __index) => (
            <Typography.Link
              href={__item.url}
              target='_blank'
              key={__item.uid}
              style={{
                color: onCompareValue(index, __index) ? '#1668dc' : '#f00'
              }}
            >
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
      const source = (item.labelValue as TFormTabledataSource[]).map(
        (item, __index) => {
          return {
            index: __index,
            label: onCompareValue(index, __index) ? (
              item.label
            ) : (
              <Text type='danger'>{item.label}</Text>
            ),
            value: onCompareValue(index, __index) ? (
              item.value
            ) : (
              <Text type='danger'>{item.value}</Text>
            )
          }
        }
      )
      return (
        <Table
          rowKey='index'
          bordered
          dataSource={source}
          columns={defaultFormColumns}
          pagination={false}
        />
      )
    }
    return onCompareValue(index) ? (
      item.value
    ) : (
      <Text type='danger'>{item.value}</Text>
    )
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
                  <Form.Item label={onCompareLabel(index)}>
                    {formatFormItemValue(item, index)}
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

export default DynamicFormDistinction
