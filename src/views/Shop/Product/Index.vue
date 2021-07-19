<template>
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
    <div class="product">
      <div class="product__item" v-for="item in products" :key="item.id">
        <img :src="item.imgUrl" alt="" />
        <div class="product__item__price">
          <div class="product__item__price__title">{{ item.title }}</div>
          <div class="product__item__price__sale">{{ `月售${item.sales}件` }}</div>
          <div class="product__item__price__expensive">
            <span class="product__item__price__expensive__yen">&yen;</span>
            <span class="product__item__price__expensive__currentPrice">{{ item.currentPrice }}</span>
            <span class="product__item__price__expensive__originalPrice">&yen;{{ item.originalPrice }}</span>
          </div>
        </div>
        <div class="product__item__action">
          <span class="iconfont del">&#xe656;</span>
          <span class="num">88</span>
          <span class="iconfont add">&#xe62c;</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, watchEffect, ref, Ref } from "vue";
import { useRoute, RouteLocationNormalizedLoaded } from "vue-router";
import { get } from "../../../utils/request";
import api from "../../../api/Index";

interface Product {
  id: number;
  title: string;
  sales: string;
  currentPrice: number;
  originalPrice: number;
}

interface Tag {
  label: string;
  value: string;
}

const tags: Tag[] = [
  { label: "全部商品", value: "all" },
  { label: "秒杀", value: "second" },
  { label: "新鲜水果", value: "fruit" },
  { label: "休闲食品", value: "snacks" },
  { label: "时令蔬菜", value: "vegetable" },
  { label: "肉蛋家禽", value: "meat" },
];

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
    const result = await get(`${api.getProductsByCategory}/${id}/tag`, { tag: tag.value.value });
    if (result.retCode === 0) {
      products.value = result.data;
    }
  };

  // 收集依赖阶段触发
  watchEffect(() => {
    getProductsByCategory();
  });
  return { products };
};

export default defineComponent({
  name: "Product",
  setup() {
    // 获取路径
    const route = useRoute();

    // 切换商品分类
    const { changeCategory, currentTag } = changeCategoryHandler();
    // 获取商品信息
    const { products } = getProductsByCategoryHandler(route, currentTag);

    return { changeCategory, currentTag, products, tags };
  },
});
</script>

<style lang="less" scoped>
@import url("../../../style/variable.less");
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
.product {
  flex: 1;
  padding: 0.12rem 0.16rem;
  overflow-y: scroll;
  &__item {
    display: flex;
    align-items: center;
    border-bottom: 1px solid @content-color-light-white;
    padding: 0.12rem 0;
    position: relative;
    img {
      width: 0.68rem;
      height: 0.68rem;
    }
    &__price {
      margin-left: 0.16rem;
      flex: 1;
      &__title {
        font-size: 0.14rem;
        color: @content-color-dark;
        line-height: 0.2rem;
      }
      &__sale {
        font-size: 0.12rem;
        color: @content-color-dark;
        margin: 0.06rem 0;
        line-height: 0.16rem;
      }
      &__expensive {
        position: relative;
        line-height: 0.2rem;
        font-size: 0.12rem;
        &__yen {
          color: @content-color-orange;
          font-size: 0.12rem;
        }
        &__currentPrice {
          font-size: 0.14rem;
          color: @content-color-orange;
          margin-right: 0.06rem;
        }
        &__originalPrice {
          font-size: 0.12rem;
          text-decoration: line-through;
          color: @content-color-light-grey;
        }
      }
    }
    &__action {
      position: absolute;
      right: 0;
      bottom: 0.12rem;
      display: flex;
      align-items: center;
      .del {
        font-size: 0.2rem;
        margin-right: 0.1rem;
        color: @content-color-dark-grey;
      }
      .num {
        font-size: 0.14rem;
        color: @content-color-dark;
        margin-right: 0.1rem;
      }
      .add {
        font-size: 0.2rem;
        color: @content-color-dark-blue;
      }
    }
  }
}
</style>
