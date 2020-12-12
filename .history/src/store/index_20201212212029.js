import Vue from 'vue'
import Vuex from 'vuex'
import state from

Vue.use(Vuex)

export default new Vuex.Store({
  state: state,
  mutations: {
    changeCity (state, city) {
      state.city = city
      try {
        localStorage.city = city
      } catch (e) {
      }
    }
  }
})
