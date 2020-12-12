<template>
  <!-- ref="wrap"获取dom -->
  <div class="list" ref="wrap">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div id="button-list">
          <div id="button-wrapper"><div class="button">北京</div></div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div id="button-list">
          <div id="button-wrapper" v-for="item of hot" :key="item.id"><div class="button">{{hot.name}}}</div></div>
        </div>
      </div>
      <div class="area" v-for="(item,key) of cities" >
        <div class="title border-topbottom">{{key}}</div>
        <div id="item-list">
          <div class="item border-bottom" v-for="innerItem of item" :key="innerItem.id">{{innerItem.name}}</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">B</div>
        <div id="item-list">
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">C</div>
        <div id="item-list">
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">D</div>
        <div id="item-list">
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
          <div class="item border-bottom">阿拉尔</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object
  },
  mounted () {
    // this.$refs.与上方的ref结合获取dom
    this.scroll = new BScroll(this.$refs.wrap)
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
