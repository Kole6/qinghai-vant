<template>
  <div class="inspectRoom2">
    <div class="effect">
      <div class="content1">
        <div class="input_type">
          <span>教师姓名</span>
          <input type="text" class="input" v-model="teacherName">
        </div>
        <hr>
        <div class="radio_type">
          <span>教案是否合格</span>
          <van-radio-group v-model="hasPlan">
            <van-radio name="1">是</van-radio>
            <van-radio name="0">否</van-radio>
          </van-radio-group>
        </div>
        <hr>
        <div class="input_type">
          <span>缺课问题</span>
          <input type="text" class="input" v-model="absence" @change="check(absence)" placeholder="仅限数字类型">
        </div>
      </div>
      
      <div class="content2">
        <div class="radio_type">
          <span>是否调换课</span>
          <van-radio-group v-model="isChangeClass">
            <van-radio name="1">是</van-radio>
            <van-radio name="0">否</van-radio>
          </van-radio-group>
        </div>
        <hr>
        <div class="radio_type">
          <span>上课手机上交是否不足90%</span>
          <van-radio-group v-model="isHandinPhone">
            <van-radio name="1">是</van-radio>
            <van-radio name="0">否</van-radio>
          </van-radio-group>
        </div>
        <hr>
        <div class="radio_type">
          <span>教师上课情况</span>
          <van-radio-group v-model="teacherAttendance">
            <van-radio name="1">迟到</van-radio>
            <van-radio name="2">早退</van-radio>
            <van-radio name="3">缺勤</van-radio>
          </van-radio-group>
        </div>
        <hr>
        <div class="star_type">
          <span>课堂纪律</span>
          <van-rate v-model="discipline" :count="3"/>
        </div>
        <hr>
        <div class="star_type">
          <span>教学效果</span>
          <van-rate v-model="teachingQuality" :count="3"/>
        </div>
      </div>
      <div class="content3">
        <span>处理意见</span>
        <v-textarea
          solo
          name="inspectRoom2"
          v-model="form.opinion"
          value=""
        ></v-textarea>
      </div>
    </div>

    <v-bottom-nav :value="true" absolute dark color="#4bbaf4">
      <p class="choose" @click="handleRouter('/im/chooseRoom')">提交</p>
    </v-bottom-nav>
  </div>
