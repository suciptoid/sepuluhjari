import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Belajar from '@/views/Belajar'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/belajar',
    name: 'Belajar',
    component: Belajar
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
