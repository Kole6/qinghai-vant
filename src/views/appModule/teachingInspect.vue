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
    <v-bottom-nav :value="true" absolute dark color="#fff">
      <!-- <v-btn light>
      </v-btn>-->
      <p class="bottom_content" @click="handleRouter('/im/statisticsData','查看统计')">
        <!-- <img :src="require('../../assets/img/statistics.jpg')" alt> -->
        <i class="iconfont icon-tongji1"></i>
        <span>查看统计</span>
      </p>
    </v-bottom-nav>
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
          text: "教师量化考核巡视",
          path:'/im/inspectionInfo',
        },
        {
          icon: "icon-jidi",
          img: require("../../assets/img/icon_2.jpg"),
          text: "实训基地巡视",
          path:'/im/inspectionInfo',
        },
        {
          icon: "icon-shiyan",
          img: require("../../assets/img/icon_3.jpg"),
          text: "实验楼教学巡视",
          path:'/im/inspectionInfo',
        },
        {
          icon: "icon-shixunzhongxin",
          img: require("../../assets/img/icon_4.jpg"),
          text: "实训岗位巡视",
          path:'/im/inspectionInfo',
        },
        {
          icon: "icon-xunjian",
          img: require("../../assets/img/icon_4.jpg"),
          text: "理论课巡视统计",
          path:'/im/inspectionStatistics',
        },
        {
          icon: "icon-xunjian1",
          img: require("../../assets/img/icon_4.jpg"),
          text: "实训课巡视统计",
          path:'/im/inspectionStatistics',
        },
      ]
    };
  },
  methods: {
    handleRouter(pathName, itemName) {
      if(itemName === '理论课巡视统计'){
        sessionStorage.setItem('inspectType','1')
      }else if(itemName === '实训课巡视统计'){
        sessionStorage.setItem('inspectType','2')
      }
      sessionStorage.setItem("type", escape(itemName));
      let obj = {
        [this.dataList[0].text]:'选择教学楼',
        [this.dataList[1].text]:'选择实训基地',
        [this.dataList[2].text]:'选择实验楼',
        [this.dataList[3].text]:'选择实训基地',
      }
      setCookie('select',obj[itemName]);
      
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
