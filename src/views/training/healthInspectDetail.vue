<template>
  <div class="maintain">
    <div class="radio_content">
      <div class="radio_type" v-for="(item,index) in dataArr" :key="index">
        <span>{{item.name}}</span>
        <van-radio-group v-model="item.value">
          <van-radio name="1">合格</van-radio>
          <van-radio name="0">不合格</van-radio>
        </van-radio-group>
      </div>
    </div>
    <v-bottom-nav :value="true" absolute dark color="#4bbaf4">
      <p class="choose" @click="handleConfirm">提交</p>
    </v-bottom-nav>
  </div>
</template>
<script>
export default {
  name: "healthInspectDetail",
  data() {
    return {
      currentEdit: "",
      dataArr:[
          {
              name:'照明灯关闭',
              value:'1'
          },
          {
              name:'空调关闭',
              value:'1'
          },
          {
              name:'门、窗关闭',
              value:'1'
          },
          {
              name:'无实训室无关物品',
              value:'1'
          },
          {
              name:'中控多媒体归位、关闭',
              value:'1'
          },
          {
              name:'中控多媒体干净、无尘',
              value:'1'
          },
          {
              name:'教学用具、桌椅归位',
              value:'1'
          },
          {
              name:'白板桌椅干净、无污渍',
              value:'1'
          },
          {
              name:'地面干净、无尘、无污渍',
              value:'1'
          },
          {
              name:'实训设备电源关闭',
              value:'1'
          },
          {
              name:'实训设备设施归位',
              value:'1'
          },
          {
              name:'电脑设备干净无尘',
              value:'1'
          },
          {
              name:'实训文件等资料归位',
              value:'1'
          },
          {
              name:'卫生工具归位',
              value:'1'
          },
          {
              name:'卫生工具干净无污渍',
              value:'1'
          },
          {
              name:'垃圾桶套垃圾袋',
              value:'1'
          },
      ]
    };
  },
  methods: {
    handleConfirm() {}
  }
};
</script>
<style lang="scss" scoped>
@import "~@/assets/style/common.scss";
.v-bottom-nav{
    position: fixed;
    bottom: 0;
}
</style>

<style scoped>
.radio_type >>> .van-radio-group {
  display: flex;
  justify-content: space-around;
  width: calc(100% - 120px);
}
</style>
