<template>
  <div class="content_wrapper">
    <div class="time_wrapper">
      <v-date-picker
        v-model="date"
        class="mt-3"
        locale="zh-cn"
        :show-current="currentDate"
        full-width
        @change="handleChooseDate"
        header-color="rgb(75,186,244)"
      ></v-date-picker>
    </div>
    <div class="top_choose" @click="show = true;">
      <div class="choose_left">
        <div>
          <i class="iconfont icon-icon-test"></i>
        </div>
        <span>教学身份</span>
      </div>
      <div class="choose_right">
        <span class="choose_item">{{identity}}</span>
      </div>
    </div>
    <div class="content">
      <div class="list" v-for="(list,index) in listData" :key="index">
        <p class="list_item">
          <span class="item_name">授课班级：</span>
          <span>{{list.teachClass}}</span>
        </p>
        <p class="list_item special">
          <span class="item_name">上课地点：</span>
          <span>{{list.teachAddr}}</span>
          <span class="special_name">状态 : {{list.statu==='1'?'已考勤':'未考勤'}}</span>
        </p>
        <p class="list_item">
          <span class="item_name">课程名称：</span>
          <span>{{list.teachCourse}}</span>
        </p>
        <p class="list_item">
          <span class="item_name">授课教师：</span>
          <span>{{list.teacher}}</span>
        </p>
        <p class="list_item">
          <span class="item_name">具体时间：</span>
          <span>{{list.teachTime}}</span>
        </p>
        <div
          :class="['list_btn',list.statu==='1'?'btn--done':'']"
          @click="handleAttendance(list)"
        >{{list.statu === '1'?'已考勤':'开始考勤'}}</div>
      </div>
    </div>
    <van-popup v-model="show" position="bottom">
      <van-picker show-toolbar :columns="columns2" @confirm="handleChoose" @cancel="show = false" />
    </van-popup>
  </div>
</template>
<script>
import { setCookie, getCookie, delCookie } from "../../common/utils/cookie.js";
export default {
  name: "techingAttendance",
  data() {
    return {
      date: "",
      currentDate: new Date().Format("yyyy-MM-dd"),
      params: {},
      listData: [],
      show:false,
      columns2:['班主任','教师'],
      identity:'班主任'
    };
  },
  mounted() {
    //this.initMassage();
  },
  methods: {
    handleChoose(item){
      this.identity = item;
      this.show = false;
    },
    handleChooseDate(date) {
      this.listData = [];
      this.$HTTP.api({
        url: "/api/baseInfo/sysManageTeachPlan/planList",
        method: "POST",
        params: {
          teachDate: this.date,
          teacher: localStorage.name
        },
        successCallback: function(result) {
          if (result.code == "0") {
            for (var i = 0; i < result.data.length; i++) {
              this.listData.push(result.data[i]);
              console.log(this.listData);
            }
          }
        }.bind(this)
      });
    },
    handleAttendance(info) {
      if (info.statu === "1") {
        this.$toast("已考勤");
        setCookie("statu", "1");
      } else {
        setCookie("statu", "0");
      }
      setCookie("teachDate", this.date);
      setCookie("teachClass", info.teachClass);
      setCookie("teachAddr", info.teachAddr);
      setCookie("teachCourse", info.teachCourse);
      setCookie("teacher", info.teacher);
      setCookie("teachTime", info.teachTime);
      this.$router.push({ path: "/im/myAttendance" });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~@/assets/style/common.scss";
.content_wrapper {
  padding-bottom: 0.5rem;
}
.time_wrapper {
  width: 6.9rem;
  margin: 0.2rem auto;
}
.content {
  font-size: 0.2rem;
  .list {
    padding: 0.1rem 0.4rem;
    margin-top: 0.2rem;
    background: #fff;
    .list_item {
      margin: 0;
      line-height: 0.4rem;
      padding-right: 6em;
      .special_name {
        position: absolute;
        top: 0;
        right: 0;
        color: #4bbaf5;
      }
    }
    .list_item.special {
      position: relative;
    }
    .list_btn {
      text-align: center;
      width: 60%;
      margin: 0.2rem auto;
      background: #4bbaf4;
      color: #fff;
      line-height: 0.5rem;
      border-radius: 0.1rem;
    }
    .list_btn.btn--done {
      background: #00cd00;
    }
  }
}
</style>
