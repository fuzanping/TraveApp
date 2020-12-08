<template>
<div>
  <!-- 父组件给子组件传递city这个值 -->
  <home-header :city="city"></home-header>
  <home-swiper :list="swiperList"></home-swiper>
  <home-icons :></home-icons>
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
import axios from 'axios'
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
    // axios.get请求一个url，返回一个promise对象
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      console.log(res)
      // 如果后端正确的返回结果，而且res.data由内容项
      if (res.ret && res.data) {
        const data = res.data
        this.city = data.city
        // this.swiperList = data.swiperList
        // this.iconList = data.iconList
        // this.recommendList = data.recommendList
        // this.weekendList = data.weekendList
      }
    }
  },
  data () {
    return {
      city: '',
      swiperList: [],
      iconList: []

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
