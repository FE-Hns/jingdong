<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <div class="nearby__content">
      <div class="nearby__content__item" v-for="n in 10" :key="n">
        <div class="nearby__content__item__img">
          <img
            src="https://img30.360buyimg.com/vendersettle/s120x120_jfs/t1/181887/35/6221/81162/60b0f50aE50e95668/d98645c5e41281fb.png"
            alt=""
          />
        </div>
        <div class="nearby__content__item__desc">
          <p class="nearby__content__item__desc__title">沃尔玛</p>
          <p class="nearby__content__item__desc__detail">
            <span>月售1万+</span>
            <span>起送￥0</span>
            <span>基础运费￥5</span>
          </p>
          <p class="nearby__content__item__desc__discount">
            VIP尊享满89元减4元运费券（每月3张)
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "nearby",
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
