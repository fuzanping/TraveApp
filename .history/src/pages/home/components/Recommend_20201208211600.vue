<template>
  <div class="recomend-title">
    <div>热销推荐</div>

    <ul>
      <li class="item">
        <img
          class="item-img"
          src="//tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/c2ae82fcc9fa11fa253e5919c49bcfbf.jpg"
          alt=""
        />
        <div class="item-info">
          <p class="item-title">大连圣亚航洋世界</p>
          <p class="item-desc">浪漫</p>
          <button class="item-btn">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Recomment'
}
</script>
<style scoped>
.recomend-title {
  margin-top: 0.2rem;
  line-height: 0.4rem;
  background-color: #ccc;
  text-indent: 0.2rem;
}
.recomend-title .item {
  display: flex;
  overflow: hidden;
  height: 1.9rem;
}
item-img {
  width: 1.7rem;
  height: 1.7rem;
  padding: 1rem;
}
.item-info {
  flex: 1;
}
</style>
