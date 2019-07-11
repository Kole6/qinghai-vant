<!--app整体布局-->
<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed app>
      <br>
      <v-layout row wrap>
        <v-flex  xs1></v-flex>
        <v-flex  xs4>
          <v-avatar size="80px">
            <img 
              src="http://img2.touxiang.cn/file/20170413/2a3e5bfc87638f7e3327350dfb2278fb.jpg"
              alt="John"
            >
          </v-avatar>
        </v-flex>
        <v-flex  xs4>
          <v-flex xs12 style="margin-top:2rem"><span class="black--text title" >张无忌</span> </v-flex>
          <v-flex xs12><span>学生会主席</span></v-flex>
        </v-flex>
      </v-layout>

      <br>
      <v-list dense>
        <!-- <v-list-tile @click="toSrcOut('basic')">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>个人信息</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile> -->
        <v-list-tile @click="toSrcOut('changePassword')">
          <v-list-tile-action>
            <v-icon>ballot</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>修改密码</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="src1()">
          <v-list-tile-action>
            <v-icon>assignment_return</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>退出登录</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="blue" dark fixed app>
      <!-- 这里到时候切换成头像和返回上一步的切换，控制由meta.img控制 -->
      <v-toolbar-side-icon @click.stop="drawer = !drawer">
        <!-- <v-icon>search</v-icon> -->
      </v-toolbar-side-icon>
      <v-flex text-xs-center>
        <v-toolbar-title>
          {{$route.meta.head}}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </v-toolbar-title>
      </v-flex>
    </v-toolbar>
    <v-content>
      15165
      <router-view/>
      <!-- <v-card style="height:2000px">xx:{{bottomNav}}</v-card> -->
    </v-content>
    <v-footer height="56" app>
      <v-bottom-nav :active.sync="bottomNav" :value="true" absolute color="transparent">
        <v-btn color="blue" flat value="attendSet" @click="toSrc('attendSet')">
          <span>设置</span>
          <v-icon>settings_applications</v-icon>
        </v-btn>
        <v-btn color="blue" flat value="attendIndex" @click="toSrc('attendIndex')">
          <span>考勤</span>
          <v-icon>assignment</v-icon>
        </v-btn>
        <v-btn color="blue" flat value="attendCount" @click="toSrc('attendCount')">
          <span>统计</span>
          <v-icon>assessment</v-icon>
        </v-btn>
      </v-bottom-nav>
      <!-- <span class="white--text">&copy; 2017</span> -->
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    year: 2018,
    bottomNav: ""
  }),
  props: {
    source: String
  },
  watch: {
    $route(to, from) {
      this.bottomNav = this.$route.meta.bottomNav;
    }
  },
  mounted() {
    this.bottomNav = this.$route.meta.bottomNav;
  },
  methods: {
    src1() {
      this.$router.push({ path: "/login" });
    },
    toSrc(url) {
      this.$router.push({ path: `/overall/${url}` });
    },
    toSrcOut(url){
      this.$router.push({ path: `/outall/${url}` });
    }
  }
};
</script>
<style lang="less" scoped>
</style>
