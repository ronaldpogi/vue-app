import { createRouter, createWebHistory } from 'vue-router'

import homeRoutes from '@/modules/home/router/homeRouter'
import authRoutes from '@/modules/auth/router/authRouter'
import portfolioRoutes from '@/modules/portfolio/router/portfolioRouter'
import appRoutes from '@/modules/app/router/appRouter'
import saasRouter from '@/modules/saas/router/saasRouter'

import { useSaasAuthStore } from '@/modules/saas/store/saasAuthSore'

const routes = [
  {
    path: '/', // parent path
    children: homeRoutes, // mount child routes here
  },
  {
    path: '/auth', // parent path
    children: authRoutes, // mount child routes here
  },
  {
    path: '/portfolio', // parent path
    children: portfolioRoutes, // mount child routes here
  },
  {
    path: '/app', // parent path
    children: appRoutes, // mount child routes here
  },
   {
    path: '/saas', // parent path
    children: saasRouter, // mount child routes here
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// ✅ Global guard checks `meta.requiresAuth`
router.beforeEach((to, from, next) => {
  const saasAuthStore = useSaasAuthStore()

  if (to.meta.requiresSaasAuth && !saasAuthStore.isAuthenticated) {
    next({ name: 'SaasLogin' }) // redirect to SaaS login
  }
  if ((to.name === 'SaasLogin' || to.name === 'SaasRegister') && saasAuthStore.isAuthenticated) {
    next({ name: 'SaasDashboard' })
  }

  next()
})

export default router
