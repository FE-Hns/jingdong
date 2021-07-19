<template>
  <div class="search">
    <span class="iconfont" @click="handleClickBack">&#xe63b;</span>
    <div class="search__content">
      <div class="iconfont search__content__prefix">&#xe608;</div>
      <input type="text" class="search__content__input" placeholder="请输入商品名称搜索" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Router, useRouter } from "vue-router";

// 处理返回图标逻辑
const backHandler = (router: Router) => {
  const handleClickBack = () => {
    router.back();
  };
  return { handleClickBack };
};

export default defineComponent({
  name: "Search",
  setup() {
    // 获取路由
    const router = useRouter();
    // 返回上一页
    const { handleClickBack } = backHandler(router);

    return { handleClickBack };
  },
});
</script>

<style lang="less" scoped>
@import url("../../../style/variable.less");
.search {
  padding: 0.16rem 0.18rem;
  display: flex;
  align-items: center;
  .iconfont {
    font-size: 0.13rem;
    color: #b6b6b6;
    margin-right: 0.16rem;
  }
  &__content {
    background-color: @bg-color-light-white;
    border-radius: 0.16rem;
    padding: 0.08rem 0.16rem;
    font-size: 0.16rem;
    display: flex;
    align-items: center;
    flex: 1;
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
