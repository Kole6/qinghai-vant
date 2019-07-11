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
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active-exact'
})