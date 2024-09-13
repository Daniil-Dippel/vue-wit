import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/singUp',
      name: 'singUp',
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RegistrationForm.vue')
    },
    {
      path: '/singIn',
      name: 'singIN',
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginForm.vue')
    },
    {
      path: '/eld',
      name: 'eld',
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Main.vue')
    },
    {
      path: '/about',
      name: 'about',
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/About.vue')
    },
    {
      path: '/tms',
      name: 'tms',
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Tms.vue')
    }
  ]
})

export default router
