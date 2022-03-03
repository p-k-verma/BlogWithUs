<template>
    <div class="navbar">
      <h1 class="navbar-brand"><router-link to="/">Spark & Shine</router-link></h1>
      <div class="desktop_nav" v-if="!mobile_toggle">
          <ul class="d-flex">
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/blogs">Blogs</router-link></li>
              <li><router-link to="/">Create Post</router-link></li>
              <li><router-link to="/login">Login/Register</router-link></li>
          </ul>
      </div>
      <div class="mobile_toggle" v-if="mobile_toggle" @click="mobile_view">
          <img src="../assets/bars-solid.svg" alt="" srcset="">
      </div>
      <div class="mobile_nav" :class="{active:sidenav}">
          <ul>
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/blogs">Blogs</router-link></li>
              <li><router-link to="/">Create Post</router-link></li>
              <li><router-link to="/login">Login/Register</router-link></li>
          </ul>
      </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            mobile_toggle: false,
            desktopwidth: null,
            sidenav:false
        }
    },
    created() {
        window.addEventListener("resize", this.mobilebarshow);
        this.mobilebarshow();
    },
    methods: {
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