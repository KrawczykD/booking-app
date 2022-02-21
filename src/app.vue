/* eslint-disable @typescript-eslint/no-explicit-any */
<template>
  <Layout>
    <img class="img-fluid" src="https://res.cloudinary.com/dmbylcnta/image/upload/v1645395772/booking-app/bcnLogo_ahnnr6.png" alt="" srcset="" />
    <section v-if="activeStep == 0" class="booking-app-step-0">
      <button v-if="correctAddress" v-on:click="activeStep = 1" class="btn btn-success text-white w-100 fs-5 my-3">Go to see our Castles!</button>
      <span v-else class="btn btn-warning text-dark fs-5 w-100 my-3">Do we deliver to you?</span>
      <div class="input-group mb-3">
        <span v-on:click="correctAddress = true" class="btn border border-3 text-white" id="search-button"><i class="fas fa-search"></i></span>
        <input type="text" class="form-control" placeholder="Your Address" aria-label="location" aria-describedby="search-input" />
      </div>
      <img class="img-fluid" src="https://res.cloudinary.com/dmbylcnta/image/upload/v1645392959/booking-app/mapDemo_hsoarx.png" alt="" />
    </section>
    <section v-if="activeStep == 1" class="booking-app-step-1">
      <Header>
        <Calendar>
          <DatePicker><strong>Hire Start Day</strong></DatePicker>
          <DatePicker><strong>Hire End Day</strong></DatePicker>
        </Calendar>
      </Header>
      <Main>
        <span v-if="cart.length < 3" class="btn btn-warning text-dark fs-5 w-100">Minimum order value is 600 £</span>
        <button v-else v-on:click="activeStep = 2" class="btn btn-success text-white fs-5 w-100">Well Done! Go to next step!</button>
        <Categories>
          <CategoriesItem
            v-for="(category, index) in categories"
            v-on:click="toggleCategory(category)"
            v-bind:key="index"
            :style="category.isActive ? { backgroundColor: category.color, border: '4px solid ' + category.color } : { color: '#ffffff', border: '4px solid ' + category.color }"
            >{{ category.title }}</CategoriesItem
          >
        </Categories>
        <Carusele v-on:goodsItemClicked="addToCart" v-bind:slides="filteredItems" v-bind:controlsEnable="true" v-bind:durationTime="1000"></Carusele>
        <Cart>
          <CartItem v-for="(item, index) in cart" v-bind:key="index" v-bind:imgsrc="item.imgsrc">
            <template v-slot:title
              >{{ item.title }}
              <p>{{ item.price }}</p></template
            >
            <template v-slot:description>{{ item.description }}</template>
            <template v-slot:button>
              <button v-on:click="removeFromCart(item.id)" class="btn btn-danger">X</button>
            </template>
          </CartItem>
        </Cart>
      </Main>
    </section>
    <section v-if="activeStep == 2" class="booking-app-step-2">
      <p class="btn btn-info text-white w-100 my-4">Please Enter Your Contact Details</p>
      <div class="input-group mb-3">
        <span class="input-group-text col-4 text-wrap" id="inputGroup-sizing-default">Your Full Name</span>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text col-4 text-wrap" id="inputGroup-sizing-default">Post Code</span>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text col-4 text-wrap" id="inputGroup-sizing-default">Address Line 1</span>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text col-4 text-wrap" id="inputGroup-sizing-default">Town</span>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text col-4 text-wrap" id="inputGroup-sizing-default">Country</span>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text col-4 text-wrap" id="inputGroup-sizing-default">Email</span>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
      </div>

      <button v-on:click="activeStep = 3" class="btn btn-success text-white w-100">Well Done! Go to next step!</button>
    </section>
    <section v-if="activeStep == 3" class="booking-app-step-2">
      <p class="btn btn-info text-white w-100 my-4">Access Details</p>
      <div class="input-group mb-3">
        <span class="input-group-text col-4 text-wrap" id="inputGroup-sizing-default">The asset will be</span>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text col-4 text-wrap" id="inputGroup-sizing-default">The asset's location will be</span>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text col-4 text-wrap" id="inputGroup-sizing-default">Hire Occasion</span>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
      </div>

      <div class="input-group mb-3">
        <span class="input-group-text col-4 text-wrap" id="inputGroup-sizing-default">Email</span>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
      </div>

      <button v-on:click="activeStep = 4" class="btn btn-success text-white w-100">Go To Payment!</button>
    </section>
    <section v-if="activeStep == 4">
      <p v-on:click="activeStep = 4" class="btn btn-success text-white w-100 fs-1">Congratulations! Your order has been placed.Thank you!</p>
      <button v-on:click="activeStep = 0" class="btn btn-success text-white w-100">See More Details!</button>
    </section>
  </Layout>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from 'vue';
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
    let activeStep = ref(0);
    let correctAddress = ref(false);

    let categories = reactive([
      { title: 'Bouncy Castles', isActive: true, id: 0, color: '#339966' },
      { title: 'Slides', isActive: false, id: 1, color: '#000000' },
      { title: 'Mini Golf', isActive: false, id: 2, color: '#cc3300' },
      { title: 'Rodeo', isActive: false, id: 3, color: '#000066' }
    ]);

    var products = reactive([
      {
        title: 'Castle',
        description: 'test description for castle',
        id: 1,
        categoryId: 0,
        imgsrc: 'https://res.cloudinary.com/dmbylcnta/image/upload/w_300,h_300/v1645394117/booking-app/castle1_fgbg2u.jpg',
        price: '90£',
        alt: 'img desc'
      },
      {
        title: 'Castle 1',
        description: 'test description for Castle 1',
        id: 2,
        categoryId: 0,
        imgsrc: 'https://res.cloudinary.com/dmbylcnta/image/upload/w_300,h_300/v1645394117/booking-app/castle5_lumom6.jpg',
        price: '91£',
        alt: 'img desc'
      },
      {
        title: 'Castle 2',
        description: 'test description for Castle 2',
        id: 3,
        categoryId: 0,
        imgsrc: 'https://res.cloudinary.com/dmbylcnta/image/upload/w_300,h_300/v1645394117/booking-app/castle1_fgbg2u.jpg',
        price: '92£',
        alt: 'img desc'
      },
      {
        title: 'Castle 3',
        description: 'test description for Castle 3',
        id: 4,
        categoryId: 0,
        imgsrc: 'https://res.cloudinary.com/dmbylcnta/image/upload/w_300,h_300/v1645394117/booking-app/castle5_lumom6.jpg',
        price: '93£',
        alt: 'img desc'
      },
      {
        title: 'Castle 4',
        description: 'test description for Castle 4',
        id: 5,
        categoryId: 0,
        imgsrc: 'https://res.cloudinary.com/dmbylcnta/image/upload/w_300,h_300/v1645394117/booking-app/castle2_x5pog8.jpg',
        price: '94£',
        alt: 'img desc'
      },
      {
        title: 'Castle 5',
        description: 'test description for Castle 5',
        id: 6,
        categoryId: 0,
        imgsrc: 'https://res.cloudinary.com/dmbylcnta/image/upload/w_300,h_300/v1645394117/booking-app/castle2_x5pog8.jpg',
        price: '95£',
        alt: 'img desc'
      },
      {
        title: 'Castle 6',
        description: 'test description for Castle 6',
        id: 7,
        categoryId: 0,
        imgsrc: 'https://res.cloudinary.com/dmbylcnta/image/upload/w_300,h_300/v1645394117/booking-app/castle6_y6k3pv.jpg',
        price: '96£',
        alt: 'img desc'
      },
      {
        title: 'Slide',
        description: 'test description for Slide',
        id: 12,
        categoryId: 1,
        imgsrc: 'https://res.cloudinary.com/dmbylcnta/image/upload/w_300,h_300/v1645394849/booking-app/slide2_bpordj.jpg',
        price: '90£',
        alt: 'img desc'
      },
      {
        title: 'Slide 2',
        description: 'test description for Slide 2',
        id: 13,
        categoryId: 1,
        imgsrc: 'https://res.cloudinary.com/dmbylcnta/image/upload/w_300,h_300/v1645394849/booking-app/slide6_fhbagl.jpg',
        price: '91£',
        alt: 'img desc'
      },
      {
        title: 'Slide 3',
        description: 'test description for SLide 3',
        id: 0,
        categoryId: 1,
        imgsrc: 'https://res.cloudinary.com/dmbylcnta/image/upload/w_300,h_300/v1645394849/booking-app/slide3_jpmr8g.jpg',
        price: '92£',
        alt: 'img desc'
      },
      {
        title: 'Slide 4',
        description: 'test description for Slide 4',
        id: 14,
        categoryId: 1,
        imgsrc: 'https://res.cloudinary.com/dmbylcnta/image/upload/w_300,h_300/v1645394849/booking-app/slide1_zipxh7.jpg',
        price: '93£',
        alt: 'img desc'
      },
      {
        title: 'Mini Golf',
        description: 'test description for Mini Golf',
        id: 15,
        categoryId: 2,
        imgsrc: 'https://res.cloudinary.com/dmbylcnta/image/upload/w_300,h_300/v1645394849/booking-app/golf1_phtmix.jpg',
        price: '90£',
        alt: 'img desc'
      },
      {
        title: 'Rodeo',
        description: 'test description for Rodeo',
        id: 17,
        categoryId: 3,
        imgsrc: 'https://res.cloudinary.com/dmbylcnta/image/upload/w_300,h_300/v1645394849/booking-app/rodeo1_ietiph.jpg',
        price: '90£',
        alt: 'img desc'
      }
    ]);

    let filteredItems = computed(() => filterItemsByCategory());

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let cart: Array<any> = reactive([]);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let addToCart = function (id: any) {
      let indexItemToRemove = products.findIndex((item) => item.id === id);
      cart.push(products[indexItemToRemove]);
      products.splice(indexItemToRemove, 1);
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let removeFromCart = function (id: any) {
      let indexItemToRemove = cart.findIndex((item) => item.id === id);
      products.push(cart[indexItemToRemove]);
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

      filteredArray = products.filter((item) => item.categoryId === activeCategoryId);

      return filteredArray;
    };

    let getActiveCategoryId = function () {
      let activeCaytegoryId = 0;
      let activeCategory = categories.find((category) => category.isActive);

      activeCategory ? (activeCaytegoryId = activeCategory.id) : 0;

      return activeCaytegoryId;
    };

    return { products, addToCart, cart, removeFromCart, categories, toggleCategory, filteredItems, activeStep, correctAddress };
  },

  components: { Layout, Header, DatePicker, Calendar, Main, Cart, CartItem, Categories, CategoriesItem, Carusele }
});
</script>

<style></style>
