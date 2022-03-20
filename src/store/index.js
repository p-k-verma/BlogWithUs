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
  },
  actions: {
      
  },
  mutations: {
    tokenaddition(state, payload){
      state.tokkenId = payload.api_token
      state.profileFirstName = payload.firstname
      state.profileLastName = payload.lastname
      state.profileUsername = payload.username
      state.profileEmail = payload.email
      state.profileInitials = payload.firstname.slice(0,1).toUpperCase() + payload.lastname.slice(0,1).toUpperCase()
    }
  }
});
