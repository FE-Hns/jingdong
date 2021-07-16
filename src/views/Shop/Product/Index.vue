<template>
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
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

interface Product {
  id: number;
  title: string;
  sales: string;
  currentPrice: number;
  originalPrice: number;
}

export default defineComponent({
  name: "Product",
  props: {
    products: {
      type: Array as PropType<Product[]>,
      required: true,
      default() {
        return [];
      },
    },
  },
});
</script>

<style lang="less" scoped>
@import url("../../../style/variable.less");
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
        color: #333;
        line-height: 0.2rem;
      }
      &__sale {
        font-size: 0.12rem;
        color: #333;
        margin: 0.06rem 0;
        line-height: 0.16rem;
      }
      &__expensive {
        position: relative;
        line-height: 0.2rem;
        font-size: 0.12rem;
        &__yen {
          color: #e93b3b;
          font-size: 0.12rem;
        }
        &__currentPrice {
          font-size: 0.14rem;
          color: #e93b3b;
          margin-right: 0.06rem;
        }
        &__originalPrice {
          font-size: 0.12rem;
          text-decoration: line-through;
          color: #999;
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
        color: #666;
      }
      .num {
        font-size: 0.14rem;
        color: #333;
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
