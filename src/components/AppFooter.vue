<script>
import { store } from '../store.js'

export default {
    name: 'AppFooter',
    data() {
        return {
            store,
        };
    },

}
</script>

<template>
    <footer>
        <div class="top-footer container-centered">
            <div class="footer-left">
                <p><strong>Address Info</strong></p>
                <span><i class="fa-solid fa-location-dot"></i> 60 29th Street San Francisco, CA 94110 507-Union Trade
                    Center,
                    United States of America</span>
                <span><i class="fa-solid fa-phone"></i> (+00) 123-456-789</span>
                <span><i class="fa-solid fa-envelope"></i> demo@example.com</span>
            </div>
            <div class="footer-center">
                <div v-for="footerLink in store.footerLinks" class="links">
                    <p><strong>{{ footerLink.title }}</strong></p>
                    <ul>
                        <li v-for="link in footerLink.links"><a href="#">{{ link }}</a></li>
                    </ul>
                </div>
            </div>

            <div class="footer-right">
                <p><strong>Our Newsletter</strong></p>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                <div class="newsletter-input">
                    <input type="text">
                    <i class="fa-regular fa-paper-plane"></i>
                </div>

                <div class="socials">
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-google-plus-g"></i>
                    <i class="fa-brands fa-skype"></i>
                    <i class="fa-brands fa-instagram"></i>
                </div>
            </div>
        </div>
        <hr>
        <div class="bottom-footer container-centered">
            <div class="copyright">
                <p>Copiright &copy; Boolean 2023</p>
            </div>
            <div class="credit-cards">
                <div v-for="card in store.payments" class="credit-card-img">
                    <img :src="card.image" alt="">
                </div>
                
            </div>
        </div>
    </footer>
</template>

<style lang="scss">
footer {
    width: 100%;
    background-image: url(/images/footer-bg.png);
    background-size: cover;
    background-position: center;

    .top-footer {
        padding: 7em 0;
        display: flex;
        justify-content: space-between;
        gap: 40px;

        .footer-left {
            display: flex;
            flex-direction: column;
            gap: 20px;
            width: calc(100% / 3);

            p strong {
                font-size: 1.2em;
            }

            span {
                color: rgba(255, 255, 255, 0.459);

                i {
                    color: #f9aa01;
                }
            }
        }

        .footer-center {
            display: flex;
            justify-content: space-around;
            gap: 20px;
            width: calc(100% / 3);

            .links {
                display: flex;
                flex-direction: column;
                gap: 10px;

                p strong {
                    font-size: 1.2em;
                }

                ul {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;

                    li a {
                        color: rgba(255, 255, 255, 0.459);

                        &:hover {
                            text-decoration: underline;
                        }

                    }
                }
            }

        }

        .footer-right {
            width: calc(100% / 3);
            display: flex;
            flex-direction: column;
            gap: 20px;
            align-items: flex-start;


            p strong {
                font-size: 1.2em;
            }

            span {
                color: rgba(255, 255, 255, 0.459);
            }

            .newsletter-input {
                position: relative;

                input {
                    width: 250px;
                    padding: 10px 10px;
                    background-color: white;
                    color: black;
                    border: none;
                    border-radius: 5px;
                    outline: none;
                }

                i {
                    position: absolute;
                    top: 50%;
                    right: 10px;
                    transform: translateY(-50%);
                    color: black;

                    &:hover {
                        cursor: pointer;
                    }
                }
            }

            .socials {
                display: flex;
                gap: 20px;

                i {

                    &:hover {
                        cursor: pointer;
                        color: #f9aa01;
                    }
                }
            }

        }
    }

    hr {
        border: none;
        height: 1px;
        background-color: rgba(255, 255, 255, 0.459);
    }

    .bottom-footer {
       padding: 10px 0;
       display: flex;
       justify-content: space-between;
       align-items: center;

       .copyright {
        color: rgba(255, 255, 255, 0.459);
       }

        .credit-cards {
            display: flex;
            gap: 5px;

            .credit-card-img {
                display: flex;
                align-items: center;
            }
    
        }
    }
}
</style>