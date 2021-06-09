<template>
  <div class="banner">
    <div class="banner__wrapper">
      <img
        src="https://img30.360buyimg.com/mobilecms/jfs/t1/132517/9/18568/162168/60bf2613E8dc7a106/fa82cd354fa5c954.gif"
        alt="图片"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Banner",
});
</script>

<style lang="less" scoped>
.banner {
  font-size: 0;
  padding: 0 0.18rem;
  // 可以通过设置height:0 然后给padding-bottom来填充空间，防止网速过慢图片没加载完的问题
  &__wrapper {
    height: 0;
    padding-bottom: 37.4%;
  }
  img {
    width: 100%;
  }
}
</style>
