import { defineStore } from 'pinia'
import { ref, computed, reactive } from 'vue'
import { authService } from '@/modules/auth/service/authService'
import type { User } from '@/types/user'
import type { LoginPayload } from '@/types/auth'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const token = ref<string | null>(localStorage.getItem('token') || null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  const isAuthenticated = computed(() => !!token.value && !!user.value)

  const loginForm = reactive<LoginPayload>({
    email: '',
    password: '',
  })

  const login = async () => {
    loading.value = true
    error.value = null
    try {
      const data = await authService.login(loginForm)
      token.value = data.token
      localStorage.setItem('token', data.token)

      user.value = data.user
      return data.user
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Login failed'
      throw err
    } finally {
      loading.value = false
    }
  }

  const me = async () => {
    if (!token.value) return null
    loading.value = true
    try {
      user.value = await authService.me()
      return user.value
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Logout failed'
    } finally {
      loading.value = false
    }
  }

  const logout = async () => {
    try {
      await authService.logout()
    } catch (err: any) {
      error.value = err.response?.data?.message || 'Logout failed'
    } finally {
      user.value = null
      token.value = null
      localStorage.removeItem('token')
    }
  }

  return {
    user,
    token,
    loading,
    error,
    isAuthenticated,
    login,
    me,
    logout,
  }
})
