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

    ],

    users: [
        {
            image: '/images/users/t2-1-100x100_left.jpg',
            name: 'Tizius Caius',
            job: 'Dentist',
            comment: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati similique modi blanditiis distinctio Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati similique modi blanditiis distinctio Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati similique modi blanditiis distinctio',

        },
        {
            image: '/images/users/t4-1-100x100_left.jpg',
            name: 'Sempronius Lorem',
            job: 'Logopedist',
            comment: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati similique modi blanditiis distinctio Lorem ipsum dolor sit, amet consectetur adipisicing elit. amet consectetur adipisicing elit. Obcaecati similique modi blanditiis distinctio ',

        },
        {
            image: '/images/users/t5-1-100x100_left.jpg',
            name: 'Ipsia Loretta',
            job: 'Lift of Hypothesis',
            comment: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati similique modi blanditiis distinctio Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati similique modi blanditiis distinctio Lorem ipsum dolor sit',

        },
    ],

    blogCardList: [
        {
            image: '/images/blog_images/01.jpg',
            date: 'Jan 18, 2021',
            comment: 0,
            title: "Titolo dell'articolo 1",
        },
        {
            image: '/images/blog_images/02.jpg',
            date: 'Jan 17, 2021',
            comment: 23,
            title: "Titolo dell'articolo 2",
        },
        {
            image: '/images/blog_images/03.jpg',
            date: 'Jan 16, 2021',
            comment: 11,
            title: "Titolo dell'articolo 3",
        },
        {
            image: '/images/blog_images/04.jpg',
            date: 'Jan 15, 2021',
            comment: 6,
            title: "Titolo dell'articolo 4",
        },
        {
            image: '/images/blog_images/05.jpg',
            date: 'Jan 14, 2021',
            comment: 45,
            title: "Titolo dell'articolo 5",
        },
        {
            image: '/images/blog_images/06.jpg',
            date: 'Jan 13, 2021',
            comment: 34,
            title: "Titolo dell'articolo 6",
        },
        {
            image: '/images/blog_images/07.jpg',
            date: 'Jan 12, 2021',
            comment: 21,
            title: "Titolo dell'articolo 7",
        },
        {
            image: '/images/blog_images/08.jpg',
            date: 'Jan 11, 2021',
            comment: 4,
            title: "Titolo dell'articolo 8",
        },
        {
            image: '/images/blog_images/09.jpg',
            date: 'Jan 10, 2021',
            comment: 14,
            title: "Titolo dell'articolo 9",
        },
        {
            image: '/images/blog_images/10.jpg',
            date: 'Jan 9, 2021',
            comment: 1,
            title: "Titolo dell'articolo 10",
        },
    ]
});
