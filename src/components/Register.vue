<template>
    <div class="form-wrap">
    <form class="register">
      <p class="login-register">
        Already have an account?
        <router-link class="router-link" :to="{ name: 'Login' }">Login</router-link>
      </p>
      <h2>Create Your <br> BlogWithUs Account</h2>
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="First Name" v-model="firstName" />
          <img src="../assets/Icons/user-alt-light.svg" alt="" srcset="" class="icon">
        </div>
        <div class="input">
          <input type="text" placeholder="Last Name" v-model="lastName" />
          <img src="../assets/Icons/user-alt-light.svg" alt="" srcset="" class="icon">
        </div>
        <div class="input">
          <input type="text" placeholder="Username" v-model="username" />
          <img src="../assets/Icons/user-alt-light.svg" alt="" srcset="" class="icon">
        </div>
        <div class="input">
          <input type="text" placeholder="Email" v-model="email" />
          <img src="../assets/Icons/envelope-regular.svg" alt="" srcset="" class="icon">
        </div>
        <div class="input">
          <input type="password" placeholder="Password" v-model="password" />
          <img src="../assets/Icons/lock-alt-solid.svg" alt="" srcset="" class="icon">
        </div>
        <div v-show="error" class="error">{{ this.errorMsg }}</div>
      </div>
      <button @click.prevent="register">Sign Up</button>
      <div class="angle"></div>
    </form>
    <div class="background"></div>
  </div>
</template>
<script>
// first on is for the database and other one is for the authentication

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export default {
    name: "Register",
    data() {
      return {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        error: null,
        errorMsg: "",
      };
    },
  methods: {
        register(){
          if (
                this.email !== "" &&
                this.password !== "" &&
                this.firstName !== "" &&
                this.lastName !== "" &&
                this.username !== ""
              ) {
                const auth = getAuth();
                createUserWithEmailAndPassword(auth, this.email, this.password)
                  .then((userCredential) => {
                    const user = userCredential.user;
                    
                    console.log(user)
                    this.error = false;
                    this.errorMsg = "";
                    this.$router.push({ name: "Home" });
                    // ...
                  })
                  .catch((error) => {
                  //  console.log(error)
                  //  console.log(error.message);
                   this.error = true;
                   this.errorMsg = error.message
                  });
              }
              else{
                this.error = true;
                this.errorMsg = '*Please fill all the data'
              }
        }

   },
}
</script>
<style >
    
</style>