</template>
<script>
import {setCookie, getCookie, delCookie} from "../../common/utils/cookie.js";
export default {
  name: "inspectRoom2",
  data() {
    return {
      hasPlan: "1",
      discipline: 3,
      isChangeClass:"0",
      isHandinPhone:"0",
      teacherAttendance:"0",
      teachingQuality: 3,
      teacherName:"",
      absence:"",
      form: {
        sleep: 10,
        phone: 10,
        talk: 10,
        opinion: ""
      }
    };
  },
  methods: {
    check(value){
        var re = /^\d+$|^\d+[.]?\d+$/;
        if (!re.test(value)){
          this.$toast('请输入数字')
        };
    },
    handleRouter(pathName){
      if(unescape(getCookie('str')).includes("实训岗位巡视")){
        this.$HTTP.api({
        url: "/api/baseInfo/sysPatrolTrainPost/save",
        method: "POST",
        params: {
          patrolDate:getCookie('date'),
          patrolTime:getCookie('active'),
          patrolMan:unescape(getCookie('name')),
          trainBase:unescape(getCookie('select')),
          trainPost:unescape(getCookie('item')),
          teacherName:this.teacherName,
          hasPlan:this.hasPlan,
          absence:this.absence,
          discipline:this.discipline,
          teachingQuality:this.teachingQuality,
          opinion:this.form.opinion,
          isChangeClass:this.isChangeClass,
          isHandinPhone:this.isHandinPhone,
          teacherAttendance:this.teacherAttendance
        },
        successCallback: function(result) {
          if (result.code == "0") {
            this.$router.push({path:pathName})
            console.log(result);
          }
        }.bind(this)
      });
      }else{
      this.$HTTP.api({
        url: "/api/baseInfo/sysPatrolTrainBase/save",
        method: "POST",
        params: {
          patrolDate:getCookie('date'),
          patrolTime:getCookie('active'),
          patrolMan:unescape(getCookie('name')),
          trainBase:unescape(getCookie('select')),
          trainRoom:unescape(getCookie('item')),
          teacherName:this.teacherName,
          hasPlan:this.hasPlan,
          absence:this.absence,
          discipline:this.discipline,
          teachingQuality:this.teachingQuality,
          opinion:this.form.opinion,
          isChangeClass:this.isChangeClass,
          isHandinPhone:this.isHandinPhone,
          teacherAttendance:this.teacherAttendance
        },
        successCallback: function(result) {
          if (result.code == "0") {
            this.$router.push({path:pathName})
            console.log(result);
          }
        }.bind(this)
      });
     }
    }
  }
};
</script>
<style lang="scss" scoped>
.inspectRoom2 {
  padding-bottom: 1.2rem;
}
.discipline {
  padding: 0.1rem 0;
  background: #fff;
}
.discipline > p {
  font-size: 0.3rem;
  margin: 0;
  line-height: 0.7rem;
  padding-left: 0.3rem;
  font-weight: bold;
}
.discipline_item {
  display: flex;
  align-items: center;
  margin: 0.2rem 0;
  @mixin WHB($width, $height, $border) {
    width: $width;
    height: $height;
    border: $border;
  }
  span {
    display: inline-block;
    width: 1.6rem;
    text-align: right;
    font-size: 0.3rem;
  }
  .plus,
  .minus {
    @include WHB(0.5rem, 0.5rem, solid 1px #4bbaf4);
    margin-left: 0.2rem;
    position: relative;
  }
  .center {
    @include WHB(3.6rem, 0.5rem, solid 1px #4bbaf4);
    margin-left: 0.2rem;
    text-align: center;
    .number {
      width: auto;
      color: #4bbaf4;
    }
  }
  %absCenter {
    content: "";
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .minus:before,
  .plus::before {
    @extend %absCenter;
    width: 0.2rem;
    height: 4px;
    background: #4bbaf4;
  }
  .plus::after {
    @extend %absCenter;
    width: 4px;
    height: 0.2rem;
    background: #4bbaf4;
  }
}
.effect {
  font-size: 0.3rem;
  line-height: 0.8rem;
  .content1 {
    padding-top: 0.2rem;
    background: #fff;
  }
  .content2 {
    background: #fff;
    margin: 0.3rem 0;
  }
  .content3 {
    padding: 0 0.3rem;
    background: #fff;
  }
  .radio_type {
    display: flex;
    align-items: center;
    span {
      display: inline-block;
      width: 2.5rem;
      padding-left: 0.3rem;
    }
    .v-text-field {
      padding-right: 2rem !important;
    }
  }
  .input_type {
    @extend .radio_type;
    span {
      width: 1.9rem;
    }
  }
  .star_type {
    display: flex;
    align-items: center;
    span {
      display: inline-block;
      width: 1.9rem;
      padding-left: 0.3rem;
    }
  }
}
.input {
  border: solid 1px rgb(75, 186, 244);
  line-height: 0.5rem;
  padding: 0 0.2rem;
}
.choose {
  text-align: center;
  color: #fff;
  font-size: 0.3rem;
  line-height: 0.9rem;
  margin: 0;
}
.v-bottom-nav {
  height: auto !important;
}
</style>
<style scoped>
.radio_type >>> .van-radio-group {
  display: flex;
}
.radio_type >>> .van-radio:nth-of-type(2) {
  margin-left: 1rem;
}
.star_type >>> .van-icon-star,
.star_type >>> .van-icon-star-o {
  font-size: 0.4rem !important;
  line-height: 0.7rem !important;
}
.effect >>> .v-text-field__details {
  display: none !important;
}
</style>

<style>
.v-content__wrap {
  background: rgb(243, 243, 243);
}
textarea[name="inspectRoom2"] {
  font-size: 0.3rem;
  line-height: 0.4rem;
}
</style>