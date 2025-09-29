import axios from '@/plugins/axios'
import type { Tenants, Members } from '@/types/dashboard'

export const saasDashboardService = {
  async getTenants(): Promise<Tenants> {
    const { data } = await axios.get<{ data: Tenants }>('saas/dashboard/tenants')
    return data.data
  },

  async getMembers(): Promise<Members> {
    const { data } = await axios.get<{ data: Members }>('saas/dashboard/members')
    return data.data
  },
}
