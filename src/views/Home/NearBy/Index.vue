<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <div class="nearby__content">
      <div class="nearby__content__item" v-for="item in list" :key="item.id">
        <div class="nearby__content__item__img">
          <img :src="item.imgUrl" alt="" />
        </div>
        <div class="nearby__content__item__desc">
          <p class="nearby__content__item__desc__title">{{ item.name }}</p>
          <p class="nearby__content__item__desc__detail">
            <span>月售 {{ item.sales }}</span>
            <span>起送￥{{ item.expressExpensive }}</span>
            <span>基础运费￥{{ item.basicExpensive }}</span>
          </p>
          <p class="nearby__content__item__desc__discount">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, toRefs } from "vue";
import { get } from "../../../utils/request";
import api from "../../../api/Index";
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
  &__content {
    font-size: 0.12rem;
    &__item {
      display: flex;
      margin-bottom: 0.12rem;
      &__img {
        width: 0.56rem;
        height: 0.56rem;
        margin-right: 0.16rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      &__desc {
        flex: 1;
        border-bottom: 1px solid #f1f1f1;
        &__title {
          margin: 0 0 0.08rem 0;
          font-size: 0.16rem;
          color: #333;
        }
        &__detail {
          margin: 0 0 0.08rem 0;
          font-size: 0.13rem;
          color: #333;
          span {
            margin-right: 0.08rem;
          }
        }
        &__discount {
          font-size: 0.13rem;
          color: #e93b3b;
          margin: 0 0 0.12rem 0;
        }
      }
    }
  }
}
</style>
