<template>
  <div class="myCart">
    <div class="myCart__title">我的购物车</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MyCart",
});
</script>

<style lang="less" scoped>
@import url("../../style/variable.less");
.myCart {
  font-size: 0.12rem;
  &__title {
    font-size: 0.16rem;
    color: @content-color-dark;
    padding: 0.11rem 0;
    text-align: center;
    margin-top: 0.2rem;
  }
}
</style>
