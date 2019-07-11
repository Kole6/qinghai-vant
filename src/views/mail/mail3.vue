<!--人员信息 -- 跳转到详情-->
<template>
  <div>
    <van-search placeholder="请输入搜索关键词" v-model="value" />
    <van-index-bar>
      <!-- <van-index-anchor index="Y" /> -->
      <div class="vanCe">
        <div v-for="(item,i) of renList" :key="i" class="ce-k" @click="handleCk(item)">
          <img class="head" :src="item.img" />
          <div class="k-1">{{item.name}}</div>
          <div class="k-2">{{item.position}}</div>
          <div class="k-3">{{`工号：${item.jobNumber}`}}</div>
        </div>
      </div>

      <!-- <van-cell
        v-for="(item,i) of renList"
        :key="i"
        :title="item.name"
        size="large"
        :label="`工号：${item.jobNumber}`"
        @click="handleCk(item)"
      >
        <img class="head" :src="item.img" />
        {{item.position}} &nbsp;&nbsp;
      </van-cell> -->
    </van-index-bar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      renList: [
       /*  {
          img:
            "http://b-ssl.duitang.com/uploads/item/201510/08/20151008192345_uPC5U.jpeg",
          name: "易奥",
          position: "教导主任1",
          jobNumber: "1",
          department: "行政部",
          duty: "教务管理",
          phone: "18973304935",
          mailbox: "codegodao@163.com"
        } */
      ]
    };
  },
  methods: {
    getList() {
      this.$HTTP.api({
        root: "/myjson",
        url: "/c01/testJson/personnel.json",
        method: "GET",
        successCallback: function(data) {
          this.renList = data.data;
        }.bind(this)
      });
    },
    handleCk(ren) {
      this.$router.push({ path: "/mail4", query: ren });
    }
  },
  mounted() {
    this.getList();
  }
};
</script>
<style lang='scss' scoped>
.head {
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 1.4rem;
}
.vanCe {
  width: 100%;
  background-color: #fff;
  .ce-k {
    width: 90%;
    margin: 0 auto;
    height: 1.4rem;
    border-bottom: 1px solid #eee;
    .head {
      position: absolute;
    }
    .k-1{
      position: absolute;
      font-weight: 600;
      font-size: 0.4rem;
      margin-top: 0.2rem;
      margin-left: 1.6rem;
    }
    .k-2{
      position: absolute;
      font-size: 0.35rem;
      margin-top: 0.23rem;
      margin-left: 3rem;
    }
    .k-3{
      position: absolute;
      font-size: 0.35rem;
      margin-left: 1.5rem;
      margin-top: 0.9rem;
      color: rgb(145, 138, 138);
    }
  }
}
</style>