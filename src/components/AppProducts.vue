<script>
import { store } from '../store.js'
import AppProductCard from './AppProductCard.vue'

export default {
    name: 'AppProduct',
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
        <div class="products-card-list">
            <div class="prev-slide">
                <img src="/images/icons/left-arrow.png" alt="">
            </div>
            <div class="next-slide">
                <img src="/images/icons/right-arrow.png" alt="">
            </div>
            <AppProductCard v-for="card in store.productList" :card="card"></AppProductCard>
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

    .products-card-list {
        position: relative;
        display: flex;
        gap: 20px;
        overflow-x: hidden;
        padding-bottom: 2em;

        .prev-slide {
            position: absolute;
            top: 50%;
            left: 5px;
            transform: translateY(-50%);
        }

        .next-slide {
            position: absolute;
            top: 50%;
            right: 5px;
            transform: translateY(-50%);
        }
    }
}
</style>