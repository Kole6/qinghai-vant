<!---->
<template>
  <div class="container">
    <div class="top_pic">
      <img src="@/assets/img/qinghai/jing2_top.jpg" alt />
      <div class="card">
        <div class="card1">尼莫海豚馆/椰风海景门票</div>
        <div class="card2">全年 08:00-22:00</div>
        <div class="card3">
          <span>开园中</span>
          <span>客流舒适 游玩约需2-3小时</span>
        </div>
        <div class="card4">
          <van-icon name="location-o" />
          <div class="card4--center">
            <p>上海市浦东新区陆家嘴世纪大道1号</p>
            <p>乘坐地铁2号线到陆家嘴站下,步行372米可达</p>
          </div>
          <span></span>
        </div>
      </div>
    </div>
    <div class="text">
      上海海昌极地海洋公园,位于浦东新区南汇新城滴水湖畔,总占地面积约29.7公顷,总规划建筑面积约为19万平方米,
      包含12个展示场馆、4个大型海洋动物互动体验项目、3个特效影院以及15项大中型游乐设备。
    </div>
    <div class="pic_bottom">
      <img src="@/assets/img/qinghai/jing2_bottom.jpg" alt />
    </div>
    <div class="bottom">
      <div class="bottom_text">
        <div>
          <span class="text1">师生价&nbsp;</span>
          <span class="text2">100</span>
        </div>
        <div class="text3">原价180</div>
      </div>
      <div class="bottom_ticket">立刻预定</div>
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
.container {
  padding-bottom: 1rem;
}
.top_pic {
  position: relative;
  img {
    width: 100vw;
  }
}
.card {
  position: absolute;
  top: 70%;
  left: 3%;
  width: 94%;
  background: #fff;
  border-radius: 0.1rem;
  .card1 {
    font-size: 0.4rem;
    padding-left: 0.2rem;
    line-height: 0.9rem;
  }
  .card2 {
    padding-left: 0.2rem;
    font-size: 0.3rem;
    line-height: 0.7rem;
  }
  .card3 {
    padding-left: 0.2rem;
    line-height: 0.4rem;
    padding-bottom: 0.2rem;
    border-bottom: 1px solid #f2f2f2;
    span:first-child {
      display: inline-block;
      padding: 0.05rem 0.1rem;
      background: #f5a225;
      color: #fff;
      border-radius: 0.1rem;
      vertical-align: middle;
    }
    span:last-child {
      font-size: 0.3rem;
      color: #b8b8b8;
      padding-left: 0.2rem;
      display: inline-block;
      vertical-align: middle;
    }
  }
  .card4 {
    padding: 0.2rem 0;
    padding-left: 0.2rem;
    position: relative;
    i {
      font-size: 0.5rem;
      vertical-align: middle;
    }
    .card4--center {
      display: inline-block;
      vertical-align: middle;
      padding-left: 0.1rem;
      max-width: 80%;
    }
    .card4--center > p:first-child {
      font-size: 0.3rem;
      color: #383838;
    }
    .card4--center > p:last-child {
      font-size: 0.25rem;
      color: #bdbdbd;
      margin-top: 0.1rem;
    }
    span {
      position: absolute;
      display: inline-block;
      width: 0.5rem;
      height: 0.5rem;
      border-left: solid 2px #cfcfcf;
      border-top: solid 2px #cfcfcf;
      top: 40%;
      transform: rotate(135deg) scale(0.8) translateY(50%);
      right: 0.1rem;
    }
  }
}
.text {
  margin-top: 3rem;
  font-size: 0.3rem;
  padding-left: 0.3rem;
  line-height: 0.45rem;
  color: #858688;
}
.pic_bottom {
  img {
    width: 100vw;
  }
}
.bottom {
  position: fixed;
  bottom: 0;
  width: 100vw;
  overflow: hidden;
  background: #fff;
  .bottom_text {
    width: 65%;
    padding: 0.2rem;
    padding-left: 0.4rem;
    display: inline-block;
    vertical-align: top;
    .text1 {
      font-size: 0.3rem;
    }
    .text2 {
      font-size: 0.5rem;
      color: #1489f0;
      font-weight: bold;
    }
    .text2::before{
      content:'￥';
      font-size: 0.4rem;
    }
    .text3 {
      font-size: 0.3rem;
      text-decoration: line-through;
      margin-top: 0.1rem;
    }
  }
  .bottom_ticket {
    height: 1.5rem;
    display: inline-flex;
    width: 27%;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to right, #36b4fe, #008aff);
    color: #fff;
    font-size: 0.3rem;
  }
}
</style>