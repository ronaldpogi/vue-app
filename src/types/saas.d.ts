export interface SaasLoginFormInterface {
  email: string
  password: string
}

export interface SaasRegisterFormInterface {
  email: string
  password: string
  password_confirmation: string
  phone: string | number
  name: string
  address: string
  subdomain: string
  settings: string[]
}


export interface SaasUserInterface {
  id?: number // optional, usually auto-generated
  tenant_id: number
  first_name: string
  last_name: string
  email: string
  phone?: string | null
  address?: string | null
  password?: string // optional (usually not returned by API)
  created_at?: string // timestamps from Laravel
  updated_at?: string
}

export interface SaasUserForm {
  first_name: string
  last_name: string
  email: string
  phone: string | number
  address: string
  password: string
  password_confirmation: string
}


export interface SaasColumnsInterface {
  key: string
  label: string
}

export interface SaasParamsInterface {
  page: number
  pageSize: number
  search: string
}
