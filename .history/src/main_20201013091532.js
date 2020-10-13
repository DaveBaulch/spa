import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import GlobalStyles from './assets/styles/main.css' // main scss
import SASSStyles from './assets/sass/_base-styles.css' // main scss

Vue.config.productionTip = false;
Vue.use(GlobalStyles)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
