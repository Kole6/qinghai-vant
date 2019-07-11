import './assets/style/reset.min.css'
import 'vant/lib/index.css';
import '@/assets/font/iconfont.css'

import './common/utils/index.js'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from './common/http'
import global from './common/global/global'
import Vant from 'vant';

http.config(Vue)
Vue.prototype.$HTTP = http
Vue.prototype.$Global = global
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')