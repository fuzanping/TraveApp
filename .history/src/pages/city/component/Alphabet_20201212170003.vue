<template>
  <div class="alphabet">
    <ul class="list">
      <li
        class="item"
        v-for="(item, key) of cities"
        :key="key"
        @click="handleLetterClick"
        @touchend="handleTouchEnd"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
      >
        {{ key }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    letters () {
      // eslint-disable-next-line no-unused-vars
      const letters = []
      // eslint-disable-next-line no-undef
      for (let i in this.cities) {
       letters.pu
      }
    }
  },
  data () {
    return {
      touchState: false
    }
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
      console.log(e.target.innerText)
    },
    handleTouchStart () {
      this.touchState = true
    },
    handleTouchMove () {
      if (this.touchState) {
        
      }
    },
    handleTouchEnd () {
      this.touchState = false

    }
  }
};
</script>
<style scoped>
.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;
}
.item {
  line-height: 0.4rem;
  text-align: center;
  color: #00bcd4;
}
</style>
