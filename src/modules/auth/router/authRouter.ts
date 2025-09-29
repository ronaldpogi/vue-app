export default [
  {
    path: 'login',
    name: 'LoginView',
    component: () => import('../views/LoginView.vue'),
    meta: {
      title: 'Login - Ronald Bibon',
      description: 'Login View',
    }
  },
]
