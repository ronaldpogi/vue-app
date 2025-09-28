import { createRouter, createWebHistory } from 'vue-router'

import homeRoutes from '@/modules/home/router/homeRouter'
import authRoutes from '@/modules/auth/router/authRouter'
import portfolioRoutes from '@/modules/portfolio/router/portfolioRouter'
import appRoutes from '@/modules/app/router/appRouter'

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
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
