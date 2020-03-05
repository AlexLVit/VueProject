import Vue from "vue";
import Vuelidate from 'vuelidate';
import App from "./App.vue";
import SecondPage from "./components/SecondPage.vue";
import VueRouter from 'vue-router'

Vue.use(VueRouter);

Vue.use(Vuelidate);


const routes = [

  {
      path: '/secondpage',
      name: 'SecondPage',
      component: SecondPage
  }
];

const router = new VueRouter({routes});

new Vue({
  render: h => h(App),
  router,
}).$mount("#app");


