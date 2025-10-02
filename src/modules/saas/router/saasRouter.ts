export default [
  {
    path: 'login',
    name: 'SaasLogin',
    component: () => import('../views/auth/SaasLogin.vue'),
    meta: {
      title: 'Login - Ronald Bibon',
      description: 'Login View',
    }
  },
  {
    path: 'register',
    name: 'SaasRegister',
    component: () => import('../views/auth/SaasRegister.vue'),
     meta: {
      title: 'Register - Ronald Bibon',
      description: 'Register View',
    }
  },
  {
    path: 'dashboard',
    name: 'SaasDashboard',
    component: () => import('../views/dashboard/SaasDashboard.vue'),
    meta: {
      layout: 'saas',
      requiresSaasAuth: true,
      title: 'Dashboard - Ronald Bibon',
      description: 'Dashboard View',
    }
  },
  {
    path: 'users',
    name: 'SaasUsers',
    component: () => import('../views/user/SaasUser.vue'),
    meta: {
      layout: 'saas',
      requiresSaasAuth: true,
      title: 'Users - Ronald Bibon',
      description: 'Users List'
    }
  },
]
