<template>
<div>
  <!-- 父组件给子组件传递city这个值 -->
  <home-header></home-header>
  <home-swiper :list="swiperList"></home-swiper>
  <home-icons :list="iconList"></home-icons>
  <recommend :list="recommendList"></recommend>
  <weekend :list="weekendList"></weekend>
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
// eslint-disable-next-line no-unused-vars
import {mapState} from 'vuex'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    Recommend,
    HomeIcons,
    Weekend
  },
  computed: {
    ...mapState(['city'])
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
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  data () {
    return {
      lastCity
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []

    }
  },
  mounted () {
    // 在页面挂载完成后实行getHomeInfo函数
    this.getHomeInfo()
  },
  activated () {
    // 页面重新被显示的时候,activated一定会被重新执行

  }
}
</script>
<style>

</style>
