import { defineStore } from 'pinia'
import { ref } from 'vue'
import { saasOptionService } from '../service/saasOptionService'
import type { SaasOptionsInterface } from '@/types/saas'

export const useSaasOptionStore = defineStore('saasOptionStore', () => {

  const roleOptions = ref<SaasOptionsInterface[]>([])

  const loading = ref(false)

  async function getRoleOptions() {
  loading.value = true
  try {
    const data = await saasOptionService.getRoleOptions()
    roleOptions.value = data // ensure array
  } catch (err: any) {
    console.error(err)
  } finally {
    loading.value = false
  }
}

  return {
    roleOptions,
    loading,
    getRoleOptions,
  }
})
