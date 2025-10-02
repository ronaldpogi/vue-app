import { useSaasAuthStore } from '../store/saasAuthSore'

export function useSaasAbility() {
  const saasAuthStore = useSaasAuthStore()

  return {
    can: (permission: string) => saasAuthStore.hasPermission(permission),
    is: (role: string) => saasAuthStore.hasRole(role)
  }
}
