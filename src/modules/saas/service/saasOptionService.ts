import axios from '@/plugins/axios'
import type { SaasOptionsInterface } from '@/types/saas'

export const saasOptionService = {
  async getRoleOptions(): Promise<SaasOptionsInterface[]> {
    const { data } = await axios.get<{ data: SaasOptionsInterface[] }>('saas/options/roles')
    return data.data
  },


}
