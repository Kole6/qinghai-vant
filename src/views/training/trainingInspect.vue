<!--教学巡查-->
<template>
  <div class="teachingInspect">
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex xs6 sm6 md6 v-for="(item,index) in dataList" :key="index">
          <v-card
            color="darken-2"
            class="white--text card_item"
            @click="handleRouter(item.path,item.text)"
          >
            <p class="img_icon">
              <i :class="['iconfont',item.icon]"></i>
              <!-- <img :src="item.img" alt> -->
            </p>
            <p class="text">{{item.text}}</p>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <!-- <v-bottom-nav :value="true" absolute dark color="#fff">
      <p class="bottom_content" @click="handleRouter('/im/trainingStatistics','查看统计')">
        <i class="iconfont icon-tongji1"></i>
        <span>查看统计</span>
      </p>
    </v-bottom-nav> -->
  </div>
</template>
<script>
import {setCookie, getCookie, delCookie} from "../../common/utils/cookie.js";
export default {
  data() {
    return {
      dataList: [
        {
          icon: "icon-icon-test",
          img: require("../../assets/img/icon_1.jpg"),
          text: "卫生巡查",
          path:'/im/healthInspect',
        },
        {
          icon: "icon-jidi",
          img: require("../../assets/img/icon_2.jpg"),
          text: "资产清查",
          path:'/im/assetsInspect',
        },
      ]
    };
  },
  methods: {
    handleRouter(pathName, itemName) {
      this.$router.push({ path: pathName });
    }
  }
};
</script>
<style lang='scss' scoped>
.container > .layout > .flex {
  padding: 0.2rem;
}
.teachingInspect {
  padding-bottom: 1rem;
}
.card_item {
  height: 1.6rem;
  .img_icon {
    text-align: center;
    margin: 0;
    i {
      font-size: 0.7rem;
      color: #4bbaf4;
    }
  }
  .text {
    margin: 0;
    color: black;
    font-size: 0.2rem;
    text-align: center;
  }
}
.v-bottom-nav {
  height: 1rem !important;
}
.bottom_content {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  i {
    font-size: 0.4rem;
    color: #4bbaf4;
    margin-right: 0.1rem;
  }
}
</style>
<style>
.v-content__wrap {
  background: rgb(243, 243, 243);
}
</style>
