<template>
  <div class="icons">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="(page,index) of pages" :key='index'>
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img
              class="icon-imgcontent"
              :src="item.imgUrl"
              alt=""
            />
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOptions:{
        autoplay:false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style scoped>
.icons {
  overflow: hidden;
  height: 0;
  padding-bottom: 50%;
  /* background-color: aqua; */
}
.icons .icon {
  position: relative;
  overflow: hidden;
  float: left;
  width: 25%;
  height: 0;
  padding-bottom: 25%;
  /* background-color: blueviolet; */
}
.icons .icon .icon-img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0.44rem;
  /* background-color: cornflowerblue; */
  box-sizing: border-box;
  padding: 0.1rem;
}
.icons .icon .icon-img .icon-imgcontent {
  display: block;
  margin: 0 auto;
  height: 100%;
}
.icons .icon .icon-desc {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 0.44rem;
  line-height: 0.44rem;
  color: #333;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
