<template>
  <section class="projects-carousel">
    <header class="projects-carousel__header container">
      <h2 class="projects-carousel__header-title">
        {{ heading }}
      </h2>

      <div class="projects-carousel__header-info projects-carousel__info">
        <transition name="fade" mode="out-in">
          <p class="projects-carousel__info-text" :key="currentSlide">
            {{ currentSlide }}
          </p>
        </transition>

        <span class="projects-carousel__info-indicator">
          /
        </span>

        <p class="projects-carousel__info-text">
          {{ slidesCount }}
        </p>
      </div>
    </header>

    <hooper 
      class="projects-carousel__inner"
      :settings="options"
      ref="carousel"
      @slide="updateCarousel"
    >
      <slide 
        class="projects-carousel__slide"
        v-for="slide in slides"
        :key="slide.name"
      >
        <h3 class="projects-carousel__slide-name">
          {{ slide.name }}
        </h3>

        <figure class="projects-carousel__slide-imgage-wrapper">
          <img
            class="projects-carousel__slide-image"
            :alt="slide.name"
            :src="slide.image"
          />
        </figure>
      </slide>
    </hooper>

    <footer class="projects-carousel__navigation container">
      <base-button 
        @click="slidePrev()"
        class="projects-carousel__navigation-button"
      >
        Previous
      </base-button>
      <base-button 
        @click="slideNext()"
        class="projects-carousel__navigation-button"
      >
        Next
      </base-button>
    </footer>
  </section>
</template>

<script>
import { Slide, Hooper } from 'hooper';
import Dots from '~/assets/icons/dots.svg';

export default {
  name: 'ProjectsCarousel',
  components: {
    Slide,
    Hooper,
    Dots,
  },
  props: {
    heading: {
      type: [String, Number],
      required: true,
    },
  },
  data: () => ({
    activeIndex: 0,
    options: {
      itemsToShow: 1.8,
      wheelControl: false,
      transition: 600,
      breakpoints: {
        768: {
          itemsToShow: 1,
        },
        1024: {
          itemsToShow: 1.8,
        },
      },
    },
    slides: [
      {
        name: 'Kubota',
        link: '/',
        short_description: 'Hard Work Montagen is a company dealing with industrial machines needed in modern automatic or semi-automatic warehouses and production plants.',
        image: 'https://images.prismic.io/radek-wawrzyk/c77739f3-81e9-4bf4-ae4e-c4b164f95c7b_kubota-1.jpg?auto=compress,format'
      },
      {
        name: 'JimmyLion',
        link: '/',
        short_description: 'Hard Work Montagen is a company dealing with industrial machines needed in modern automatic or semi-automatic warehouses and production plants.',
        image: 'https://images.prismic.io/radek-wawrzyk/449c3482-c254-4b46-a423-e22e7af786eb_jimmy-1.jpg?auto=compress,format'
      },
      {
        name: 'IT-Leaders',
        link: '/',
        short_description: 'Hard Work Montagen is a company dealing with industrial machines needed in modern automatic or semi-automatic warehouses and production plants.',
        image: 'https://images.prismic.io/radek-wawrzyk/b436308c-d70a-4848-b689-977e3bfd970f_it-leaders-1.jpg?auto=compress,format'
      },
      {
        name: 'HWM Montagen',
        link: '/',
        short_description: 'Hard Work Montagen is a company dealing with industrial machines needed in modern automatic or semi-automatic warehouses and production plants.',
        image: 'https://images.prismic.io/radek-wawrzyk/e62a20a9-6aa4-4a0c-ae64-6caebd835920_montagen-2.png?auto=compress,format'
      },
    ]
  }),
  computed: {
    hooper() {
      return this.$refs.carousel;
    },
    currentSlide() {
      return this.activeIndex + 1;
    },
    slidesCount() {
      return this.slides.length;
    },
  },
  methods: {
    updateCarousel(payload) {
      this.activeIndex = payload.currentSlide;
    },
    slidePrev() {
      this.$refs.carousel.slidePrev();
    },
    slideNext() {
      this.$refs.carousel.slideNext();
    }
  },
};
</script>

<style lang='scss' src='./ProjectsCarousel.scss' />
