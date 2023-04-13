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
            if ( this.currentCard < Math.ceil(this.store.productList.length / this.cardsView) - 1 ) {
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
</style>