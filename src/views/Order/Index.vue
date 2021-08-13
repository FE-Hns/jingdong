<template>
  <div class="order">
    <div class="order__header">
      <div class="order__header__top">
        <div class="order__header__top__icon iconfont" @click="handleClickBack">&#xe63b;</div>
        <div class="order__header__top__title">确认订单</div>
      </div>
      <div class="order__header__address">
        <div class="order__header__address__title">收货地址</div>
        <div class="order__header__address__detail">北京理工大学国防科技园2号楼10层</div>
        <div class="order__header__address__contact">
          <span class="order__header__address__contact__name">瑶妹（先生）</span>
          <span class="order__header__address__contact__name">18911024266</span>
        </div>
        <div class="order__header__address__icon iconfont">&#xe610;</div>
      </div>
    </div>
    <div class="order__content">
      <div class="order__content__item" v-for="shop in shopList" :key="shop">
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
    <div class="order__docker">
      <div class="order__docker__total">
        <span class="order__docker__total__name">实付金额</span>
        <span class="order__docker__total__num">&yen;{{ total }}</span>
      </div>
      <div class="order__docker__btn">提交订单</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import { formatNumTwo } from "../../utils/common";

const orderHandler = () => {
  const store = useStore();
  const router = useRouter();
  const route = useRoute();
  const shopId = route.query.shopId;

  // 获取当前店铺下的信息
  const shopList = computed(() => {
    let shop = [];
    typeof shopId === "string" ? shop.push(store.state.cartList?.[shopId]) : (shop = []);
    return shop;
  });

  // 计算实付金额
  const total = computed(() => {
    let total = 0;
    shopList.value.forEach((item) => {
      const products = item.productList;
      for (const key in products) {
        const product = products[key];
        total += product.currentPrice * product.count;
      }
    });
    return formatNumTwo(total);
  });

  // 返回上一页
  const handleClickBack = () => {
    router.back();
  };

  return { shopList, total, handleClickBack };
};

export default defineComponent({
  setup() {
    const { shopList, total, handleClickBack } = orderHandler();

    return { shopList, total, handleClickBack };
  },
});
</script>

<style lang="less" scoped>
@import url("../../style/variable.less");
.order {
  font-size: 0.12rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: @bg-color-light-white;
  &__header {
    height: 1.96rem;
    background-image: linear-gradient(0deg, rgba(0, 145, 255, 0) 4%, @content-color-dark-blue 50%);
    background-size: 100% 80%;
    background-repeat: no-repeat;
    &__top {
      padding: 0.41rem 0.18rem 0.22rem;
      text-align: center;
      position: relative;
      color: @bg-color-white;
      &__icon {
        position: absolute;
        top: 50%;
        left: 0.18rem;
        font-size: 0.18rem;
      }
      &__title {
        font-size: 0.16rem;
      }
    }
    &__address {
      border-radius: 0.04rem;
      padding: 0.16rem;
      background-color: @bg-color-white;
      margin: 0 0.18rem;
      position: relative;
      &__title {
        font-size: 0.16rem;
        color: @content-color-dark;
        margin-bottom: 0.16rem;
      }
      &__detail {
        font-size: 0.14rem;
        color: @content-color-dark;
        margin-bottom: 0.06rem;
      }
      &__contact {
        font-size: 0.12rem;
        color: @content-color-dark-grey;
        margin-right: 0.06rem;
      }
      &__icon {
        position: absolute;
        right: 0.16rem;
        top: 50%;
        margin-top: -0.08rem;
        font-size: 0.16rem;
      }
    }
  }
  &__content {
    position: absolute;
    top: 1.96rem;
    left: 0;
    right: 0;
    bottom: 0.49rem;
    margin: 0.16rem 0.18rem;
    background-color: @bg-color-white;
    overflow-y: scroll;
    &__item {
      background-color: @bg-color-white;
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
                color: @content-color-black;
              }
            }
            &__currentPrice {
              font-size: 0.14rem;
              color: @content-color-orange;
              margin-right: 0.06rem;
              &.dark {
                color: @content-color-black;
              }
            }
          }
        }
      }
    }
  }
  &__docker {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 0.49rem;
    background-color: @bg-color-white;
    display: flex;
    &__total {
      flex: 1;
      line-height: 0.49rem;
      font-size: 0.14rem;
      padding-left: 0.24rem;
      &__name {
        font-size: 0.14rem;
        color: @content-color-dark;
        margin-right: 0.02rem;
      }
      &__num {
        font-size: 0.16rem;
        color: @content-color-light-black;
      }
    }
    &__btn {
      width: 0.98rem;
      line-height: 0.49rem;
      height: 0.49rem;
      text-align: center;
      color: @bg-color-white;
      background-color: @content-color-light-blue;
    }
  }
}
</style>
