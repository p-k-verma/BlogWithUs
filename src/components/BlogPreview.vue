<template>
  <div class="post-view" @click="closethebox">
    <div class="container quillWrapper">
      <!-- <h2>{{ this.$store.state.blogPhototitle }}</h2> -->
      <img :src="$store.state.blogPhotoFileURL" alt="" />
      <!-- <div class="post-content ql-editor" v-html="$store.state.blogPhotoContent"></div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "PostPreview",
  computed: {
    // blogTitle() {
    //   return this.$store.state.blogTitle;
    // },
    // blogHTML() {
    //   return this.$store.state.blogHTML;
    // },
    // blogCoverPhoto() {
    //   return this.$store.state.blogPhotoFileURL;
    // },
  },
  methods: {
    closethebox(){
      this.$store.commit("openPhotoPreview")
    }
  },
};
</script>

<style>

</style>
