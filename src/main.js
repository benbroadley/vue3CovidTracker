import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import todoStore from "./store/todo";

import VueCodeHighlight from "vue-code-highlight";
import "vue-code-highlight/themes/prism-okaidia.css";
import "vue-code-highlight/themes/window.css";

createApp(App)
  .use(router)
  .use(VueCodeHighlight)
  .use(todoStore)
  .mount("#app");
