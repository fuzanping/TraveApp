<template>
  <div class="recomend-title">
    <div>周末去哪</div>

    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key=
      'item.id'>
      <div class="item-img-wrapper">
        <img
          class="item-img"
          :src="item.img"
          alt=""
        /></div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Weeken',
  data () {
    return {
      recommendList: [{id: '1', img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=24710371,2958404434&fm=26&gp=0.jpg', title: '大连圣亚航洋世界', desc: '浪漫大连首站，浪漫的海洋主题公园'}, {id: '3', img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=24710371,2958404434&fm=26&gp=0.jpg', title: '大连圣亚航洋世界', desc: '浪漫大连首站，浪漫的海洋主题公园'}, {id: '2', img: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=24710371,2958404434&fm=26&gp=0.jpg', title: '大连圣亚航洋世界', desc: '浪漫大连首站，浪漫的海洋主题公园'}]
    }
  }
}
</script>
<style scoped>
.recomend-title {
  margin-top: 0.2rem;
  line-height: 0.8rem;
  background-color: #eee;
  text-indent: 0.2rem;
  text-align: left;
}
.item-img-wrapper{
  overflow: hidden;
  height: 0;
  padding-bottom: 33.9%;
}
.item-img {
  width: 100%;
}
.item
.item-title {
  line-height: 0.54rem;
  font-size: 0.32rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item-desc {
  line-height: 0.4rem;
  color: #ccc;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

</style>
