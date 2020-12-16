import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import VueCodeHighlight from "vue-code-highlight";
import "vue-code-highlight/themes/prism-okaidia.css";
import "vue-code-highlight/themes/window.css";

createApp(App)
  .use(router)
  .use(VueCodeHighlight)
  .mount("#app");
