/* eslint-disable @typescript-eslint/no-explicit-any */
<template>
  <Layout>
    <img class="img-fluid" src="https://res.cloudinary.com/dmbylcnta/image/upload/v1645395772/booking-app/bcnLogo_ahnnr6.png" alt="" srcset="" />
    <section v-if="activeStep.step == 0" class="booking-app-step-0">
      <button v-if="correctAddress.isActive" v-on:click="activeStep.step = 1" class="btn btn-success text-white w-100 fs-5 my-3">Go to see our Castles!</button>
      <span v-else class="btn btn-warning text-dark fs-5 w-100 my-3">Do we deliver to you?</span>
      <div class="input-group mb-3">
        <span v-on:click="correctAddress.isActive = true" class="btn border border-3 text-white" id="search-button"><i class="fas fa-search"></i></span>
        <input type="text" class="form-control" placeholder="Your Address" aria-label="location" aria-describedby="search-input" />
      </div>
      <Map></Map>
    </section>
    <section v-if="activeStep.step == 1" class="booking-app-step-1">
      <Header>
        <Calendar>
          <DatePicker><strong>Hire Start Day</strong></DatePicker>
          <DatePicker><strong>Hire End Day</strong></DatePicker>
        </Calendar>
      </Header>
      <Main>
        <span v-if="store.getCartValue(store.cart) < 600" class="btn btn-warning text-dark fs-5 w-100">Minimum order value is 600 £</span>
        <button v-else v-on:click="activeStep.step = 2" class="btn btn-success text-white fs-5 w-100">Well Done! Go to next step!</button>
        <Categories>
          <CategoriesItem
            v-for="(category, index) in categories"
            v-on:click="toggleCategory(category, categories)"
            v-bind:key="index"
            :style="category.isActive ? { backgroundColor: category.color, border: '4px solid ' + category.color } : { color: '#ffffff', border: '4px solid ' + category.color }"
            >{{ category.title }}</CategoriesItem
          >
        </Categories>
        <Carusele v-on:goodsItemClicked="addToCart($event, store.products, store.cart)" v-bind:slides="filteredItems" v-bind:controlsEnable="true" v-bind:durationTime="1000"></Carusele>
        <span v-if="store.getCartValue(store.cart) > 0" class="btn btn-info text-dark fs-5 w-100 my-2">Your Order Value {{ store.getCartValue(store.cart) }} £</span>
        <Cart>
          <CartItem v-for="(item, index) in cart" v-bind:key="index" v-bind:imgsrc="item.imgsrc">
            <template v-slot:title
              >{{ item.title }}
              <p>{{ item.price }} £</p>
            </template>
            <template v-slot:description>{{ item.description }}</template>
            <template v-slot:button>
              <!-- <ul class="pagination">
                <li class="page-item" v-on:click="removeFromCart(item.id, store.cart)">
                  <span class="page-link">-</span>
                </li>
                <li class="page-item disabled">
                  <span class="page-link">{{ item.orderedQty }}</span>
                </li>
                <li :class="[item.maxQty == item.orderedQty ? 'disabled' : '', 'page-item']" v-on:click="addToCart(item.id, store.products, store.cart)">
                  <span class="page-link">+</span>
                </li>
              </ul> -->

              <button v-on:click="removeFromCart(item.id, store.cart)" class="btn btn-danger">-</button>
              <span class="btn btn-secondary">{{ item.orderedQty }}</span>
              <button :disabled="item.maxQty == item.orderedQty" v-on:click="addToCart(item.id, store.products, store.cart)" class="btn btn-success">+</button>
            </template>
          </CartItem>
        </Cart>
      </Main>
    </section>
    <section v-if="activeStep.step == 2" class="booking-app-step-2">
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

      <button v-on:click="activeStep.step = 3" class="btn btn-success text-white w-100">Well Done! Go to next step!</button>
    </section>
    <section v-if="activeStep.step == 3" class="booking-app-step-2">
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

      <button v-on:click="activeStep.step = 4" class="btn btn-success text-white w-100">Go To Payment!</button>
    </section>
    <section v-if="activeStep.step == 4">
      <p v-on:click="activeStep.step = 4" class="btn btn-success text-white w-100 fs-1">Congratulations! Your order has been placed.Thank you!</p>
      <button v-on:click="activeStep.step = 0" class="btn btn-success text-white w-100">See More Details!</button>
    </section>
  </Layout>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
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
import Map from './components/Map/Map.vue';

import useStore from './store/store.vue';
import IProduct from './store/IProduct';
export default defineComponent({
  setup() {
    const store = useStore();
    const { categories, cart, products, addToCart, removeFromCart, toggleCategory, activeStep, correctAddress } = store;

    let filteredItems = computed(() => filterItemsByCategory());

    let getActiveCategoryId = function () {
      let activeCaytegoryId = 0;
      let activeCategory = categories.find((category) => category.isActive);

      activeCategory ? (activeCaytegoryId = activeCategory.id) : 0;

      return activeCaytegoryId;
    };

    let filterItemsByCategory = function () {
      let filteredArray: Array<IProduct> = [];

      let activeCategoryId = getActiveCategoryId();

      filteredArray = products.filter((item) => item.categoryId === activeCategoryId);

      return filteredArray;
    };

    return { addToCart, cart, removeFromCart, categories, toggleCategory, filteredItems, activeStep, correctAddress, store };
  },

  components: { Layout, Header, DatePicker, Calendar, Main, Cart, CartItem, Categories, CategoriesItem, Carusele, Map }
});
</script>

<style></style>
