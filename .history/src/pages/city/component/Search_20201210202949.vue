<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="输入城市名或者拼音"/>
  </div>
</template>
<script>
export default {
  name: 'CitySearch'
}
</script>
<style scoped>
.search {
  height: .72rem;
  background: #00bcd4;

}
.search-input{
  height: .62rem;
  width: 100%;
  line-height: .62rem;
  text-align: center;
  border-radius:  .06rem;
  color: #666;
  padding
}
</style>
