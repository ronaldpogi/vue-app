// src/services/authService.ts
import api from '@/plugins/axios'
import type { SaasUserInterface, SaasLoginFormInterface, SaasRegisterFormInterface } from '@/types/saas'

export const saasAuthService = {
  async register(payload: SaasRegisterFormInterface) {
    const { data } = await api.post('saas/register', payload)
    return data
  },

  async login(payload: SaasLoginFormInterface) {
    const { data } = await api.post('saas/login', payload)
    return data
  },

  async fetchUser(): Promise<SaasUserInterface> {
    const { data } = await api.get('saas/me')
    return data.data
  },

  async logout() {
    return api.post('saas/logout')
  },
}
