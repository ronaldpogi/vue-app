interface SaasSidebarInterface {
  id: number
  label: string
  name: string
  icon: string
  to: string
}

const saasSidebarData: SaasSidebarInterface[] = [
  {
    id: 1,
    label: 'DASHBOARD',
    name: 'SaasDashboard',
    icon: 'clarity:dashboard-solid',
    to: 'dashboard',
  },
  {
    id: 1,
    label: 'USERS',
    name: 'SaasUsers',
    icon: 'clarity:users-solid',
    to: 'users',
  },
]

export { saasSidebarData }
