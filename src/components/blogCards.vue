<template>
    <div class="blog-card">
        <div class="icons">
            <div class="icon">
                <img src="../assets/edit-regular.svg" alt="" srcset="" class="edit">
            </div>
            <div class="icon">
                <img src="../assets/trash-regular.svg" alt="" srcset="" class="trash">
            </div>
        </div>
       
        <img :src="require(`../assets/${post.blogCoverPhoto}.jpg`)" alt="" srcset=""  class="img-fluid">

        <div class="info">
            <div class="card_detail">
                <h4>{{post.blogTitle}}</h4>
                <h6>Posted on: {{ post.blogDate }}</h6>
            </div>
            <router-link class="link" to="#" >
                View The Post <img src="../assets/arrow-right-light.svg" alt="" srcset="" class="arrow">
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: "blogCards",
    props: [
        "post",
    ],
    data() {
        return {
            
        }
    },
}
</script>
<style>
    
</style>