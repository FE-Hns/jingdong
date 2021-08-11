<template>
  <div class="myCart">
    <div class="myCart__title">我的全部购物车（{{ total }}）</div>
    <div class="myCart__products">
      <div class="myCart__products__item" v-for="shop in cartList" :key="shop">
        <div class="shopName">{{ shop.shopName }}</div>
        <div class="product" v-for="product in shop.productList" :key="product">
          <img :src="product.imgUrl" alt="" />
          <div class="product__price">
            <div class="product__price__title">{{ product.title }}</div>
            <div class="product__price__expensive">
              <div class="product__price__expensive__left">
                <span class="product__price__expensive__yen">&yen;</span>
                <span class="product__price__expensive__currentPrice">{{
                  `${product.currentPrice} x ${product.count}`
                }}</span>
              </div>
              <div class="product__price__expensive__right">
                <span class="product__price__expensive__yen dark">&yen;</span>
                <span class="product__price__expensive__currentPrice dark">{{
                  product.currentPrice * product.count
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Docker />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import Docker from "../Home/Docker/Index.vue";
import { useStore } from "vuex";

const cartHandler = () => {
  const store = useStore();
  const cartListObj = store.state.cartList;

  // 购物车list
  const cartList = computed(() => {
    const result = [];
    for (const key in cartListObj) {
      result.push(cartListObj[key]);
    }
    return result;
  });

  // 商品总数
  const total = computed(() => {
    let total = 0;
    for (const key in cartListObj) {
      const productList = cartListObj[key]["productList"];
      for (const _key in productList) {
        const product = productList[_key];
        total += product.count;
      }
    }
    return total;
  });

  return { cartList, total };
};

export default defineComponent({
  name: "MyCart",
  components: {
    Docker,
  },
  setup() {
    const { cartList, total } = cartHandler();
    return { cartList, total };
  },
});
</script>

<style lang="less" scoped>
@import url("../../style/variable.less");
.myCart {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  font-size: 0.12rem;
  background-color: #f5f5f5;
  &__title {
    font-size: 0.16rem;
    color: @content-color-dark;
    padding: 0.31rem 0 0.11rem 0;
    text-align: center;
    background-color: #fff;
  }
  &__products {
    position: absolute;
    top: 0.64rem;
    left: 0;
    right: 0;
    bottom: 0.5rem;
    overflow-y: auto;
    &__item {
      margin: 0.16rem 0.18rem;
      background-color: #fff;
      padding: 0.16rem;
      border-radius: 0.04rem;
      .shopName {
        font-size: 0.16rem;
        color: @content-color-dark;
        margin-bottom: 0.16rem;
      }
      .product {
        display: flex;
        position: relative;
        margin-bottom: 0.16rem;
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
            margin-bottom: 0.06rem;
          }
          &__expensive {
            position: relative;
            line-height: 0.2rem;
            font-size: 0.12rem;
            display: flex;
            &__right {
              flex: 1;
              text-align: right;
            }
            &__yen {
              color: @content-color-orange;
              font-size: 0.12rem;
              &.dark {
                color: #000;
              }
            }
            &__currentPrice {
              font-size: 0.14rem;
              color: @content-color-orange;
              margin-right: 0.06rem;
              &.dark {
                color: #000;
              }
            }
          }
        }
      }
    }
  }
}
</style>
