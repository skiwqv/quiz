import { createRouter, createWebHistory } from 'vue-router'

import homeView from '@/views/home-view.vue'
import About from '@/views/about-view.vue'
import queze from '@/views/queze-view.vue'
import result from '@/views/result-view.vue'

const routes = [
  {
    path: '/',
    component: homeView
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/quize/:id',
    component: queze,
    props: true
  },
  {
    path: '/result',
    component: result,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
