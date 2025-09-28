import axios from '@/plugins/axios'
import type { User } from '@/types/user'
import type { LoginPayload } from '@/types/auth'

export const authService = {
  async login(payload: LoginPayload) {
    const { data } = await axios.post('/login', payload)
    return data // usually contains { token, user }
  },

  async logout() {
    return await axios.post('/logout')
  },

  async me(): Promise<User> {
    const { data } = await axios.get('/me')
    return data
  },
}
