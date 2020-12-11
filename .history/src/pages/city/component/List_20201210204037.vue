<template>
  <div class="list">
    <div class="area"><div class="title border-topbottom">当前城市</div>
    <div id="button-list">
      <div id="button-wrapper"><dir></dir></div>
    </div>
    </div>
    <div class="area"><div class="title border-topbottom">热门城市</div></div>
    <div class="area"><div class="title border-topbottom">A</div></div>
  </div>
</template>
<script>
export default {
  name: 'CityList'
}
</script>
<style scoped>
.border-topbottom:before {
  border-color: #777;
}
.border-topbottom:after {
  border-color: #777;
}
.title {
  line-height: 0.44rem;
  background-color: #eee;
  padding-left: 0.26rem;
  color: #666;
}
.button-list{
  padding: .1rem;
}
.button-list{

}
</style>
