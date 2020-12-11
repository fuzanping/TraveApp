<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe67c;</div></router-link
    >
  </div>
</template>
<script>
export default {
  name: "CityHeader"
};
</script>
<style scoped>
.header {
  overflow: hidden;
  height: 0.86rem;
  line-height: 0.86rem;
  text-align: center;
  color: #fff;
  background: #00bcd4;
  font-size: 0.32rem;
  position: relative;
}
.header-back {
  position: absolute;
  top: 0;
  left: 0;
  width: 0.64rem;
  font-size: 0.4rem;
  text-align: center;
  color: #fff;
}
</style>
