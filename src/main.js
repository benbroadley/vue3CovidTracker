import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Import all agGrid Enterprise modules
import { ModuleRegistry, AllModules } from "@ag-grid-enterprise/all-modules";
ModuleRegistry.registerModules(AllModules);
import "../node_modules/@ag-grid-community/core/dist/styles/ag-grid.css";
import "../node_modules/@ag-grid-community/core/dist/styles/ag-theme-alpine.css";

createApp(App)
  .use(router)
  .mount("#app");
