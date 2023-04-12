import { reactive } from 'vue';

export const store = reactive({

    navLinks: [
        {
            name: 'Home',
            url: '#',
        },
        {
            name: 'Shop',
            url: '#',
        },
        {
            name: 'Blog',
            url: '#',
        },
        {
            name: 'Media',
            url: '#',
        },
        {
            name: 'ShortCode',
            url: '#',
        },
        {
            name: 'Features',
            url: '#',
        },
    ],

    services: [
        {
            name: 'Free Delivery',
            description: 'Free Shipping On All Order',
            icon: '/images/icons/service1.png',
            iconHover: '/images/icons/service1-hover.png'
        },
        {
            name: 'Money Return',
            description: 'Back Guarantee in 7 days',
            icon: '/images/icons/service2.png',
            iconHover: '/images/icons/service2-hover.png'
        },
        {
            name: 'Member Discount',
            description: 'On every order over $130.00',
            icon: '/images/icons/service3.png',
            iconHover: '/images/icons/service3-hover.png'
        },
        {
            name: 'Return Policy',
            description: 'Support 24 hours a day',
            icon: '/images/icons/service4.png',
            iconHover: '/images/icons/service4-hover.png'
        }
        
    ],

    categories: [
        {
            name: 'Battlefield 3',
            image: '/images/category-image-02-446x550_t.jpg',
        },
        {
            name: 'PUBG: Battlegrounds',
            image: '/images/category-image-01-446x550_t.jpg',
        },
        {
            name: 'Jump Force',
            image: '/images/category-image-03-446x550_t.jpg',
        },
    ]

});
