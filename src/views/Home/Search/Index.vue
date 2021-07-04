<template>
  <div class="search">
    <div class="search__content">
      <div class="iconfont search__content__prefix">&#xe608;</div>
      <input type="text" class="search__content__input" placeholder="请输入商品、店铺" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Search",
});
</script>

<style lang="less" scoped>
@import url("../../../style/variable.less");
.search {
  padding: 0.12rem 0.18rem;
  &__content {
    background-color: @bg-color-light-white;
    border-radius: 0.16rem;
    padding: 0.08rem 0.16rem;
    font-size: 0.16rem;
    display: flex;
    align-items: center;
    &__prefix {
      margin-right: 0.12rem;
    }
    &__input {
      flex: 1;
      border: none;
      background-color: @bg-color-light-white;
      outline: 0;
      font-size: 0.14rem;
    }
  }
}
</style>
