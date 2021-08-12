<template>
  <div class="order">
    <div class="order__header"></div>
    <div class="order__content">
      <div class="content"></div>
    </div>
    <div class="order__docker"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  // setup() {},
});
</script>

<style lang="less" scoped>
@import url("../../style/variable.less");
.order {
  font-size: 0.12rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f5f5f5;
  &__header {
    height: 1.96rem;
    background-image: linear-gradient(0deg, rgba(0, 145, 255, 0) 4%, #0091ff 50%);
  }
  &__content {
    position: absolute;
    top: 1.96rem;
    left: 0;
    right: 0;
    bottom: 0.49rem;
    margin: 0.16rem 0.18rem;
    background-color: #fff;
    overflow-y: scroll;
    .content {
      height: 99rem;
    }
  }
  &__docker {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 0.49rem;
    background-color: #fff;
  }
}
</style>
