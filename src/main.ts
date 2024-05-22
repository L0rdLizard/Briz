import { createApp } from "vue";

import App from "@/App.vue";
import { router } from "@/router";
import { store } from "@/store";
import 'swiper/swiper-bundle.css';
import "@/scss/variables.scss";
import "bootstrap/scss/bootstrap.scss";
import "bootstrap-icons/font/bootstrap-icons.css";


const app = createApp(App).use(store).use(router);
router.isReady().then(() => app.mount("#app"));
