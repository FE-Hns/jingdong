<template>
  <div class="shop__info">
    <ShopItem :data="shopInfo" :hasBorder="false" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { get } from "../../../utils/request";
import api from "../../../api/Index";
import ShopItem from "../../../components/Shop/ShopItem.vue";
import { cartController } from "../../../common/cartController";
import { Store, useStore } from "vuex";

// 处理获取商铺信息
const getShopInfoHandler = (store: Store<any>, shopId: string) => {
  const { setShopName } = cartController(store, null);
  let shopInfo = ref({});
  const getData = async () => {
    const result = await get(`${api.getShopInfo}/${shopId}`, {});
    if (result?.retCode === 0) {
      shopInfo.value = result?.data;
      // 存储商铺信息
      setShopName(shopId, shopInfo);
    }
  };
  onMounted(() => {
    getData();
  });

  return { shopInfo };
};

export default defineComponent({
  name: "Info",
  components: {
    ShopItem,
  },
  setup() {
    // 获取路径
    const route = useRoute();
    // 获取store
    const store = useStore();
    // 获取商铺id
    const shopId = typeof route.params?.id === "string" ? route.params?.id : "";
    // 获取店铺信息
    const { shopInfo } = getShopInfoHandler(store, shopId);

    return { shopInfo };
  },
});
</script>

<style lang="less" scoped>
@import url("../../../style/variable.less");
.shop__info {
  padding: 0 0.18rem;
}
</style>
