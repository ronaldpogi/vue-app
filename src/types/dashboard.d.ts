export interface Tenant {
  id: number
  name: string
  // add other fields your API returns
}

export interface Member {
  id: number
  name: string
}

export interface Tenants {
  tenants: Tenant[]
  count: number
}

export interface Members {
  members: Member[]
  count: number
}

