<!---->
<template>
  <div>
    <van-cell>姓名： {{renItem.name}}</van-cell>
    <van-cell>工号： {{renItem.jobNumber}}</van-cell>
    <van-cell>部门： {{renItem.department}}</van-cell>
    <van-cell>职称： {{renItem.position}}</van-cell>
    <van-cell>职务： {{renItem.duty}}</van-cell>
    <van-cell>联系电话： {{renItem.phone}}</van-cell>
    <van-cell>电子邮箱： {{renItem.mailbox}}</van-cell>
  </div>
</template>
<script>
export default {
  data() {
    return {
      renItem: this.$route.query
    };
  }
};
</script>
<style lang='scss' scoped>
</style>