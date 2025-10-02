import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'
import { saasUserService } from '../service/saasUserService'
import type {
  SaasUserInterface,
  SaasColumnsInterface,
  SaasParamsInterface,
  SaasUserForm,
} from '@/types/saas'

export const useSaasUserStore = defineStore('SaasUser', () => {
  const users = ref<SaasUserInterface[]>([])
  const total = ref(0)
  const user = ref<SaasUserInterface | null>(null)
  const loading = ref(false)
  const errors = ref<any>({})

  const userForm = reactive<SaasUserForm>({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    address: '',
    role_ids: [],
    password: '',
    password_confirmation: '',
  })

  const params = ref<SaasParamsInterface>({
    page: 1,
    pageSize: 5,
    search: '',
  })

  const columns: SaasColumnsInterface[] = [
    { key: 'first_name', label: 'FIRST NAME' },
    { key: 'last_name', label: 'LAST NAME' },
    { key: 'email', label: 'EMAIL' },
    { key: 'phone', label: 'PHONE' },
  ]

  async function index(newParams: Partial<SaasParamsInterface> = {}) {
    loading.value = true
    try {
      Object.assign(params.value, newParams)
      const { data } = await saasUserService.index(params.value)
      users.value = data.data ?? []
      total.value = data.pagination.total
    } catch (err: any) {
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  async function show(id: number) {
    loading.value = true
    try {
      const { data } = await saasUserService.show(id)
      user.value = data.data
      Object.assign(userForm, user.value)
      return true
    } catch (err: any) {
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  async function store() {
    loading.value = true
    try {
      errors.value = {}
      const { data } = await saasUserService.store(userForm)
      users.value.push(data.data)
      return data
    } catch (err: any) {
      errors.value = err.response?.data?.errors || 'user create error'
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  async function update(id: number) {
    loading.value = true
    try {
      errors.value = {}
      const { data } = await saasUserService.update(id, userForm)
      const index = users.value.findIndex((e: any) => e.id === id)
      if (index !== -1) users.value[index] = data.data
      return true
    } catch (err: any) {
      errors.value = err.response?.data?.errors || 'user update error'
      return false
    } finally {
      loading.value = false
    }
  }

  async function destroy(id: number) {
    loading.value = true
    try {
      await saasUserService.destroy(id)
      users.value = users.value.filter((e: any) => e.id !== id)
    } catch (err: any) {
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  return {
    userForm,
    users,
    user,
    total,
    loading,
    errors,
    params,
    columns,
    index,
    show,
    store,
    update,
    destroy,
  }
})
