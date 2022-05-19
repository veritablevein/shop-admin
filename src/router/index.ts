import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes:RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home/homeIndex.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/loginIndex.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
