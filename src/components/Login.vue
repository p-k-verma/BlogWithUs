<template>
    <div class="form-wrap">
    <form class="login">
      <p class="login-register">
        Don't have an account?
        <router-link class="router-link" :to="{ name: 'Register' }">Register</router-link>
      </p>
      <h2>Login to Blog With Us</h2>
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="Email" v-model="email" />
          <!-- <email class="icon" /> -->
          <img src="../assets/envelope-regular.svg" alt="" srcset="" class="icon">
        </div>
        <div class="input">
          <input type="password" placeholder="Password" v-model="password" />
          <!-- <password class="icon" /> -->
          <img src="../assets/lock-alt-solid.svg" alt="" class="icon">
        </div>
        <div v-show="error" class="error">{{ this.errorMsg }}</div>
      </div>
      <router-link class="forgot-password" :to="{ name: 'ForgotPassword' }">Forgot your password?</router-link>
      <button @click.prevent="signIn">Sign In</button>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
    name: "Login",
    data() {
    return {
      email: "",
      password: "",
      error: null,
      errorMsg: "",
    };
  },
  methods: {
    signIn() {
      if (this.email !== "" && this.password !== "") {
           axios
        .post('http://localhost:1337/api/auth/local', {
          "identifier": this.email,
          "password": this.password
        })
        .then((response) => {
          this.$cookies.set("userjwt", response.data.jwt, 0);
          this.$cookies.set("useremail", response.data.user.email, 0);
          this.$cookies.set("userfirstName", response.data.user.firstName, 0);
          this.$cookies.set("userlastName", response.data.user.lastName, 0);
          this.$cookies.set("username", response.data.user.username, 0);
          this.$router.push({ name: "Home" })
        })
        .catch(() => {
        this.errorMsg = `Invalid email or password`;
        this.error = true;
      });
      } else {
        this.error = true;
        this.errorMsg = "*Please fill all the data";
      }
    },
  },

}
</script>
<style >
    
</style>