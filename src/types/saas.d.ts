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
  id?: string
  tenant_id: string
  first_name: string
  last_name: string
  email: string
  phone?: string | null
  address?: string | null
  roles: string[];
  permissions: string[]
}

export interface SaasUserForm {
  first_name: string
  last_name: string
  email: string
  phone: string | number
  address: string
  role_ids: [],
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

export interface SaasOptionsInterface {
  id: string
  name: string
}
