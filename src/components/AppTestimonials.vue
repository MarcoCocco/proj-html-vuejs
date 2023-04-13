<script>
import { store } from '../store.js'

export default {
    name: 'AppTestimonials',
    data() {
        return {
            store,
        };
    },
}

</script>

<template>
    <div class="background">

        <div v-for="user in store.users" class="testimonials container-centered">
            <div class="user-image">
                <img :src="user.image" alt="">
            </div>
            <div class="user-name">
                <span><strong>{{ user.name }}</strong></span>
                <span class="title-job"> <strong> ({{ user.job }})</strong></span>
            </div>
            <div class="comment">
                <p>{{ user.comment }}</p>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>

.background {
    background-image: url(/images/parallax.jpg);
    background-size: cover;
    background-position: center;

    .testimonials {
        padding: 8em 7em;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        text-align: center;

        .user-image {

            img {
                border: 2px solid #f9aa01;
              border-radius: 50%;  
            }
            
        }

        .user-name {

            .title-job {
                color: #f9aa01;
            }
        }
    }
}
</style>