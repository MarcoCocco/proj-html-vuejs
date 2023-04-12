<script>
import { store } from '../store.js'

export default {
    name: 'AppSpecialCategory',
    data() {
        return {
            store,
        };
    }
}
</script>

<template>
    <div class="category container-centered">
        <div class="title-section">
            <h2>Special Category</h2>
            <div class="row"></div>
        </div>
        <div class="card-list">
            <div v-for="card in store.categories" class="card">
                <img :src="card.image" alt="">
                <div class="card-title">
                    <p><strong>{{ card.name }}</strong></p>
                    <span><a href="#">Shop Now</a></span>
                </div>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.category {

    .title-section {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;

        .row {
            margin-top: 10px;
            width: 30px;
            height: 2px;
            background-color: #f9aa01;
        }
    }

    .card-list {
        padding: 2em 0;
        display: flex;
        gap: 30px;

        .card {
            position: relative;
            width: 100%;
            box-shadow: 0px 10px 12px 0px rgba(0, 0, 0, 0.8);

            img {
                display: block;
                width: 100%;
            }

            .card-title {
                width: 100%;
                padding: 20px 10px;
                position: absolute;
                bottom: 0;
                left: 0;
                background-color: #170e1f93;
                transition: all .6s;

                &:hover {
                    background-color: #170e1f;
                }

                span a{
                    font-size: .8em;

                    &:hover {
                        text-decoration: underline;
                        color: #f9aa01;
                    }
                }
                
            }
        }
    }
}
</style>