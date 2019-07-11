<!---->
<template>
  <div>
    <div class="item" @click="showChoose">
      <div class="item_left">
        <span>预定日期</span>
      </div>
      <div class="item_right">
        <span class="item_right_content">请选择</span>
      </div>
    </div>
    <div class="price">
      <span class="first">学生价&nbsp;&nbsp;&nbsp;</span>
      <span>100</span>
    </div>
    <div class="zf">
      <span>请选择以下支付方式进行支付</span>
      <van-radio-group v-model="radio">
        <van-radio name="1">
          <img src="@/assets/img/qinghai/wx.jpg" alt />
          <span>微信支付</span>
        </van-radio>
        <van-radio name="2">
          <img src="@/assets/img/qinghai/zfb.jpg" alt />
          <span>支付宝支付</span>
        </van-radio>
      </van-radio-group>
    </div>
    <div class="btn">立即支付</div>
    <van-popup v-model="show" position="bottom">
      <van-picker show-toolbar :columns="columns" @confirm="handleChoose" @cancel="show = false" />
    </van-popup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: "1",
      show: false,
      columns: []
    };
  },
  methods: {
    showChoose() {},
    handleChoose() {}
  }
};
</script>
<style lang='scss' scoped>
.item {
  display: flex;
  justify-content: space-between;
  padding: 0 0.3rem;
  font-size: 0.3rem;
  line-height: 0.9rem;
  background: #fff;
  border-bottom: solid 1px #ebebed;
  background: #fff;
}

.item--margin {
  margin-bottom: 0.3rem;
}

.item_left {
  display: flex;
  align-items: center;
}

.item_left_div {
  width: 0.8rem;
  display: inline-block;
  position: relative;
}

.item_left_div i {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 0.4rem;
  color: #4bbaf4;
}

.item_right {
  color: #7a7a7a;
}

.item_right:after {
  content: "";
  display: inline-block;
  width: 0.2rem;
  height: 0.2rem;
  transform: rotate(45deg);
  margin-left: 0.2rem;
  border-top: solid 2px gray;
  border-right: solid 2px gray;
}

.item_right_content {
  font-size: 0.3rem;
  line-height: 0.9rem;
  display: inline-block;
}
.zf {
  padding-left: 0.3rem;
  background: #fff;
  padding-bottom: 0.2rem;
  & > span {
    font-size: 0.4rem;
    line-height: 1.3rem;
    color: #454545;
  }
  img {
    vertical-align: middle;
  }
  span {
    display: inline-block;
    vertical-align: middle;
    font-size: 0.4rem;
  }
}
.price {
  padding: 0.1rem 0;
  padding-left: 0.3rem;
  background: #fff;
  margin-bottom: 0.3rem;
  box-shadow: 0 4px 4px #edf5ff;
  .first {
    font-size: 0.3rem;
  }
  span:last-child {
    font-size: 0.6rem;
    color: #088eff;
    font-weight: bold;
    line-height: 1rem;
  }
  span:last-child::before {
    content: "￥";
    font-size: 0.4rem;
    color: #098efe;
    font-weight: bold;
  }
}
.btn {
  position: fixed;
  bottom: 3rem;
  width: 80%;
  left: 10%;
  text-align: center;
  font-size: 0.4rem;
  line-height: 0.9rem;
  border-radius: 0.5rem;
  color: #fff;
  background: linear-gradient(to right, #39b5ff, #048bff);
}
</style>
<style scoped>
.zf >>> .van-radio {
  margin-top: 0.4rem;
}
</style>
