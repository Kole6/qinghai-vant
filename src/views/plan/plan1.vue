<template>
  <div class="container">
    <div id="two" >
      <div class="list" v-for="(item,index) in dataArr" :key="index" @click="handleRouter(item)">
        <p>
          <span>请假类型:</span>
          <span>{{item.qjlx}}</span>
        </p>
        <p>
          <span>请假时间:&nbsp;&nbsp;</span>
          <span>{{item.kssj}}-{{item.jssj}}</span>
        </p>
      </div>
      
    </div>
  </div>
</template>
<script>
export default {
  name: "other",
  data() {
    return {
        dataArr:[]
    };
  },
  methods: {
    getList() {
      this.$HTTP.api({
        root: "/myjson",
        url: "/3663000000/js_app!result.action",
        method: "GET",
        params: {
          forward: 'qjjlList2',
          loginName:'admin'
        },
        successCallback: function(data) {
          this.dataArr = data.result
        }.bind(this)
      });
    },
    handleRouter(ren){
      this.$router.push({path:'/plan2',query: ren})
    }
  },
  mounted() {
    this.getList();
  }
};
</script>
<style scoped>
p {
  margin: 0;
}

.item {
  display: flex;
  justify-content: space-between;
  padding: 0 0.3rem;
  font-size: 0.3rem;
  line-height: 0.9rem;
  background: #fff;
  margin-bottom: 0.2rem;
  border-bottom: solid 1px #ebebed;
  background: #fff;
}

.item--margin {
  margin-bottom: 0.3rem;
}

.item_left {
  display: flex;
  align-items: center;
}

.item_left_div {
  width: 0.8rem;
  display: inline-block;
  position: relative;
}

.item_left_div i {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 0.4rem;
  color: #4bbaf4;
}

.item_right {
  color: #7a7a7a;
}

.item_right:after {
  content: "";
  display: inline-block;
  width: 0.2rem;
  height: 0.2rem;
  transform: rotate(45deg);
  margin-left: 0.2rem;
  border-top: solid 2px gray;
  border-right: solid 2px gray;
}

.item_right_content {
  font-size: 0.3rem;
  line-height: 0.9rem;
  display: inline-block;
}

.bottom {
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.bottom_item {
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
}

.bottom_item.active {
  color: #0195ff;
}

.bottom_item img {
  width: 0.9rem;
}

.bottom_item span {
  font-size: 0.4rem;
}

textarea {
  width: 100%;
  padding: 0.3rem;
  border: none;
}

.other {
  font-size: 14px;
  background: #fff;
}

.other span {
  display: inline-block;
  font-size: 0.3rem;
  padding-left: 0.3rem;
  line-height: 0.8rem;
}

.other img {
  width: 1rem;
  margin-left: 0.3rem;
}

.btn {
  font-size: 0.4rem;
  text-align: center;
  width: 70%;
  margin: 0.5rem auto;
  line-height: 0.9rem;
  background: #0195ff;
  color: #fff;
  border-radius: 0.1rem;
}

.list {
  padding: 0.2rem 0.3rem;
  background: #fff;
  border-bottom: solid 1px #ebebed;
}

.list p:first-child {
  font-size: 0.4rem;
  font-weight: bold;
  color: #606060;
}

.list p:last-child {
  color: #c6c6c6;
  font-size: 0.3rem;
  margin-top: 0.1rem;
}
</style>
