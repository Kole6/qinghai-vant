<!--cardLine-->
<template>
    <div class="card-line">
        <slot></slot>
    </div>
</template>
<script>
export default {
    data() {
      return{}
    },
    methods:{}
}
</script>
<style lang='scss' scoped>
.card-line{
    border: 1px solid #f1f1f1;
    border-top: 2px solid $globalMainColor;
    padding: 0;
}
</style>