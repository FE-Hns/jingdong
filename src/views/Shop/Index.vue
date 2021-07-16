<template>
  <div class="shop">
    <!-- 搜索区域 -->
    <div class="search">
      <span class="iconfont" @click="handleClickBack">&#xe63b;</span>
      <div class="search__content">
        <div class="iconfont search__content__prefix">&#xe608;</div>
        <input type="text" class="search__content__input" placeholder="请输入商品名称搜索" />
      </div>
    </div>
    <!-- 商品信息 -->
    <div class="shop__info">
      <ShopItem :data="shopInfo" :hasBorder="false" />
    </div>
    <!-- 内容区域 -->
    <div class="shop__content">
      <div class="category">
        <div
          :class="['category__item', { 'category__item--active': currentTag.value === tag.value }]"
          v-for="tag in tags"
          :key="tag"
          @click="changeCategory(tag)"
        >
          {{ tag.label }}
        </div>
      </div>
      <Products :products="products" />
    </div>
    <!-- 购物车 -->
    <Cart />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watchEffect, Ref } from "vue";
import { useRouter, useRoute, Router, RouteLocationNormalizedLoaded } from "vue-router";
import ShopItem from "../../components/Shop/ShopItem.vue";
import Products from "./Product/Index.vue";
import Cart from "./Cart/Index.vue";
import { get } from "../../utils/request";
import api from "../../api/Index";

interface Tag {
  label: string;
  value: string;
}

interface Product {
  id: number;
  title: string;
  sales: string;
  currentPrice: number;
  originalPrice: number;
}

const tags: Tag[] = [
  { label: "全部商品", value: "all" },
  { label: "秒杀", value: "second" },
  { label: "新鲜水果", value: "fruit" },
  { label: "休闲食品", value: "snacks" },
  { label: "时令蔬菜", value: "vegetable" },
  { label: "肉蛋家禽", value: "meat" },
];

// 处理返回图标逻辑
const backHandler = (router: Router) => {
  const handleClickBack = () => {
    router.back();
  };
  return { handleClickBack };
};

// 处理获取商铺信息
const getShopInfoHandler = (route: RouteLocationNormalizedLoaded) => {
  let shopInfo = ref({});
  const id = route.params?.id;
  const getData = async () => {
    const result = await get(`${api.getShopInfo}/${id}`, {});
    if (result?.retCode === 0) {
      shopInfo.value = result?.data;
    }
  };
  onMounted(() => {
    getData();
  });
  return { shopInfo };
};

// 处理更改分类
const changeCategoryHandler = () => {
  let currentTag = ref(tags[0]);
  const changeCategory = (tag: Tag) => {
    currentTag.value = tag;
  };
  return { currentTag, changeCategory };
};

// 根据分类获取商品
const getProductsByCategoryHandler = (route: RouteLocationNormalizedLoaded, tag: Ref<Tag>) => {
  let products = ref<Product[]>([]);
  const id = route.params?.id;
  const getProductsByCategory = async () => {
    const result = await get(`${api.getShopInfo}/${id}/tag`, { tag: tag.value.value });
    if (result.retCode === 0) {
      products.value = result.data;
    }
  };

  watchEffect(() => {
    getProductsByCategory();
  });
  return { products };
};

export default defineComponent({
  name: "Shop",
  components: {
    ShopItem,
    Products,
    Cart,
  },
  setup() {
    const route = useRoute();

    const router = useRouter();
    // 返回上一页
    const { handleClickBack } = backHandler(router);
    // 切换商品分类
    const { changeCategory, currentTag } = changeCategoryHandler();
    // 回去店铺信息
    const { shopInfo } = getShopInfoHandler(route);
    // 获取商品信息
    const { products } = getProductsByCategoryHandler(route, currentTag);

    return { handleClickBack, changeCategory, shopInfo, tags, currentTag, products };
  },
});
</script>

<style lang="less" scoped>
@import url("../../style/variable.less");
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
.shop__info {
  padding: 0 0.18rem;
}
.shop__content {
  position: absolute;
  top: 1.4rem;
  bottom: 0.5rem;
  left: 0;
  right: 0;
  display: flex;
}
.category {
  width: 0.76rem;
  background-color: @bg-color-light-white;
  font-size: 0.14rem;
  height: 100%;
  overflow-y: scroll;
  &__item {
    line-height: 0.4rem;
    text-align: center;
    color: #333;
  }
  &__item--active {
    background-color: @bg-color-white;
  }
}
</style>
