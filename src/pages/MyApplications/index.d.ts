interface Option {
  label: string
  value: string
  children?: Option[]
}

type TDictValue = {
  key: string
  value: string
}

type TDictList = {
  dictName: string
  dictValue: TDictValue[]
}

type TDataType = {
  key: string
  number: string
  type: string
  name: string
  state: 1 | 2 | 3 | 4
  schedule: string
  applyDate: string
  approveDate?: string
}

export { Option, TDictValue, TDictList, TDataType }
