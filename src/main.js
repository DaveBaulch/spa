import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import GlobalStyles from './assets/styles/main.css' // main scss
import SASStyles from './assets/sass/_base-styles.scss' // main scss

Vue.config.productionTip = false;
Vue.use(GlobalStyles)
Vue.use(SASStyles)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
