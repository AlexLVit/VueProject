import MainPage from "./components/MainPage.vue";
import Login from "./components/Login.vue";

export default [

    {
      path: "/",
      name: "MainPage",
      component: MainPage
    },
    {
      path:"/login",
      name: "Login",
      component: Login
    }
  ];