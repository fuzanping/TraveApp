<template>
  <div id="app">
    <!-- keep-alive当路由执行一次之后，将它放到内存中，下次执行的 -->
    <keep-alive>
    <!-- 当前路由地址所对应的路由内容 -->
     <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
