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
    <div class="inspect_person" @click="showDialog">
      <div class="inspect_left">
        <i class="iconfont icon-icon-test"></i>
        <span>地点</span>
      </div>
      <div class="inspect_right" >
          <span class="choose_item">{{building}}</span>
        </div>
    </div>
    <div class="inspect_person">
      <div class="inspect_left">
        <i class="iconfont icon-weibiaoti-_huabanfuben"></i>
        <span>巡视人</span>
      </div>
      <div class="inspect_right not_arrow" >{{name}}</div>
    </div>
    <p class="detail_title">课时</p>
    <div class="detail_time">
      <div
        v-for="(item,index) in ['第一、二节','第三、四节','第五、六节']"
        :class="{list:true,'active':active === index}"
        @click="active=index"
        :key="index"
      >{{item}}</div>
    </div>
    <v-bottom-nav :value="true" absolute dark color="#4bbaf4">
      <p class="choose" @click="handleRouter">查看详细统计</p>
    </v-bottom-nav>

    <van-popup v-model="show" position="bottom" :lock-scroll="false">
        <van-picker show-toolbar :columns="columns" @confirm="handleChoose" @cancel="show = false"/>
    </van-popup>
  </div>
</template>
<script>
import {setCookie, getCookie, delCookie} from "../../common/utils/cookie.js";
export default {
  name: "inspectionStatistics",
  data() {
    return {
      name:localStorage.name,
      date: "",
      active: 0,
      currentDate: new Date().Format("yyyy-MM-dd"),
      show:false,
      columns:[
        "1号教学楼",
        "2号教学楼",
        "3号教学楼",
        "4号教学楼",
        "5号教学楼"],
      building:'1号教学楼',
      offsetY:0,
      type:'',
    };
  },
  mounted(){
    this.type = sessionStorage.getItem('inspectType')
    this.initType();
    this.initData();
  },
  methods: {
      showDialog(){
          this.offsetY = window.pageYOffset;
          this.show = true;
      },
    handleChoose(value){
        this.show = false;
        this.building= value;
        console.log(this.offsetY)
        this.$nextTick(()=>{
            // window.scrollTo(0,this.offsetY)
        })
    },
    allowedDates(time){
      return new Date().getTime() > new Date(time).getTime();
    },
    initType(){
    //   let str = unescape(sessionStorage.getItem("type"));
    },
    initData(){
      this.columns=[];
      if(this.type==='1'){
      this.$HTTP.api({
        url: "/api/baseInfo/sysManageTeachBulid/list",
        method: "POST",
        params: {},
        successCallback: function(result) {
          if (result.code == "0") {
              for(var i=0;i<result.data.list.length;i++){
                this.columns.push(result.data.list[i].teachBulidName);
              }
          }
        }.bind(this)
      });
      }else {
        this.$HTTP.api({
        url: "/api/baseInfo/sysManageTrainBase/list",
        method: "POST",
        params: {},
        successCallback: function(result) {
          if (result.code == "0") {
              for(var i=0;i<result.data.list.length;i++){
                this.columns.push(result.data.list[i].trainBaseName);
              }
          }
         }.bind(this)
       });
       this.$HTTP.api({
        url: "/api/baseInfo/sysManageLabsBulid/list",
        method: "POST",
        params: {},
        successCallback: function(result) {
          if (result.code == "0") {
              for(var i=0;i<result.data.list.length;i++){
                this.columns.push(result.data.list[i].labsBulidName);
              }
          }
         }.bind(this)
       });
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
       setCookie( 'building' , this.building);
      this.$router.push({ path: "/im/inspectionDetail"});
    },
  }
};
</script>
<style lang="scss" scoped>
.inspectionInfo {
  background: rgb(243, 243, 243);
  padding-bottom: 1.2rem;
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
      margin-right: 0.2rem;
    }
  }
.inspect_right {
    color: #7a7a7a;
    .choose_item {
      font-size: 0.3rem;
      line-height: 0.9rem;
      display: inline-block;
    }
  }
  .inspect_right:not(.not_arrow):after {
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
.top_choose {
  display: flex;
  justify-content: space-between;
  padding: 0 0.3rem;
  font-size: 0.3rem;
  line-height: 0.9rem;
  background: #fff;
  .choose_left {
    display: flex;
    align-items: center;
    div{
        width: 0.8rem;
        display: inline-block;
        position: relative;
        i{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            font-size: 0.4rem;
            color: #4bbaf4;
        }
    }
  }
  .choose_right {
    color: #7a7a7a;
    .choose_item {
      font-size: 0.3rem;
      line-height: 0.9rem;
      display: inline-block;
    }
  }
  .choose_right:after {
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
</style>
