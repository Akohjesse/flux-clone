import { createApp } from "vue";
import App from "./App.vue";
import nullResponsive from "null-responsive-vue";
import "null-responsive-vue/styles.css";

createApp(App).use(nullResponsive).mount("#app");
