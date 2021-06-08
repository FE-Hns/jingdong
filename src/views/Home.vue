<template>
  <div class="home">
    <Docker />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Docker from "./Docker.vue";

export default defineComponent({
  name: "Home",
  components: {
    Docker,
  },
});
</script>
