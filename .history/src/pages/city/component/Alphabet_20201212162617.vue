<template>
  <div class="alphabet">
    <ul class="list">
      <li class="item" v-for="(item,key) of cities" :key="key" @click="handleLetterClick">{{key}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  methods: {
    handleLetterClick(e){
      console.log(e.target.inner);
    }
  }
}
</script>
<style scoped>
.list{
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: .4rem;
}
.item{
  line-height: .4rem;
  text-align: center;
  color: #00bcd4;
}
</style>
