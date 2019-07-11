<!--通讯录 不往下调转-->
<template>
  <div>
    <van-search placeholder="请输入搜索关键词" v-model="value" />
    <van-index-bar>
      <van-index-anchor index="C" />
      <van-cell title="财务部   15658787985" />
      <van-index-anchor index="J" />
      <van-cell title="教务处   18895236548" />
      <van-index-anchor index="W" />
      <van-cell title="外勤部   13698562658" />
      <van-index-anchor index="X" />
      <van-cell title="行政部   18288883222" />
      <van-index-anchor index="Y" />
      <van-cell title="阅览室   13985258975" />
      <van-cell title="医务室   13345456688" />
      <van-index-anchor index="Z" />
      <van-cell title="资源管理室   15455648789" />
    </van-index-bar>
  </div>
</template>
<script>
export default {
  data() {
    return { value: "" };
  },
  methods: {}
};
</script>
<style lang='scss' scoped>
</style>