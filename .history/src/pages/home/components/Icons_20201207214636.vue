<template>
<div class="icons">
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
    width: 100%;
    overflow: hidden;
    height: 0;
    padding-bottom: 50%;
    background-color: aqua;
  }
  .icons .icon{
    float: left;
    width: 25%;
    padding-bottom: 25%;
  }
</style>
