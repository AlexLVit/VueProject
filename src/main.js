import Vue from "vue";
import Vuelidate from 'vuelidate';
import App from "./App.vue";
import VueRouter from 'vue-router'
import Routes from "./router";
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios);

Vue.use(VueRouter);

Vue.use(Vuelidate);


const router = new VueRouter({
  routes:Routes,
  mode: 'history'});

new Vue({
  render: h => h(App),
  router:router,
}).$mount("#app");


