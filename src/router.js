import MainPage from "./components/MainPage.vue";
import Login from "./components/Login.vue";

export default [

    {
    path: '/',
    redirect: {
        name: "Login",
    }
    },
    {
      path: "/mainpage",
      name: "MainPage",
      component: MainPage
    },
    {
      path:"/login",
      name: "Login",
      component: Login
    }
  ];