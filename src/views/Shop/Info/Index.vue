<template>
  <div class="shop__info">
    <ShopItem :data="shopInfo" :hasBorder="false" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useRoute, RouteLocationNormalizedLoaded } from "vue-router";
import { get } from "../../../utils/request";
import api from "../../../api/Index";
import ShopItem from "../../../components/Shop/ShopItem.vue";

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

export default defineComponent({
  name: "Info",
  components: {
    ShopItem,
  },
  setup() {
    // 获取路径
    const route = useRoute();
    // 获取店铺信息
    const { shopInfo } = getShopInfoHandler(route);

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
