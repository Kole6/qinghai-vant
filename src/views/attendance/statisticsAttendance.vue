<template>
  <div class="content_wrapper">
    <div class="time_wrapper">
      <v-date-picker
        v-model="date"
        class="mt-3"
        locale="zh-cn"
        :show-current="currentDate"
        full-width
        @change="attendance"
        header-color="rgb(75,186,244)"
      ></v-date-picker>
    </div>
    <div class="top_choose" @click="handleClick(1)">
      <div class="choose_left">
        <div>
          <i class="iconfont icon-icon-test"></i>
        </div>
        <span>班级选择</span>
      </div>
      <div class="choose_right" >
        <span class="choose_item">{{select1}}</span>
      </div>
    </div>
    <div class="top_choose" @click="handleClick(2)">
      <div class="choose_left">
        <div>
          <i class="iconfont icon-icon-test"></i>
        </div>
        <span>时间段</span>
      </div>
      <div class="choose_right" >
        <span class="choose_item">{{select2}}</span>
      </div>
    </div>
    <div class="progress_detail">
        <v-container grid-list-md text-xs-center>
            <v-layout row wrap>
                <v-flex xs6 class="detail_item" 
                v-for="(item,index) in progressData" 
                :key="index">
                    <p class="progress_title">{{item.attendsDetail}}</p>
                    <div class="progress">
                        <van-progress
                            :percentage="calcNumber(item.num)"
                            pivot-text=" "
                            pivot-color="#FECD09"
                            color="#FECD09"
                            />
                    </div>
                    <p class="number">{{item.num}}</p>
                </v-flex>
            </v-layout>
        </v-container>
        <div>
        </div>
    </div>
    <div class="bottom">
      <div class="btn" @click="handleDetail">查看明细</div>
    </div>
      <van-popup v-model="show" position="bottom">
        <template v-if="active === 2">
        <van-picker show-toolbar :columns="columns" @confirm="handleChoose" @cancel="show = false"/>
        </template>
        <template v-if="active === 1">
        <van-picker show-toolbar :columns="columns1" @confirm="handleChoose" @cancel="show = false"/>
        </template>
      </van-popup>
  </div>
</template>
<script>
export default {
  name: "statisticsAttendance",
  data() {
    return {
      date: "",
      currentDate: new Date().Format("yyyy-MM-dd"),
      select1: "请选择班级",
      select2:'请选择时间段',
      show: false,
      columns:['第一、二节','第三、四节','第五、六节'],
      columns1:[],
      active:'',
      sum:0,
      progressData:[
          {
              label:'到课',
              start:'20',
              end:'60',
              textColor:'#fed73c'
          },
          {
              label:'事假',
              start:'2',
              end:'12',
              textColor:'#fed73c'
          },
          {
              label:'病假',
              start:'3',
              end:'45',
              textColor:'#fed73c'
          },
      ]
    };
  },
  mounted() {
    this.initColumns();
  },
  methods:{
      handleDetail(){
        if(!this.date) return this.$toast('请选择日期')
        let params={
          date:this.date,
          className:this.select1,
          teachTime:this.select2
        }
        this.$router.push({name:'attendanceDetail',params})
      },
      handleChoose(item){
          if(this.active === 1){
              this.select1 = item
          }else if(this.active === 2){
              this.select2 = item;
          }
          this.attendance();
          this.show = false;
      },
      handleClick(openType){
          this.active = openType;
          this.show = true;
      },
      calcNumber(num1,num2){
          num1 = Number(num1)
          if(isNaN(num1)){
              return 0
          }
          return Math.round((num1/this.sum)*100);
      },
      initColumns() {
      this.columns1 = [];
      this.$HTTP.api({
        url: "/api/baseInfo/sysManageClassRoom/classList",
        method: "POST",
        params: {},
        successCallback: function(result) {
          if (result.code == "0") {
            for (var i = 0; i < result.data.length; i++) {
              this.columns1.push(result.data[i]);
            }
          }
        }.bind(this)
      });
    },
    attendance(){
      this.progressData=[];
      this.$HTTP.api({
        url: "/api/baseInfo/sysStuAttends/attendance",
        method: "POST",
        params: {
          attenceDate:this.date,
          className:this.select1,
          teachTime:this.select2
        },
        successCallback: function(result) {
          if (result.code == "0") {
            for(var i=0;i<result.data.length;i++){
             this.progressData.push(result.data[i]);
             this.sum+=result.data[i].num;
            }
          }
        }.bind(this)
      });
    }
  },
  beforeRouteLeave(to,from,next){
    to.meta.title = this.select1;
    next();
  },
};
</script>
<style lang="scss" scoped>
.content_wrapper{
    padding-bottom: 0.5rem;
}
.time_wrapper {
  width: 6.9rem;
  margin: 0.2rem auto;
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
.detail_item{
    display: flex;
    align-items: center;
    margin-top: 0.2rem;
    .progress_title,.number{
        margin: 0;
        width: 47%;
        font-size: 0.2rem;
    }
    .progress{
        width: 45%;
    }
    .number{
        width: 8%;
    }
}
.bottom {
  // position: fixed;
  // bottom: 0;
  padding: 0.2rem 0;
  width: 100%;
  // background: #fff;
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


</style>
