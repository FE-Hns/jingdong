<template>
  <div class="shop">
    <!-- 搜索区域 -->
    <Search />
    <!-- 商品信息 -->
    <Info />
    <!-- 内容区域 -->
    <Products />
    <!-- 购物车 -->
    <Cart />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Search from "./Search/Index.vue";
import Info from "./Info/Index.vue";
import Products from "./Product/Index.vue";
import Cart from "./Cart/Index.vue";

export default defineComponent({
  name: "Shop",
  components: {
    Search,
    Info,
    Products,
    Cart,
  },
});
</script>

<style lang="less" scoped></style>
