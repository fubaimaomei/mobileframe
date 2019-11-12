import Vue from "vue";
import App from "./App.vue";
import "lib-flexible/flexible";
import store from "./store";
import router from "./router";
import { SPINNER_SHOW, SPINNER_HIDE } from "@/store/mutation-types";
import "amfe-flexible";

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");

router.beforeEach((to, from, next) => {
  store.commit(SPINNER_SHOW);
  next();
});

router.afterEach(() => {
  store.commit(SPINNER_HIDE);
});

document.addEventListener("DOMContentLoaded", function() {
  // 页面重新加载 vuex 数据恢复
});
