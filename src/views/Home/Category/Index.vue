<template>
  <div class="category">
    <div class="category__item" v-for="n in 10" :key="n">
      <img src="https://img30.360buyimg.com/mobilecms/jfs/t1/163428/9/19645/8884/607d7030E5184ea84/d956cf5a06047f9c.png" alt="" />
      <p>超市便利</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Category",
});
</script>

<style lang="less" scoped>
@import url("../../../style/variable.less");
.category {
  display: flex;
  flex-wrap: wrap;
  font-size: 0;
  text-align: center;
  padding: 0.12rem 0.18rem;
  box-shadow: 0 10px 5px @content-color-light-white;
  &__item {
    width: 20%;
    img {
      width: 0.4rem;
      height: 0.4rem;
    }
    p {
      font-size: 0.12rem;
      color: @content-color-dark;
      margin: 0.06rem 0;
    }
  }
}
</style>
