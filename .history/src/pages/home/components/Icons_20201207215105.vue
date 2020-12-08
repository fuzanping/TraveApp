<template>
<div class="icons">
  <div class="icon">
    <img src="//s.qunarzz.com/homenode/images/touchheader/piao.png" alt="">
    <p>热门景点</p>
  </div>
  <div class="icon"></div>
  <div class="icon"></div>
  <div class="icon"></div>
  <div class="icon"></div>
  <div class="icon"></div>
  <div class="icon"></div>
  <div class="icon"></div>

</div>
</template>
<script>
export default {
  name: 'HomeIcons'
}
</script>
<style scoped>
  .icons{
    overflow: hidden;
    height: 0;
    padding-bottom: 50%;
    background-color: aqua;
  }
  .icons .icon{
    float: left;
    width: 25%;
    padding-bottom: 25%;
    background-color: blueviolet;
  }
</style>
