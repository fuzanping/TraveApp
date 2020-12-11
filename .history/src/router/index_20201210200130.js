import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: city
    }
  ]
})
