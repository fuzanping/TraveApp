import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let def
export default new Vuex.Store({
  state: {
    city: localStorage.city || '杭州'
  },
  mutations: {
    changeCity (state, city) {
      state.city = city
      localStorage.city = city
    }
  }
})
