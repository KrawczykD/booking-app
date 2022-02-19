<template>
  <Layout>
    <Header>
      <Calendar>
        <DatePicker></DatePicker>
        <DatePicker></DatePicker>
      </Calendar>
    </Header>
    <Main>
      <button class="btn btn-warning text-white w-100" disabled>Minimum order value is 600 £</button>
      <Categories>
        <CategoriesItem class="bg-success">Bouncy Castles</CategoriesItem>
        <CategoriesItem class="bg-danger">Slides</CategoriesItem>
        <CategoriesItem class="bg-info">Balls Pool</CategoriesItem>
        <CategoriesItem class="border border-3 border-warning text-warning">Accessories</CategoriesItem>
      </Categories>
      <Carusele v-on:goodsItemClicked="addToCart" v-bind:slides="slides" v-bind:controlsEnable="true" v-bind:durationTime="1000"></Carusele>
      <Cart>
        <CartItem v-for="(item, index) in cart" v-bind:key="index">
          <template v-slot:title>{{ item.title }}</template>
          <template v-slot:description>{{ item.description }}</template>
          <template v-slot:button>
            <button v-on:click="removeFromCart(item.id)" class="btn btn-danger">X</button>
          </template>
        </CartItem>
      </Cart>
    </Main>
  </Layout>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import Header from './components/Header/Header.vue';
import Layout from './components/Layout/Layout.vue';
import DatePicker from './components/DatePicker/DatePicker.vue';
import Calendar from './components/Calendar/Calendar.vue';
import Main from './components/Main/Main.vue';
import Cart from './components/Cart/Cart.vue';
import CartItem from './components/CartItem/CartItem.vue';
import Categories from './components/Categories/Categories.vue';
import CategoriesItem from './components/CategoriesItem/CategoriesItem.vue';
import Carusele from './components/Carusele/Carusele.vue';
export default defineComponent({
  setup() {
    var slides = reactive([
      {
        title: 'Castle 1',
        description: 'test description',
        id: 0,
        imgsrc: 'https://via.placeholder.com/150?text=slide1',
        price: '90£',
        alt: 'img desc'
      },
      {
        title: 'Castle 1',
        description: 'test description',
        id: 1,
        imgsrc: 'https://via.placeholder.com/150?text=slide2',
        price: '91£',
        alt: 'img desc'
      },
      {
        title: 'Castle 2',
        description: 'test description',
        id: 2,
        imgsrc: 'https://via.placeholder.com/150?text=slide3',
        price: '92£',
        alt: 'img desc'
      },
      {
        title: 'Castle 3',
        description: 'test description',
        id: 3,
        imgsrc: 'https://via.placeholder.com/150?text=slide4',
        price: '93£',
        alt: 'img desc'
      },
      {
        title: 'Castle 4',
        description: 'test description',
        id: 4,
        imgsrc: 'https://via.placeholder.com/150?text=slide4',
        price: '94£',
        alt: 'img desc'
      },
      {
        title: 'Castle 5',
        description: 'test description',
        id: 5,
        imgsrc: 'https://via.placeholder.com/150?text=slide5',
        price: '95£',
        alt: 'img desc'
      },
      {
        title: 'Castle 6',
        description: 'test description',
        id: 6,
        imgsrc: 'https://via.placeholder.com/150?text=slide6',
        price: '96£',
        alt: 'img desc'
      },
      {
        title: 'Castle 7',
        description: 'test description',
        id: 7,
        imgsrc: 'https://via.placeholder.com/150?text=slide7',
        price: '97£',
        alt: 'img desc'
      },
      {
        title: 'Castle 8',
        description: 'test description',
        id: 8,
        imgsrc: 'https://via.placeholder.com/150?text=slide8',
        price: '98£',
        alt: 'img desc'
      },
      {
        title: 'Castle 9',
        description: 'test description',
        id: 9,
        imgsrc: 'https://via.placeholder.com/150?text=slide9',
        price: '99£',
        alt: 'img desc'
      },
      {
        title: 'Castle 10',
        description: 'test description',
        id: 10,
        imgsrc: 'https://via.placeholder.com/150?text=slide10',
        price: '100£',
        alt: 'img desc'
      }
    ]);

    let cart: Array<any> = reactive([]);

    let addToCart = function (id: any, itemsArray: Array<any>) {
      let indexItemToRemove = itemsArray.findIndex((item) => item.id === id);
      cart.push(itemsArray[indexItemToRemove]);
      itemsArray.splice(indexItemToRemove, 1);
    };

    let removeFromCart = function (id: any) {
      let indexItemToRemove = cart.findIndex((item) => item.id === id);
      slides.push(cart[indexItemToRemove]);
      cart.splice(indexItemToRemove, 1);
    };

    return { slides, addToCart, cart, removeFromCart };
  },

  components: { Layout, Header, DatePicker, Calendar, Main, Cart, CartItem, Categories, CategoriesItem, Carusele }
});
</script>

<style></style>
