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

    methods: {

        isSaled() {
            return this.card.sale;
        }
    },

    props: {
        card: Object,
    },

}

</script>

<template>
    <div class="card">
        <div class="sale" v-show="isSaled()">
            <p><strong>{{ card.saleAmount }}</strong></p>
        </div>
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
                <span class="original-price" :class="{ through: card.sale === true }">{{ card.price }}</span>
                <span class="saled-price" v-if="isSaled"> {{ card.saledPrice }}</span>
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
    position: relative;

    .sale {
        position: absolute;
        top: 10px;
        left: 10px;
        padding: 5px;
        font-size: .8em;
        border-top-left-radius: 3px;
        border-top-right-radius: 15px;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 3px;
        background-color: #f9aa01;
        color: black;
    }

    img {
        display: block;
    }

    .card-info {
        display: flex;
        flex-direction: column;
        gap: 10px;
        position: relative;
        padding: 10px;
        background-color: #170e1f;

        .price {

            .through {
                margin-right: 5px;
                font-size: .8em;
                text-decoration: line-through;
                color: rgba(255, 255, 255, 0.425);
            }

            .saled-price {
                color: #f9aa01;
            }

        }

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

                &:hover {
                    cursor: pointer;
                    color: #f9aa01;
                }
            }

            span:last-child {
                border-right: none;
            }


        }
    }
}
</style>