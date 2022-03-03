<template>
    <div class="blog-card-wrap">
        <div class="blog-cards container">
            <div class="toggle-edit">
                <span>Toggle Editing Post</span>
                <input type="checkbox" name="" id="" v-model="editPost">
            </div>
            <blogCards :post="post" v-for="(post,index) in sampleBlogCards" :key="index"/>
        </div>
    </div>
</template>
<script>
import blogCards from './blogCards.vue'
export default {
    name: "blogs",
    data() {
        return {
            editPost: '',
        }
    },
    computed: {
        sampleBlogCards () {
            return this.$store.state.sampleBlogCards
        },
    },
    components: {
        blogCards,
    }
    
}
</script>
<style  scoped>

</style>