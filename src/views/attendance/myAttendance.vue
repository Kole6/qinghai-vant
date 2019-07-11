<template>
  <div class="content_wrapper">
    <div class="top">
      <div class="top_left">
        <p class="item">
          <span>班主任:</span>
          <span>{{!!personData[0] && personData[0].headmaster}}</span>
        </p>
        <p class="item">
          <span>手机号:</span>
          <span></span>
        </p>
        <p class="item">
          <span>学生人数:</span>
          <span>{{this.personData.length}}人</span>
        </p>
      </div>
      <div class="top_right">
        <div class="btn" @click="handleAll">{{this.submitAll}}</div>
      </div>
    </div>
    <p class="tips">默认学生为到课，未到课学生请选择原因</p>
    <div class="remark">
      <van-collapse v-model="activeName" accordion>
        <van-collapse-item title="备注" name="1">
          <div class="remark_content">
          <p>到课：学生按规定时间在教室或实训基地上课。</p>
          <p>事假：学生因个人私事请假不上课即为事假。</p>
          <p>病假：学生因生病请假不上课即为病假。</p>
          <p>迟到：在上课铃声响后进入教室即为迟到。</p>
          <p>旷课：学生未经请假或请假未准而不上课即为旷课。</p>
          <p>早退：在下课铃声响前离开教室即为早退。</p>
          <p>参加学生社团：学生因公参加社团活动不上课，由相关部门出具证明。</p>
          <p>参加学生组织：学生因公参加学生组织工作或活动不上课，由相关部门出具证明。</p>
          <p>参加技能比赛培训：学生因公参加学校组织技能比赛培训不上课，由相关部门出具证明。</p>
          </div>
        </van-collapse-item>
      </van-collapse>
    </div>
    <div class="content">
      <div class="content_list" v-for="(item,index) in personData" :key="index" @click="handleClick(item)">
        <div class="list_left">
          <span>{{item.stuNo +'&nbsp;'+item.stuName}}</span>
        </div>
        <div class="list_right" >
          <span class="choose_item">{{item.attenceDetail}}</span>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="btn" @click="handleSubmit">{{this.submit}}</div>
    </div>
    <van-popup v-model="show" position="bottom" get-container="#app">
      <!-- 显示当前选择状态值的对象名称 -->
      <!-- <p>{{activeId}}</p> -->
      <van-picker
        show-toolbar
        :columns="classStatus"
        @confirm="handleChoose"
        @cancel="show = false"
        :visible-item-count="9"
      />
    </van-popup>
  </div>
