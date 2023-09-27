import { message } from 'antd'
import type { RcFile, UploadFile } from 'antd/es/upload/interface'
import dayjs from 'dayjs'
import type { TFormItemType } from '@/api/ability'

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
  // eslint-disable-next-line n/no-callback-literal
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
const imgBeforeUpload = (file: RcFile, maxSize: number = 2) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
  if (!isJpgOrPng) message.error('上传图片只允许JPG/PNG格式')
  const isExceeded = file.size / 1024 / 1024 < maxSize
  if (!isExceeded) message.error(`图片文件大小<${maxSize}MB`)
  return isJpgOrPng && isExceeded
}

export const fieldNames = { label: 'dictName', value: 'dictValue' }

/**
 * 创建txt文件并下载
 * @param {string} content 内容
 * @param {string} fileName 文件名
 * @param {string} fileType 文件类型
 */

const saveAsFile = (
  content: string,
  fileName: string,
  fileType: string = 'text/plain'
) => {
  // 提供文本和文件类型用于创建一个Blob对象
  const blob = new Blob([content], { type: fileType }) // 创建一个 a 元素
  const download = document.createElement('a') // 指定下载过程中显示的文件名
  download.download = fileName

  download.href = window.URL.createObjectURL(blob)
  download.style.display = 'none'
  document.body.appendChild(download) // 模式鼠标左键单击事件

  download.click()
}

/**
 * 预处理部分动态表单数据
 */
const formatFormItemValue = (type: TFormItemType, value: any) => {
  if (type === 'dateTime') {
    return value && dayjs(value).isValid()
      ? dayjs(value).format('YYYY-MM-DD')
      : value
  } else if (type === 'fileUpload' && value) {
    const list: UploadFile[] = value.filter(
      (item: UploadFile) => item.status === 'done'
    )
    return list.length ? list : undefined
  } else return value
}

export {
  loadEnv,
  phonePattern,
  idCardPattern,
  passwordPattern,
  emailPattern,
  handleCopy,
  getBase64,
  reverseArray,
  formatDictionary,
  imgBeforeUpload,
  saveAsFile,
  formatFormItemValue
}
