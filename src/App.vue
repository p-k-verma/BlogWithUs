<template>
  <div id="app">
    <navbar v-if="!navigation"/>
    <router-view></router-view>
    <fooTer v-if="!navigation"/>
  </div>
</template>

<script>
import navbar from './components/navbar.vue'
import fooTer from './components/footer.vue'
import '../src/components/firebase/firebaseInit';
export default {
  name: 'App',
  data() {
    return {
      navigation: null
    }
  },
  created() {
    this.checkRoute();
  },
  watch: {
    $route(){
      this.checkRoute();
    }
  },
  methods: {
    checkRoute() {
      if (this.$route.name === "Login" || this.$route.name === "Register" || this.$route.name === "ForgotPassword") {
        this.navigation = true;
        return;
      } this.navigation = false;
    },
  },
  components: {
    navbar,
    fooTer,
  }
}
</script>

<style>
</style>