</template>
<script>
import {setCookie, getCookie, delCookie} from "../../common/utils/cookie.js";
export default {
  name: "myAttendance",
  data() {
    return {
      personData: [],
      params:{},
      classStatus: [
        "到课",
        "事假",
        "病假",
        "迟到",
        "旷课",
        "早退",
        "缺课",
        "参加学生社团",
        "参加学生组织",
        "参加技能比赛培训"
      ],
      show: false,
      submit:"提交",
      submitAll:"全勤提交",
      activeId: "",
      url:"/api/baseInfo/sysManageTeachPlan/stuList",
      params:{
              teachClass:unescape(getCookie('teachClass'))
             },
      activeName:'',
    };
  },
  mounted() {
    this.initButton();
    this.initData();
  },
  methods: {
    initButton(){
      if(unescape(getCookie('statu'))==='1'){
        this.submit="修改提交",
        this.submitAll="全勤修改"
        this.url="/api/baseInfo/sysStuAttends/attendsList"
        this.params={
          attenceDate:getCookie('teachDate'),
          teachTime:unescape(getCookie('teachTime')),
          className:unescape(getCookie('teachClass')),
          teacher:unescape(getCookie('teacher'))
        }
      }
    },
    initData(){
       this.personData=[];
       this.$HTTP.api({
        url: this.url,
        method: "POST",
        params: this.params,
        successCallback: function(result) {
          if (result.code == "0") {
            if(unescape(getCookie('statu'))==='0'){
              result.data.forEach(item=>{
              item.attenceDetail = '到课'
             })
            }
             for(var i=0;i<result.data.length;i++){
               this.personData.push(result.data[i]);
           }
           console.log(result)
          }
        }.bind(this)
      });
    },
    handleSubmit() {
      let params = {
        teachClass:unescape(getCookie('teachClass')),
        teachDate :getCookie('teachDate'),
        teachCourse:unescape(getCookie('teachCourse')),
        teacher:unescape(getCookie('teacher')),
        teachTime:unescape(getCookie('teachTime')),
        stuInfo:this.personData
      }
      console.log(params)
      this.$HTTP.api({
        url: "/api/baseInfo/sysStuAttends/submit",
        method: "POST",
        params:params,
        successCallback: function(result) {
          if (result.code == "0") {
           console.log(this.result)
          }
        }.bind(this)
      });
      this.$toast("提交");
      this.$router.push({path:'/im/techingAttendance'})
    },
    handleAll() {
      let params = {
        teachClass:unescape(getCookie('teachClass')),
        teachDate :getCookie('teachDate'),
        teachCourse:unescape(getCookie('teachCourse')),
        teacher:unescape(getCookie('teacher')),
        teachTime:unescape(getCookie('teachTime')),
        attenceDetail:"到课",
        stuInfo:this.personData
      }
      console.log(params)
      this.$HTTP.api({
        url: "/api/baseInfo/sysStuAttends/submitAll",
        method: "POST",
        params:params,
        successCallback: function(result) {
          if (result.code == "0") {
           console.log(this.result)
          }
        }.bind(this)
      });
      this.$toast("全勤");
      this.$router.push({path:'/im/techingAttendance'})
    },
    handleChoose(itemName) {
      this.show = false;
      this.personData.forEach((item, index) => {
        if (item.stuNo === this.activeId) {
          this.$set(this.personData[index], "attenceDetail", itemName);
        }
      });
    },
    handleClick(item) {
      this.activeId = item.stuNo;
      this.show = true;
    }
  }
};
</script>
<style lang="scss" scoped>
.top {
  background: #fff;
  margin: 0.3rem 0.4rem;
  padding: 0.2rem 0.5rem;
  border-radius: 0.1rem;
  display: flex;
  .top_left {
    width: 60%;
    .item {
      margin: 0;
      font-size: 0.2rem;
      line-height: 0.5rem;
    }
  }
  .top_right {
    width: 40%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    .btn {
      text-align: center;
      width: 2rem;
      color: #fff;
      font-size: 0.2rem;
      line-height: 0.5rem;
      background: #4bbaf4;
      border-radius: 0.1rem;
    }
  }
}
.tips {
  font-size: 0.2rem;
  padding-left: 0.4rem;
  color: #797979;
}
.content{
  padding-bottom: 0.9rem;
}
.bottom {
  position: fixed;
  bottom: 0;
  padding: 0.2rem 0;
  width: 100%;
  background: #fff;
  .btn {
    color: #fff;
    font-size: 0.2rem;
    line-height: 0.5rem;
    margin: 0 auto;
    text-align: center;
    border-radius: 0.1rem;
    width: 4rem;
    background: #4bbaf4;
  }
}
.content_list {
  display: flex;
  justify-content: space-between;
  padding: 0 0.4rem;
  font-size: 0.3rem;
  line-height: 0.9rem;
  //   border-bottom: solid 1px gray;
  background: #fff;
  .list_left {
    display: flex;
    align-items: center;
    color: #4bbaf4;
  }
  .list_right {
    color: #7a7a7a;
    .choose_item {
      font-size: 0.3rem;
      line-height: 0.9rem;
      display: inline-block;
    }
  }
  .list_right:after {
    content: "";
    display: inline-block;
    width: 0.2rem;
    height: 0.2rem;
    transform: rotate(45deg);
    margin-left: 0.2rem;
    border-top: solid 2px gray;
    border-right: solid 2px gray;
  }
}
.remark_content{
  font-size: 0.3rem;
}
</style>
<style scoped>
.remark >>> .van-cell--clickable{
      justify-content: flex-start;
      background: rgb(243, 243, 243);
      padding-top: 0;
      padding-bottom: 0;
      font-size: 0.2rem;
      padding-left: 0.4rem;
      color: #797979;
}
</style>
