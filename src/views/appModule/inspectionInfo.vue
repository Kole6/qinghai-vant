<template>
  <div class="inspectionInfo">
    <div class="time_wrapper">
      <v-date-picker
        v-model="date"
        class="mt-3"
        locale="zh-cn"
        :show-current="currentDate"
        :allowed-dates="allowedDates"
        full-width
        header-color="rgb(75,186,244)"
      ></v-date-picker>
    </div>
    <p class="detail_title">具体时间</p>
    <div class="detail_time">
      <div
        v-for="(item,index) in ['第一、二节','第三、四节','第五、六节']"
        :class="{list:true,'active':active === index}"
        @click="active=index"
        :key="index"
      >{{item}}</div>
    </div>
    <div class="inspect_person">
      <div class="inspect_left">
        <i class="iconfont icon-laoshi"></i>
        <span>巡视人</span>
      </div>
      <div class="inspect_right" >{{name}}</div>
    </div>
    <v-bottom-nav :value="true" absolute dark color="#4bbaf4">
      <p class="choose" @click="handleRouter">{{next}}</p>
    </v-bottom-nav>
  </div>
</template>
<script>
import {setCookie, getCookie, delCookie} from "../../common/utils/cookie.js";
export default {
  name: "inspectionInfo",
  data() {
    return {
      name:localStorage.name,
      next:"选择教室",
      date: "",
      active: 0,
      currentDate: new Date().Format("yyyy-MM-dd")
    };
  },
  mounted(){
    this.initNext();
  },
  methods: {
    allowedDates(time){
      return new Date().getTime() > new Date(time).getTime();
    },
    initNext(){
      let str = unescape(sessionStorage.getItem("type"));
      if (str.includes("实训基地")) {
        this.next = "选择实训室";
      }
      if (str.includes("实验楼教学巡视")) {
        this.next = "选择实验室";
      } else if (str.includes("实训岗位巡视")) {
        this.next = "选择实训岗位";
      }else if (str.includes("教师量化考核巡视")){
        this.next = "选择教室";
      }
    },
    handleRouter() {
      if (!this.date) {
        this.$toast("请选择日期!");
        return;
      }
       setCookie( 'active' , this.active);
       setCookie( 'date' , this.date);
       setCookie( 'name' , this.name);
      this.$router.push({ path: "/im/chooseRoom"});
    }
  }
};
</script>
<style lang="scss" scoped>
.inspectionInfo {
  background: rgb(243, 243, 243);
  padding-bottom: 0.9rem;
}
.time_wrapper {
  width: 6.9rem;
  margin: 0.2rem auto;
}
.detail_title {
  padding-left: 0.3rem;
  font-size: 0.3rem;
}
.detail_time {
  display: flex;
  justify-content: space-around;
  font-size: 0.2rem;
  color: rgb(75, 186, 244);
  line-height: 0.8rem;
  .list {
    padding: 0 0.5rem;
    border: solid 1px;
  }
  .list.active {
    color: white;
    background: rgb(75, 186, 244);
  }
}
.inspect_person {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.3rem;
  font-size: 0.3rem;
  line-height: 0.9rem;
  margin: 0.3rem 0;
  background: #fff;
  .inspect_left {
    display: flex;
    align-items: center;
    i {
      font-size: 0.5rem;
      color: #4bbaf4;
    }
  }
}
.choose {
  text-align: center;
  color: #fff;
  line-height: 0.3rem;
  line-height: 0.9rem;
  margin: 0;
}

.v-bottom-nav {
  height: auto !important;
}
</style>
