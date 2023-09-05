import React, { useEffect, useState } from 'react'
import style from './index.module.scss'
import { Typography, Button, Divider, Modal, Radio } from 'antd'

import type { RadioChangeEvent } from 'antd'
import { useParams } from 'react-router'
import AbilityContent from './components/AbilityContent'
import AppAccessModal from './components/AppAccessModal'
import { getCapability } from '@api/capability'
import type { TGetCapabilityResponse } from '@api/capability'

const { Title } = Typography

const Introduction = () => {
  const [capability, setCapability] = useState<TGetCapabilityResponse>()
  const [html, setHtml] = useState<string>()
  /**
   * 初始化基础能力介绍
   */
  const { id } = useParams()
  useEffect(() => {
    if (!id) return
    ;(async () => {
      const { data } = await getCapability({ id })
      setCapability(data)
      setHtml(data?.ableRemarkHtml)
    })()
  }, [])

  const [open, setOpen] = useState(false)

  const [modal, contextHolder] = Modal.useModal()

  /**
   * 申请接入
   */
  const onAccess = () => {
    Math.random() >= 0.5
      ? setOpen(true)
      : modal.warning({
          title: '提示',
          content:
            '暂无可接入此基础能力的应用，去【我的应用】创建新应用后再添加此基础能力吧~',
          okText: '确定'
        })
  }

  const options = [
    { label: '能力介绍', value: '1' },
    { label: '接口介绍', value: '2' }
  ]

  const [value, setValue] = useState<'1' | '2'>('1')

  const onChange = ({ target: { value } }: RadioChangeEvent) => {
    setValue(value)
    setHtml(
      [capability?.ableRemarkHtml, capability?.apiRemarkHtml][Number(value) - 1]
    )
  }

  return (
    <>
      {contextHolder}
      <Title level={2}>{capability?.name}</Title>
      <div className={style['sub-title']}>
        <p>{capability?.remark}</p>
        <Button type='primary' onClick={onAccess}>
          申请接入
        </Button>
      </div>
      <Divider />
      <div style={{ marginBottom: 40 }}>
        <Radio.Group
          options={options}
          onChange={onChange}
          value={value}
          optionType='button'
          buttonStyle='solid'
        />
      </div>

      <AbilityContent html={html} />
      <AppAccessModal open={open} setOpen={setOpen} />
    </>
  )
}

export default Introduction
