<template>
  <div class="chooseRoom">
    <div class="top_choose" @click="show = !show">
      <div class="choose_left">
        <div>
          <i class="iconfont icon-icon-test"></i>
        </div>
        <span>{{text}}</span>
      </div>
      <div class="choose_right" >
        <span class="choose_item" >{{select}}</span>
      </div>
    </div>

    <p class="room_title">{{title}}</p>
    <div class="room_content">
      <div
        v-for="(item,index) in roomData"
        :class="{room_item:true,active:index === active}"
        :key="index"
        @click="handleClick(item,index)"
      >
        <div class="img">
          <i class="iconfont icon-huiyishijiaoshi"></i>
        </div>
        <p>{{(item.classRoom || item.trainRoom || item.labsName ||item.trainPost )  + (item.isChecked?'(已巡视)':'')}}</p>
      </div>
    </div>
    <v-bottom-nav :value="true" absolute dark color="#4bbaf4">
      <p class="choose" @click="handleRouter">开始巡视</p>
    </v-bottom-nav>

    <van-popup v-model="show" position="bottom">
      <van-picker show-toolbar :columns="columns" @confirm="handleChoose" @cancel="show = false"/>
    </van-popup>
    <div class="text-xs-center"></div>
  </div>
</template>
<script>
import {setCookie, getCookie, delCookie} from "../../common/utils/cookie.js";
export default {
  name: "chooseRoom",
  data() {
    return {
      select: "请选择",
      picker: {},
      text: "请选择教学楼",
      title: "选择教室",
      url:"",
      detailUrl:"",
      checkedUrl:"",
      params:{},
      roomData: [
        { name: "1-101", isChecked: true },
        { name: "1-102", isChecked: true },
        { name: "1-103", isChecked: false },
        { name: "1-104", isChecked: false },
        { name: "1-105", isChecked: false },
        { name: "1-106", isChecked: false },
        { name: "1-107", isChecked: false },
        { name: "1-108", isChecked: false },
        { name: "1-110", isChecked: false },
      ],
      active: '',
      show: false,
      columns: ["1号教学楼", "2号教学楼", "3号教学楼", "4号教学楼", "5号教学楼"],
      date:"",
      name:"",
      time:""
    };
  },
  mounted() {
    this.select=unescape(getCookie('select'));
    this.initJudgeText();
    this.initColumns();
    this.initRoomData();
  },
  methods: {
    initJudgeText() {
      let str = unescape(sessionStorage.getItem("type"));
      if (str.includes("实训基地")) {
        this.text = "请选择实训基地";
        this.title = "选择实训室";
        this.url="/api/baseInfo/sysManageTrainBase/list";
        this.detailUrl="/api/baseInfo/sysManageTrainRoom/roomList";
        this.checkedUrl="/api/baseInfo/sysPatrolTrainBase/checked";
        this.params= {
          patrolDate:getCookie('date'),
          patrolTime:getCookie('active'),
          patrolMan:unescape(getCookie('name')),
          trainBase:this.select
        }
      }
      if (str.includes("实验楼教学巡视")) {
        this.text = "请选择实验楼";
        this.title = "选择实验室";
        this.url="/api/baseInfo/sysManageLabsBulid/list";
        this.detailUrl="/api/baseInfo/sysManageLabsRoom/labsList";
        this.checkedUrl="/api/baseInfo/sysPatrolLabs/checked";
        this.params= {
          patrolDate:getCookie('date'),
          patrolTime:getCookie('active'),
          patrolMan:unescape(getCookie('name')),
          labsBulid:this.select
        }
      } else if (str.includes("实训岗位巡视")) {
        this.text = "请选择实训基地";
        this.title = "选择实训岗位";
        this.url="/api/baseInfo/sysManageTrainBase/list";
        this.detailUrl="/api/baseInfo/sysManageTrainPost/postList";
        this.checkedUrl="/api/baseInfo/sysPatrolTrainPost/checked";
        this.params= {
          patrolDate:getCookie('date'),
          patrolTime:getCookie('active'),
          patrolMan:unescape(getCookie('name')),
          trainBase:this.select
        }
      }else if (str.includes("教师量化考核巡视")){
        this.url="/api/baseInfo/sysManageTeachBulid/list"
        this.detailUrl="/api/baseInfo/sysManageClassRoom/roomList";
        this.checkedUrl="/api/baseInfo/sysPatrolTeacher/checked";
        this.params= {
          patrolDate:getCookie('date'),
          patrolTime:getCookie('active'),
          patrolMan:unescape(getCookie('name')),
          teachBulid:this.select
        }
      }
    },
    initActive() {
      // let arr = JSON.parse(JSON.stringify(this.roomData));
      // arr.reverse().forEach((item, index) => {
      //   if (!item.isChecked) {
      //     this.active = arr.length - index - 1;
      //   }
      // });
      
    },
    initColumns(){
      this.columns=[];
      this.$HTTP.api({
        url: this.url,
        method: "POST",
        params: {},
        successCallback: function(result) {
          if (result.code == "0") {
            if(this.text=="请选择实训基地"){
                for(var i=0;i<result.data.list.length;i++){
                  this.columns.push(result.data.list[i].trainBaseName);
                }
              }else if (this.text=="请选择实验楼"){
                for(var i=0;i<result.data.list.length;i++){
                  this.columns.push(result.data.list[i].labsBulidName);
                }
              }else {
                for(var i=0;i<result.data.list.length;i++){
                  this.columns.push(result.data.list[i].teachBulidName);
                }
              }
          }
        }.bind(this)
      });
    },
    initRoomData(){
      this.roomData=[];
      this.$HTTP.api({
        url: this.detailUrl,
        method: "POST",
        params: {
          select:this.select
        },
        successCallback: function(result) {
          if (result.code == "0") {
            console.log(result);
           for(var i=0;i<result.data.list.length;i++){
             this.roomData.push(result.data.list[i]);
           }
           this.initChecked();
          }
        }.bind(this)
      });
    },
    initChecked(){
      this.initJudgeText();
      this.$HTTP.api({
        url: this.checkedUrl,
        method: "POST",
        params: this.params,
        successCallback: function(result) {
          if (result.code == "0") {
            if(this.title==="选择教室"){
            let checkedRoom = result.data.map(item=>item.classRoom)
            if(!checkedRoom.length) return;
              this.roomData.forEach((item,index,arr)=>{
                if(checkedRoom.includes(item.classRoom)){
                  this.$set(arr[index],'isChecked',true)
                }
              })
            }else if(this.title==="选择实训室"){
              let checkedRoom = result.data.map(item=>item.trainRoom)
              if(!checkedRoom.length) return;
              console.log(this.title);
              this.roomData.forEach((item,index,arr)=>{
                if(checkedRoom.includes(item.trainRoom)){
                  this.$set(arr[index],'isChecked',true)
                }
              })
            }else if(this.title==="选择实验室"){
              let checkedRoom = result.data.map(item=>item.labsRoom)
              if(!checkedRoom.length) return;
              this.roomData.forEach((item,index,arr)=>{
                if(checkedRoom.includes(item.labsName)){
                  this.$set(arr[index],'isChecked',true)
                }
              })
            }else {
              let checkedRoom = result.data.map(item=>item.trainPost)
              if(!checkedRoom.length) return;
              console.log(this.title);
              this.roomData.forEach((item,index,arr)=>{
                if(checkedRoom.includes(item.trainPost)){
                  this.$set(arr[index],'isChecked',true)
                }
              })
            }
          }
        }.bind(this)
      });
    },
    handleChoose(value, index) {
      this.select = value;
      this.show = false;
      this.initRoomData();
    },
    handleRouter() {
      if(typeof this.active === 'string'){
        return this.$toast('请选择场所')
      }
      if (this.roomData[this.active]) {
        sessionStorage.setItem("room", this.roomData[this.active].name);
        let str = unescape(sessionStorage.getItem("type")),
          obj = {
            教师量化考核巡视: "/im/inspectRoom1",
            实训基地巡视: "/im/inspectRoom2",
            实验楼教学巡视: "/im/inspectRoom3",
            实训岗位巡视: "/im/inspectRoom2"
          };
        setCookie('str',str);
        setCookie( 'select' ,this.select);
        this.$router.push({ path: obj[str] });
      } else {
        this.$toast("请选择巡查教室");
      }
    },
    handleClick(item, index) {
      if (item.isChecked) {
        this.$toast("此教学已巡视完成");
      } else {
        this.active = index;
        setCookie( 'item' , (item.classRoom || item.trainRoom || item.labsName ||item.trainPost ));
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.chooseRoom {
  padding-bottom: 1rem;
}
.top_choose {
  display: flex;
  justify-content: space-between;
  padding: 0 0.3rem;
  font-size: 0.3rem;
  line-height: 0.9rem;
  background:#fff;
  .choose_left {
    display: flex;
    align-items: center;
    div {
      width: 0.8rem;
      display: inline-block;
      position: relative;
      i {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
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
.room_title {
  font-size: 0.3rem;
  line-height: 0.9rem;
  margin: 0;
  padding-left: 0.3rem;
}
.room_content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.room_item {
  box-sizing: border-box;
  width: 2rem;
  height: 1rem;
  border: solid 1px;
  text-align: center;
  margin-bottom: 0.2rem;
  color: #4bbaf4;
  .img {
    display: inline-block;
    width: 2rem;
    height: 0.5rem;
    text-align: center;
    // img {
    //   height: 100%;
    // }
    i{
      font-size: 0.5rem;
    }
  }
  p {
    font-size: 0.2rem;
    line-height: 0.3rem;
    margin: 0;
  }
}
.room_item.active {
  background: #4bbaf4;
  p , i{
    color: #fff;
  }
}
.choose {
  color: #fff;
  text-align: center;
  font-size: 0.3rem;
  margin: 0;
  line-height: 0.9rem;
}

.v-bottom-nav {
  height: auto !important;
}
</style>

