<template>
  <div v-show="splitedArrays.length !== 0" id="bookingappcarousel" class="carousel slide booking-app-carusel" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div
        v-for="(slides, index) in splitedArrays"
        v-bind:key="index"
        :class="['carousel-item booking-app-carusel-item']"
        :style="{ 'transition-duration': durationTime * 0.001 + 's' }"
        :data-bs-interval="time"
      >
        <Goods>
          <GoodsItem v-for="(slide, index) in slides" :key="index" v-on:click="goodsItemClick(slide.id)" :id="slide.id" :imgsrc="slide.imgsrc"
            ><strong class="text-white">{{ slide.price }}{{ index }}</strong></GoodsItem
          >
        </Goods>
      </div>
    </div>
    <button v-if="controlsEnable" class="carousel-control-prev" type="button" data-bs-target="#bookingappcarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button v-if="controlsEnable" class="carousel-control-next" type="button" data-bs-target="#bookingappcarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Goods from '../Goods/Goods.vue';
import GoodsItem from '../GoodsItem/GoodsItem.vue';

export default defineComponent({
  components: { Goods, GoodsItem },
  props: {
    slides: {
      type: Array,
      // eslint-disable-next-line vue/require-valid-default-prop
      default: []
    },
    time: {
      type: Number,
      default: 10000
    },
    controlsEnable: {
      type: Boolean,
      default: false
    },
    durationTime: {
      type: Number,
      default: 2000
    }
  },
  data: function () {
    return {
      splitedArrays: [] as Array<any>
    };
  },
  // computed: {
  //   splitedArrays: function () {
  //     let newArray = this.splitItemsToArrays(this.slides);
  //     return newArray;
  //   }
  // },

  watch: {
    slides: function () {
      this.splitedArrays = this.splitItemsToArrays(this.slides);
      this.$nextTick(() => {
        this.addActiveClassToFirstCaruselItem();
      });
    }
  },
  mounted: function () {
    this.splitedArrays = this.splitItemsToArrays(this.slides);
    this.$nextTick(() => {
      this.addActiveClassToFirstCaruselItem();
    });
  },
  methods: {
    goodsItemClick(id: number) {
      this.$emit('goodsItemClicked', id);
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    splitItemsToArrays(slides: Array<any>) {
      var splitedArrays = [];

      for (var i = 0; i < slides.length; i += 3) {
        let tempArray;
        tempArray = slides.slice(i, i + 3);
        splitedArrays.push(tempArray);
      }
      return splitedArrays;
    },

    addActiveClassToFirstCaruselItem: function () {
      let firstCaruselItem = document.querySelectorAll('.booking-app-carusel-item')[0];
      firstCaruselItem.classList.add('active');
      console.log(firstCaruselItem);
    }
  }
});
</script>

<style>
.carousel-control-next-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23f00'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
}

.carousel-control-prev-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23f00'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e");
}
</style>
