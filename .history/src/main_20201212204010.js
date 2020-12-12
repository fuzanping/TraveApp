// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import store from "./store/index"
// 轮播图的使用
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
// import 'swiper/css/swiper.css'

Vue.config.productionTip = false
// 解决移动端300ms点击延迟问题
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
/* vue的根实例，挂载在id为APP的div中 */
new Vue({
  el: '#app',
  router,
  stroe
  // 定义局部组件的使用
  components: { App },
  // 模板内将APP组件渲染出来
  template: '<App/>'
})
