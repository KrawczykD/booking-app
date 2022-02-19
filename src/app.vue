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
      <Cart>
        <CartItem>
          <template v-slot:title>Bounc Castle</template>
          <template v-slot:description>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, quidem?</template>
          <template v-slot:button>
            <button class="btn btn-danger">X</button>
          </template>
        </CartItem>
        <CartItem>
          <template v-slot:title>Mega Slide</template>
          <template v-slot:description>Lorem ipsum, dolor sit amet consectetur adipisicing </template>
          <template v-slot:button>
            <button class="btn btn-danger">X</button>
          </template>
        </CartItem>
      </Cart>
      <Categories>
        <CategoriesItem class="bg-success">Bouncy Castles</CategoriesItem>
        <CategoriesItem class="bg-danger">Slides</CategoriesItem>
        <CategoriesItem class="bg-info">Balls Pool</CategoriesItem>
        <CategoriesItem class="border border-3 border-warning text-warning">Accessories</CategoriesItem>
      </Categories>
      <Goods>
        <GoodsItem>90£</GoodsItem>
        <GoodsItem>70£</GoodsItem>
        <GoodsItem>99£</GoodsItem>
        <GoodsItem>120£</GoodsItem>
        <GoodsItem>50£</GoodsItem>
      </Goods>
    </Main>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header/Header.vue';
import Layout from './components/Layout/Layout.vue';
import DatePicker from './components/DatePicker/DatePicker.vue';
import Calendar from './components/Calendar/Calendar.vue';
import Main from './components/Main/Main.vue';
import Cart from './components/Cart/Cart.vue';
import CartItem from './components/CartItem/CartItem.vue';
import Goods from './components/Goods/Goods.vue';
import GoodsItem from './components/GoodsItem/GoodsItem.vue';
import Categories from './components/Categories/Categories.vue';
import CategoriesItem from './components/CategoriesItem/CategoriesItem.vue';
export default defineComponent({
  components: { Layout, Header, DatePicker, Calendar, Main, Cart, CartItem, Goods, GoodsItem, Categories, CategoriesItem }
});
</script>

<style></style>
