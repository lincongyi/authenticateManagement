import React, { useEffect, useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import style from './index.module.scss'
import { Typography, Button, Divider, Modal, Radio } from 'antd'

import type { RadioChangeEvent } from 'antd'
import AbilityContent from './components/AbilityContent'
import AppAccessModal from './components/AppAccessModal'
import { getAccessList, getCapability } from '@api/ability'
import type {
  TGetCapabilityResponse,
  TgetAccessListResponse
} from '@api/ability'

const { Title } = Typography

const Introduction = () => {
  const [capability, setCapability] = useState<TGetCapabilityResponse>()
  const [html, setHtml] = useState<string>()
  /**
   * 初始化基础能力介绍
   */
  const [searchParams] = useSearchParams()
  useEffect(() => {
    const id = Number(searchParams.get('id'))
    if (!id) return navigate(-1)
    ;(async () => {
      const { data } = await getCapability({ id })
      setCapability(data)
      setHtml(data?.ableRemarkHtml)
    })()
  }, [])

  const options = [
    { label: '能力介绍', value: '1' },
    { label: '接口介绍', value: '2' }
  ]

  const [value, setValue] = useState<'1' | '2'>('1')

  const onChange = ({ target: { value } }: RadioChangeEvent) => {
    setValue(value)
    setHtml([capability?.ableRemarkHtml, capability?.apiRemarkHtml][+value - 1])
  }

  const [open, setOpen] = useState(false) // 控制选择接入应用Modal显示隐藏

  const [modal, contextHolder] = Modal.useModal()

  const navigate = useNavigate()

  const [appList, setAppList] = useState<TgetAccessListResponse[]>()
  /**
   * 申请接入
   */
  const onAccess = async () => {
    const id = searchParams.get('id')
    if (!id) return false
    const { data } = await getAccessList({ id })
    if (!data || !data.length) {
      modal.warning({
        title: '提示',
        content:
          '暂无可接入此基础能力的应用，去【我的应用】创建新应用后再添加此基础能力吧~',
        okText: '确定',
        onOk: () => {
          navigate('../access')
        }
      })
    } else {
      setAppList(data)
      setOpen(true)
    }
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
      <AppAccessModal open={open} setOpen={setOpen} appList={appList} />
    </>
  )
}

export default Introduction
