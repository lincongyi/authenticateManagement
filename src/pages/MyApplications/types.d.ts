declare interface IdentityTestDataType {
  key: string
  applicationName: string
  method: string
  clientId: string
  status: string | number
  date: string
}

declare interface IdentityFormalDataType {
  key: string
  applicationName: string
  method: string
  clientId: string
  status: string | number
  date: string
}

declare interface IdentityUpdateDataType {
  key: string
  applicationName: string
  method: string
  clientId: string
  status: string | number
  date: string
}

declare interface OthersUpdateDataType {
  key: string
  companyName: string
  name: string
  phone: string
  status: string | number
  date: string
}

declare type TApprovalItem = {
  status: number
  label: string
  type: 'success' | 'info' | 'warning' | 'error'
}
