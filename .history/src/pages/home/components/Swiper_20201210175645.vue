<template>
  <div class="wrapper-swiper">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="item of list" :key="item.id"
        ><img class="swiper-img" :src="item.imgUrl" alt="" />
        <div>{{ item.desc }}</div></swiper-slide
      >
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        // 循环轮播
        loop: true
      }
    }
  }
}
</script>
<style>
.swiper-pagination-bullet-active {
  background: #f00;
}
</style>
<style scoped>
.wrapper-swiper {
  overflow: hidden;
  width: 100%;
  height: 0;
  /* 宽高比  高比宽*/
  padding-bottom: 31.25%;
  background: #eee;
}
.swiper-img {
  width: 100%;
}
</style>
