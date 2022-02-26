<template>
    <div class="blog-wrapper">
        <div class="blog-content">
            <div>
                <h2 v-if="post.welcomeScreen">{{ post.title }}</h2>
                <h2 v-else>{{ post.title }}</h2>
                <p v-if="post.welcomeScreen">{{ post.blogPost }}</p>
                <p v-else class="content-preview">{{ post.blogHTML }}</p>
                <router-link class="link link-light" v-if="post.welcomeScreen" to="#">
                    Login/Register <img src="../assets/arrow-right-light.svg" class="arrow arrow-light" alt="">
                </router-link>
                <router-link class="link" v-else to="#">
                    View the Post <img src="../assets/arrow-right-light.svg" class="arrow" alt="" srcset="">
                </router-link>
            </div>
        </div>
        <div class="blog-photo">
                <img v-if="post.welcomeScreen" :src="require(`../assets/${post.photo}.jpg`)" alt="" class="img-fluid">
                <img v-else :src="require(`../assets/${post.blogCoverPhoto}.jpg`)" alt="" class="img-fluid">
            </div>
    </div>
</template>
<script>
export default {
    props:[
        'post',
    ],
    data() {
        return {
            
        }
    },
}
</script>
<style scoped>
.blog-wrapper {
  display: flex;
  flex-direction: row;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  overflow: hidden;
}



.blog-wrapper .blog-content div {
    max-width: 375px;
}
/* .blog-wrapper .blog-content:nth-child(even) {
    order: 2!important;
}
.blog-wrapper .blog-photo:nth-child(even) {
    order: 1!important;
} */
.home .blog-wrapper:nth-child(even){
    flex-direction: row-reverse;
}
.home .blog-wrapper:first-child .blog-content {
    background-color: #303030;
    color: white;
}
.blog-wrapper .blog-content {
    display: flex;
    flex: 3;
}
.blog-wrapper .blog-photo {
    flex: 4;
    display: flex;
}
.blog-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 4;
}
</style>