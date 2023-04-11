<script>
import { store } from '../store.js'

export default {
    data() {
        return {

            store,
        }
    }
}

</script>

<template>
    <div class="hero-container">
        <div class="hero-title container-centered">
            <h3>Upcoming Stock</h3>
            <h1>Resident Evil 3 Remake</h1>
            <div class="shop-button">
                <button class="btn btn-shop">Shop Now</button>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.hero-container {
    display: flex;
    justify-content: center;
    width: 100%;
    height: calc(100vh - 118px);
    background-image: url(/images/jumbo.png);
    background-size: cover;
    background-position: center;

    .hero-title {
        width: 100%;
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        align-items: flex-start;
        gap: 1em;


        h3 {
            margin-left: 20px;
            padding: 0 25px;
            background-color: #f9aa01;
            color: black;
            font-size: 2em;
        }

        h1 {
            width: 50%;
            font-size: 5em;
        }

        .shop-button {

            .btn-shop {
                margin-top: 3em;
                padding: 15px 30px;
                border: none;
                border-radius: 10px;
                background-color: white;
                color: black;
                font-family: 'Oxanium', cursive;
                font-size: 1.2em;
                font-weight: bold;
                border-bottom: 3px solid #f9aa01;
                transition: all .2s;

                &:hover {
                    cursor: pointer;
                    transform: scale(1.1);
                    box-shadow: 0px 4px 8px 0px rgb(0, 0, 0);
                }
            }
        } 
    }
}
</style>