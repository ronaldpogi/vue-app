import { defineStore } from 'pinia'
import { ref } from 'vue'
import { saasDashboardService } from '../service/saasDashboardService'
import type { Members, Tenants } from '@/types/dashboard'

export const useSaasDashboardStore = defineStore('SaasDashboard', () => {
  const tenants = ref<Tenants>({
    tenants: [],
    count: 0,
  })

  const members = ref<Members>({
    members: [],
    count: 0,
  })

  const loading = ref(false)

  async function getTenants() {
    loading.value = true
    try {
      const data = await saasDashboardService.getTenants()
      tenants.value = data
    } catch (err: any) {
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  async function getMembers() {
    loading.value = true
    try {
      const data = await saasDashboardService.getMembers()
      members.value = data
    } catch (err: any) {
      console.error(err)
    } finally {
      loading.value = false
    }
  }

  return {
    tenants,
    members,
    loading,
    getTenants,
    getMembers
  }
})
