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
        <span v-if="useCart.getCartValue() < 600" class="btn btn-warning text-dark fs-5 w-100">Minimum order value is 600 £</span>
        <button v-else v-on:click="activeStep.step = 2" class="btn btn-success text-white fs-5 w-100">Well Done! Go to next step!</button>
        <Categories>
          <CategoriesItem
            v-for="(category, index) in categories.categories"
            v-on:click="categories.toggleCategory(category, categories.categories)"
            v-bind:key="index"
            :style="category.isActive ? { backgroundColor: category.color, border: '4px solid ' + category.color } : { color: '#ffffff', border: '4px solid ' + category.color }"
            >{{ category.title }}</CategoriesItem
          >
        </Categories>
        <Carusele v-on:goodsItemClicked="useCart.addToCart($event)" v-bind:slides="filteredItems" v-bind:controlsEnable="true" v-bind:durationTime="1000"></Carusele>
        <span v-if="useCart.getCartValue() > 0" class="btn btn-info text-dark fs-5 w-100 my-2">Your Order Value {{ useCart.getCartValue() }} £</span>
        <Cart>
          <CartItem v-for="(item, index) in cart" v-bind:key="index" v-bind:id="index" v-bind:imgsrc="getProductById(products, item.id).imgsrc">
            <template v-slot:title
              >{{ getProductById(products, item.id).title }}
              <p>{{ getProductById(products, item.id).price }} £</p>
            </template>
            <template v-slot:description>{{ getProductById(products, item.id).description }}</template>
            <template v-slot:button>
              <button v-on:click="useCart.removeFromCart(item)" class="btn btn-danger">-</button>
              <span class="btn btn-secondary">{{ item.orderedQty }}</span>
              <button v-on:click="useCart.addToCart(getProductById(products, item.id))" class="btn btn-success">+</button>
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
    const { categories, cart, products, activeStep, correctAddress, getProductById, useCart } = store;

    let filteredItems = computed(() => filterItemsByCategory());

    let filterItemsByCategory = function () {
      let filteredArray: Array<IProduct> = [];

      let activeCategoryId = categories.getActiveCategoryId();

      filteredArray = products.filter((item) => item.categoryId === activeCategoryId);

      return filteredArray;
    };

    return { cart, products, categories, filteredItems, activeStep, correctAddress, store, getProductById, useCart };
  },

  components: { Layout, Header, DatePicker, Calendar, Main, Cart, CartItem, Categories, CategoriesItem, Carusele, Map }
});
</script>

<style></style>
