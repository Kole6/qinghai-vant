<!--page-->
<template>
  <div class="vuc loading_cube_3_0">
    <el-container>
      <!-- menuing -->
      <el-aside width="240px" v-if="menuShow">
        <pageMenu :menuObj="menuObj" v-if="menuShow" @clickMenu="clickMenu"></pageMenu>
      </el-aside>
      <!-- maining -->
      <el-main id="pageRight">
        <bread-box :param="breadParam"></bread-box>
        <div class="important-content">
          <router-view/>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import pageMenu from "./menu.vue";
import breadBox from "./breadBox.vue";
export default {
  components: {
    breadBox,
    pageMenu
  },
  data() {
    return {
      menuObj: {},
      menuShow: true,
      nav: "school",
      breadParam: "学校信息"
    };
  },
  mounted() {
    console.log(" this.$store.state.menu", this.$store.state.menu);
    this.handleNav(this.$route.params.id);
  },
  watch: {
    //路由id改变去查menu改变menuObj
    $route(to, from) {
      this.$Global.rightScrollTop();
      if (to.params.id && to.params.id != from.params.id) {
        this.handleNav(to.params.id);
      }
    }
  },
  methods: {
    handleNav(id) {
      this.menuShow = false;
      let obj;
      for (let i of this.$store.state.menu.children) {
        if (i.href == id) {
          obj = i;
        }
      }
      if (obj) {
        this.$nextTick(() => {
          this.menuShow = true;
        });
        this.$store.commit("updateMenuObj", obj);
      }
      // console.log('obj',obj)
      // console.log('this.$store.state.menuObj',this.$store.state.menuObj)
    },
    clickMenu(mexc) {
      console.log("mexc", mexc);
      this.breadParam = mexc.name;
    }
  }
};
</script>

<style lang='scss' scoped>
.vuc {
  height: 100%;

  .el-container {
    height: 100%;
  }

  .el-aside {
    background-color: white;
    border-right: 1px solid rgba(0, 0, 0, 0.07);
    height: calc(100vh - 58px);
  }

  .el-main {
    background-color: white;
    height: calc(100vh - 58px);
    padding: 0;

    .important-content {
      padding: 8px 15px 0 15px;
      height: calc(100% - 50px);
    }
  }
}
</style>