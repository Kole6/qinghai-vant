<template>
  <div>
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
    <div style="margin-top:0.3rem;">
      <div class="top_choose" @click="chooseDialog(1)">
        <div class="choose_left">
          <!-- <img src="@/assets/img/house.jpg" alt> -->
          <div>
            <i class="iconfont icon-icon-test"></i>
          </div>
          <span>请选择教学楼</span>
        </div>
        <div class="choose_right">
          <span class="choose_item">{{select}}</span>
        </div>
      </div>
      <div class="top_choose" @click="chooseDialog(2)">
        <div class="choose_left">
          <!-- <img src="@/assets/img/house.jpg" alt> -->
          <div>
            <i class="iconfont icon-icon-test"></i>
          </div>
          <span>请选择实训室</span>
        </div>
        <div class="choose_right">
          <span class="choose_item">{{select}}</span>
        </div>
      </div>
    </div>
    <v-bottom-nav :value="true" absolute dark color="#4bbaf4">
      <p class="choose" @click="handleRouter">选择检查项</p>
    </v-bottom-nav>
    <van-popup v-model="show" position="bottom">
      <van-picker show-toolbar :columns="columns2" @confirm="handleChoose" @cancel="show = false" />
    </van-popup>
  </div>
</template>
<script>
export default {
  name: "healthInspect",
  data() {
    return {
      date: "",
      currentDate: "",
      show: false,
      columns2: ["第一、二节", "第三、四节", "第五、六节"],
      select: ""
    };
  },
  methods: {
    attendance() {},
    chooseDialog(flag) {
      this.show = true;
    },
    handleChoose(item) {
      this.show = false;
    },
    handleRouter(){
        this.$router.push({path:'healthInspectDetail'})
    }
  }
};
</script>
<style lang="scss" scoped>
.top_choose {
  display: flex;
  justify-content: space-between;
  padding: 0 0.3rem;
  font-size: 0.3rem;
  line-height: 0.9rem;
  background: #fff;
  margin-bottom: 0.2rem;
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
