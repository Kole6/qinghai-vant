<!--头部-->
<template>
  <div class="head">
    <div class="header">
      <div class="appName header-el" @click="handleHome">
        <span>{{APP_NAME}}</span>
      </div>
      <div class="right-tu">
        <el-dropdown @visible-change="arrowDown = !arrowDown" @command="handleCommand">
          <el-row>
            <img class="headers" src="@/assets/img/mofang/header1.png">
            <span>
              <i class="el-icon-arrow-down" :class="{'rota':arrowDown}"></i>
            </span>
          </el-row>
          <el-dropdown-menu slot="dropdown" :hide-on-click="true">
            <el-dropdown-item command="个人信息">个人信息</el-dropdown-item>
            <el-dropdown-item divided command="修改密码">修改密码</el-dropdown-item>
            <el-dropdown-item divided command="退出登录">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="middle">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
// import MENU from "../../common/config/menu2.js";
export default {
  data() {
    return {
      APP_NAME,
      arrowDown: false
    };
  },
  methods: {
    back() {
      this.$router.push({ path: "/login" });
    },
    handleHome() {
      //   this.$router.push({ path: "/head/indexHome" });
    },
    handleCommand(command) {
      //   let ob = {
      //     name: MENU.cobe.children[2].children[0].name,
      //     href: MENU.cobe.children[2].children[0].href,
      //     menuList: MENU.cobe.children[2].children[0].children
      //   };
      //   window.localStorage.setItem("menuObj", JSON.stringify(ob));
      switch (command) {
        case "退出登录":
          this.back();
          break;
        case "修改密码":
          this.$router.push({ path: "/head/page/relf/changePwd" });
          break;
        case "个人信息":
          this.$router.push({ path: "/head/page/relf/info" });
          break;
        default:
          this.$message(command);
          break;
      }
    }
  }
};
</script>
<style lang='scss' scoped>
.head {
  min-height: 100%;

  .header {
    width: 100%;
    height: 58px;
    color: #fff;
    background-color: $globalMainColor;

    .el-dropdown {
      color: #fff;
    }

    .header-el {
      display: inline-block;
      vertical-align: top;
    }

    .img {
      padding-left: 10px;
      img {
        cursor: pointer;
        padding: 4px 8px;
      }
    }

    .appName {
      font-size: 24px;
      line-height: 58px;
      letter-spacing: 1px;
      cursor: pointer;
      span {
        font-family: "Krungthep Negreta", "Krungthep";
        font-weight: 700;
        font-style: normal;
        font-size: 22px;
        color: #ffffff;
        padding-left: 30px;
      }
    }

    .right-tu {
      margin-top: 6px;
      margin-right: 50px;
      cursor: pointer;
      float: right;

      span {
        padding-left: 8px;
        padding-right: 30px;

        i {
          position: absolute;
          margin-top: 18px;
          transition: 0.3s;
        }

        .rota {
          transform: rotate(180deg);
        }
      }

      .headers {
        width: 42px;
      }
    }
  }
}
</style>