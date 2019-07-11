<template>
  <div class="content_wrapper">
    <p class="tips">查看考勤记录:  <span>({{$route.params.date}})</span></p>
    <div class="content">
      <div class="content_list" v-for="(item,index) in personData" :key="index">
        <div class="list_left">
          <span>{{item.stuNo +'&nbsp;'+item.stuName}}</span>
        </div>
        <div class="list_right" >
          <span class="choose_item">{{item.attenceDetail}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "attendanceDetail",
  data() {
    return {
      personData: [
        {
          name: "银川",
          id: "169902",
          selected: "到课"
        },
        {
          name: "长孙无忌",
          id: "169903",
          selected: "到课"
        },
        {
          name: "后空翻",
          id: "169904",
          selected: "到课"
        },
      ],
      classStatus: [
        "到课",
        "事假",
        "病假",
        "迟到",
        "旷课",
        "参加学生社团",
        "参加学生组织",
        "上起航晚自习",
        "工作室培训"
      ],
      show: false,
      activeId: ""
    };
  },
  mounted() {
    this.initData();
  },
  methods: {
    handleSubmit() {
      this.$toast("提交");
    },
    handleAll() {
      this.$toast("全勤");
    },
    handleChoose(itemName) {
      this.show = false;
      this.personData.forEach((item, index) => {
        if (item.id === this.activeId) {
          this.$set(this.personData[index], "selected", itemName);
        }
      });
    },
    handleClick(item) {
      this.activeId = item.id;
      this.show = true;
    },
    initData(){
      this.personData=[];
      console.log(this.$route.params);
      this.$HTTP.api({
        url: "/api/baseInfo/sysStuAttends/attendsList",
        method: "POST",
        params: {
          attenceDate:this.$route.params.date,
          teachTime:this.$route.params.teachTime,
          className:this.$route.params.className
        },
        successCallback: function(result) {
          if (result.code == "0") {
            for (var i = 0; i < result.data.length; i++) {
              this.personData.push(result.data[i]);
            }
            console.log(this.personData);
          }
        }.bind(this)
      });
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
    width: 50%;
    .item {
      margin: 0;
      font-size: 0.2rem;
      line-height: 0.5rem;
    }
  }
  .top_right {
    width: 50%;
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
  padding-left: 0.4rem;
  color: #797979;
  font-size: 0.2rem;
  line-height: 0.8rem;
  margin: 0;
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
}
</style>
