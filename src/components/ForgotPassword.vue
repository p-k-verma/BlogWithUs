<template>
    <div class="reset-password">
    <modal v-if="modalActive" :modalMessage="modalMessage" v-on:close-modal="closeModal" />
    <loading v-if="loading" />
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
import Modal from './Modal.vue';
import Loading from './Loading.vue';
export default {
    name: "ForgotPassword",
    data() {
        return {
        email: "",
        modalActive: false,
        modalMessage: "",
        loading: null,
        };
    },
    component: {
        Modal,
        Loading,
    },
    methods: {
    // resetPassword() {
    
    // },
    closeModal() {
      this.modalActive = !this.modalActive;
      this.email = "";
    },
  },
}
</script>
<style >
    
</style>