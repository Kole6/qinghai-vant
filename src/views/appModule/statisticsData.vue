<template>
  <div class="chooseRoom">
    <div class="top_choose" @click="chooseDialog(0)">
      <div class="choose_left">
        <!-- <img src="@/assets/img/house.jpg" alt> -->
        <div>
            <i class="iconfont icon-weibiaoti-_huabanfuben"></i>
        </div>
        <span>巡视分类</span>
      </div>
      <div class="choose_right" >
        <span class="choose_item">{{category}}</span>
      </div>
    </div>
    <div class="top_choose" @click="chooseDialog(1)">
      <div class="choose_left">
        <!-- <img src="@/assets/img/house.jpg" alt> -->
        <div>
            <i class="iconfont icon-icon-test"></i>
        </div>
        <span>{{text}}</span>
      </div>
      <div class="choose_right" >
        <span class="choose_item">{{select}}</span>
      </div>
    </div>
    <div class="top_choose" @click="chooseDialog(2)">
      <div class="choose_left">
        <div>
            <i class="iconfont icon-date"></i>
        </div>
        <span>请选择日期</span>
      </div>
      <div class="choose_right" >
        <span class="choose_item">{{date}}</span>
      </div>
    </div>
    <div class="top_choose" @click="chooseDialog(3)">
      <div class="choose_left">
        <div>
            <i class="iconfont icon-shijian"></i>
        </div>
        <span>请选择时间</span>
      </div>
      <div class="choose_right" >
        <span class="choose_item">{{time}}</span>
      </div>
    </div>
    <div class="table-content">
      <p class="table-title">统计表</p>
      <hr>
      <div class="table-wrapper">
        <table class="table" v-if="category === '教师量化考核巡视'">
          <thead>
            <tr>
              <th rowspan="3">教室</th>
              <th colspan="3" rowspan="2">学生纪律</th>
              <th colspan="14">教学效果</th>
              <th colspan="3" rowspan="2">班级评价</th>
              <th colspan="3" rowspan="2">教师评价</th>
              <th rowspan="3">备注</th>
            </tr>
            <tr>
              <th colspan="2">教案是否合格</th>
              <th colspan="3">教学姿态</th>
              <th colspan="3">语言表达</th>
              <th colspan="2">板书质量</th>
              <th colspan="2">PPT</th>
              <th colspan="2">是否管考勤和纪律</th>
            </tr>
            <tr>
              <th>睡觉</th>
              <th>玩手机</th>
              <th>讲话</th>
              <th>合格</th>
              <th>不合格</th>
              <th>好</th>
              <th>中</th>
              <th>差</th>
              <th>好</th>
              <th>中</th>
              <th>差</th>
              <th>有</th>
              <th>无</th>
              <th>有</th>
              <th>无</th>
              <th>合格</th>
              <th>不合格</th>
              <th>好</th>
              <th>中</th>
              <th>差</th>
              <th>好</th>
              <th>中</th>
              <th>差</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{result.classRoom}}</td>
              <td>{{result.sleepNum}}</td>
              <td>{{result.playPhone}}</td>
              <td>{{result.talk}}</td>
              <td>{{result.isQualify}}</td>
              <td>{{result.notQualify}}</td>
              <td>{{result.posture3}}</td>
              <td>{{result.posture2}}</td>
              <td>{{result.posture1}}</td>
              <td>{{result.express3}}</td>
              <td>{{result.express2}}</td>
              <td>{{result.express1}}</td>
              <td>{{result.writing1}}</td>
              <td>{{result.writing2}}</td>
              <td>{{result.ppt1}}</td>
              <td>{{result.ppt2}}</td>
              <td>{{result.isResponse}}</td>
              <td>{{result.notResponse}}</td>
              <td>{{result.evaluateClass3}}</td>
              <td>{{result.evaluateClass2}}</td>
              <td>{{result.evaluateClass1}}</td>
              <td>{{result.evaluateTeacher3}}</td>
              <td>{{result.evaluateTeacher2}}</td>
              <td>{{result.evaluateTeacher1}}</td>
              <td></td>
            </tr>
            <tr v-for="(list,index) in tableData" :key="index">
                <td>{{list.classRoom}}</td>
                <td>{{list.sleepNum}}</td>
                <td>{{list.playPhone}}</td>
                <td>{{list.talk}}</td>
                <td>
                  <i class="material-icons" v-if="list.isQualify==='1'">
                        done
                  </i>
                </td>
                <td>
                  <i class="material-icons" v-if="list.isQualify==='0'">
                        done
                  </i>
                </td>
                <td>
                  <i class="material-icons" v-if="list.posture==='3'">
                        done
                  </i>
                </td>
                <td>
                  <i class="material-icons" v-if="list.posture==='2'">
                        done
                  </i>
                </td>
                <td>
                  <i class="material-icons" v-if="list.posture==='1'">
                        done
                  </i>
                </td>
                <td>
                  <i class="material-icons" v-if="list.express==='3'">
                        done
                  </i>
                </td>
                <td>
                  <i class="material-icons" v-if="list.express==='2'">
                        done
                  </i>
                </td>
                <td>
                  <i class="material-icons" v-if="list.express==='1'">
                        done
                  </i>
                </td>
                <td>
                  <i class="material-icons" v-if="list.writing==='1'">
                        done
                  </i>
                </td>
                <td>
                  <i class="material-icons" v-if="list.writing==='0'">
                        done
                  </i>
                </td>
                <td>
                  <i class="material-icons" v-if="list.ppt==='1'">
                        done
                  </i>
                </td>
                <td>
                  <i class="material-icons" v-if="list.ppt==='0'">
                        done
                  </i>
                </td>
                <td>
                  <i class="material-icons" v-if="list.isResponse==='1'">
                        done
                  </i>
                </td>
                <td>
                  <i class="material-icons" v-if="list.isResponse==='0'">
                        done
                  </i>
                </td>
                <td>
                  <i class="material-icons" v-if="list.evaluateClass==='3'">
                        done
                  </i>
                </td>
                <td>
                  <i class="material-icons" v-if="list.evaluateClass==='2'">
                        done
                  </i>
                </td>
                <td>
                  <i class="material-icons" v-if="list.evaluateClass==='1'">
                        done
                  </i>
                </td>
                <td>
                  <i class="material-icons" v-if="list.evaluateTeacher==='3'">
                        done
                  </i>
                </td>
                <td>
                  <i class="material-icons" v-if="list.evaluateTeacher==='2'">
                        done
                  </i>
                </td>
                <td>
                  <i class="material-icons" v-if="list.evaluateTeacher==='1'">
                        done
                  </i>
                </td>
                <td>{{list.remark}}</td>
            </tr>
          </tbody>
        </table>
        <table class="table table2" v-else-if="category === '实训基地巡视'">
          <thead>
            <tr>
              <th rowspan="2">实训室</th>
              <th rowspan="2">教师姓名</th>
              <th colspan="2">有无教案</th>
              <th rowspan="2">缺课问题</th>
              <th colspan="3" >课堂纪律</th>
              <th colspan="3" >教学效果</th>
              <th rowspan="3">处理意见</th>
            </tr>
            <tr>
              <th>有</th>
              <th>无</th>
              <th>好</th>
              <th>中</th>
              <th>差</th>
              <th>好</th>
              <th>中</th>
              <th>差</th>
            </tr>
          </thead>
          
          <tbody>
            <tr>
              <td>{{result.trainRoom}}</td>
              <td></td>
              <td>{{result.hasPlan}}</td>
              <td>{{result.nothasPlan}}</td>
              <td>{{result.absence}}</td>
              <td>{{result.discipline3}}</td>
              <td>{{result.discipline2}}</td>
              <td>{{result.discipline1}}</td>
              <td>{{result.teachingQuality3}}</td>
              <td>{{result.teachingQuality2}}</td>
              <td>{{result.teachingQuality1}}</td>
              <td></td>
            </tr>
            <tr v-for="(list,index) in tableData" :key="index">
                <td>{{list.trainRoom}}</td>
                <td>{{list.teacherName}}</td>
                <td>
                  <i class="material-icons" v-if="list.hasPlan==='1'">
                        done
                  </i>
                </td>
                <td>
                  <i class="material-icons" v-if="list.hasPlan==='0'">
                        done
                  </i>
                </td>
                <td>{{list.absence}}</td>
                <td>
                  <i class="material-icons" v-if="list.discipline==='3'">
                        done
                  </i>
                </td>
                <td>
                  <i class="material-icons" v-if="list.discipline==='2'">
                        done
                  </i>
                </td>
                <td>
                  <i class="material-icons" v-if="list.discipline==='1'">
                        done
                  </i>
                </td>
                <td>
                  <i class="material-icons" v-if="list.teachingQuality==='3'">
                        done
                  </i>
                </td>
                <td>
                  <i class="material-icons" v-if="list.teachingQuality==='2'">
                        done
                  </i>
                </td>
                <td>
                  <i class="material-icons" v-if="list.teachingQuality==='1'">
                        done
                  </i>
                </td>
                <td>{{list.opinion}}</td>
            </tr>
          </tbody>
        </table>
        <table class="table table3" v-else-if="category === '实验楼教学巡视'">
          <thead>
            <tr>
              <th rowspan="2">实验室</th>
              <th rowspan="2">上课班级</th>
              <th rowspan="2">教师姓名</th>
              <th colspan="2">有无教案</th>
              <th rowspan="2">缺课问题</th>
              <th colspan="3">服装</th>
              <th colspan="3">站姿</th>
              <th colspan="3">课堂纪律</th>
              <th rowspan="3">处理意见</th>
            </tr>
            <tr>
              <th>有</th>
              <th>无</th>

              <th>好</th>
              <th>中</th>
              <th>差</th>

              <th>好</th>
              <th>中</th>
              <th>差</th>

              <th>好</th>
              <th>中</th>
              <th>差</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{result.labsRoom}}</td>
              <td></td>
              <td></td>
              <td>{{result.hasPlan}}</td>
              <td>{{result.nothasPlan}}</td>
              <td>{{result.absence}}</td>
              <td>{{result.clothing3}}</td>
              <td>{{result.clothing2}}</td>
              <td>{{result.clothing1}}</td>
              <td>{{result.stance3}}</td>
              <td>{{result.stance2}}</td>
              <td>{{result.stance1}}</td>
              <td>{{result.discipline3}}</td>
              <td>{{result.discipline2}}</td>
              <td>{{result.discipline1}}</td>
              <td></td>
            </tr>
            <tr v-for="(list,index) in tableData" :key="index">
                <td>{{list.labsRoom}}</td>
                <td>{{list.labsClass}}</td>
                <td>{{list.teacherName}}</td>
                <td>
                  <i class="material-icons" v-if="list.hasPlan==='1'">
                        done
                  </i>
                </td>
                <td>
                  <i class="material-icons" v-if="list.hasPlan==='0'">
                        done
                  </i>
                </td>
                
                <td>{{list.absence}}</td>
                <td>
                  <i class="material-icons" v-if="list.clothing==='3'">
                        done
                  </i>
                </td>
                <td>
                  <i class="material-icons" v-if="list.clothing==='2'">
                        done
                  </i>
                </td>
                <td>
                  <i class="material-icons" v-if="list.clothing==='1'">
                        done
                  </i>
                </td>
                <td>
                  <i class="material-icons" v-if="list.stance==='3'">
                        done
                  </i>
                </td>
                <td>
                  <i class="material-icons" v-if="list.stance==='2'">
                        done
                  </i>
                </td>
                <td>
                  <i class="material-icons" v-if="list.stance==='1'">
                        done
                  </i>
                </td>
                <td>
                  <i class="material-icons" v-if="list.discipline==='3'">
                        done
                  </i>
                </td>
                <td>
                  <i class="material-icons" v-if="list.discipline==='2'">
                        done
                  </i>
                </td>
                <td>
                  <i class="material-icons" v-if="list.discipline==='1'">
                        done
                  </i>
                </td>
                <td>{{list.opinion}}</td>
            </tr>
          </tbody>
        </table>
        <table class="table table4" v-if="category === '实训岗位巡视'">
          <thead>
            <tr>
              <th rowspan="2">实训岗位</th>
              <th rowspan="2">教师姓名</th>
              <th colspan="2">有无教案</th>
              <th rowspan="2">缺课问题</th>
              <th colspan="3">课堂纪律</th>
              <th colspan="3">教学效果</th>
              <th rowspan="2">处理意见</th>
            </tr>
            <tr>
              <th>有</th>
              <th>无</th>

              <th>好</th>
              <th>中</th>
              <th>差</th>

              <th>好</th>
              <th>中</th>
              <th>差</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{result.trainPost}}</td>
              <td></td>
              <td>{{result.hasPlan}}</td>
              <td>{{result.nothasPlan}}</td>
              <td>{{result.absence}}</td>
              <td>{{result.discipline3}}</td>
              <td>{{result.discipline2}}</td>
              <td>{{result.discipline1}}</td>
              <td>{{result.teachingQuality3}}</td>
              <td>{{result.teachingQuality2}}</td>
              <td>{{result.teachingQuality1}}</td>
              <td></td>
            </tr>
            <tr v-for="(list,index) in tableData" :key="index">
                <td>{{list.trainPost}}</td>
                <td>{{list.teacherName}}</td>
                <td>
                  <i class="material-icons" v-if="list.hasPlan==='1'">
                        done
                  </i>
                </td>
                <td>
                  <i class="material-icons" v-if="list.hasPlan==='0'">
                        done
                  </i>
                </td>
                <td>{{list.absence}}</td>
                <td>
                  <i class="material-icons" v-if="list.discipline==='3'">
                        done
                  </i>
                </td>
                <td>
                  <i class="material-icons" v-if="list.discipline==='2'">
                        done
                  </i>
                </td>
                <td>
                  <i class="material-icons" v-if="list.discipline==='1'">
                        done
                  </i>
                </td>
                <td>
                  <i class="material-icons" v-if="list.teachingQuality==='3'">
                        done
                  </i>
                </td>
                <td>
                  <i class="material-icons" v-if="list.teachingQuality==='2'">
                        done
                  </i>
                </td>
                <td>
                  <i class="material-icons" v-if="list.teachingQuality==='1'">
                        done
                  </i>
                </td>
                <td>{{list.opinion}}</td>
            </tr>
          </tbody>
        </table>

      </div>
    </div>
    <van-popup v-model="show" position="bottom">
      <template v-if="activePop === 0">
        <van-picker
          show-toolbar
          :columns="columns1"
          @confirm="handleChoose"
          @cancel="show = false"
        />
      </template>
      <template v-else-if="activePop === 1">
        <van-picker show-toolbar :columns="columns" @confirm="handleChoose" @cancel="show = false"/>
      </template>
      <template v-else-if="activePop === 2">
        <van-datetime-picker
          v-model="currentDate"
          type="date"
          @confirm="handleChoose"
          @cancel="show = false"
        />
      </template>
      <template v-else-if="activePop === 3">
        <van-picker show-toolbar :columns="columns2" @confirm="handleChoose" @cancel="show = false"/>
      </template>
    </van-popup>
    <div class="text-xs-center"></div>
  </div>
