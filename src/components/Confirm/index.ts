import { createVNode, render } from "vue";
import type { App } from "vue";
import ConfirmComponent from "./src/Index.vue";

const Confirm: any = (options: any) => {
  const container = document.createElement("div");
  const vm = createVNode(ConfirmComponent, options);
  render(vm, container);
  document.body.appendChild(container);
};

export default {
  install(app: App) {
    app.config.globalProperties.$confirm = Confirm;
  },
};
