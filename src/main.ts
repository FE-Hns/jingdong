import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";
import "./style/index.less";
import Message from "./components/Message/Index.vue";
import Confirm from "./components/Confirm";

const app = createApp(App);
app.use(store);
app.use(router);
app.component(Message.name, Message);
app.use(Confirm);
app.mount("#app");
