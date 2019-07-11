import Vue from 'vue'
import Vuex from 'vuex'
import menu from '../common/config/menu'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    menu,
    menuObj: {},
    bread: []
  },
  mutations: {
    updateCount(state, num) {
      state.count = num
    },
    updateMenu(state, menu) {
      state.menu = menu
    },
    updateMenuObj(state, menuObj) {
      state.menuObj = menuObj
    },
    updateBread(state, bread) {
      state.bread = bread
    }
  },
  actions: {

  }
})
// this.$store.state.count
// this.$store.commit('updateCount',80)