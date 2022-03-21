<template>
    <div class="navbar">
      <h1 class="navbar-brand"><router-link to="/">Spark & Shine</router-link></h1>
      <div class="desktop_nav" v-if="!mobile_toggle">
          <ul class="d-flex align-items-center">
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/blogs">Blogs</router-link></li>
              <li><router-link to="/createpost">Create Post</router-link></li>
              <li v-if="!this.$store.state.profileInitials"><router-link to="/login">Login/Register</router-link></li>
              <div v-else class="profile" @click="toggle_details">
                  <span>{{ this.$store.state.profileInitials }}</span>
                  <div class="profile-menu" v-show="toggle_detail">
                      <span class="triangle"></span>
                      <div class="info">
                          <p class="initials">{{ this.$store.state.profileInitials }}</p>
                          <div class="right">
                              <p>{{ this.$store.state.profileFirstName + " " + this.$store.state.profileLastName }}</p>
                              <p>@{{this.$store.state.profileUsername}}</p>
                              <p>{{this.$store.state.profileEmail}}</p>
                          </div>
                      </div>
                      <div class="options">
                          <div class="option">
                              <img src="../assets/profile.svg" alt="" srcset="">
                              <router-link to="/profile">Profile</router-link>
                          </div>
                          <div class="option">
                              <img src="../assets/admin.svg" alt="" srcset="">
                              <router-link to="/admin">Admin</router-link>
                          </div>
                          <div class="option">
                              <img src="../assets/signout.svg" alt="" srcset="">
                              <!-- <router-link @click="signout"></router-link> -->
                              <a href="" @click="signout">SignOut</a>
                          </div>
                      </div>
                  </div>
              </div>
          </ul>
      </div>
      <div class="mobile_toggle" v-if="mobile_toggle" @click="mobile_view">
          <img src="../assets/bars-solid.svg" alt="" srcset="">
      </div>
      <div class="mobile_nav" :class="{active:sidenav}">
          <ul>
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/blogs">Blogs</router-link></li>
              <li><router-link to="/createpost">Create Post</router-link></li>
              <li><router-link to="/login">Login/Register</router-link></li>
          </ul>
      </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            mobile_toggle: false,
            desktopwidth: null,
            sidenav:false,
            toggle_detail: false
        }
    },
    created() {
        window.addEventListener("resize", this.mobilebarshow);
        this.mobilebarshow();
        this.reloadclientdata();
    },
    methods: {
        signout(){
            console.log("hiiii");
            this.$cookies.remove("useremail");
            this.$cookies.remove("userepassword");
            // this.$router.push({ name: "Home" });
        },
        reloadclientdata(){
            axios
            .post('https://lhmpim.greenhonchos.com/api/test-login', {
            email: this.$cookies.get("useremail"),
            password: this.$cookies.get("userepassword"),
            })
            .then((response) => {
                this.$store.commit("tokenaddition", response.data.data)
            })
        },
        toggle_details(){
            this.toggle_detail = !this.toggle_detail
        },
        mobile_view() {
            this.sidenav = !this.sidenav
        },
        mobilebarshow(){
            this.desktopwidth = window.innerWidth
            if (this.desktopwidth < 767) {
                 this.mobile_toggle = true
            }
        }
    }
}
</script>
<style>
    
</style>