import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import axios from "axios";
import router from './routes' // loads from src/router/index.js
import App from './App.vue'
import VueResource from 'vue-resource'

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";


Vue.use(VueResource)
Vue.use(BootstrapVue,  axios);
Vue.config.productionTip = false;



new Vue({
  render: h => h(App),
  router
}).$mount("#app");
