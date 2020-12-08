<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
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
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  // 
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style scoped>
.wrapper-swiper{
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
