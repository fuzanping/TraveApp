<template>
<div class="icons">
  <div class="icon">
    <div class="icon-img">
    <img class="icon-imgcontent" src="//s.qunarzz.com/homenode/images/touchheader/piao.png" alt="">
   </div> <p>热门景点</p>
  </div>
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
    position: relative;
    overflow: hidden;
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;
    background-color: blueviolet;
  }
  .icons .icon .icon-img{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: .44rem;
    background-color: cornflowerblue;

  }
  .icons .icon .icon-img .icon-imgcontent{
    display: block;
    margin
    height: 100%;
  }
</style>
