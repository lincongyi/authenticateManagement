import { getdictionary } from '@api/index'
import { TAccessFormStore } from '@stores/accessForm.store'
import { useStore } from '@stores/index'
import { useEffect, useRef } from 'react'

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
 * mobx存储数据字典
 * @returns {object} Store 返回数据字典的store实例对象
 *                   Function 根据dictValue获取dictName
 */
const useGetDictionaryLabel = () => {
  const { accessFormStore } = useStore()
  useEffect(() => {
    if (!accessFormStore.dictionary) {
      ;(async () => {
        const { data } = await getdictionary({
          showType: 'appInfo'
        })
        accessFormStore.setDictionary(data)
      })()
    }
  }, [])

  /**
   * 根据dictValue获取dictName
   */
  const getDictionaryItemName = (
    item: keyof TAccessFormStore,
    value: string | number
  ) => {
    const options = accessFormStore.getDictionaryItem(item)
    if (!options) return false
    const result = options?.find(item => item.dictValue === value)
    if (!result) return false
    return result.dictName
  }
  return {
    accessFormStore,
    getDictionaryItemName
  }
}

export { useUpdateEffect, useGetDictionaryLabel }
