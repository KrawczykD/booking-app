<script lang="ts">
import { defineStore } from 'pinia';
import { reactive } from 'vue';
import IProduct from './IProduct';
import ICategory from './ICategory';
import { ICartItem } from './ICartItem';

import { toggleCategory, addToCart, removeFromCart, findProductById } from './actions';
import { getCartValue } from './getters';

const useStore = defineStore('main', () => {
  let products: Array<IProduct> = [
    {
      title: 'Castle',
      description: 'test description for castle',
      id: 1,
      categoryId: 0,
      imgsrc: 'https://res.cloudinary.com/dmbylcnta/image/upload/w_300,h_300/v1645394117/booking-app/castle1_fgbg2u.jpg',
      price: 90,
      alt: 'img desc',
      orderedQty: 0,
      maxQty: 5
    },
    {
      title: 'Castle 1',
      description: 'test description for Castle 1',
      id: 2,
      categoryId: 0,
      imgsrc: 'https://res.cloudinary.com/dmbylcnta/image/upload/w_300,h_300/v1645394117/booking-app/castle5_lumom6.jpg',
      price: 91,
      alt: 'img desc',
      orderedQty: 0,
      maxQty: 1
    },
    {
      title: 'Castle 2',
      description: 'test description for Castle 2',
      id: 3,
      categoryId: 0,
      imgsrc: 'https://res.cloudinary.com/dmbylcnta/image/upload/w_300,h_300/v1645394117/booking-app/castle1_fgbg2u.jpg',
      price: 92,
      alt: 'img desc',
      orderedQty: 0,
      maxQty: 1
    },
    {
      title: 'Castle 3',
      description: 'test description for Castle 3',
      id: 4,
      categoryId: 0,
      imgsrc: 'https://res.cloudinary.com/dmbylcnta/image/upload/w_300,h_300/v1645394117/booking-app/castle5_lumom6.jpg',
      price: 93,
      alt: 'img desc',
      orderedQty: 0,
      maxQty: 1
    },
    {
      title: 'Castle 4',
      description: 'test description for Castle 4',
      id: 5,
      categoryId: 0,
      imgsrc: 'https://res.cloudinary.com/dmbylcnta/image/upload/w_300,h_300/v1645394117/booking-app/castle2_x5pog8.jpg',
      price: 94,
      alt: 'img desc',
      orderedQty: 0,
      maxQty: 10
    },
    {
      title: 'Castle 5',
      description: 'test description for Castle 5',
      id: 6,
      categoryId: 0,
      imgsrc: 'https://res.cloudinary.com/dmbylcnta/image/upload/w_300,h_300/v1645394117/booking-app/castle2_x5pog8.jpg',
      price: 95,
      alt: 'img desc',
      orderedQty: 0,
      maxQty: 10
    },
    {
      title: 'Castle 6',
      description: 'test description for Castle 6',
      id: 7,
      categoryId: 0,
      imgsrc: 'https://res.cloudinary.com/dmbylcnta/image/upload/w_300,h_300/v1645394117/booking-app/castle6_y6k3pv.jpg',
      price: 96,
      alt: 'img desc',
      orderedQty: 0,
      maxQty: 10
    },
    {
      title: 'Slide',
      description: 'test description for Slide',
      id: 12,
      categoryId: 1,
      imgsrc: 'https://res.cloudinary.com/dmbylcnta/image/upload/w_300,h_300/v1645394849/booking-app/slide2_bpordj.jpg',
      price: 90,
      alt: 'img desc',
      orderedQty: 0,
      maxQty: 8
    },
    {
      title: 'Slide 2',
      description: 'test description for Slide 2',
      id: 10,
      categoryId: 1,
      imgsrc: 'https://res.cloudinary.com/dmbylcnta/image/upload/w_300,h_300/v1645394849/booking-app/slide6_fhbagl.jpg',
      price: 91,
      alt: 'img desc',
      orderedQty: 0,
      maxQty: 10
    },
    {
      title: 'Slide 3',
      description: 'test description for SLide 3',
      id: 0,
      categoryId: 1,
      imgsrc: 'https://res.cloudinary.com/dmbylcnta/image/upload/w_300,h_300/v1645394849/booking-app/slide3_jpmr8g.jpg',
      price: 92,
      alt: 'img desc',
      orderedQty: 0,
      maxQty: 5
    },
    {
      title: 'Slide 4',
      description: 'test description for Slide 4',
      id: 14,
      categoryId: 1,
      imgsrc: 'https://res.cloudinary.com/dmbylcnta/image/upload/w_300,h_300/v1645394849/booking-app/slide1_zipxh7.jpg',
      price: 93,
      alt: 'img desc',
      orderedQty: 0,
      maxQty: 1
    },
    {
      title: 'Mini Golf',
      description: 'test description for Mini Golf',
      id: 15,
      categoryId: 2,
      imgsrc: 'https://res.cloudinary.com/dmbylcnta/image/upload/w_300,h_300/v1645394849/booking-app/golf1_phtmix.jpg',
      price: 90,
      alt: 'img desc',
      orderedQty: 0,
      maxQty: 1
    },
    {
      title: 'Rodeo',
      description: 'test description for Rodeo',
      id: 17,
      categoryId: 3,
      imgsrc: 'https://res.cloudinary.com/dmbylcnta/image/upload/w_300,h_300/v1645394849/booking-app/rodeo1_ietiph.jpg',
      price: 90,
      alt: 'img desc',
      orderedQty: 0,
      maxQty: 1
    }
  ];

  let categories: Array<ICategory> = [
    { title: 'Bouncy Castles', isActive: true, id: 0, color: '#339966' },
    { title: 'Slides', isActive: false, id: 1, color: '#000000' },
    { title: 'Mini Golf', isActive: false, id: 2, color: '#cc3300' },
    { title: 'Rodeo', isActive: false, id: 3, color: '#000066' }
  ];

  let cart = reactive([]) as Array<ICartItem>;

  let activeStep = reactive({ step: 1 });
  let correctAddress = reactive({ isValid: false });

  return { products, categories, cart, activeStep, correctAddress, addToCart, removeFromCart, toggleCategory, getCartValue, findProductById };
});

export default useStore;
</script>
