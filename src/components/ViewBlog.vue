<template>
  <div class="">
    <div class="container">
      <h2>{{ this.$store.state.blogPhototitle }}</h2>
      <h4>Posted on: {{ (new Date()).toString().split(' ').splice(1,3).join(' ') }}</h4>
      <img :src="$store.state.blogPhotoFileURL" alt="" />
      <div class="post-content" v-html="$store.state.blogPhotoContent"></div>
      <div class="blog-actions">
        <router-link class="router-button" :to="{ name: 'ViewBlog' }" @click.native="previewCheck">Publish Blog</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ViewBlog",
  data() {
    return {
      
    };
  },
  // async mounted() {
  //   this.currentBlog = await this.$store.state.blogPosts.filter((post) => {
  //     return post.blogID === this.$route.params.blogid;
  //   });
  // },
};
</script>
<style>
    
</style>