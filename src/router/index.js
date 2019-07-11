import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/login',
      component: () => import('@/views/test.vue')
    },
    {
      path: '/mail1',
      component: () => import('@/views/mail/mail1.vue')
    },
    {
      path: '/mail2',
      component: () => import('@/views/mail/mail2.vue')
    },
    {
      path: '/mail3',
      component: () => import('@/views/mail/mail3.vue')
    },
    {
      path: '/mail4',
      component: () => import('@/views/mail/mail4.vue')
    },
    {
      path: '/plan1',
      component: () => import('@/views/plan/plan1.vue')
    },
    {
      path: '/plan2',
      component: () => import('@/views/plan/plan2.vue')
    },
    {
      path: '/jing1',
      component: () => import('@/views/jing/jing1.vue')
    },
    {
      path: '/jing2',
      component: () => import('@/views/jing/jing2.vue')
    },
    {
      path: '/jing3',
      component: () => import('@/views/jing/jing3.vue')
    },
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active-exact'
})