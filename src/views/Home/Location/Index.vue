<template>
  <div class="location">
    <div class="iconfont location__icon">&#xe66a;</div>
    <div class="location__desc">北京理工大学国防科技园2号楼10层</div>
    <div class="iconfont location__bell">&#xe613;</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Location",
  setup() {
    return {};
  },
});
</script>

<style lang="less" scoped>
@import url("../../../style/variable.less");
@import url("../../../style/mixin.less");
.location {
  padding: 0.16rem 0.18rem;
  color: @content-color-dark;
  font-size: 0.16rem;
  box-sizing: border-box;
  position: relative;
  display: flex;
  &__icon {
    font-size: 0.16rem;
    margin-right: 0.085rem;
  }
  &__desc {
    font-size: 0.16rem;
    padding-right: 0.2rem;
    .text-overflow();
  }
  &__bell {
    font-size: 0.17rem;
    position: absolute;
    top: 0.16rem;
    right: 0.18rem;
  }
}
</style>
