<template>
  <div class="icons">
    <swiper>
      <swiper-slide>
        <div class="icon">
          <div class="icon-img">
            <img
              class="icon-imgcontent"
              src="//s.qunarzz.com/homenode/images/touchheader/piao.png"
              alt=""
            />
          </div>
          <p class="icon-desc">热门景点</p>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="icon">
          <div class="icon-img">
            <img
              class="icon-imgcontent"
              src="//s.qunarzz.com/homenode/images/touchheader/piao.png"
              alt=""
            />
          </div>
          <p class="icon-desc">热门景点</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: "HomeIcons",
  data() {
    return {
      iconList: [
        {
          id: "1",
          imgUrl: "//s.qunarzz.com/homenode/images/touchheader/piao.png",
          desc: "景点门票"
        },
        {}
      ]
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
}
</style>
