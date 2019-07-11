<template>
  <div class="inspectRoom1">
    <div class="discipline">
      <p>学生纪律</p>
      <hr>
      <div class="discipline_item">
        <span>睡觉</span>
        <div class="minus" @click="handleOperation('sleep','minus')"></div>
        <div class="center">
          <span class="number">{{form.sleep}}</span>
          人
        </div>
        <div class="plus" @click="handleOperation('sleep','plus')"></div>
      </div>
      <div class="discipline_item">
        <span>玩手机</span>
        <div class="minus" @click="handleOperation('phone','minus')"></div>
        <div class="center">
          <span class="number">{{form.phone}}</span>
          人
        </div>
        <div class="plus" @click="handleOperation('phone','plus')"></div>
      </div>
      <div class="discipline_item">
        <span>讲话</span>
        <div class="minus" @click="handleOperation('talk','minus')"></div>
        <div class="center">
          <span class="number">{{form.talk}}</span>
          人
        </div>
        <div class="plus" @click="handleOperation('talk','plus')"></div>
      </div>
    </div>

    <div class="effect">
      <div class="content1">
        <p class="first">教学效果</p>
        <hr>
        
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
        
        <div class="radio_type">
          <span>教案是否合格</span>
          <van-radio-group v-model="isQualify">
            <van-radio name="1">是</van-radio>
            <van-radio name="0">否</van-radio>
          </van-radio-group>
        </div>
        <hr>
        <div class="radio_type">
          <span>是否管考勤和纪律</span>
          <van-radio-group v-model="isResponse">
            <van-radio name="1">是</van-radio>
            <van-radio name="0">否</van-radio>
          </van-radio-group>
        </div>
         <hr>
        <div class="radio_type">
          <span>板书质量</span>
          <van-radio-group v-model="writing">
            <van-radio name="1">有</van-radio>
            <van-radio name="0">无</van-radio>
          </van-radio-group>
        </div>
         <hr>
         <div class="radio_type">
          <span>PPT</span>
          <van-radio-group v-model="ppt">
            <van-radio name="1">有</van-radio>
            <van-radio name="0">无</van-radio>
          </van-radio-group>
        </div>
        <hr>
        <div class="star_type">
          <span>教姿教态</span>
          <van-rate v-model="posture" :count="3"/>
        </div>
        <hr>
        <div class="star_type">
          <span>语言表达</span>
          <van-rate v-model="express" :count="3"/>
        </div>
      </div>
      <div class="content2">
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
        <span>备注</span>
        <v-textarea
          solo
          name="inspectRoom1"
          v-model="form.remark"
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
  name: "inspectRoom1",
  data() {
    return {
      isQualify: "1",
      isResponse:"1",
      isChangeClass:"0",
      isHandinPhone:"0",
      teacherAttendance:"0",
      writing: "1",
      ppt:"1",
      posture: 3,
      express: 3,
      evaluateClass: 3,
      evaluateTeacher: 3,
      form: {
        sleep: 10,
        phone: 10,
        talk: 10,
        remark: ""
      }
    };
  },
  mounted(){
    // this.$route.meta.title = sessionStorage.getItem('room') + '教室'
  },
  methods: {
    /**
     * @method  handleOperation 处理页面中对form对象的加减运算
     * @param {String} key form对象中的key值
     * @param {String} type 需要进行的运算, minus 为减  plus  为加
     */
    handleOperation(key, type) {
      if (type === "minus") {
        // 减法
        if (this.form[key] > 0) {
          this.$set(this.form, key, Number(this.form[key] - 1));
        }
      } else if (type === "plus") {
        this.$set(this.form, key, Number(this.form[key] + 1));
      }
    },
    handleRouter(pathName){
      this.$HTTP.api({
        url: "/api/baseInfo/sysPatrolTeacher/save",
        method: "POST",
        params: {
          patrolDate:getCookie('date'),
          patrolTime:getCookie('active'),
          patrolMan:unescape(getCookie('name')),
          teachBulid:unescape(getCookie('select')),
          classRoom:unescape(getCookie('item')),
          sleepNum:this.form.sleep,
          playPhone:this.form.phone,
          talk:this.form.talk,
          isQualify:this.isQualify,
          isResponse:this.isResponse,
          posture:this.posture,
          express:this.express,
          writing:this.writing,
          evaluateClass:this.evaluateClass,
          evaluateTeacher:this.evaluateTeacher,
          remark:this.form.remark,
          isChangeClass:this.isChangeClass,
          isHandinPhone:this.isHandinPhone,
          teacherAttendance:this.teacherAttendance,
          ppt:this.ppt
        },
        successCallback: function(result) {
          if (result.code == "0") {
            this.$router.push({path:pathName})
          }
        }.bind(this)
      });
    },
  }
};
</script>
<style lang="scss" scoped>
.inspectRoom1 {
  padding-bottom: 0.8rem;
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
    margin-top: 0.3rem;
    background: #fff;
    .first {
      font-weight: bold;
      margin: 0;
      padding-left: 0.3rem;
    }
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
      width: 3.2rem;
      padding-left: 0.3rem;
    }
  }
  .star_type {
    display: flex;
    align-items: center;
    span {
      display: inline-block;
      width: 1.7rem;
      padding-left: 0.3rem;
    }
  }
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
</style>

<style>
.v-content__wrap {
  background: rgb(243, 243, 243);
}
textarea[name="inspectRoom1"] {
  font-size: 0.3rem;
  line-height: 0.4rem;
}
</style>