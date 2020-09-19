import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
        path: '/',
        component: () => import('@/views/Home.vue')
    },
    {
        path: '/todos',
        component: () => import('@/views/Todos.vue')
    },
    {
      path: '/about',
      component: () => import('@/views/About.vue')
    }
]
})

export default router
