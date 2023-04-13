<script>
import { store } from '../store.js'
import AppBlogCard from './AppBlogCard.vue';

export default {
    name: "AppGameBlog",
    data() {
        return {
            store,

            currentBlogCard: 0,
            blogCardsView: 3,
        };
    },
    components: { AppBlogCard },

    computed: {

        visibleBlogCards() {
            let start = this.currentBlogCard * this.blogCardsView;
            let end = start + this.blogCardsView;
            return this.store.blogCardList.slice(start, end);
        },

    },
}

</script>

<template>
    <div class="container-centered">
        <div class="title-section">
            <h2>New Game Blogs</h2>
            <div class="row"></div>
        </div>
        <div class="blog-list">
            <AppBlogCard v-for="blogCard in visibleBlogCards" :blogCard="blogCard"></AppBlogCard>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.container-centered {

    .blog-list {
        overflow-x: hidden;
        display: flex;
        gap: 20px;
    }
}
</style>