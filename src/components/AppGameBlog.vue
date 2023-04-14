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

    methods: {

        nextSlide() {
            if (this.currentBlogCard < Math.ceil(this.store.blogCardList.length / this.blogCardsView) - 1) {
                this.currentBlogCard++;
            }
        },

        prevSlide() {
            if (this.currentBlogCard > 0) {
                this.currentBlogCard--;
            }
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
            <div class="prev-slide" @click="prevSlide">
                <img src="/images/icons/left-arrow.png" alt="">
            </div>
            <div class="next-slide" @click="nextSlide">
                <img src="/images/icons/right-arrow.png" alt="">
            </div>
            <AppBlogCard v-for="blogCard in visibleBlogCards" :blogCard="blogCard"></AppBlogCard>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container-centered {

    .blog-list {
        padding: 20px;
        border-bottom: 1px solid #f9aa0167;
        overflow-x: hidden;
        display: flex;
        justify-content: space-between;
        
        position: relative;

        .prev-slide {
            z-index: 1;
            position: absolute;
            top: 50%;
            left: 5px;
            transform: translateY(-50%);

            &:hover {
                content: url(/images/icons/left-arrow-hover.png);
                cursor: pointer;
            }
        }

        .next-slide {
            position: absolute;
            top: 50%;
            right: 5px;
            transform: translateY(-50%);

            &:hover {
                content: url(/images/icons/right-arrow-hover.png);
                cursor: pointer;
            }
        }
    }
}
</style>