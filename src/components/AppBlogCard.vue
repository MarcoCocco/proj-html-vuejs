<script>
import { store } from '../store.js'

export default {
    name: 'AppBlogCard',
    data() {
        return {
            store,
        };
    },

    props: {
        blogCard: Object,
    },

}

</script>

<template>
    <div class="blog-card">
        <div class="card-image">
            <img :src="blogCard.image" alt="">
        </div>
        <div class="blog-info">
            <p><i class="fa-solid fa-calendar-days"></i> {{ blogCard.date }}</p>
            <p><i class="fa-solid fa-comments"></i> {{ blogCard.comment }} Comment</p>
        </div>
        <div class="blog-title">
            <p><strong>{{ blogCard.title }}</strong></p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.blog-card {
    padding: 2em 0;

    .card-image {
        padding-bottom: 5px;
        ;

        img {
            width: 100%;
        }
    }

    .blog-info {
        display: flex;
        gap: 10px;

        p {
            font-size: .7em;

            i {
                color: #f9aa01;
            }
        }
    }
}
</style>