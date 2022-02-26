<template>
  <div id="app">
    <navbar/>
    <home/>
    <fooTer/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import navbar from './components/navbar.vue'
import home from './components/home.vue'
import fooTer from './components/footer.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    navbar,
    fooTer,
    home,
  }
}
</script>

<style>

</style>
