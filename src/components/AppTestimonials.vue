<script>
import { store } from '../store.js'

export default {
    name: 'AppTestimonials',
    data() {
        return {
            store,

            currentUser: 0,
            usersView: 1,
        };
    },

    computed: {

        visibleUsers() {
            let start = this.currentUser * this.usersView;
            let end = start + this.usersView;
            return this.store.users.slice(start, end);
        },

    },

    methods: {
        setCurrentUser(index) {
            this.currentUser = index;
        }
    }
}

</script>

<template>
    <div class="background">

        <div v-for="user in visibleUsers" class="testimonials container-centered">
            <div class="user-image">
                <div id="quote">
                    <img src="/images/icons/quote.png" alt="">
                </div>
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
        <div class="dots">
            <span v-for="(user, index) in store.users" :key="index" class="dot" :class="{ active: index === currentUser }"
                @click="setCurrentUser(index)"></span>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.background {
    margin-bottom: 2em;
    padding: 8em 7em;
    display: flex;
    flex-direction: column;
    gap: 6em;
    overflow-x: hidden;
    background-image: url(/images/parallax.jpg);
    background-size: cover;
    background-position: center;

    .testimonials {
        height: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        text-align: center;

        
        .user-image {
            position: relative;
            
            #quote {
                z-index: 1;
                position: absolute;
                top: 0;
                left: 0;
                padding: 5px 10px;
                background-color: #f9aa01;
                border-radius: 50%;
            }


            > img {
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

    .dots {
        display: flex;
        gap: 5px;
        justify-content: center;

        .dot {
            height: 15px;
            width: 15px;
            margin: 0 2px;
            background-color: white;
            border-radius: 50%;
            display: inline-block;

            &:hover {
                cursor: pointer;
            }
        }

        .dot.active {
            transform: scale(1.3);
            background-color: #f9aa01;
        }

    }




}
</style>