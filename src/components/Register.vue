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
        <div class="input">
          <input type="file" accept="image/*" @change="fileuploaded">
          
        </div>
        <div class="image_preview" v-if="imagedata.length == 1">
          <img :src="profilephoto" alt="" srcset="" style="width: 200px; height: 100px;">
        </div>
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
import axios from 'axios';
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
      imagedata:''
    };
  },
  methods: {
    fileuploaded(event){
      this.imagedata = event.target.files
      // console.log(event.target.files);
      this.profilephoto = URL.createObjectURL(event.target.files[0])
    },
    register() {
      if (
        this.email !== "" &&
        this.password !== "" &&
        this.firstName !== "" &&
        this.lastName !== "" &&
        this.username !== ""
      ) {
        axios
        .post('https://lhmpim.greenhonchos.com/api/test-register', {
          username: this.username,
          firstname: this.firstName,
          lastname: this.lastName,
          profileimg: this.profilephoto,
          password: this.password,
          email: this.email
        })
        .then((response) => {
          console.log(response);
          this.$store.commit("tokenaddition", response.data.data);
          // always use tokenid to store in the cookies but due to lack of api we are saving the email and password
          this.$cookies.set("useremail", response.data.data.email, 0 )
          this.$cookies.set("userepassword", response.data.data.password, 0 )
          console.log(this.$cookies.get("useremail"));
          this.$router.push({ name: "Home" });
        })
        .catch((error) => {
          console.log(error);
        })
      } else {
        this.error = true;
        this.errorMsg = "*Please fill all the data";
      }
    },
  },
};
</script>
<style></style>
