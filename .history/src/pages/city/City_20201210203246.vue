<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-search></city-search>
  </div>
</template>
<script>
import CityHeader from './component/Header'
import CitySearch from './component/Search'
export default {
  name: 'city',
  components: {
    CityHeader,
    CitySearch
  }
}
</script>
<style scoped>

</style>
