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

router.beforeEach((to) => {
  const saasAuthStore = useSaasAuthStore()

  const requiredRole = to.meta.role as string | undefined

  if (requiredRole && !saasAuthStore.hasRole(requiredRole)) {
    return { name: 'AppView' }
  }

  if (to.meta.requiresSaasAuth && !saasAuthStore.isAuthenticated) {
    return { name: 'SaasLogin' }
  }

  if ((to.name === 'SaasLogin' || to.name === 'SaasRegister') && saasAuthStore.isAuthenticated) {
    return { name: 'SaasDashboard' }
  }

  return true // ✅ allow navigation
})

export default router
