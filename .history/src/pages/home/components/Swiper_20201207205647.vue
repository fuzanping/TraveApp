<template>
  <div class="wrapper">
    <swiper :options="swiperOptions">
      <swiper-slide v-for='item of swiperList' :key="item.id"
        ><img
          class="swiper-img"
          :src="item.imgUrl"
          alt=""
      /></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'homeSwiper',
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        // 循环轮播
        loop: true
      },
      swiperList: [{
        id: '1',
        imgUrl: '../../../assets/images/img1.jpg'
      }, {
        id: '2',
        imgUrl: '../../../assets/images/img2.jpg'
      }]
    }
  }
}
</script>
<style>
.wrapper{
  overflow: hidden;
  width: 100%;
  height: 0;
  /* 宽高比  高比宽*/
  padding-bottom: 31.25%
  background
}
.swiper-img {
  width: 100%;
}

</style>
