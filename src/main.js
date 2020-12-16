import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import VueCodeHighlight from "vue-code-highlight";
import "vue-code-highlight/themes/duotone-sea.css";
import "vue-code-highlight/themes/window.css";

createApp(App)
  .use(router)
  .use(VueCodeHighlight)
  .mount("#app");
