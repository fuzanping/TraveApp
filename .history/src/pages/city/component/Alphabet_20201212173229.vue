<template>
  <div class="alphabet">
    <ul class="list">
      <li
        class="item"
        v-for="item of letters"
        :key="item"
        :ref="item"
        @click="handleLetterClick"
        @touchend="handleTouchEnd"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
      >
        {{ item }}
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
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchState: false,
      startY: 0
    }
  },
  updated () {
    //  offsetTop某个元素到顶部的高度
    this.satrtY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
      console.log(e.target.innerText)
    },
    handleTouchStart () {
      this.touchState = true
    },
    handleTouchMove (e) {
      if (this.touchState) {
        // eslint-disable-next-line no-unused-vars
        const touchY = e.touches[0].clientY - 79
        // eslint-disable-next-line no-unused-vars
        const index = Math.floor((touchY - startY) / 20)
        if (index >= 0 && index < this.letter.length) {
          this.$emit('change', this.letters[index])
        }
      }
    },
    handleTouchEnd () {
      this.touchState = false
    }
  }
}
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
