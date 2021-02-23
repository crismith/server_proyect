import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('@/views/Services.vue')
  },
  {
    path: '/import',
    name: 'import',
    component: () => import('@/views/Import.vue')
  },
  {
    path: '/services/create',
    name: 'CreateService',
    component: () => import('@/views/CreateService.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
