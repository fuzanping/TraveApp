<template>
<div>
  <home-header></home-header>
  <home-swiper></home-swiper>
</div>
</template>
<script>
import HomeHeader from './components/Header'
import homeSwiper from './components/Swiper'
export default {
  name: 'Home',
  components: {
    HomeHeader
    // homeSwiper
  }
}
</script>
<style>

</style>
