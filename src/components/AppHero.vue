<script>
import { store } from '../store.js'

export default {
    name: 'AppHero',
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
    height: 100vh;
    display: flex;
    justify-content: center;
    background-image: url(/images/jumbo.png);
    background-size: cover;
    background-position: top;

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
            border-top-left-radius: 5px;
            border-top-right-radius: 50px;
            border-bottom-left-radius: 50px;
            border-bottom-right-radius: 5px;
            color: black;
            font-size: 2em;
        }

        h1 {
            width: 50%;
            font-size: 4em;
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
                transition: all .6s;

                &:hover {
                    cursor: pointer;
                    background-color: #f9aa01;
                    border-bottom: 3px solid white;
                }
            }
        } 
    }
}
</style>