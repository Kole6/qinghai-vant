<!--首页-->
<template>
  <div class="home_contain">
    <div class="top">
      <v-layout row wrap align-center>
        <v-flex xs3 offset-xs1>
          <v-avatar :size="avatarSize" color="grey lighten-4">
            <img
              src="http://www.buwangbo.com/files/picture/jxapp2_1001.jpg"
              alt="avatar"
            >
          </v-avatar>
        </v-flex>
        <v-flex xs6 class="detail_info">
          <p>{{serName}}</p>
          <p>授课教师</p>
        </v-flex>
        <v-flex xs2>
        </v-flex>
      </v-layout>
    </div>
    <p class="category">我的栏目</p>
    <div class="content">
      <v-container fluid grid-list-md>
        <v-layout row wrap>
          <v-flex xs6 sm6 md6 v-for="(item,index) in dataArr" :key="index">
            <v-card color="darken-2" class="white--text card_item type1" @click="handleClick(item.path)">
              <v-layout align-center>
                <v-flex xs5>
                  <div class="icon-wrapper">
                    <i :class="['iconfont',item.icon]"></i>
                  </div>
                </v-flex>
                <v-flex xs7>
                  <div class="home_title">{{item.name}}</div>
                  <div class="enTitle">{{item.enName}}</div>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name:"",
      staffNo:"",
      serName:localStorage.name,
      avatarSize: "1.5rem",
      dataArr:[
        {
          name:'考勤',
          enName:'KAO QIN',
          path:'/im/attendance',
          icon:'icon-jiachang',
        },
        {
          name:'教学巡视',
          enName:'JIAO XUE XUN SHI',
          path:'/im/teachingInspect',
          icon:'icon-zonghe',
        },
        {
          name:'预警系统',
          enName:'YU JING XI TONG',
          path:'/im/warningSystem',
          icon:'icon-pinggu',
        },
        {
          name:'实训室巡视',
          enName:'SHI XUN SHI XUN SHI',
          path:'/im/trainingInspect',
          icon:'icon-kaoqintongji1',
        },
      ]
    };
  },
  methods: {
    handleClick(path) {
      // if (open) {
      //   this.$router.push({ path: "/im/teachingInspect" });
      // } else {
        // this.$toast("此功能未开放");
        this.$router.push({path})
      // }
    }
  }
};
</script>
<style lang='scss' scoped>
p {
  margin: 0;
}
.home_contain {
  box-sizing: border-box;
  .top {
    background: url("../assets/img/logo_bg.jpg") no-repeat;
    background-size: 100% 100%;
    background-position: top left;
    height: 3rem;
    color: white;
    line-height: 1.9rem;
    padding-top: 0.4rem;
  }
  .detail_info {
    font-size: 0.3rem;
    line-height: 0.4rem;
    p:first-child {
      font-size: 0.5rem;
      margin-bottom: 0.4rem;
      margin-top: 0.5rem;
    }
  }
  .category {
    font-size: 0.4rem;
    line-height: 1rem;
    background: white;
    padding-left: 0.5rem;
  }
  .content {
    background: rgb(243, 243, 243);
    font-size: 0.2rem;
    height: calc(100vh - 4rem);
    .card_item{
      border-radius: 0.1rem;
      width: 3.2rem;
    }
    .card_item.type1 {
      background: rgb(66, 182, 243);
    }
    %bgIcon{
      font-family: 'iconfont';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0.2rem;
      font-size: 1.4rem;
      opacity: 0.1;
    }
    .card_item.type1::before{
      content: "\e623"; 
      @extend %bgIcon;
    }
    .card_item.type2 {
      background: rgb(72, 185, 200);
    }
    .card_item.type2::before{
      content: "\e616"; 
      @extend %bgIcon;
    }
    .home_title {
      font-size: 0.3rem;
      font-weight: bold;
      margin-bottom: 0.2rem;
    }
    .icon-wrapper {
      height: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      i{
        font-size: 0.8rem;
      }
    }
    .flex{
      margin-top: 0.2rem;
    }
  }
}
.container{
  padding: 0 0.3rem 0.3rem;
}
.container.grid-list-md .layout .flex {
  padding: 7px;
}
</style>