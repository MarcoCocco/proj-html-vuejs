<script>
import { store } from '../store.js'

export default {
    data() {
        return {
            store,

            searchBarVisible: false,
            active: false,
        }
    },

}
</script>

<template>
    <div class="header-container">
        <div class="contact-info container-centered">
            <div class="left">
                <span class="whishlist">Wishlist(0)</span>
                <hr>
                <div class="dropdown-menu">
                    <span @click="active = !active" class="help-menu">Need Help?
                    <i class="fa-solid fa-chevron-down"></i></span>
                    <!-- dropdown menu-->
                    <Transition name="slide-fade-down">
                        <div class="menu-active" v-if="active">
                            <ul>
                                <li><strong>Contact Us</strong></li>
                                <li><strong>Live Chat</strong></li>
                                <li><strong>F.A.Q.</strong></li>
                            </ul>
                        </div>
                    </Transition>
                </div>
            </div>
            <div class="right">
                <span>Call 24/7.800-8754-987</span>
            </div>
        </div>
        <hr>
        <!-- HEADER -->
        <header class="container-centered">
            <div class="header-left">
                <div class="logo">
                    <img src="/images/logo.png" alt="GAMEHOAX Logo">
                </div>
            </div>
            <div class="header-center">
                <ul>
                    <li v-for="link in store.navLinks"> <strong><a :href="link.url">{{ link.name }}</a></strong></li>
                </ul>
            </div>
            <div class="header-right">
                <div class="search">
                    <div class="search-bar">
                        <!-- search-bar a comparsa al click dell'icona della lente-->
                        <Transition name="slide-fade">
                            <input v-if="searchBarVisible" type="text" placeholder="Cerca nel nostro sito">
                        </Transition>
                    </div>
                    <img @click="searchBarVisible = !searchBarVisible" src="/images/icons/nav-icon2.png" alt="">
                </div>
                <div class="profile">
                    <img src="/images/icons/nav-icon4.png" alt="">
                </div>
                <div class="credit">
                    <img src="/images/icons/nav-icon6.png" alt="">
                    <span>(0) &pound;0.00</span>
                </div>

            </div>
        </header>
    </div>
</template>

<style lang="scss" scoped>
/* Animazione search-bar */
.slide-fade-enter-active {
    transition: all 0.6s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.6s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}
/* ------------------------- */

/* Animazione dropdown-menu */
.slide-fade-down-enter-active {
    transition: all 0.4s ease-out;
}

.slide-fade-down-leave-active {
    transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-down-enter-from,
.slide-fade-down-leave-to {
    transform: translateY(-10px);
    opacity: 0;
}
/* ------------------------------- */

.header-container {
    background-color: #1d1427;

    .contact-info {
        padding: 10px 0;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;

        .dropdown-menu {

            .menu-active {
                width: 100px;
                position: absolute;
                top: 35px;
                left: 100px;
                z-index: 2;
                padding: 10px;
                border-radius: 5px;
                font-size: .8em;
                background-color: white;
                color: black;
                box-shadow: 0px 7px 10px 0px rgba(0,0,0,0.8);

                ul {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;

                    li {

                        &:hover {
                            cursor: pointer;
                            text-decoration: underline;
                        }
                    }
                }

            }
        }

        .left {
            display: flex;
            gap: 10px;

            .whishlist {

                &:hover {
                    cursor: pointer;
                    text-decoration: underline;
                }
            }

            .help-menu {

                &:hover {
                    cursor: pointer;
                }
            }
        }

        hr {
            border: none;
            width: 1px;
            height: 15px;
            background-color: rgba(255, 255, 255, 0.5);
            align-self: center;
        }
    }

    hr {
        border: none;
        height: 1px;
        background-color: rgba(255, 255, 255, 0.5);
    }

    header {
        padding: 20px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .header-left .logo {
            display: flex;
        }

        .header-center {
            ul {
                display: flex;
                gap: 50px;

                li a {

                    &:hover {

                        color: #f9aa01;
                    }
                }
            }
        }

        .header-right {
            display: flex;
            align-items: center;
            gap: 30px;

            .search {
                display: flex;
                align-items: center;
                gap: 20px;

                img {

                    &:hover {
                        cursor: pointer;
                        content: url(/images/icons/nav-icon1.png);
                    }
                }



                .search-bar {

                    input {
                        outline: none;
                        padding: 5px 10px;
                        border: none;
                        border-radius: 50px;
                        border-bottom: 2px solid #f9aa01;
                        background-color: white;
                        color: black;
                    }
                }
            }

            .profile {
                display: flex;

                &:hover {
                    cursor: pointer;
                    content: url(/images/icons/nav-icon3.png);
                }
            }

            .credit {
                display: flex;
                align-items: center;
                gap: 6px;



                img {

                    &:hover {
                        cursor: pointer;
                        content: url(/images/icons/nav-icon5.png);
                    }
                }

                span {
                    color: #f9aa01;

                    &:hover {
                        cursor: pointer;
                        text-decoration: underline;
                    }
                }
            }

        }
    }
}
</style>