<template>
  <div class="container">
    <template v-if="tableData.length">
      <div v-for="(item,index) in tableData" :key="index" class="list" @click="handleClick(item)">
        <div class="list_top">
          <span class="list_title">{{item.jkd}}</span>
          <span class="list_date">{{item.result.substring(0,10)}}</span>
        </div>
        <div class="list_bottom">{{item.result.substring(13)}}</div>
      </div>
    </template>
    <template v-else>
      <div class="tip">当前暂无数据！</div>
    </template>
  </div>
</template>
<script>
import {
  HTTP_ROOT_ADMIN,
  SCHOOL_CODE,
  PRO_ID
} from "@/common/config/http-config";
export default {
  name: "warningSystem",
  data() {
    return {
      tableData: []
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    handleClick(item) {
      this.$router.push({ name: "warningDetail", params: item });
    },
    loadData() {
      this.$HTTP.api({
        url: "/api/baseInfo/warningRecord/query",
        method: "POST",
        params: {
          jszbh: localStorage.getItem("userId")
        },
        successCallback: function(data) {
          if (data.code == 0) {
            this.tableData = data.data;
            console.log(data.data);
          } else {
            this.$toast(data.msg);
          }
        }.bind(this)
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  padding: 0.2rem;
  background: #f3f3f3;
  min-height: 80vh;
  .list {
    background: #fff;
    padding: 0.3rem;
    margin-bottom: 0.2rem;
    .list_top {
      display: flex;
      justify-content: space-between;
      .list_title {
        font-weight: bold;
        font-size: 0.3rem;
      }
      .list_date {
        color: #79798f;
      }
    }
    .list_bottom {
      font-size: 0.25rem;
      margin-top: 0.1rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .tip {
    font-size: 0.26rem;
    font-weight: bold;
    text-align: center;
  }
}
</style>
