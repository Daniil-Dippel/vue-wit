import { createRouter, createWebHistory } from 'vue-router';
import Main from '../views/Main.vue';


function isAuthenticated() {
  return !!localStorage.getItem('accessToken');
}

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/singUp',
    name: 'singUp',
    component: () => import('../views/RegistrationForm.vue')
  },
  {
    path: '/singIn',
    name: 'singIn',
    component: () => import('../views/LoginForm.vue')
  },
  {
    path: '/eld',
    name: 'eld',
    component: () => import('../views/Main.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/tms',
    name: 'tms',
    component: () => import('../views/Tms.vue')
  },
  {
    path: '/store',
    name: 'store',
    component: () => import('../views/Store.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/mainLog.vue'),
    beforeEnter: (to, from, next) => {
      if (isAuthenticated()) {
        next();
      } else {
        next('/singIn'); 
      }
    }
  },
  {
    path: '/dispatch',
    name: 'dispatch',
    component: () => import('../views/Map.vue'),
    beforeEnter: (to, from, next) => {
      if (isAuthenticated()) {
        next();
      } else {
        next('/singIn'); 
      }
    }
  },
  {
    path: '/chat',
    name: 'chat',
    component: () => import('../views/Chat.vue'),
    beforeEnter: (to, from, next) => {
      if (isAuthenticated()) {
        next();
      } else {
        next('/singIn'); 
      }
    }
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;

