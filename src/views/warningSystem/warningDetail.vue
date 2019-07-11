<template>
  <div class="container">
    <div class="no list">
      <span>编号:</span>
      <span>{{no}}</span>
    </div>
    <div class="jkd list">
      <span>监控点</span>
      <span>{{jkd}}</span>
    </div>
    <div class="result list">
      <span>监控结果值</span>
      <span>{{jkjgz}}</span>
    </div>
    <div class="tj list">
      <span>预警条件</span>
      <span>{{yjtj}}</span>
    </div>
    <div class="yjz list">
      <span>预警值</span>
      <span>{{yjz}}</span>
    </div>
    <div class="bzz list">
      <span>标准值</span>
      <span>{{bzz}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "warningDetail",
  data() {
    return {
      no: "",
      jkd: "",
      jkjgz: "",
      yjtj: "",
      yjz: "",
      bzz: ""
    };
  },
  created() {
    let data = this.$route.params;
    this.loadData(data || {});
  },
  methods: {
    loadData(search) {
      this.$HTTP.api({
        url: "/api/baseInfo/warningRecord/list",
        method: "POST",
        params: {
          jkd: search.jkd,
          yjbh: search.yjbh,
          page: 1,
          limit: 100,
          userId: localStorage.getItem("userId")
        },
        successCallback: function(data) {
          if (data.code == 0) {
            let detail = data.data.list[0];
            this.no = detail.yjbh;
            this.jkd = detail.jkd;
            this.jkjgz = detail.jkjgz;
            this.yjtj = detail.yjtj;
            this.yjz = detail.yjz;
            this.bzz = detail.bzz;
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
  padding: 0;
  .list {
    padding: 0.2rem 0.4rem;
    background: #fff;
    border-bottom: 1px solid #79798f;
  }
  .list:first-child {
    font-size: 0.3rem;
    font-weight: bold;
  }
  .list:not(.no) {
    display: flex;
    justify-content: space-between;
    span:first-child {
      font-size: 0.3rem;
    }
    span:last-child {
      font-size: 0.3rem;
      color: #36adf4;
    }
  }
  .list.yjz {
    span:last-child {
      color: #cc0000;
    }
  }
}
</style>
