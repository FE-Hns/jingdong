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
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted, ref, watchEffect } from "vue";
import { useRouter, useRoute, Router, RouteLocationNormalizedLoaded } from "vue-router";
import ShopItem from "../../components/Shop/ShopItem.vue";
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

interface State {
  products: Product[];
}

const tags = [
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
const getProductsByCategoryHandler = (route: RouteLocationNormalizedLoaded, tag: string) => {
  let data = ref([]);
  const id = route.params?.id;
  const getProductsByCategory = async () => {
    const result = await get(`${api.getShopInfo}/${id}/tag`, { tag: tag });
    if (result.retCode === 0) {
      data = result.data;
    }
  };

  watchEffect(() => {
    getProductsByCategory();
  });
  return { data };
};

export default defineComponent({
  name: "Shop",
  components: {
    ShopItem,
  },
  setup() {
    // 数据源
    const state = reactive<State>({
      products: [],
    });

    const route = useRoute();

    const router = useRouter();

    const { handleClickBack } = backHandler(router);

    const { changeCategory, currentTag } = changeCategoryHandler();

    const { shopInfo } = getShopInfoHandler(route);

    const { products } = toRefs(state);

    return { handleClickBack, shopInfo, tags, currentTag, products, changeCategory };
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
