import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let defaultCity = "上海"
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {
  e.
}
export default new Vuex.Store({
  state: {
    city: de
  },
  mutations: {
    changeCity (state, city) {
      state.city = city
      localStorage.city = city
    }
  }
})
