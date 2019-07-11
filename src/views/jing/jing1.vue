<!---->
<template>
  <div>
    <div class="header">
      <div class="head_left">地区</div>
      <div class="shu"></div>
      <div class="head_right">价格</div>
    </div>
    <div class="fen-flex">
      <div class="fen">
        <img :src="require('../../assets/img/qinghai/1_01.jpg')" />
      </div>
      <div class="fen"></div>
      <div class="fen"></div>
      <div class="fen"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang='scss' scoped>
.header {
  width: 100%;
  height: 0.8rem;
  box-shadow: 0px 5px 10px 0px #edf4fe;
  background-color: #fff;
  font-size: 0.35rem;
  text-align: center;
  line-height: 0.8rem;
}

.head_left {
  position: absolute;
  width: 48%;
  height: 0.8rem;
}

.shu {
  position: absolute;
  border-left: 1px solid #eee;
  height: 0.6rem;
  margin-left: 50%;
  margin-top: 0.1rem;
}

.head_right {
  position: absolute;
  width: 48%;
  margin-left: 51%;
  height: 0.8rem;
}

.fen-flex {
  display: flex;
  flex-wrap: wrap;
}

.fen {
  width: 3.3rem;
  height: 3.8rem;
  border-radius: 0.05rem;
  background-color: #fff;
  margin-top: 0.3rem;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
}
.fen img {
  width: 3.3rem;
  height: 2.1rem;
}
</style>