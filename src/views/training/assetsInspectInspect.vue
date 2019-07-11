<template>
  <div class="maintain">
    <div class="content1">
      <div class="remark">
        <van-collapse v-model="activeName" accordion>
          <van-collapse-item title="资产名称" name="1">
            <div class="remark_content">
              <p>到课：学生按规定时间在教室或实训基地上课。</p>
            </div>
          </van-collapse-item>
        </van-collapse>
      </div>
      <div class="input_type first">
        <span>数量</span>
        <input
          type="text"
          class="input"
          v-model="absence"
          @change="check(absence)"
          placeholder="仅限数字类型"
        />
      </div>
      <div class="input_type">
        <span>在用数量</span>
        <input
          type="text"
          class="input"
          v-model="absence"
          @change="check(absence)"
          placeholder="仅限数字类型"
        />
      </div>
      <div class="input_type">
        <span>报废数量</span>
        <input
          type="text"
          class="input"
          v-model="absence"
          @change="check(absence)"
          placeholder="仅限数字类型"
        />
      </div>
      <div class="radio_content">
        <div class="radio_type">
          <span>是否保修</span>
          <van-radio-group v-model="repair">
            <van-radio name="1">合格</van-radio>
            <van-radio name="0">不合格</van-radio>
          </van-radio-group>
        </div>
      </div>
    </div>

    <van-popup v-model="show" position="bottom">
      <van-picker show-toolbar :columns="columns2" @confirm="handleChoose" @cancel="show = false" />
    </van-popup>
    <v-bottom-nav :value="true" absolute dark color="#4bbaf4">
      <p class="choose" @click="handleConfirm">提交</p>
    </v-bottom-nav>
  </div>
</template>
<script>
export default {
  name: "assetsInspectInspect",
  data() {
    return {
        activeName:false,
      select: "",
      show: false,
      currentEdit: "",
      columns2: ["合格", "不合格"],
      hasPlan: "1",
      absence: "",
      repair: "1"
    };
  },
  methods: {
    handleConfirm() {},
    handleChoose(item) {
      this.show = false;
    },
    check() {
      var re = /^\d+$|^\d+[.]?\d+$/;
      if (!re.test(value)) {
        this.$toast("请输入数字");
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~@/assets/style/common.scss";
.input {
  border: solid 1px rgb(75, 186, 244);
  line-height: 0.5rem;
  padding: 0 0.2rem;
}
.v-bottom-nav {
  position: fixed;
  bottom: 0;
}
.content1 {
  padding-top: 0.2rem;
  font-size: 0.3rem;
  line-height: 0.8rem;
}
.radio_content .radio_type span {
  width: 1.9rem;
}
.input_type.first{
    margin-top: 0.3rem;
}
.input_type {
  margin-bottom: 0.3rem;
  background: #fff;
  padding: 0.2rem;
  display: flex;
  align-items: center;
  span {
    display: inline-block;
    width: 1.9rem;
    padding-left: 0.3rem;
  }
}

.remark_content{
  font-size: 0.3rem;
}
</style>
<style scoped>
.radio_type >>> .van-radio-group {
  display: flex;
  justify-content: space-around;
  width: calc(100% - 120px);
}
.remark >>> .van-cell--clickable{
      justify-content: flex-start;
      background: #fff;
      font-size: 0.3rem;
      padding: 0.2rem 0.5rem;
      /* color: #797979; */
}
</style>
