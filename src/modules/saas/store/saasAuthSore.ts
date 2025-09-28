import { defineStore } from 'pinia'
import { computed, reactive, ref } from 'vue'
import { saasAuthService } from '../service/saasAuthService'
import type { SaasLoginFormInterface, SaasRegisterFormInterface } from '@/types/saas'
import type { SaasUserInterface } from '@/types/saas'
import router from '@/router'

export const useSaasAuthStore = defineStore('auth', () => {
  const user = ref<SaasUserInterface | null>(null)
  const token = ref<string | null>(localStorage.getItem('token'))
  const loading = ref(false)
  const errors = ref<any>({})

  const registerForm = reactive<SaasRegisterFormInterface>({
    email: '',
    password: '',
    password_confirmation: '',
    phone: '',
    name: '',
    address: '',
    subdomain: '',
    settings: [],
  })

  const loginForm = reactive<SaasLoginFormInterface>({
    email: '',
    password: '',
  })

  const setToken = (newToken: string | null) => {
    token.value = newToken
    if (newToken) {
      localStorage.setItem('token', newToken)
    } else {
      localStorage.removeItem('token')
    }
  }

  const register = async () => {
    try {
      loading.value = true
      errors.value = {}
      const data = await saasAuthService.register(registerForm)
      router.push('login')
      return data
    } catch (err: any) {
      errors.value = err.response?.data?.errors
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  const login = async () => {
    try {
      loading.value = true
      errors.value = {}
      const data = await saasAuthService.login(loginForm)
      setToken(data.data.token)
      user.value = data.data.user
      router.push('dashboard')
    } catch (err: any) {
      errors.value = err.response?.data?.errors || 'login error'
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  const fetchUser = async () => {
    if (!token.value) return
    try {
      user.value = await saasAuthService.fetchUser()
    } catch {
      logout()
    }
  }

  const logout = async () => {
    await saasAuthService.logout()
    setToken(null)
    user.value = null
    router.push('login')
  }

  return {
    isAuthenticated: computed(() => !!token.value),
    token,
    user,
    loading,
    errors,
    registerForm,
    loginForm,
    register,
    login,
    fetchUser,
    logout,
  }
})
