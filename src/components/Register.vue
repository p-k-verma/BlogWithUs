<template>
  <div class="form-wrap">
    <form class="register">
      <p class="login-register">
        Already have an account?
        <router-link class="router-link" :to="{ name: 'Login' }"
          >Login</router-link
        >
      </p>
      <h2>
        Create Your <br />
        BlogWithUs Account
      </h2>
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="First Name" v-model="firstName" />
          <img
            src="../assets/Icons/user-alt-light.svg"
            alt=""
            srcset=""
            class="icon"
          />
        </div>
        <div class="input">
          <input type="text" placeholder="Last Name" v-model="lastName" />
          <img
            src="../assets/Icons/user-alt-light.svg"
            alt=""
            srcset=""
            class="icon"
          />
        </div>
        <div class="input">
          <input type="text" placeholder="Username" v-model="username" />
          <img
            src="../assets/Icons/user-alt-light.svg"
            alt=""
            srcset=""
            class="icon"
          />
        </div>
        <div class="input">
          <input type="text" placeholder="Email" v-model="email" />
          <img
            src="../assets/Icons/envelope-regular.svg"
            alt=""
            srcset=""
            class="icon"
          />
        </div>
        <!-- <div class="input">
          <input type="file" accept="image/*" @change="fileuploaded" />
        </div>
        <div class="image_preview" v-if="imagedata.length == 1">
          <img
            :src="profilephoto"
            alt=""
            srcset=""
            style="width: 200px; height: 100px"
          />
        </div> -->
        <div class="input">
          <input type="password" placeholder="Password" v-model="password" />
          <img
            src="../assets/Icons/lock-alt-solid.svg"
            alt=""
            srcset=""
            class="icon"
          />
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
import axios from "axios";
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
      profilephoto: "",
      imagedata: "",
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
      ){
      axios
      .post('http://localhost:1337/api/auth/local/register',{
        "firstName": this.firstName,
        "lastName": this.lastName,
        "username": this.username,
        "email": this.email,
        "password": this.password
      })
      .then((response)=>{
        this.$cookies.set("userjwt", response.data.jwt, 0);
        this.$cookies.set("useremail", response.data.user.email, 0);
        this.$cookies.set("userfirstName", response.data.user.firstName, 0);
        this.$cookies.set("userlastName", response.data.user.lastName, 0);
        this.$cookies.set("username", response.data.user.username, 0);
        this.$router.push({ name: "Home" });
      })
      .catch((error) => {
        this.errorMsg = `*${error.response.data.error.message}`;
        this.error = true;
        console.log(error.response.data.error.message,"this is error");
      });
    }else {
        this.error = true;
        this.errorMsg = "*Please fill all the data";
      }
    },
    fileuploaded(event) {
      this.imagedata = event.target.files;
      // console.log(event.target.files);
      this.profilephoto = URL.createObjectURL(event.target.files[0]);
    }
    },
};
</script>
<style></style>
