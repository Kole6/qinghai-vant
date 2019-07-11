<template>
  <div class="container">
    <!-- <div id="one">
      <div class="item item--margin">
        <div class="item_left">
          <span>请选择教学楼</span>
        </div>
        <div class="item_right">
          <span class="item_right_content">请选择</span>
        </div>
      </div>
      <div class="item">
        <div class="item_left">
          <span>开始时间</span>
        </div>
        <div class="item_right">
          <span class="item_right_content">请选择</span>
        </div>
      </div>
      <div class="item item--margin">
        <div class="item_left">
          <span>结束时间</span>
        </div>
        <div class="item_right">
          <span class="item_right_content">请选择</span>
        </div>
      </div>
      <div class="other">
        <span>请假事由</span>
        <textarea name rows="5"></textarea>
        <input type="file" style="display: none" id="file" />
        <div class="file_replace" onclick="handleFile()">
          <img src="@/assets/img/file.jpg" alt />
        </div>
      </div>
      <div class="btn">提交</div>
    </div> -->
    <div id="two" >
      <div class="list" v-for="(item,index) in dataArr" :key="index" @click="handleRouter">
        <p>
          <span>请假类型:</span>
          <span>{{item.type}}</span>
        </p>
        <p>
          <span>请假时间:&nbsp;&nbsp;</span>
          <span>{{item.time}}</span>
        </p>
      </div>
      
    </div>
    <!-- <div class="bottom">
      <div class="bottom_item one active" onclick="handleClick(0)">
        <img src="@/assets/img/one_active.jpg" alt />
        <span>请假</span>
      </div>
      <div class="bottom_item two" onclick="handleClick(1)">
        <img src="@/assets/img/two.jpg" alt />
        <span>记录</span>
      </div>
    </div> -->
  </div>
</template>
<script>
export default {
  name: "other",
  data() {
    return {
        dataArr:[
            {
                type:'病假',
                time:'2018/10/12-2018/10/21',
            },
            {
                type:'病假',
                time:'2018/10/12-2018/10/21',
            },
            {
                type:'病假',
                time:'2018/10/12-2018/10/21',
            },
            {
                type:'病假',
                time:'2018/10/12-2018/10/21',
            },
        ]
    };
  },
  methods:{
      handleRouter(){
          this.$router.push({path:'/plan2'})
      }
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
