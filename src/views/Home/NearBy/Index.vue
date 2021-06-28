<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <ShopItem v-for="item in list" :key="item.id" :data="item" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, toRefs } from "vue";
import { get } from "../../../utils/request";
import api from "../../../api/Index";
import ShopItem from "../../../components/Shop/ShopItem.vue";
interface listType {
  id: number | string;
  basicExpensive: number;
  description: string;
  expressExpensive: number;
  imgUrl: string;
  name: string;
  sales: number;
}
export default defineComponent({
  name: "nearby",
  components: { ShopItem },
  setup() {
    let data = reactive<{ list: listType[] }>({
      list: [],
    });

    const getNearByList = async () => {
      const res = await get(api.nearbyList, {});
      if (res?.retCode === 0) {
        data.list = res?.data;
      }
    };

    onMounted(() => {
      getNearByList();
    });

    const { list } = toRefs(data);

    return { list };
  },
});
</script>

<style lang="less" scoped>
@import url("../../../style/variable.less");
.nearby {
  padding: 0.16rem 0.18rem;
  margin-top: 0.1rem;
  &__title {
    font-size: 0.18rem;
    color: #333;
    font-weight: normal;
    margin: 0 0 0.12rem 0;
  }
}
</style>
