import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let defaultCity = "上海"
try {
  if (localStorage.city) {
    defaultCity = 
  }
} catch (error) {
  
}
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
