<template>
  <div>
    <div class="search">
      <input
        v-model="keyword"
        class="search-input"
        type="text"
        placeholder="输入城市名或者拼音"
      />
    </div>
    <div class="search-content">
      <ul>
        <li v-for="item of list" :key='item.id'>{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer -= setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  }
}
</script>
<style scoped>
.search {
  height: 0.72rem;
  background: #00bcd4;
}
.search-input {
  height: 0.62rem;
  width: 90%;
  line-height: 0.62rem;
  text-align: center;
  border-radius: 0.06rem;
  color: #666;
  padding: 0 0.1rem;
}
.search-content{
  z-index: 1;
  position: absolute;
  top: 2.78rem;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background-color: green;
}
</style>
