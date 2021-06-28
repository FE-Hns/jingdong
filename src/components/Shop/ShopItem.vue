<template>
  <div class="shop">
    <div class="shop__item">
      <div class="shop__item__img">
        <img :src="data.imgUrl" alt="" />
      </div>
      <div class="shop__item__desc">
        <p class="shop__item__desc__title">{{ data.name }}</p>
        <p class="shop__item__desc__detail">
          <span>月售 {{ data.sales }}</span>
          <span>起送￥{{ data.expressExpensive }}</span>
          <span>基础运费￥{{ data.basicExpensive }}</span>
        </p>
        <p class="shop__item__desc__discount">
          {{ data.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ShopItem",
  props: ["data"],
});
</script>

<style lang="less" scoped>
.shop {
  font-size: 0.12rem;
  &__item {
    display: flex;
    margin-bottom: 0.12rem;
    &__img {
      width: 0.56rem;
      height: 0.56rem;
      margin-right: 0.16rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    &__desc {
      flex: 1;
      border-bottom: 1px solid #f1f1f1;
      &__title {
        margin: 0 0 0.08rem 0;
        font-size: 0.16rem;
        color: #333;
      }
      &__detail {
        margin: 0 0 0.08rem 0;
        font-size: 0.13rem;
        color: #333;
        span {
          margin-right: 0.08rem;
        }
      }
      &__discount {
        font-size: 0.13rem;
        color: #e93b3b;
        margin: 0 0 0.12rem 0;
      }
    }
  }
}
</style>
