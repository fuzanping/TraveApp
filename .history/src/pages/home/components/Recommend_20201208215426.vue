<template>
  <div class="recomend-title">
    <div>热销推荐</div>

    <ul>
      <li class="item border-bottom">
        <img
          class="item-img"
          src="//tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/c2ae82fcc9fa11fa253e5919c49bcfbf.jpg"
          alt=""
        />
        <div class="item-info">
          <p class="item-title">大连圣亚航洋世界</p>
          <p class="item-desc">浪漫大连首站，浪漫的海洋主题公园</p>
          <button class="item-btn">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Recomment',
  data()
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
.item {
  display: flex;
  overflow: hidden;
  height: 1.9rem;
}
.item-img {
  width: 1.7rem;
  height: 1.7rem;
  padding: 0.1rem;
}
.item-info {
  flex: 1;
  padding: 0.1rem;
}
.item-title{
  line-height: 0.54rem;
  font-size: 0.32rem;
  min-width: 0;
}
.item-desc{
  line-height: 0.4rem;
  color: #ccc;
}
.item-btn{
  line-height: 0.44rem;
  margin-top: 0.2rem;
  background-color:#ff9300 ;
  padding: 0.1rem;
  border-radius: 0.06rem;
  color:#fff ;
}
</style>
