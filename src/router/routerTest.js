export default [
    {
        path: '/',
        redirect: '/httpTest'
    },
    {
        path: '/httpTest',
        component: resolve => require(['@/common/http/httpTest.vue'], resolve)
    },
]