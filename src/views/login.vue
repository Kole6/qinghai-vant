<!--登录页-->
<template>
    <div class="login">
      <div class="logo">魔方移动端</div>
      <div class="login_message">
      <div class="list account">
        <p>账号</p>
        <v-flex xs12>
          <v-text-field placeholder="请输入账号"  v-model="userName"></v-text-field>
        </v-flex>
      </div>
      <div class="list password" >
        <p>密码</p>
        <v-flex xs12>
          <v-text-field
            placeholder="请输入密码" 
            v-model="password"
            :type="isText ? 'text' : 'password'"
            class="input-group--focused"
            @click:append="isText = !isText"
            :append-icon="isText ? 'visibility' : 'visibility_off'"
          ></v-text-field>
        </v-flex>
      </div>
      </div>
      <div class="text-xs-center">
        <v-btn round depressed color="primary" dark @click="handleLogin">
          <span class="enter" >登 录</span>
        </v-btn>
      </div>
    </div>
</template>
<script>
import {
  HTTP_ROOT_ADMIN,SCHOOL_CODE,PRO_ID} from "@/common/config/http-config";
export default {
  data() {
    return {//00001  abc@12345
      account: "",
      isText: false,
      studentNo: "",
      phoneNo: "",
      shxym: "",
      teacherRoles: [],
      userName: "",
      password: "",
    };
  },

  methods: {
    handleLogin() {
      let sysUserEntity = {
        schoolCode: SCHOOL_CODE,
        username: this.userName,
        password: this.password
      };
      let params = {
        sysUserEntity: sysUserEntity,
        proId: PRO_ID
      };
      this.$HTTP.api({
        root: HTTP_ROOT_ADMIN,
        url: "/login/toLogin",
        method: "POST",
        params,
        successCallback: function(data) {
          if (data.code == 0) {
            window.localStorage.setItem("name", data.data.name);
            window.localStorage.setItem("username", data.data.username);
            window.localStorage.setItem("schoolCode", data.data.schoolCode);
            window.localStorage.setItem("userId", data.data.userId);
            window.localStorage.setItem("token", data.data.token);
            window.localStorage.setItem("userType", data.data.userType);
            // todo 是记住密码还是记住账号名称
            if (this.pwdChecked) {
              //记住密码
              window.localStorage.setItem("userInfo", JSON.stringify(params));
            } else {
              window.localStorage.removeItem("userInfo");
            }
            //获取菜单
            this.getMenu();
            this.$router.push({ path: "/home" });
          } else {
            this.$toast(data.msg);
          }
        }.bind(this)
      });
    },
    //获取菜单
    getMenu(){
      this.$HTTP.api({
        root: HTTP_ROOT_ADMIN,
        url: "/api/sys/sysmenu/getMenuTree/"+PRO_ID,//proId是2
        method: "POST",
        successCallback: function(data) {
          console.log(data)
          if (data.code == 0) {
            window.localStorage.setItem(
              "menuTrees",
              JSON.stringify(data.data)
            );
            this.$toast("登录成功");
              this.$router.push({ path: "/home" });
          } else {
            this.$toast(data.msg);
          }
        }.bind(this)
      });
    }
  }
};
</script>
<style lang='scss' scoped>
.login {
  font-size: 0.6rem;
  .login_message {
    margin-left: 36px;
    .login_account {
      margin-bottom: 12px;
      line-height: 3rem;
      input {
        padding: 5px 20px;
      }
      .pass_word {
        height: 40px;
        width: 81%;
        font-size: 14px;
        label {
          width: 50%;
          height: 40px;
          color: #333;
          display: inline-block;
        }
        .getPassword {
          float: left;
          height: 40px;
          margin-top: -10px;
        }
      }
      label {
        width: 50%;
        height: 40px;
        font-size: 13px;
        color: #333;
        display: block;
      }
      input[type="text"],
      input[type="password"] {
        height: 2rem;
        width: 89%;
        border: none;
        border-radius: 3px;
        background: #f7f8f9;
        font-size: 12px;
        padding-left: 5px;
        margin-bottom: 15px;
      }
    }

    .scue {
      line-height: 50px;
      font-size: 12px;
      margin-left: 5%;
      .click_here {
        color: #2a58ad;
        padding-left: 3px;
        cursor: pointer;
      }
    }
  }
  .logo {
    background: url("../assets/img/logo_bg.jpg") no-repeat;
    background-size: 100% 100%;
    background-position: top left;
    height: 3rem;
    color: white;
    line-height: 1.9rem;
    padding-left: 0.7rem;
  }
  .account {
    margin-top: 1rem;
  }
  .list {
    font-size: 0.4rem;
    margin-bottom: 0.5rem;
    padding: 0 0.5rem;
    p {
      margin: 0;
    }
  }
  .oneRem {
    width: 1rem;
    height: 1rem;
    border: 1px solid saddlebrown;
  }
  .enter {
    padding: 0 1rem;
  }
}
</style>
<style scoped>
.text-xs-center >>> .primary {
  background-color: #3f51b5 !important;
}
</style>

