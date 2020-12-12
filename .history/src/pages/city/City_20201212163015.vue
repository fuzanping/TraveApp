<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :cities='cities' :hot="hotCities"></city-list>
    <city-alphabet :cities='cities' @change="handleLetterChange"></city-alphabet>
  </div>
</template>
<script>
import CityHeader from './component/Header'
import CitySearch from './component/Search'
import CityList from './component/List'
import CityAlphabet from './component/Alphabet'
// eslint-disable-next-line no-unused-vars
import axios from 'axios'
export default {
  name: 'city',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter:''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json').then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        // 将mock的数据拿出来赋值给根组件的数据
        // this.cities  this后面的变量名与data内的一致
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    handleLetterChange (letter) {
      console.log(letter)
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>
<style scoped>

</style>
