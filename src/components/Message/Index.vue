<template>
  <teleport to="body" v-if="show">
    <div class="message">{{ msg }}</div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
interface stateType {
  show?: boolean;
  msg?: string;
}
const state = reactive<stateType>({
  show: false,
  msg: "",
});
export const $message = (msg: string): void => {
  state.show = true;
  state.msg = msg;
  setTimeout(() => {
    state.show = false;
    state.msg = "";
  }, 2000);
};
export default defineComponent({
  name: "Message",
  setup() {
    const { show, msg } = toRefs(state);
    return { show, msg };
  },
});
</script>

<style lang="less" scoped>
.message {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0.1rem;
  border-radius: 0.2rem;
  background-color: rgba(11, 13, 14, 0.6);
  font-size: 0.12rem;
  color: #fff;
}
</style>
