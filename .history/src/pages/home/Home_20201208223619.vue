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
  mounted () {
    // 在页面挂载王城后
    this.getHomeInfo()
  }
}
</script>
<style>

</style>
