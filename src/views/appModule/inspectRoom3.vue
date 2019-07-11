<template>
  <div class="inspectRoom3">
    <div class="effect">
      <div class="content1">
        <div class="input_type">
          <span>教师姓名</span>
          <input type="text" class="input" v-model="teacherName">
        </div>
        <hr>
        <div class="input_type">
          <span>上课班级</span>
          <input type="text" class="input" v-model="labsClass">
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
          <span>服装</span>
          <van-rate v-model="clothing" :count="3"/>
        </div>
        <hr>
        <div class="star_type">
          <span>站姿</span>
          <van-rate v-model="stance" :count="3"/>
        </div>
        <hr>
        <div class="star_type">
          <span>课堂纪律</span>
          <van-rate v-model="discipline" :count="3"/>
        </div>
        <hr>
        <div class="star_type">
          <span>班级评价</span>
          <van-rate v-model="evaluateClass" :count="3"/>
        </div>
        <hr>
        <div class="star_type">
          <span>教师评价</span>
          <van-rate v-model="evaluateTeacher" :count="3"/>
        </div>
      </div>
      <div class="content3">
        <span>处理意见</span>
        <v-textarea solo name="inspectRoom3" v-model="form.opinion" value></v-textarea>
      </div>
    </div>
    <v-bottom-nav :value="true" absolute dark color="#4bbaf4">
      <p class="choose" @click="handleRouter('/im/chooseRoom')">提交</p>
    </v-bottom-nav>
    <van-popup v-model="show" position="bottom">
      <van-picker show-toolbar :columns="columns" @confirm="handleChoose" @cancel="show = false"/>
    </van-popup>
  </div>
</template>
<script>
import { setCookie, getCookie, delCookie } from "../../common/utils/cookie.js";
export default {
  name: "inspectRoom3",
  data() {
    return {
      hasPlan: "1",
      clothing: 3,
      stance: 3,
      isChangeClass:"0",
      isHandinPhone:"0",
      teacherAttendance:"0",
      evaluateClass: 3,
      evaluateTeacher: 3,
      absence: "",
      discipline: 3,
      teacherName: "",
      labsClass: "",
      columns: [
        "1号教学楼",
        "2号教学楼",
        "3号教学楼",
        "4号教学楼",
        "5号教学楼"
      ],
      form: {
        sleep: 10,
        phone: 10,
        talk: 10,
        opinion: ""
      },
      show: false
    };
  },
  mounted() {
    this.initColumns();
  },
  methods: {
    handleRouter(pathName) {
      this.$HTTP.api({
        url: "/api/baseInfo/sysPatrolLabs/save",
        method: "POST",
        params: {
          patrolDate: getCookie("date"),
          patrolTime: getCookie("active"),
          patrolMan: unescape(getCookie("name")),
          labsBulid: unescape(getCookie("select")),
          labsRoom: unescape(getCookie("item")),
          teacherName: this.teacherName,
          labsClass: this.labsClass,
          hasPlan: this.hasPlan,
          clothing: this.clothing,
          stance: this.stance,
          absence: this.absence,
          discipline: this.discipline,
          opinion: this.form.opinion,
          isChangeClass:this.isChangeClass,
          isHandinPhone:this.isHandinPhone,
          teacherAttendance:this.teacherAttendance,
          evaluateClass:this.evaluateClass,
          evaluateTeacher:this.evaluateTeacher
        },
        successCallback: function(result) {
          if (result.code == "0") {
            this.$router.push({ path: pathName });
          }
        }.bind(this)
      });
    },
    initColumns() {
      this.columns = [];
      this.$HTTP.api({
        url: "/api/baseInfo/sysManageClassRoom/classList",
        method: "POST",
        params: {},
        successCallback: function(result) {
          if (result.code == "0") {
            console.log(result);
            for (var i = 0; i < result.data.length; i++) {
              this.columns.push(result.data[i]);
            }
          }
        }.bind(this)
      });
    },
    check(value){
        var re = /^\d+$|^\d+[.]?\d+$/;
        if (!re.test(value)){
          this.$toast('请输入数字')
        };
    },
    handleChoose(value, index) {
      this.labsClass = value;
      this.show = false;
    }
  }
};
</script>
<style lang="scss" scoped>
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
.inspectRoom3 {
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
      text-align: right;
      width: 1.9rem;
      padding-right: 0.3rem;
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
textarea[name="inspectRoom3"] {
  font-size: 0.3rem;
  line-height: 0.4rem;
}
</style>