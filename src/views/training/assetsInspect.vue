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
  name: "assetsInspect",
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
        this.$router.push({path:'assetsInspectInspect'})
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~@/assets/style/common.scss";
</style>
