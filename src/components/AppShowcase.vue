<script>
import { store } from '../store.js'

export default {
    name: 'AppShowcase',
    data() {
        return {

            store,
            originalIcon: ''
        };
    },

    methods: {
        mouseOver(service) {
            this.originalIcon = service.icon;
            service.icon = service.iconHover;
        },

        mouseLeave(service) {
            service.icon = this.originalIcon;
        }
    }
}

</script>

<template>
    <div class="services container-centered">
        <div v-for="(service, index) in store.services" class="advantages">
            <img :src="service.icon" @mouseover="mouseOver(service)" @mouseleave="mouseLeave(service)" alt="Service Icon">
            <div class="advantage-service">
                <p><strong>{{ service.name }}</strong></p>
                <p>{{ service.description }}</p>
            </div>
            <hr v-if="index !== store.services.length - 1">
        </div>
    </div>

    <div class="showcase container-centered">
        <div class="most-popular">
            <div class="animated-gradient"></div>
            <img src="/images/hogwarts-legacy.png" alt="">
            <div class="most-popular-title">
                <h2>Most Popular</h2>
                <h1>Hogwarts Legacy</h1>
            </div>
        </div>
        <div class="latest">
            <img src="/images/resident-evil-4-remake.png" alt="">
            <div class="animated-gradient"></div>
            <div class="latest-title">
                <h2>Latest Game</h2>
                <h1>Resident Evil 4 Remake</h1>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.services {
    padding: 4em;
    display: flex;
    justify-content: space-evenly;

    .advantages {
        display: flex;
        align-items: center;
        gap: 20px;

        img {

            &:hover {
                cursor: pointer;
            }
        }

        hr {
            border: none;
            width: 1px;
            height: 40px;
            background-color: rgba(255, 255, 255, 0.5);
            align-self: center;
        }

        p {
            color: rgba(255, 255, 255, 0.5);

            strong {
                font-size: 1em;
                color: white;

                &:hover {
                    color: #f9aa01;
                    cursor: pointer;
                }
            }

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

    .most-popular {
        position: relative;
        box-shadow: 0px 10px 12px 0px rgba(0, 0, 0, 0.8);

        img {
            display: block;
            width: 100%;
        }

        .most-popular-title {
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

    .latest {
        position: relative;
        box-shadow: 0px 10px 12px 0px rgba(0, 0, 0, 0.8);

        img {
            display: block;
            width: 100%;
        }

        .latest-title {
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
