<script>
import { store } from '../store.js'

export default {
    name: 'AppProductCard',
    data() {
        return {
            icons: [
                {
                    iconPath: '<i class="fa-solid fa-bag-shopping"></i>'
                },
                {
                    iconPath: '<i class="fa-solid fa-heart"></i>'
                },
                {
                    iconPath: '<i class="fa-solid fa-maximize"></i>'
                },
                {
                    iconPath: '<i class="fa-solid fa-eye"></i>'
                },
            ],

            store,
            showIcons: false,
        };
    },

    props: {
        card: Object,
    },

}

</script>

<template>
    <div class="card">
        <img :src="card.imagePath" alt="">
        <div @mouseover="showIcons = true" @mouseleave="showIcons = false" class="card-info">
            <div class="vote">
                <i v-for=" star in card.vote" class="fa-solid fa-star"></i>
                <i v-for=" star in 5 - card.vote" class="far fa-star"></i>
            </div>
            <div class="title">
                <p>{{ card.name }}</p>
            </div>
            <div class="price">
                <p>{{ card.price }}</p>
            </div>
            <transition name="slide-fade">
                <div class="icons" v-if="showIcons">
                    <span v-for="icon in icons" v-html="icon.iconPath"></span>
                </div>
            </transition>
        </div>
    </div>
</template>

<style lang="scss" scoped>
/* Animazione hover icone cards */
.slide-fade-leave-active {
    transition: all 1s ease;
}

.slide-fade-leave-to {
    opacity: 0;
}

/* -------------------------------- */

.card {
    width: calc(100% / 4);
    box-shadow: 0px 10px 12px 0px rgba(0, 0, 0, 0.8);

    img {
        display: block;
    }

    .card-info {
        display: flex;
        flex-direction: column;
        gap: 10px;
        position: relative;
        width: 300px;
        padding: 10px;
        background-color: #170e1f;

        .vote {
            font-size: .8em;
            color: #f9aa01;
        }

        .title {
            font-weight: bold;
        }

        .icons {
            position: absolute;
            bottom: 0;
            left: 0;
            display: flex;
            justify-content: space-around;

            span {
                padding: 5px 29px;
                background-color: #170e1f;
                border: 1px solid rgba(255, 255, 255, 0.281);
                border-bottom: none;
                border-left: none;
            }

            span:last-child {
                border-right: none;
            }
        }
    }
}
</style>