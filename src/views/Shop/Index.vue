<template>
  <div class="shop">
    <!-- 搜索区域 -->
    <div class="search">
      <span class="iconfont" @click="handleClickBack">&#xe63b;</span>
      <div class="search__content">
        <div class="iconfont search__content__prefix">&#xe608;</div>
        <input
          type="text"
          class="search__content__input"
          placeholder="请输入商品名称搜索"
        />
      </div>
    </div>
    <!-- 商品信息 -->
    <div class="shop__info">
      <ShopItem :data="shopInfo" :hasBorder="false" />
    </div>
    <!-- 内容区域 -->
    <div class="shop__content">
      <div class="category">
        <div class="category__item category__item--active">全部商品</div>
        <div class="category__item">秒杀</div>
        <div class="category__item">新鲜水果</div>
        <div class="category__item">休闲食品</div>
        <div class="category__item">时令蔬菜</div>
        <div class="category__item">肉蛋家禽</div>
      </div>
      <div class="product">
        <div class="product__item" v-for="n in 100" :key="n">
          <img
            src="https://img30.360buyimg.com/n1//s160x160_jfs/t1/162676/36/17256/45063/606efc13E81203415/9bd26e263d774800.jpg"
            alt=""
          />
          <div class="product__item__price">
            <div class="product__item__price__title">番茄250g/份</div>
            <div class="product__item__price__sale">月售10件</div>
            <div class="product__item__price__expensive">
              <div class="product__item__price__expensive__currentPrice">
                ￥33.6
              </div>
              <div class="product__item__price__expensive__originalPrice">
                ￥33.6
              </div>
              <div class="action">
                <span class="iconfont del">&#xe656;</span>
                <span class="num">88</span>
                <span class="iconfont add">&#xe62c;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { useRouter, useRoute } from "vue-router";
import ShopItem from "../../components/Shop/ShopItem.vue";
import { get } from "../../utils/request";
import api from "../../api/Index";

// 点击返回图标逻辑
const backHandler = () => {
  const router = useRouter();
  const handleClickBack = () => {
    router.back();
  };
  return { handleClickBack };
};

// 获取商铺信息
const getShopInfo = async () => {
  const route = useRoute();
  const result = await get(`${api.getShopInfo}/${route.params.id}`, {});
  const list = result?.data;
  return list;
};

export default defineComponent({
  name: "Shop",
  components: {
    ShopItem,
  },
  setup() {
    const state = reactive({
      shopInfo: {},
    });

    const { handleClickBack } = backHandler();

    getShopInfo().then((res) => (state.shopInfo = res));

    const { shopInfo } = toRefs(state);

    return { handleClickBack, shopInfo };
  },
});
</script>

<style lang="less" scoped>
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
    background-color: #f5f5f5;
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
      background-color: #f5f5f5;
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
  background-color: #f5f5f5;
  font-size: 0.14rem;
  height: 100%;
  overflow-y: scroll;
  &__item {
    line-height: 0.4rem;
    text-align: center;
    color: #333;
  }
  &__item--active {
    background-color: #fff;
  }
}
.product {
  flex: 1;
  padding: 0.12rem 0.16rem;
  overflow-y: scroll;
  &__item {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #f1f1f1;
    padding: 0.12rem 0;
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
        margin-bottom: 0.06rem;
      }
      &__sale {
        font-size: 0.12rem;
        color: #333;
        margin-bottom: 0.06rem;
      }
      &__expensive {
        position: relative;
        height: 0.2rem;
        line-height: 0.2rem;
        &__currentPrice {
          position: absolute;
          font-size: 0.12rem;
          color: #e93b3b;
          left: 0;
          top: 0;
        }
        &__originalPrice {
          font-size: 0.2rem;
          position: absolute;
          transform: scale(0.5);
          text-decoration: line-through;
          left: 28px;
        }
        .action {
          position: absolute;
          right: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          .del {
            font-size: 0.2rem;
            margin-right: 0.1rem;
          }
          .num {
            font-size: 0.14rem;
            color: #333;
            margin-right: 0.1rem;
          }
          .add {
            font-size: 0.2rem;
            color: #0091ff;
          }
        }
      }
    }
  }
}
</style>
