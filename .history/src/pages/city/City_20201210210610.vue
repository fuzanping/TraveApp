<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
    <city-alphabet></city-alphabet>
  </div>
</template>
<script>
import CityHeader from './component/Header'
import CitySearch from './component/Search'
import CityList from './component/List'
import CityAlpherbet from './component/Alpherbet'
export default {
  name: 'city',
  components: {
    CityHeader,
    CitySearch,
    CityList
  }
}
</script>
<style scoped>

</style>
