import React, { useEffect, useState } from 'react'
import { Col, Row, Select } from 'antd'
import { getAreacodes } from '@api/index'
import { reverseArray } from '@utils/index'

/**
 * 选择接入地区
 */
const Area = ({
  callback,
  destinationList
}: {
  callback: Function
  destinationList?: TAreaItem[]
}) => {
  const [provinceList, setProvinceList] = useState<TAreaItem[]>([]) // 省份列表
  const [cityList, setCityList] = useState<TAreaItem[]>([]) // 城市列表
  const [areaList, setAreaList] = useState<TAreaItem[]>([]) // 地区列表

  const currentList = destinationList ? reverseArray(destinationList) : []

  // 选择的省份
  const [province, setProvince] = useState<TAreaItem['code'] | undefined>(
    currentList.length ? currentList[0]?.code : undefined
  )
  // 选择的城市
  const [city, setCity] = useState<TAreaItem['code'] | undefined>(
    currentList.length ? currentList[1]?.code : undefined
  )
  // 选择的地区
  const [area, setArea] = useState<TAreaItem['code'] | undefined>(
    currentList.length ? currentList[2]?.code : undefined
  )

  useEffect(() => {
    // 获取省份列表
    ;(async () => {
      const { data } = await getAreacodes({ areaLevel: 'l1' })
      setProvinceList(data as TAreaItem[])
    })()
    if (currentList.length) {
      currentList.forEach(async (item, index) => {
        if (index === 0) {
          // 获取城市列表
          const { data } = await getAreacodes({
            areaLevel: 'l2',
            areaParentCode: item.code
          })
          setCityList(data)
        } else if (index === 1) {
          // 获取地区列表
          const { data } = await getAreacodes({
            areaLevel: 'l3',
            areaParentCode: item.code
          })
          setAreaList(data)
        }
      })
    }
  }, [])

  /**
   * 选择省份
   */
  const onProvinceChange = async (code: TAreaItem['code']) => {
    setProvince(code)
    const { data } = await getAreacodes({
      areaLevel: 'l2',
      areaParentCode: code
    })
    setCityList(data as TAreaItem[])
    // 清空城市、地区信息
    setCity(undefined)
    setAreaList([])
    setArea(undefined)
    callback(code)
  }

  /**
   * 选择城市
   */
  const onCityChange = async (code: TAreaItem['code']) => {
    setCity(code)
    const { data } = await getAreacodes({
      areaLevel: 'l3',
      areaParentCode: code
    })
    setAreaList(data as TAreaItem[])
    setArea(undefined)
    callback(code)
  }

  /**
   * 选择地区
   */
  const onAreaChange = (code: TAreaItem['code']) => {
    setArea(code)
    callback(code)
  }
  return (
    <Row gutter={20}>
      <Col span={8}>
        <Select
          value={province}
          fieldNames={{ label: 'name', value: 'code' }}
          placeholder='请选择省份'
          onChange={onProvinceChange}
          options={provinceList}
        />
      </Col>
      <Col span={8}>
        <Select
          value={city}
          fieldNames={{ label: 'name', value: 'code' }}
          placeholder='请选城市'
          onChange={onCityChange}
          options={cityList}
        />
      </Col>
      <Col span={8}>
        <Select
          value={area}
          fieldNames={{ label: 'name', value: 'code' }}
          placeholder='请选择地区'
          onChange={onAreaChange}
          options={areaList}
        />
      </Col>
    </Row>
  )
}

export default Area
