import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    sampleBlogCards: [
      {
        blogTitle: "Blog Card #1",
        blogCoverPhoto: "stock-1",
        blogDate: "May 1, 2021",
      },
      {
        blogTitle: "Blog Card #2",
        blogCoverPhoto: "stock-2",
        blogDate: "May 1, 2021",
      },
      {
        blogTitle: "Blog Card #3",
        blogCoverPhoto: "stock-3",
        blogDate: "May 1, 2021",
      },
      {
        blogTitle: "Blog Card #4",
        blogCoverPhoto: "stock-3",
        blogDate: "May 1, 2021",
      },
    ],
    profileFirstName: null,
    profileLastName: null,
    profileUsername: null,
    profileEmail: null,
    profileInitials: null,
    tokkenId: null,
    blogPhotoPreview: null,

    
    blogPhototitle: null,
    blogPhotoName: null,
    blogPhotoFileURL: null,
    blogPhotoContent: null,
  },
  actions: {
      
  },
  mutations: {
    contentupdation(state, payload) {
      state.blogPhotoContent = payload
    },
    titleupdation(state, payload) {
      state.blogPhototitle = payload
    },
    fileNameChange(state, payload) {
      state.blogPhotoName = payload;
    },
    createFileURL(state, payload) {
      state.blogPhotoFileURL = payload;
    },
    openPhotoPreview(state) {
      state.blogPhotoPreview = !state.blogPhotoPreview;
    },
  }
});
