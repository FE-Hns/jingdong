<template>
  <div class="home">
    <div class="wrapper">
      <Location />
      <Search />
      <Banner />
      <Category />
    </div>
    <Docker />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Docker from "./Docker/Index.vue";
import Location from "./Location/Index.vue";
import Search from "./Search/Index.vue";
import Banner from "./Banner/Index.vue";
import Category from "./Category/Index.vue";

export default defineComponent({
  name: "Home",
  components: {
    Docker,
    Location,
    Search,
    Banner,
    Category,
  },
});
</script>

<style lang="less" scoped>
.wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0.5rem;
  overflow-y: auto;
}
</style>
