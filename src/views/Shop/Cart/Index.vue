<template>
  <div class="cart">
    <div class="cart__num">
      <img src="../../../assets/imgs/basket.png" alt="" />
      <div class="icon">{{ total }}</div>
    </div>
    <div class="cart__total">
      总计：<span>&yen;{{ price }}</span>
    </div>
    <div class="cart__settle">去结算</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import util from "../../../utils/common";

// 处理购物车
const cartEffect = () => {
  const route = useRoute();
  const store = useStore();
  const shopId = route.params.id;
  const products = typeof shopId === "string" ? store.state.cartList[shopId] : [];

  // 计算总数
  const total = computed(() => {
    let sum = 0;
    for (const key in products) {
      const product = products[key];
      sum += product.count;
    }
    return sum;
  });
  // 计算总价
  const price = computed(() => {
    let sum = 0;
    for (const key in products) {
      const product = products[key];
      sum += product.count * product.currentPrice;
    }
    return util.formatNumTwo(sum);
  });

  return { total, price };
};

export default defineComponent({
  name: "Cart",
  setup() {
    const { total, price } = cartEffect();
    return { total, price };
  },
});
</script>

<style lang="less" scoped>
@import url("../../../style/variable.less");
.cart {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  height: 0.49rem;
  font-size: 0.12rem;
  display: flex;
  align-items: center;
  color: @content-color-dark;
  border-top: 1px solid @content-color-light-white;
  box-sizing: border-box;
  &__num {
    width: 0.76rem;
    height: 0.49rem;
    text-align: center;
    position: relative;
    img {
      width: 0.28rem;
      height: 0.26rem;
      margin: 0.12rem auto;
    }
    .icon {
      position: absolute;
      top: 0.01rem;
      left: 0.4rem;
      min-width: 0.2rem;
      height: 0.2rem;
      transform: scale(0.5);
      transform-origin: left center;
      background-color: @content-color-orange;
      color: @bg-color-white;
      line-height: 0.2rem;
      border-radius: 0.1rem;
    }
  }
  &__total {
    flex: 1;
    margin-left: 0.08rem;
    span {
      font-size: 0.18rem;
      color: @content-color-orange;
    }
  }
  &__settle {
    width: 0.98rem;
    height: 0.49rem;
    line-height: 0.49rem;
    font-size: 0.14rem;
    color: @bg-color-white;
    background-color: @content-color-light-blue;
    text-align: center;
  }
}
</style>
