import { createApp } from "vue";
import Antd from "ant-design-vue";
import { createPinia } from "pinia";
import "./style.scss";
import router from "./router";
//@ts-ignore
import App from "./App.vue";
import "ant-design-vue/dist/reset.css";
import "./permission";
const app = createApp(App);

app.use(Antd);
app.use(createPinia());
app.use(router);
app.mount("#app");
