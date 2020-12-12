<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">
              <!-- {{this.$store.state.city}} -->
              {{this.city}}
            </div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item of hot"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div
        class="area"
        v-for="(item, key) of cities"
        :key="key"
        :ref="key"
      >
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
          >
            {{innerItem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import BScroll from 'better-scroll'
// eslint-disable-next-line no-unused-vars
import {mapState} from 'vuex'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  computed: {
    ...mapState({
      currentCity:'city'
    })
  }
  methods: {
    handleCityClick (city) {
      this.$store.commit('changeCity', city)
      // 进行页面的跳转this.$router.push("需要跳转的路径")
      this.$router.push('/')
    }
  },
  mounted () {
    // this.$refs.与上方的ref结合获取dom
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  watch: {
    // 侦听letter发生改变的时候触发
    letter () {
      if (this.letter) {
        // eslint-disable-next-line no-unused-vars
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>
<style scoped>
.border-topbottom:before {
  border-color: #ccc;
}
.border-topbottom:after {
  border-color: #ccc;
}
.border-bottom:before {
  border-color: #ccc;
}
.title {
  line-height: 0.54rem;
  background: #eee;
  padding-left: 0.2rem;
  color: #666;
  font-size: 0.26rem;
}
.button-list {
  overflow: hidden;
  padding: 0.1rem 0.6rem 0.1rem 0.1rem;
}
.button-wrapper {
  float: left;
  width: 33.33%;
}
.button {
  margin: 0.1rem;
  padding: 0.1rem 0;
  text-align: center;
  border: 0.02rem solid #ccc;
  border-radius: 0.06rem;
}
.item {
  line-height: 0.76rem;
  padding-left: 0.2rem;
  color: #666;
}
.list {
  text-align: left;
  overflow: hidden;
  position: absolute;
  top: 2.83rem;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
