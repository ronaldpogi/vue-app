import axios from '@/plugins/axios'
import type { SaasUserInterface, SaasParamsInterface, SaasUserForm } from '@/types/saas'

export const saasUserService = {
  async index(params: SaasParamsInterface) {
    return axios.get<{ data: SaasUserInterface[]; pagination: { total: number } }>(
      'saas/users',
      { params }
    )
  },

  async show(id: number) {
    return axios.get<{ data: SaasUserInterface }>(`saas/users/${id}`)
  },

  async store(payload: Partial<SaasUserForm>) {
    return axios.post<{data: SaasUserInterface}>('saas/users', payload)
  },

  async update(id: number, payload: Partial<SaasUserForm>) {
    return axios.put<{ data: SaasUserInterface }>(`saas/users/${id}`, payload)
  },

  async destroy(id: number) {
    return axios.delete(`saas/users/${id}`)
  },
}
