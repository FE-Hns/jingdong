<template>
  <div>
    <div class="mask" v-if="showCart"></div>
    <div class="product" v-if="showCart">
      <div class="product__tool">
        <div class="product__tool__all" @click="selectAll(shopId)">
          <span :class="['product__tool__all__check', 'iconfont', { checked: calculation.allChecked }]">&#xe69b;</span>
          全选
        </div>
        <div class="product__tool__clear" @click="clearCart">清空购物车</div>
      </div>
      <div v-for="item in productList" :key="item.id">
        <div class="product__item" v-if="item.count > 0">
          <div
            :class="['product__item__check', 'iconfont', { checked: item.check }]"
            @click="changeProductCheck(shopId, item.id)"
          >
            &#xe69b;
          </div>
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
            <span class="iconfont del" @click="delToCart(shopId, item.id, item)" v-if="item.count > 0">&#xe656;</span>
            <span class="num" v-if="item.count > 0">{{ item.count || 0 }}</span>
            <span class="iconfont add" @click="addToCart(shopId, item.id, item)">&#xe62c;</span>
          </div>
        </div>
      </div>
    </div>
    <div class="cart">
      <div class="cart__num" @click="toggleProduct">
        <img src="../../../assets/imgs/basket.png" alt="" />
        <div class="icon">{{ calculation.total }}</div>
      </div>
      <div class="cart__total">
        总计：<span>&yen;{{ calculation.price }}</span>
      </div>
      <div class="cart__settle" @click="goToOrder">去结算</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import util from "../../../utils/common";
import { cartController } from "../../../common/cartController";

// 处理购物车
const cartEffect = () => {
  const router = useRouter();
  const route = useRoute();
  const store = useStore();
  const shopId = route.params.id;
  // const products = typeof shopId === "string" ? store.state.cartList?.[shopId]?.["productList"] : {};
  let showCartFlag = ref(false);

  const products = computed(() => {
    return typeof shopId === "string" ? store.state.cartList?.[shopId]?.["productList"] : {};
  });

  const calculation = computed(() => {
    const result = { total: 0, realTotal: 0, price: 0, allChecked: true };
    for (const key in products.value) {
      const product = products.value[key];
      if (product.count > 0 && product.check) {
        result.total += product.count; // 计算总数
        result.price += product.count * product.currentPrice; // 计算总价钱
      }
      if (product.count > 0) {
        result.realTotal += product.count;
      }
      if (!product.check) {
        result.allChecked = false; // 全选状态
      }
    }
    if (result.realTotal <= 0) {
      showCartFlag.value = false;
    }
    return {
      total: result.total,
      realTotal: result.realTotal,
      price: util.formatNumTwo(result.price),
      allChecked: result.allChecked,
    };
  });

  const showCart = computed(() => {
    return showCartFlag.value && calculation.value.realTotal > 0;
  });

  const productList = computed(() => {
    const list: any[] = [];
    products.value &&
      Object.keys(products.value).forEach((_k) => {
        list.push(products.value[_k]);
      });
    return list;
  });

  // 点击购物车 展示购物详情
  const toggleProduct = () => {
    showCartFlag.value = !showCartFlag.value;
  };

  // 去结算
  const goToOrder = () => {
    router.push({
      path: "/order",
      query: {
        shopId,
      },
    });
  };

  const { addToCart, delToCart, changeProductCheck, selectAll, clearCart } = cartController(store, showCartFlag);

  return {
    shopId,
    calculation,
    productList,
    showCartFlag,
    addToCart,
    delToCart,
    changeProductCheck,
    toggleProduct,
    selectAll,
    clearCart,
    showCart,
    goToOrder,
  };
};

export default defineComponent({
  name: "Cart",
  setup() {
    const {
      shopId,
      calculation,
      productList,
      showCartFlag,
      addToCart,
      delToCart,
      changeProductCheck,
      toggleProduct,
      selectAll,
      clearCart,
      showCart,
      goToOrder,
    } = cartEffect();

    return {
      shopId,
      calculation,
      productList,
      showCartFlag,
      addToCart,
      delToCart,
      changeProductCheck,
      toggleProduct,
      selectAll,
      clearCart,
      showCart,
      goToOrder,
    };
  },
});
</script>

<style lang="less" scoped>
@import url("../../../style/variable.less");
.mask {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
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
  border-top: 0.1rem solid @content-color-light-white;
  box-sizing: border-box;
  background-color: @bg-color-white;
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
.product {
  padding: 0.12rem 0.16rem;
  overflow-y: scroll;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0.49rem;
  max-height: 3rem;
  background-color: #fff;
  &__tool {
    display: flex;
    font-size: 0.14rem;
    color: @content-color-dark;
    &__clear {
      text-align: right;
      flex: 1;
    }
    &__all {
      &__check {
        margin-right: 0.16rem;
        color: @bg-color-middle-white;
        &.checked {
          color: @content-color-dark-blue;
        }
      }
    }
  }
  &__item {
    display: flex;
    align-items: center;
    border-bottom: 0.1rem solid @content-color-light-white;
    padding: 0.12rem 0;
    position: relative;
    &__check {
      margin-right: 0.16rem;
      color: @bg-color-middle-white;
      &.checked {
        color: @content-color-dark-blue;
      }
    }
    img {
      width: 0.46rem;
      height: 0.46rem;
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
