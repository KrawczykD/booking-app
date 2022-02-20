/* eslint-disable @typescript-eslint/no-explicit-any */
<template>
  <Layout>
    <Header>
      <Calendar>
        <DatePicker>Start:</DatePicker>
        <DatePicker>End:</DatePicker>
      </Calendar>
    </Header>
    <Main>
      <button class="btn btn-warning text-white w-100" disabled>Minimum order value is 600 £</button>
      <Categories>
        <CategoriesItem
          v-for="(category, index) in categories"
          v-on:click="toggleCategory(category)"
          v-bind:key="index"
          :style="category.isActive ? { color: category.color, border: '4px solid ' + category.color } : { backgroundColor: category.color, border: '4px solid ' + category.color }"
          >{{ category.title }}</CategoriesItem
        >
      </Categories>
      <Carusele v-on:goodsItemClicked="addToCart" v-bind:slides="filteredItems" v-bind:controlsEnable="true" v-bind:durationTime="1000"></Carusele>
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
import { computed, defineComponent, reactive } from 'vue';
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
    let categories = reactive([
      { title: 'Bouncy Castles', isActive: true, id: 0, color: '#' + ((Math.random() * 0xbbbbbb) << 0).toString(16) },
      { title: 'Slides', isActive: false, id: 1, color: '#' + ((Math.random() * 0xbbbbbb) << 0).toString(16) },
      { title: 'Ball Pit', isActive: false, id: 2, color: '#' + ((Math.random() * 0xbbbbbb) << 0).toString(16) },
      { title: 'Bouncy Castles', isActive: false, id: 3, color: '#' + ((Math.random() * 0xbbbbbb) << 0).toString(16) }
    ]);

    var slides = reactive([
      {
        title: 'Castle 1',
        description: 'test description',
        id: 1,
        categoryId: 0,
        imgsrc: 'https://via.placeholder.com/150?text=slide1',
        price: '90£-0',
        alt: 'img desc'
      },
      {
        title: 'Castle 1',
        description: 'test description',
        id: 2,
        categoryId: 0,
        imgsrc: 'https://via.placeholder.com/150?text=slide2',
        price: '91£-0',
        alt: 'img desc'
      },
      {
        title: 'Castle 2',
        description: 'test description',
        id: 3,
        categoryId: 0,
        imgsrc: 'https://via.placeholder.com/150?text=slide3',
        price: '92£-0',
        alt: 'img desc'
      },
      {
        title: 'Castle 3',
        description: 'test description',
        id: 4,
        categoryId: 0,
        imgsrc: 'https://via.placeholder.com/150?text=slide4',
        price: '93£-0',
        alt: 'img desc'
      },
      {
        title: 'Castle 4',
        description: 'test description',
        id: 5,
        categoryId: 0,
        imgsrc: 'https://via.placeholder.com/150?text=slide4',
        price: '94£-0',
        alt: 'img desc'
      },
      {
        title: 'Castle 5',
        description: 'test description',
        id: 6,
        categoryId: 0,
        imgsrc: 'https://via.placeholder.com/150?text=slide5',
        price: '95£-0',
        alt: 'img desc'
      },
      {
        title: 'Castle 6',
        description: 'test description',
        id: 7,
        categoryId: 0,
        imgsrc: 'https://via.placeholder.com/150?text=slide6',
        price: '96£-0',
        alt: 'img desc'
      },
      {
        title: 'Castle 7',
        description: 'test description',
        id: 8,
        categoryId: 0,
        imgsrc: 'https://via.placeholder.com/150?text=slide7',
        price: '97£-0',
        alt: 'img desc'
      },
      {
        title: 'Castle 8',
        description: 'test description',
        id: 9,
        categoryId: 0,
        imgsrc: 'https://via.placeholder.com/150?text=slide8',
        price: '98£-0',
        alt: 'img desc'
      },
      {
        title: 'Castle 9',
        description: 'test description',
        id: 10,
        categoryId: 0,
        imgsrc: 'https://via.placeholder.com/150?text=slide9',
        price: '99£-0',
        alt: 'img desc'
      },
      {
        title: 'Castle 10',
        description: 'test description',
        id: 11,
        categoryId: 0,
        imgsrc: 'https://via.placeholder.com/150?text=slide10',
        price: '100£-0',
        alt: 'img desc'
      },
      {
        title: 'Castle 1',
        description: 'test description',
        id: 12,
        categoryId: 1,
        imgsrc: 'https://via.placeholder.com/150?text=slide1',
        price: '90£-1',
        alt: 'img desc'
      },
      {
        title: 'Castle 1',
        description: 'test description',
        id: 13,
        categoryId: 1,
        imgsrc: 'https://via.placeholder.com/150?text=slide1',
        price: '91£-1',
        alt: 'img desc'
      },
      {
        title: 'Castle 1',
        description: 'test description',
        id: 0,
        categoryId: 1,
        imgsrc: 'https://via.placeholder.com/150?text=slide1',
        price: '92£-1',
        alt: 'img desc'
      },
      {
        title: 'Castle 1',
        description: 'test description',
        id: 14,
        categoryId: 1,
        imgsrc: 'https://via.placeholder.com/150?text=slide1',
        price: '93£-1',
        alt: 'img desc'
      },
      {
        title: 'Castle 1',
        description: 'test description',
        id: 15,
        categoryId: 2,
        imgsrc: 'https://via.placeholder.com/150?text=slide1',
        price: '90£-2',
        alt: 'img desc'
      },
      {
        title: 'Castle 1',
        description: 'test description',
        id: 16,
        categoryId: 2,
        imgsrc: 'https://via.placeholder.com/150?text=slide1',
        price: '91£-2',
        alt: 'img desc'
      },
      {
        title: 'Castle 1',
        description: 'test description',
        id: 17,
        categoryId: 3,
        imgsrc: 'https://via.placeholder.com/150?text=slide1',
        price: '90£-3',
        alt: 'img desc'
      },
      {
        title: 'Castle 1',
        description: 'test description',
        id: 18,
        categoryId: 3,
        imgsrc: 'https://via.placeholder.com/150?text=slide1',
        price: '91£-3',
        alt: 'img desc'
      },
      {
        title: 'Castle 1',
        description: 'test description',
        id: 19,
        categoryId: 3,
        imgsrc: 'https://via.placeholder.com/150?text=slide1',
        price: '92£-3',
        alt: 'img desc'
      }
    ]);

    let filteredItems = computed(() => filterItemsByCategory());

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let cart: Array<any> = reactive([]);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let addToCart = function (id: any) {
      let indexItemToRemove = slides.findIndex((item) => item.id === id);
      cart.push(slides[indexItemToRemove]);
      slides.splice(indexItemToRemove, 1);
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let removeFromCart = function (id: any) {
      let indexItemToRemove = cart.findIndex((item) => item.id === id);
      slides.push(cart[indexItemToRemove]);
      cart.splice(indexItemToRemove, 1);
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let toggleCategory = function (categoryItem: any) {
      categories.forEach((category) => {
        category.isActive = false;
      });

      categoryItem.isActive = true;
    };

    let filterItemsByCategory = function () {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let filteredArray: Array<any> = [];

      let activeCategoryId = getActiveCategoryId();

      filteredArray = slides.filter((item) => item.categoryId === activeCategoryId);

      return reactive(filteredArray);
    };

    let getActiveCategoryId = function () {
      let activeCaytegoryId = 0;
      let activeCategory = categories.find((category) => category.isActive);

      activeCategory ? (activeCaytegoryId = activeCategory.id) : 0;

      return activeCaytegoryId;
    };

    return { slides, addToCart, cart, removeFromCart, categories, toggleCategory, filteredItems };
  },

  components: { Layout, Header, DatePicker, Calendar, Main, Cart, CartItem, Categories, CategoriesItem, Carusele }
});
</script>

<style></style>
