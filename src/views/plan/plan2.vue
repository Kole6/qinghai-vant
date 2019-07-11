<template>
  <div class="container">
    <div class="item">
      <span>请假类型:&nbsp;</span>
      <span>{{renItem.qjlx==1?"病假":'事假'}}</span>
    </div>
    <div class="item item--margin">
      <span>请假时间:&nbsp;</span>
      <span class="text--color text-size3">{{renItem.kssj}}-{{renItem.jssj}}</span>
    </div>
    <div class="item item--margin item--padding">
      <span class="text--height">请假理由:</span>
      <div class="reason text--color">{{renItem.qjsy}}</div>
    </div>
    <div class="item item--padding">
      <span class="text--height">图片</span>
      <div class="reason">
          <img src="@/assets/img/pic.jpg" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "plan2",
  data() {
    return {
      renItem: this.$route.query
    };
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.container{
    background: #FAFBFF;
}
.item {
  font-size: 0.35rem;
  padding: 0.2rem;
  padding-left: 0.3rem;
  background: #fff;
  border-bottom: solid 1px #E9E9E9;
}
.item--margin{
    margin-bottom: 0.3rem;
}
.text--height{
    display: inline-block;
    line-height:1rem;
}
.text--color{
    color: #BABABA;
}
.item--padding{
    padding-bottom: 1rem;
}
.text-size3{
    font-size:0.3rem;
}
</style>
