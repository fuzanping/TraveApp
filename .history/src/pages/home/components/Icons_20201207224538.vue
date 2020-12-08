<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page,index) of pages">
        <div class="icon" v-for="item of iconList" :key="item.id">
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
  data () {
    return {
      iconList: [
        {
          id: '1',
          imgUrl: '//s.qunarzz.com/homenode/images/touchheader/piao.png',
          desc: '景点门票'
        },
        {
          id: '2',
          imgUrl: '//s.qunarzz.com/homenode/images/touchheader/package.png',
          desc: '度假'
        },
        {
          id: '3',
          imgUrl: '//s.qunarzz.com/homenode/images/touchheader/piao.png',
          desc: '景点门票'
        },
        {
          id: '4',
          imgUrl: '//s.qunarzz.com/homenode/images/touchheader/package.png',
          desc: '度假'
        },
        {
          id: '5',
          imgUrl: '//s.qunarzz.com/homenode/images/touchheader/piao.png',
          desc: '景点门票'
        },
        {
          id: '6',
          imgUrl: '//s.qunarzz.com/homenode/images/touchheader/package.png',
          desc: '度假'
        },
        {
          id: '7',
          imgUrl: '//s.qunarzz.com/homenode/images/touchheader/piao.png',
          desc: '景点门票'
        },
        {
          id: '8',
          imgUrl: '//s.qunarzz.com/homenode/images/touchheader/package.png',
          desc: '度假'
        },
        {
          id: '9',
          imgUrl: '//s.qunarzz.com/homenode/images/touchheader/piao.png',
          desc: '景点门票'
        },
        {
          id: '10',
          imgUrl: '//s.qunarzz.com/homenode/images/touchheader/package.png',
          desc: '度假'
        }

      ]
    }
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    pages () {
      // eslint-disable-next-line no-unused-vars
      const pages = []
      this.iconList.forEach((item, index) => {
        // eslint-disable-next-line no-unused-vars
        // 将每一项的index进行向下取整，得到的值就是所在页面
        // eslint-disable-next-line no-unused-vars
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
}
</style>