</template>
<script>
export default {
  name: "statisticsData",
  data() {
    return {
      text:'请选择教学楼',   
      select: "1号教学楼",
      category: "教师量化考核巡视",
      date: new Date().Format('yyyy-MM-dd'),
      time: "第一、二节",
      url:"",
      columnUrl:"",
      dateTime:"",
      params:{},
      picker: {},
      active: 0,
      show: false,
      columns1: ["教师量化考核巡视", "实训基地巡视", "实验楼教学巡视","实训岗位巡视"],
      columns2: ["第一、二节", "第三、四节", "第五、六节"],
      columns: [
        "1号教学楼",
        "2号教学楼",
        "3号教学楼",
        "4号教学楼",
        "5号教学楼"
      ],
      currentDate: new Date(),
      tableData: [
        { data: ["1-101", 3,'' , , , , , , , , , true, , , , , , , , , , , , ,] },
        { data: ["1-102", 3, , , , , , , , true, , , , , , true, , , , , , , , ,] },
        { data: ["1-13", 3, , , , , , , , , , true, , ,true , , , , , , , , , ,] }
      ],
      result:{},
      activePop: 0
    };
  },
  watch:{
      category(n){
        if(!n) {
          this.text = '请选择实验楼'
          return;
        }
        if(n.includes('实训基地')){
            this.text = '请选择实训基地'
        }else if(n.includes('教师量化')){
            this.text = '请选择教学楼'
        }else if(n.includes('实训岗位')){
            this.text = '请选择实训基地'
        }else{
            this.text = '请选择实验楼'
        }
      }
  },
   mounted() {
     this.initJudgeText();
     this.initColumns();
     this.handleChoose();
  },
  methods: {
    initJudgeText() {
      let str = this.category || '';
      if (str.includes("实训基地巡视")) {
        this.url="/api/baseInfo/sysPatrolTrainBase/checked";
        this.columnUrl="/api/baseInfo/sysManageTrainBase/list"
        this.params= {
          patrolDate:this.date,
          patrolTime:this.dateTime,
          trainBase:this.select
        }
      }
      if (str.includes("实验楼教学巡视")) {
        this.url="/api/baseInfo/sysPatrolLabs/checked";
        this.columnUrl="/api/baseInfo/sysManageLabsBulid/list"
        this.params= {
          patrolDate:this.date,
          patrolTime:this.dateTime,
          labsBulid:this.select
        }
      } else if (str.includes("实训岗位巡视")) {
        this.url="/api/baseInfo/sysPatrolTrainPost/checked";
        this.columnUrl="/api/baseInfo/sysManageTrainBase/list"
        this.params= {
          patrolDate:this.date,
          patrolTime:this.dateTime,
          trainBase:this.select
        }
      }else if (str.includes("教师量化考核巡视")){
        this.url="/api/baseInfo/sysPatrolTeacher/checked";
        this.columnUrl="/api/baseInfo/sysManageTeachBulid/list";
        this.params= {
          patrolDate:this.date,
          patrolTime:this.dateTime,
          teachBulid:this.select
        }
      }
      this.initColumns();
    },
    initColumns(){
      this.columns=[];
      this.$HTTP.api({
        url: this.columnUrl,
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
    calcTotalNumber(currentNumber,targetNumber,number){
      currentNumber = currentNumber || 0;
      targetNumber = Number(targetNumber)
      number = Number(number)
      if(targetNumber === number){
        return ++currentNumber;
      }
      return currentNumber;
    },
    handleChoose(value, index) {
      let arr = ["category", "select", "date", "time"];
      if (this.activePop === 2) {
        this[arr[this.activePop]] = new Date(value).Format("yyyy-MM-dd");
      } else {
        !!value? this[arr[this.activePop]] = value || '' :'';
      }
      this.initJudgeText();
      this.params.patrolDate=this.date;
      this.show = false;
      this.$HTTP.api({
        url: this.url,
        method: "POST",
        params: this.params,
        successCallback: function(result) {
          if(this.text === '请选择教学楼'){
          let temp = {
            classRoom:'合计',
            sleepNum:0,
            talk:0,
            playPhone:0
          }
          let keyData = ['posture','express','evaluateClass','evaluateTeacher']
          result.data.forEach(item=>{
            temp.sleepNum +=item.sleepNum
            temp.playPhone +=item.playPhone
            temp.talk +=item.talk
            temp.isQualify = this.calcTotalNumber(temp.isQualify,item.isQualify,1);
            temp.notQualify = this.calcTotalNumber(temp.notQualify,item.isQualify,0);
            temp.writing1 = this.calcTotalNumber(temp.writing1,item.writing,1);
            temp.writing2 = this.calcTotalNumber(temp.writing2,item.writing,0);
            temp.ppt1 = this.calcTotalNumber(temp.ppt1,item.ppt,1);
            temp.ppt2 = this.calcTotalNumber(temp.ppt2,item.ppt,0);
            temp.isResponse = this.calcTotalNumber(temp.isResponse,item.isResponse,1);
            temp.notResponse = this.calcTotalNumber(temp.notResponse,item.isResponse,0);
            keyData.forEach((keyName,index)=>{
            for(let i = 1;i<4;i++){
              temp[keyName+i] = this.calcTotalNumber(temp[keyName+i],item[keyName],i)
                }
              })
            })
            this.result = temp
            } else if (this.text === '请选择实训基地'){
              let st = this.category || '';
              let temp={
                absence:0
              };
              if (st.includes('实训基地巡视')){
                temp.trainRoom ='合计'
              }else{
                temp.trainPost ='合计'
              }
            let keyData = ['discipline','teachingQuality']
            result.data.forEach(item=>{
            temp.absence += +item.absence;
            temp.hasPlan = this.calcTotalNumber(temp.hasPlan,item.hasPlan,1);
            temp.nothasPlan = this.calcTotalNumber(temp.nothasPlan,item.hasPlan,0);
              keyData.forEach((keyName,index)=>{
              for(let i = 1;i<4;i++){
                temp[keyName+i] = this.calcTotalNumber(temp[keyName+i],item[keyName],i)
              }
            })
            })
             this.result = temp
            } else {
             let temp = {
              labsRoom:'合计',
              absence:0
            }
            let keyData = ['clothing','stance','discipline']
            result.data.forEach(item=>{
            temp.absence += +item.absence;
            temp.hasPlan = this.calcTotalNumber(temp.hasPlan,item.hasPlan,1);
            temp.nothasPlan = this.calcTotalNumber(temp.nothasPlan,item.hasPlan,0);
              keyData.forEach((keyName,index)=>{
              for(let i = 1;i<4;i++){
                temp[keyName+i] = this.calcTotalNumber(temp[keyName+i],item[keyName],i)
              }
            })}) 
            this.result = temp
          }
          this.tableData = result.data
          console.log(this.tableData)
        }.bind(this)
      });
      this.initTime();
    },
    initTime(){
      if(this.time.includes("第一、二节")){
        this.dateTime="0"
      }else if(this.time.includes("第三、四节")){
        this.dateTime="1"
      }else{
        this.dateTime="2"
      }
      this.params.patrolTime=this.dateTime;
    },
    chooseDialog(index) {
      this.activePop = index;
      this.show = !this.show;
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
.room_title {
  font-size: 0.3rem;
  line-height: 0.9rem;
  margin: 0;
  padding-left: 0.3rem;
}
.table-content {
  background: #fff;
  margin-top: 0.3rem;
  .table-title {
    margin: 0;
    padding: 0.2rem 0 0.2rem 0.3rem;
  }
}
.table-wrapper {
  margin-top: 0.2rem;
  width: 100%;
  overflow: auto;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  .table {
    width: 15rem;
    border-collapse: collapse;
    font-size: 0.2rem;
    font-weight: normal;
    text-align: center;
    thead th {
      border: solid 1px #4bbaff;
      font-weight: 400;
      color: white;
      background: #4bbaf4;
    }
    tbody td {
      border: solid 1px rgb(204, 204, 204);
    }
    tbody tr:first-child{
        background: rgb(243, 243, 243);
    }
  }
}
.material-icons{
    color:rgb(25, 158, 216);
}
</style>