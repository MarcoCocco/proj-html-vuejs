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
    ],

    productList: [
        {
            imagePath: '/images/products/01-300x300.jpg',
            name: 'Titolo Prodotto 1',
            price: '$100.00',
            saledPrice: '$90.00',
            vote: 3,
            sale: true,
            saleAmount: '10%',
        },
        {
            imagePath: '/images/products/02-300x300.jpg',
            name: 'Titolo Prodotto 2',
            price: '$80.00',
            saledPrice: '',
            vote: 4,
            sale: false,
            saleAmount: '',
        },
        {
            imagePath: '/images/products/03-300x300.jpg',
            name: 'Titolo Prodotto 3',
            price: '$150.00',
            saledPrice: '$105.00',
            vote: 5,
            sale: true,
            saleAmount: '30%',
        },
        {
            imagePath: '/images/products/04-300x300.jpg',
            name: 'Titolo Prodotto 4',
            price: '$49.90',
            saledPrice: '$39.92',
            vote: 3,
            sale: true,
            saleAmount: '20%',
        },
        {
            imagePath: '/images/products/05-300x300.jpg',
            name: 'Titolo Prodotto 5',
            price: '$243.00',
            saledPrice: '',
            vote: 1,
            sale: false,
            saleAmount: '',
        },
        {
            imagePath: '/images/products/06-300x300.jpg',
            name: 'Titolo Prodotto 6',
            price: '$59.99',
            saledPrice: '',
            vote: 2,
            sale: false,
            saleAmount: '',
        },
        {
            imagePath: '/images/products/07-300x300.jpg',
            name: 'Titolo Prodotto 7',
            price: '$23.99',
            saledPrice: '',
            vote: 5,
            sale: false,
            saleAmount: '',
        },
        {
            imagePath: '/images/products/08-300x300.jpg',
            name: 'Titolo Prodotto 8',
            price: '$110.00',
            saledPrice: '$99.00',
            vote: 4,
            sale: true,
            saleAmount: '10%',
        },
        {
            imagePath: '/images/products/09-300x300.jpg',
            name: 'Titolo Prodotto 9',
            price: '$149.99',
            vote: 1,
            sale: false,
            saleAmount: '',
        },
        {
            imagePath: '/images/products/10-300x300.jpg',
            name: 'Titolo Prodotto 10',
            price: '$200.00',
            saledPrice: '$120.00',
            vote: 5,
            sale: true,
            saleAmount: '40%',
        },
        {
            imagePath: '/images/products/11-300x300.jpg',
            name: 'Titolo Prodotto 11',
            price: '$349.99',
            saledPrice: '$209,99',
            vote: 2,
            sale: true,
            saleAmount: '40%',
        },
        {
            imagePath: '/images/products/12-300x300.jpg',
            name: 'Titolo Prodotto 12',
            price: '$440.00',
            saledPrice: '',
            vote: 3,
            sale: false,
            saleAmount: '',
        },
        {
            imagePath: '/images/products/13-300x300.jpg',
            name: 'Titolo Prodotto 13',
            price: '$149.99',
            saledPrice: '$119.99',
            vote: 1,
            sale: true,
            saleAmount: '20%',
        },
        {
            imagePath: '/images/products/14-300x300.jpg',
            name: 'Titolo Prodotto 14',
            price: '$366.00',
            saledPrice: '',
            vote: 5,
            sale: false,
            saleAmount: '',
        },
        {
            imagePath: '/images/products/15-300x300.jpg',
            name: 'Titolo Prodotto 15',
            price: '$349.99',
            saledPrice: '',
            vote: 2,
            sale: false,
            saleAmount: '',
        },
        {
            imagePath: '/images/products/16-300x300.jpg',
            name: 'Titolo Prodotto 16',
            price: '$123.00',
            saledPrice: '$98,40',
            vote: 3,
            sale: true,
            saleAmount: '20%',
        },
        
    ]

});
