<template>
  <div class="shop">
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
    <div class="shop__info">
      <ShopItem :data="shopInfo" :hasBorder="false" />
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
</style>
