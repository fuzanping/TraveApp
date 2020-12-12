<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe67c;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe6b9;</span>输入城市/经典/游玩主题
    </div>
    <!-- <router-link to="/city">点击跳转到city这块区域 -->
    <router-link to="/city">
      <div class="header-right">
        {{ this.$store.state.city}}<span class="iconfont">&#xe64a;</span>
      </div></router-link
    >
  </div>
</template>

<script>
import {mapState('modulePath', ${[]|{}})}
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>
<style scoped>
.header {
  /* height: 0.86rem; */
  line-height: 0.86rem;
  display: flex;
  background: #00bcd4;
  color: #fff;
}
.header .header-left {
  width: 0.64rem;
  float: left;
}
.header .header-left .back-icon {
  text-align: center;
  font-size: 0.4rem;
}
.header .header-input {
  flex: 1;
  height: 0.64rem;
  line-height: 0.64rem;
  margin-top: 0.12rem;
  margin-left: 0.2rem;
  padding-left: 0.2rem;
  background: #fff;
  border-radius: 0.1rem;
  color: #ccc;
}
.header .header-right {
  min-width: 1.04rem;
  padding: 0 .1rem;
  float: right;
  text-align: center;
  color:#fff;
}
</style>
