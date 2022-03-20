import Vue from 'vue'
import App from './App.vue'
import '../src/assets/bootstrap.min.css'
import '../src/assets/style.css'
import VueRouter from 'vue-router'
import Home from "./components/home.vue"
import Blogs from "./components/blogs.vue"
import Login from "./components/Login.vue"
import Register from "./components/Register.vue"
import ForgotPassword from "./components/ForgotPassword.vue"
import Admin from "./components/admin.vue"
import Profile from "./components/profile.vue"
import { store } from  "./store/index"



Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home"
    },
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: Blogs,
    meta: {
      title: "Blogs"
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title: "Login"
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      title: "Register"
    },
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: ForgotPassword,
    meta: {
      title: "Forgot Password"
    },
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    meta: {
      title: "Admin"
    },
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: {
      title: "Profile"
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.Base_URL,
  routes,
});


// this is for meta updation
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | BlogWithUs`;
  next();
});


export default router;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
