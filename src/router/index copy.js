import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: resolve => require(['@/views/login.vue'], resolve)
    },
    {
      path: '/home',
      component: () => import('@/views/home.vue'),
      // component: resolve => require(['@/views/home.vue'], resolve)
    },
    {
      path: '/im',
      component: resolve => require(['@/views/im.vue'], resolve),
      children: [{
          path: 'teachingInspect',
          component: resolve => require(['@/views/appModule/teachingInspect.vue'], resolve),
          meta: {
            title: '教学巡查',
            back: '/home'
          }
        }, {
          path: 'inspectionInfo',
          component: (resolve) => require(['@/views/appModule/inspectionInfo.vue'], resolve),
          meta: {
            title: '巡视信息',
            back: '/im/teachingInspect'
          }
        },{
          path: 'inspectionStatistics',
          component: (resolve) => require(['@/views/appModule/inspectionStatistics.vue'], resolve),
          meta: {
            title: '巡视统计',
            back: '/im/teachingInspect'
          }
        },{
          path: 'inspectionDetail',
          component: (resolve) => require(['@/views/appModule/inspectionDetail.vue'], resolve),
          meta: {
            title: '巡视情况',
            back: '/im/inspectionStatistics'
          }
        },
        {
          path: 'chooseRoom',
          component: (resolve) => require(['@/views/appModule/chooseRoom.vue'], resolve),
          meta: {
            title: '选择教学地点',
            back: '/im/teachingInspect'
          }
        },
        {
          path: 'inspectRoom1',
          component: (resolve) => require(['@/views/appModule/inspectRoom1.vue'], resolve),
          meta: {
            title: '巡视记录'
          }
        },
        {
          path: 'inspectRoom2',
          component: (resolve) => require(['@/views/appModule/inspectRoom2.vue'], resolve),
          meta: {
            title: '巡视记录'
          }
        },
        {
          path: 'inspectRoom3',
          component: (resolve) => require(['@/views/appModule/inspectRoom3.vue'], resolve),
          meta: {
            title: '巡视记录'
          }
        },{
          path:'statisticsData',
          component:(resolve)=>require(['@/views/appModule/statisticsData.vue'],resolve),
          meta: {
            title: '统计数据',
            back:'/im/teachingInspect'
          }
        },
        // 考勤
        {
          path:'attendance',
          name:'attendance',
          component:(resolve)=>require(['@/views/attendance/attendance.vue'],resolve),
          meta: {
            title: '考勤',
            back: '/home'
          }
        },
        {
          path:'techingAttendance',
          name:'techingAttendance',
          component:(resolve)=>require(['@/views/attendance/techingAttendance.vue'],resolve),
          meta: {
            title: '我的课表',
            back: '/im/attendance'
          }
        },
        {
          path:'statisticsAttendance',
          name:'statisticsAttendance',
          component:(resolve)=>require(['@/views/attendance/statisticsAttendance.vue'],resolve),
          meta: {
            title: '考勤统计',
            back: '/im/attendance'
          }
        },
        {
          path:'myAttendance',
          name:'myAttendance',
          component:(resolve)=>require(['@/views/attendance/myAttendance.vue'],resolve),
          meta: {
            title: '教学考勤',
            back: '/im/techingAttendance'
          }
        },
        {
          path:'attendanceDetail',
          name:'attendanceDetail',
          component:(resolve)=>require(['@/views/attendance/attendanceDetail.vue'],resolve),
          meta: {
            title: '具体信息',
            back: '/im/statisticsAttendance'
          }
        },
        // 预警系统
        {
          path:'warningSystem',
          name:'warningSystem',
          component:(resolve)=>require(['@/views/warningSystem/warningSystem.vue'],resolve),
          meta: {
            title: '预警通知',
            back: '/home'
          }
        },
        {
          path:'warningDetail',
          name:'warningDetail',
          component:(resolve)=>require(['@/views/warningSystem/warningDetail.vue'],resolve),
          meta: {
            title: '预警详情',
            back: '/im/warningSystem'
          }
        },
        // 实训室管理巡视
        {
          path:'trainingInspect',
          name:'trainingInspect',
          component:(resolve)=>require(['@/views/training/trainingInspect.vue'],resolve),
          meta: {
            title: '实训室管理巡视',
            back: '/home'
          }
        },
        {
          path:'healthInspect',
          name:'healthInspect',
          component:(resolve)=>require(['@/views/training/healthInspect.vue'],resolve),
          meta: {
            title: '卫生巡查',
            back: '/im/trainingInspect'
          }
        },
        {
          path:'healthInspectDetail',
          name:'healthInspectDetail',
          component:(resolve)=>require(['@/views/training/healthInspectDetail.vue'],resolve),
          meta: {
            title: '卫生巡查细节',
            back: '/im/trainingInspect'
          }
        },
        {
          path:'assetsInspectInspect',
          name:'assetsInspectInspect',
          component:(resolve)=>require(['@/views/training/assetsInspectInspect.vue'],resolve),
          meta: {
            title: '资产清查细节',
            back: '/im/trainingInspect'
          }
        },
        {
          path:'assetsInspect',
          name:'assetsInspect',
          component:(resolve)=>require(['@/views/training/assetsInspect.vue'],resolve),
          meta: {
            title: '资产清查',
            back: '/im/trainingInspect'
          }
        },
        {
          path:'trainingStatistics',
          name:'trainingStatistics',
          component:(resolve)=>require(['@/views/training/trainingStatistics.vue'],resolve),
          meta: {
            title: '实训室统计',
            back: '/im/trainingInspect'
          }
        },
      ]
    },

  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active-exact'
})


// 路由守卫
/*
router.beforeEach((to, from, next) => {
  if (to.path == '/login') {
    next();
  } else {
    if (window.localStorage.getItem("token")==null) {
      next({path: '/login'})
    } else {
      next();
    }
  }
})
*/