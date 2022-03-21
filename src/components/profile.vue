<template>
  <div class="profile">
    <!-- <Modal v-if="modalActive" :modalMessage="modalMessage" v-on:close-modal="closeModal" /> -->
    <div class="container">
      <h2>Account Settings</h2>
      <div class="profile-info">
        <div class="initials">{{ $store.state.profileInitials }}</div>
        <div class="admin-badge">
          <img src="../assets/admin.svg" alt="" srcset="" />
          <span>Profile</span>
        </div>
        <div class="input">
          <label for="firstName">First Name:</label>
          <input type="text" id="firstName" v-model="firstName" />
        </div>
        <div class="input">
          <label for="lastName">Last Name:</label>
          <input type="text" id="lastName" v-model="lastName" />
        </div>
        <div class="input">
          <label for="username">Username:</label>
          <input type="text" id="username" v-model="username" />
        </div>
        <div class="input">
          <label for="email">Email:</label>
          <input disabled type="text" id="email" v-model="email" />
        </div>
        <button>Save Changes</button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
    };
  },
  created() {
    this.datafetch();
  },
  methods: {
    datafetch() {
      axios
        .post("https://lhmpim.greenhonchos.com/api/test-login", {
          email: this.$cookies.get("useremail"),
          password: this.$cookies.get("userepassword"),
        })
        .then((response) => {
          this.firstName = response.data.data.firstname;
          this.lastName = response.data.data.lastname;
          this.username = response.data.data.username;
          this.email = response.data.data.email;
        });
    },
  },
};
</script>
<style>
</style>