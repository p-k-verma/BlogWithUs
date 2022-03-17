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
import { store } from  "./store/index"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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

const firebaseConfig = {
  apiKey: "AIzaSyA0Gx4i9-XQcGyzXzagUMXMBnYo_q5AjZw",
  authDomain: "oursblog-d6c66.firebaseapp.com",
  databaseURL: "https://oursblog-d6c66-default-rtdb.firebaseio.com",
  projectId: "oursblog-d6c66",
  storageBucket: "oursblog-d6c66.appspot.com",
  messagingSenderId: "852134169054",
  appId: "1:852134169054:web:fed4fe8e5b8eb9ec86b54f",
  measurementId: "G-KWM16S3D86"
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);




