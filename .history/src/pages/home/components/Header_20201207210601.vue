<template>
  <div class="header">
    <div class="header-left"><div class="iconfont back-icon">&#xe67c;</div></div>
    <div class="header-input"><span class="iconfont">&#xe6b9;</span>输入城市/经典/游玩主题</div>
    <div class="header-right">城市<span class="iconfont">&#xe64a;</span></div>
  </div>
</template>
<script>

export default {
  name: 'homeHeader'
}
</script>
<style>
  .header{
    /* height: 0.86rem; */
    line-height: .86rem;
    display: flex;
    background: #00bcd4;
    color: #fff;
  }
  .header .header-left{
    width: .64rem;
    float: left;
  }
  .header .header-left .back-icon{
    text-align: center;
    font-size: .4rem;
  }
  .header .header-input{
    flex: 1;
    /* height:.64rem; */
    /* line-height: .64rem; */
    margin-top: .12rem;
    margin-left: .2rem;
    padding-left: .2rem;
    background: #fff;
    border-radius: .1rem;
    color: #ccc;
  }
  .header .header-right{
    width: 1.24rem;
    float: right;
    text-align: center;
  }
</style>
