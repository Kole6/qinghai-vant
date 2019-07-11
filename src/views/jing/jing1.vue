<!---->
<template>
  <div>
    <div class="header">
      <div class="head_left">地区</div>
      <div class="shu"></div>
      <div class="head_right">价格</div>
    </div>
    <div class="fen-flex">
      <div class="fen" v-for="(item,index) in dataArr" :key="index" @click="handleRouter">
        <img :src="item.pic" />
        <div class="fen_1">
          <span>师生价&nbsp;</span>
          <span class="money">{{item.price}}</span>
        </div>
        <div class="fen_2">{{item.origin}}</div>
        <div class="fen_3">{{item.desc}}</div>
      </div>
      <!-- <div class="fen"></div>
      <div class="fen"></div>
      <div class="fen"></div>-->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataArr:[
        {
          pic:require('@/assets/img/qinghai/1_01.jpg'),
          price:'100',
          origin:'原价：￥200',
          desc:'尼莫海豚馆/椰风海景门票'
        },
        {
          pic:require('@/assets/img/qinghai/1_01.jpg'),
          price:'100',
          origin:'原价：￥200',
          desc:'尼莫海豚馆/椰风海景门票'
        },
        {
          pic:require('@/assets/img/qinghai/1_01.jpg'),
          price:'100',
          origin:'原价：￥200',
          desc:'尼莫海豚馆/椰风海景门票'
        },
      ]
    };
  },
  methods: {
    handleRouter(){
      this.$router.push({path:'/jing2'})
    }
  }
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
  background: #fcfdff;
}

.fen {
  width: 3.3rem;
  // height: 3.8rem;
  border-radius: 0.05rem;
  background-color: #fff;
  margin-top: 0.3rem;
  margin-left: 0.2rem;
  margin-right: 0.2rem;
  box-shadow: 0 5px 5px grey;
}
.fen img {
  width: 3.3rem;
  height: 2.1rem;
}
.fen_1 {
  font-size: 0.3rem;
  margin-top: 0.2rem;
  padding-left: 0.2rem;
  span:first-child {
    color: #515151;
  }
  span:last-child {
    font-size: 0.5rem;
    color: #138aef;
    font-weight: bold;
  }
  span:last-child::before{
    content:'￥';
    font-size:0.3rem;
    color: #138aef;
    font-weight: bold;
  }
}
.fen_2 {
  font-size: 0.25rem;
  line-height: 0.4rem;
  text-decoration: line-through;
  color: #3f3f3f;
  padding-left: 0.2rem;
}
.fen_3 {
  font-size: 0.25rem;
  line-height: 0.8rem;
  color: #606060;
  padding-left: 0.2rem;
}
</style>