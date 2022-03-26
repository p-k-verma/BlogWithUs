<template>
  <div class="create-post">
    <BlogPreview v-show="this.$store.state.blogPhotoPreview" />
    <div class="loader" v-if="loading">
      <span>hii</span>
    </div>
    <div class="container">
      <div :class="{ invisible: !error }" class="err-message" v-if="error">
        <p><span>Error:</span>{{ this.errorMsg }}</p>
      </div>
      <div class="blog-info">
        <input type="text" placeholder="Enter Blog Title" v-model="blogTitle" />
        <div class="upload-file">
          <label for="blog-photo">Upload Cover Photo</label>
          <input
            type="file"
            ref="blogPhoto"
            id="blog-photo"
            @change="fileChange"
            accept=".png, .jpg, ,jpeg"
          />
          <button
            @click="openPreview"
            class="preview"
            :class="{ 'button-inactive': !this.$store.state.blogPhotoFileURL }"
          >
            Preview Photo
          </button>
          <span>File Chosen: {{ this.$store.state.blogPhotoName }}</span>
        </div>
      </div>
      <div class="editor">
        <vue-editor v-model="content"></vue-editor>
      </div>
      <div class="blog-actions">
        <button @click="uploadBlog">Publish Blog</button>
        <router-link class="router-button" :to="{ name: 'ViewBlog' }" @click.native="previewCheck">Post Preview</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import BlogPreview from "./BlogPreview.vue"
import { VueEditor } from "vue2-editor";
export default {
  components: {
    VueEditor,
    BlogPreview,
  },
  data() {
    return {
      content: "<h1>Some initial content</h1>",
      file: "",
      error: null,
      errorMsg: null,
      loading: null,
      blogTitle: "",
    };
  },
  methods: {
    previewCheck(){
      this.$store.commit('titleupdation', this.blogTitle);
      this.$store.commit('contentupdation', this.content);
      console.log("check",this.$store.state.blogPhototitle);
    },
    fileChange() {
      this.file = this.$refs.blogPhoto.files[0];
      const fileName = this.file.name;
      this.$store.commit("fileNameChange", fileName);
      this.$store.commit("createFileURL", URL.createObjectURL(this.file));
    },
    openPreview() {
      this.$store.commit("openPhotoPreview");
      console.log(this.$store.state.blogPhotoPreview,"hiiiii");
    },
    uploadBlog() {
      if (this.file == "" && this.blogTitle.length == 0 || this.file == "" || this.blogTitle.length == 0) {
        this.error = true;
        this.errorMsg = " Please ensure add Title and/or upload a cover photo!";
        setTimeout(() => {
          this.error = false;
        }, 2500);
      } else {
        this.$store.commit('titleupdation', this.blogTitle);
        this.$store.commit('contentupdation', this.content);
        this.$router.push({ name: "ViewBlog" });
      }
    },
  },
};
</script>
<style>
</style>