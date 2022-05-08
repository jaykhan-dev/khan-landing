import { createApp } from "vue";
import { createPinia } from "pinia";
import "./index.css";
import Vue3Lottie from "vue3-lottie";
import VueSplide from "@splidejs/vue-splide";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Vue3Lottie);
app.use(VueSplide);
app.mount("#app");
