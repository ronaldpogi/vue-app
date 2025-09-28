export default [
  {
    path: 'login',
    name: 'SaasLogin',
    component: () => import('../views/auth/SaasLogin.vue'),
  },
  {
    path: 'register',
    name: 'SaasRegister',
    component: () => import('../views/auth/SaasRegister.vue'),
  },
  {
    path: 'dashboard',
    name: 'SaasDashboard',
    component: () => import('../views/dashboard/SaasDashboard.vue'),
    meta: { layout: 'saas', requiresSaasAuth: true }
  },
  {
    path: 'users',
    name: 'SaasUsers',
    component: () => import('../views/user/SaasUser.vue'),
    meta: { layout: 'saas', requiresSaasAuth: true }
  },
]
