import { message } from 'antd'
import type { RcFile } from 'antd/es/upload/interface'
import { useEffect, useRef } from 'react'
/**
 * 获取当前环境
 */
const loadEnv = () => {
  return import.meta.env
}

/**
 * 手机号正则匹配
 */
const phonePattern =
  /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(17[0,5-9])|(18[0,5-9]))\d{8}$/

/**
 * 证件号码正则匹配
 */
const idCardPattern = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/

/**
 * 密码正则匹配
 */
const passwordPattern =
  /^(?![a-zA-Z]+$)(?![a-z\d]+$)(?![a-z!@?.#\$%_]+$)(?![A-Z\d]+$)(?![A-Z!@?.#\$%_]+$)(?![\d!@?.#\$%]+$)[a-zA-Z\d!@?.#\$%_]+.{7,30}$/

/**
 * 邮箱正则匹配
 */
const emailPattern = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/

/**
 * 复制文字信息
 * @param {string} content 文字内容
 * @returns void
 */
const handleCopy = (content: string) => {
  const copy = (e: ClipboardEvent) => {
    e.preventDefault()
    e.clipboardData!.setData('text/plain', content)
    document.removeEventListener('copy', copy)
  }
  document.addEventListener('copy', copy)
  document.execCommand('Copy')
}

/**
 * 图片转base64
 * @param {RcFile} img 图片文件
 * @param {function} callback 回调函数，返回图片base64字符串
 */
const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result as string))
  reader.readAsDataURL(img)
}

/**
 * 反转数组
 * @param {TAreaItem[]} array 初始数组
 * @returns {TAreaItem[] | []} 返回一个反转后的接入地区数组
 */
const reverseArray = (array: TAreaItem[]) => {
  return array.reduce((prev: TAreaItem[] | [], next) => {
    return [next, ...prev]
  }, [])
}

/**
 * 自定义hook使useEffect在更新时才执行
 * @param {Function} callback useEffect里执行的方法
 * @param {string[]} params 依赖项
 */
const useUpdateEffect = (callback: Function, params: any[]) => {
  const didMountRef = useRef(false)
  useEffect(() => {
    didMountRef.current ? callback && callback() : (didMountRef.current = true)
  }, params)
}

/**
 * 格式化处理特殊数据字典返回格式
 * @param {TDictList[] | TDictValue[]} array
 * @returns {Option[]} list 符合Cascader组件使用的options
 */
const formatDictionary = (array: TDictList[] | TDictValue[]) => {
  const list: Option[] = []
  array.forEach(item => {
    if ((item as TDictList).dictValue) {
      list.push({
        label: (item as TDictList).dictName,
        value: (item as TDictList).dictName,
        children: formatDictionary((item as TDictList).dictValue)
      })
    } else {
      list.push({
        label: (item as TDictValue).value,
        value: (item as TDictValue).key
      })
    }
  })
  return list
}

/**
 * 上传前校验文件
 */
const imgBeforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
  if (!isJpgOrPng) message.error('上传图片只允许JPG/PNG格式')
  const isLt2M = file.size / 1024 / 1024 < 2
  if (!isLt2M) message.error('图片文件大小<2MB')
  return isJpgOrPng && isLt2M
}

export const fieldNames = { label: 'dictName', value: 'dictValue' }

export {
  loadEnv,
  phonePattern,
  idCardPattern,
  passwordPattern,
  emailPattern,
  handleCopy,
  getBase64,
  reverseArray,
  useUpdateEffect,
  formatDictionary,
  imgBeforeUpload
}
