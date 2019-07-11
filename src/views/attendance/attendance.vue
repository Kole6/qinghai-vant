<!--教学巡查-->
<template>
  <div class="teachingInspect">
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex xs6 sm6 md6 v-for="(item,index) in dataList" :key="index">
          <v-card
            color="darken-2"
            class="white--text card_item"
            @click="handleRouter(item.pathName,item.text)"
          >
            <p class="img_icon">
              <i :class="['iconfont',item.icon]"></i>
            </p>
            <p class="text">{{item.text}}</p>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataList: [
        {
          icon: "icon-icon-test",
          text: "教学考勤",
          pathName:'/im/techingAttendance'
        },
        {
          icon: "icon-kaoqintongji",
          text: "考勤统计",
          pathName:'/im/statisticsAttendance'
        }
      ]
    };
  },
  methods: {
    handleRouter(pathName, itemName) {
      sessionStorage.setItem("type", escape(itemName));
      this.$router.push({ path: pathName });
    }
  }
};
</script>
<style lang='scss' scoped>
.container > .layout > .flex {
  padding: 0.2rem;
}
.teachingInspect {
  padding-bottom: 1rem;
}
.card_item {
  height: 1.6rem;
  .img_icon {
    text-align: center;
    margin: 0;
    i {
      font-size: 0.7rem;
      color: #4bbaf4;
    }
  }
  .text {
    margin: 0;
    color: black;
    font-size: 0.2rem;
    text-align: center;
  }
}
.v-bottom-nav {
  height: 1rem !important;
}
.bottom_content {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  i {
    font-size: 0.4rem;
    color: #4bbaf4;
    margin-right: 0.1rem;
  }
}
</style>
<style>
.v-content__wrap {
  background: rgb(243, 243, 243);
}
</style>
