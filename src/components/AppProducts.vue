<script>
import { store } from '../store.js'
import AppProductCard from './AppProductCard.vue'

export default {
    name: 'AppProduct',
    data() {
        return {

            store,

            showIcons: false,
            currentCard: 0,
            cardsView: 4,
        };

    },

    computed: {

        visibleCards() {
            let start = this.currentCard * this.cardsView;
            let end = start + this.cardsView;
            return this.store.productList.slice(start, end);
        },

    },

    methods: {

        nextSlide() {
            if (this.currentCard < Math.ceil(this.store.productList.length / this.cardsView) - 1) {
                this.currentCard++;
            }
        },

        prevSlide() {
            if (this.currentCard > 0) {
                this.currentCard--;
            }
        },

    },

    components: { AppProductCard }

}

</script>

<template>
    <div class="product container-centered">
        <div class="title-section">
            <h2>Our Products</h2>
            <div class="row"></div>
        </div>
        <div class="product-categories">
            <div class="featured"><strong>Featured</strong></div>
            <div class="new"><strong>New Arrival</strong></div>
            <div class="best"><strong>Best Sellers</strong></div>
        </div>
        <div class="slide-button">
            <div class="prev-slide" @click="prevSlide">
                <img src="/images/icons/left-arrow.png" alt="">
            </div>
            <div class="next-slide" @click="nextSlide">
                <img src="/images/icons/right-arrow.png" alt="">
            </div>

            <div class="products-card-list">
                <AppProductCard v-for="card in visibleCards" :card="card"></AppProductCard>
            </div>
        </div>
    </div>

    <div class="showcase container-centered">
        <div class="discount-game">
            <div class="animated-gradient"></div>
            <img src="/images/elden-ring.png" alt="">
            <div class="discount">
                <h2>20% Discount</h2>
                <h1>Elden Ring</h1>
            </div>
        </div>
        <div class="discount-game">
            <img src="/images/horizon.png" alt="">
            <div class="animated-gradient"></div>
            <div class="discount">
                <h2>20% Discount</h2>
                <h1>Horizon: Forbidden West</h1>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.product {

    .title-section {
        display: flex;
        flex-direction: column;
        align-items: center;

        .row {
            margin-top: 10px;
            width: 30px;
            height: 2px;
            background-color: #f9aa01;
        }
    }

    .product-categories {
        padding: 2em;
        display: flex;
        justify-content: center;

        >* {
            font-size: .8em;
            padding: 10px 20px;
            border: 1px solid #f9aa0169;

            &:hover {
                cursor: pointer;
                color: #f9aa01;
            }

        }

        .featured {
            border-right: none;
        }

        .new {
            border-right: none;
        }

    }

    .slide-button {
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
            z-index: 1;
            position: absolute;
            top: 50%;
            right: 5px;
            transform: translateY(-50%);

            &:hover {
                content: url(/images/icons/right-arrow-hover.png);
                cursor: pointer;
            }
        }

        .products-card-list {
            position: relative;
            display: flex;
            justify-content: center;
            gap: 20px;
            overflow-x: hidden;
            scroll-behavior: smooth;
            padding-bottom: 2em;
        }
    }
}

.showcase {
    padding-bottom: 4em;
    position: relative;
    display: flex;
    gap: 40px;
    justify-content: space-between;
    align-items: center;

    .animated-gradient {
        z-index: 1;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        &:hover {
            cursor: pointer;
            animation: animateBg 1s linear forwards 1;
            background-image: linear-gradient(300deg, #00000000, #00000000, #00000000, #00000000, #ffffff28, #ffffff71, #ffffff33, #00000000, #00000000, #ffffff00, #00000000);
            background-size: 400% 100%;

            @keyframes animateBg {
                0% {
                    background-position: 100% 0%;
                }

                100% {
                    background-position: 0% 0%;
                }
            }

        }
    }
    .discount-game {
        position: relative;
        box-shadow: 0px 10px 12px 0px rgba(0, 0, 0, 0.8);

        img {
            display: block;
            width: 100%;
        }

        .discount {
            width: 60%;
            display: flex;
            flex-flow: column;
            align-items: flex-start;
            position: absolute;
            top: 50%;
            right: 0;
            transform: translateY(-50%);

            h2 {
                padding: 0 25px;
                background-color: #f9aa01;
                border-top-left-radius: 5px;
                border-top-right-radius: 50px;
                border-bottom-left-radius: 50px;
                border-bottom-right-radius: 5px;
                color: black;
            }

            h1 {
                font-size: 2.5em;
            }
        }

    }
}
</style>