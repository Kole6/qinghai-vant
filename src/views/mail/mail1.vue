<!---->
<template>
  <div>
    <img class="head" :src="require('../../assets/img/qinghai/1_01.jpg')" />
    <img class="sel" @click="sel1" :src="require('../../assets/img/qinghai/1_02.jpg')" />
    <img class="sel" @click="sel2" :src="require('../../assets/img/qinghai/1_03.jpg')" />
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    sel1() {
      this.$router.push({ path: "/mail2" });
    },
    sel2() {
      this.$router.push({ path: "/mail3" });
    }
  }
};
</script>
<style lang='scss' scoped>
.head {
  width: 100%;
  height: 3rem;
}

.sel {
  width: 100%;
  height: 0.87rem;
  cursor: pointer;
}
</style>