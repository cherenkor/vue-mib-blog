import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import "./registerServiceWorker";

import './plugins/vuetify';
import './plugins/vue-scroll-indicator';
import './plugins/vue-infinite-scroll';
import './plugins/tinymce';

import './mixins/global';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
