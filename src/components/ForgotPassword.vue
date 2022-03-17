<template>
    <div class="reset-password">
    <modal v-if="modalActive" :modalMessage="modalMessage" v-on:close-modal="closeModal" />
    <div class="loader" v-if="loader">
      <span></span>
    </div>
    <div class="form-wrap">
      <form class="reset">
        <p class="login-register">
          Back to
          <router-link class="router-link" :to="{ name: 'Login' }">Login</router-link>
        </p>
        <h2>Reset Password</h2>
        <p>Forgot your passowrd? Enter your email to reset it</p>
        <div class="inputs">
          <div class="input">
            <input type="text" placeholder="Email" v-model="email" />
            <img src="../assets/Icons/envelope-regular.svg" alt="" srcset="" class="icon">
          </div>
        </div>
        <button @click.prevent="resetPassword">Reset</button>
        <div class="angle"></div>
      </form>
      <div class="background"></div>
    </div>
  </div>
</template>
<script>
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import Modal from './Modal.vue';
export default {
  components: { Modal },
    name: "ForgotPassword",
    data() {
        return {
        email: "",
        modalActive: false,
        modalMessage: "",
        loader: false,
        };
    },
    methods: {
    resetPassword() {
      if (this.email !== "") {
        this.loader = true;
        const auth = getAuth();
        sendPasswordResetEmail(auth, this.email)
          .then(() => {
            console.log("sent");
            this.modalMessage = "If your account detail is correct, you will receive the mail shortly";
            this.loader = false;
            this.modalActive = true;
          })
          .catch((error) => {
            this.modalMessage = error.code;
            this.loader = false;
            this.modalActive = true;
            console.log(error);
          });
      }else{
        console.log('else');
        this.modalMessage = "Please add data in email section"
        this.modalActive = true
      }
    },
    closeModal() {
      this.modalActive = !this.modalActive;
      this.email = "";
    },
  },
}
</script>
<style >
    
</style>