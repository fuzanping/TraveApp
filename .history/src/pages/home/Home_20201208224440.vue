<template>
<div>
  <home-header></home-header>
  <home-swiper></home-swiper>
  <home-icons></home-icons>
  <recommend></recommend>
  <weekend></weekend>
</div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
// eslint-disable-next-line no-unused-vars
import HomeIcons from './components/Icons'
import Recommend from './components/Recommend'
import Weekend from './components/Weekend'
// 引入axios发送ajax请求
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    Recommend,
    HomeIcons,
    Weekend
  },
  methods: {
    // 获取ajax数据
    getHomeInfo () {
      // axios.get请求一个url，返回一个promise对象
      // eslint-disable-next-line no-undef
      axios.get('/static/index.json').then(this.getHomeInfoSucc),
      getHomeInfoSucc (res) {
        console.log(res);
      }
    }
  },
  mounted () {
    // 在页面挂载完成后实行getHomeInfo函数
    this.getHomeInfo()
  }
}
</script>
<style>

</style>
