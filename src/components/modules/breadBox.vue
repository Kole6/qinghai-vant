<template>
  <div class="bread">
    <div class="tubiao">
      <span class="icon iconfont">&#xe607;</span>
    </div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>{{param}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script>
export default {
  props: {
    param: {
      type: String,
      default: '导航'
    }
  },
  data(){
    return{

    }
  }

};
</script>
<style lang="scss" scoped>
.bread {
  background-color: #f1f1f1;
  width: calc(100% - 10px);
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  box-shadow: .05em .0em .0em $globalMainColor3 inset;
  .el-breadcrumb {
    font-size: 14px;
    line-height: 23px;
    margin-left: 25px;
  }
  .btn {
    height: 35px;
    width: 60px;
    background-color: rgb(255, 186, 0);
    color: white;
    font-size: 14px;
    line-height: 35px;
    border-radius: 5px;
    text-align: center;
    float: right;
    margin-top: -25px;
    margin-right: 60px;
    cursor: pointer;
  }
  .btn:hover {
    background-color: rgb(255, 220, 0);
  }
  .tubiao{
    float:left; width:20px;
    .iconfont{
      font-size: 20px;
    }
    
  }
}
</style>