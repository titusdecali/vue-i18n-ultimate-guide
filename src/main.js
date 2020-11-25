import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// vue-clickaway to close langaugeSwitcher when clicking outside of it
import { directive as onClickaway } from "vue-clickaway";

Vue.directive("on-clickaway", onClickaway);

// i18n
import i18n from "./i18n";

Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
