import { createApp } from "vue";
import { createPinia } from "pinia";
import "./index.css";
import Vue3Lottie from "vue3-lottie";
import VueSplide from "@splidejs/vue-splide";

import App from "./App.vue";
import router from "./router";

//Vue3 Marquee
import Vue3Marquee from "vue3-marquee";
import "vue3-marquee/dist/style.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Vue3Lottie);
app.use(VueSplide);
app.use(Vue3Marquee);
app.mount("#app");
