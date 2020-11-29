<template>
  <header class="main-header">
    <div class="container main-header__container">
      <div class="main-header__content">
        <h1 class="main-header__content-heading">
          {{ heading }}
        </h1>
      </div>
    </div>

    <!-- <img 
      class="main-header__background" 
      alt 
      src="~/assets/images/back.png" 
    /> -->

   

    <!-- <planet class="main-header__image" /> -->

    <!-- <floating-icon
      left="15%"
      top="20%"
      icon="polygon"
      hide-on-mobiles
    />

    <floating-icon
      left="40%"
      top="20%"
      icon="grid"
    />

    <floating-icon 
      icon="plus"
      top="70%"
      left="5%"
      fill="#EE664E"
      stroke="#EE664E"
    />

    <floating-icon 
      icon="ball"
      top="70%"
      left="45%"
      fill="#EE664E"
      stroke="#EE664E"
    />

    <floating-icon 
      icon="grid"
      top="20%"
      left="85%"
    />

    <floating-icon 
      icon="polygon"
      top="60%"
      left="80%"
    />

    <floating-icon 
      icon="music"
      top="40%"
      left="60%"
    /> -->
    <!-- <scroll-down /> -->
  </header>
</template>

<script>
import Planet from '~/assets/images/planet.svg';

export default {
  name: 'MainHeader',
  components: { 
    Planet, 
  }, 
  props: {
    heading: {
      type: [Number, String],
      required: true,
    },
  },
};
</script>

<style lang="scss" src="./MainHeader.scss" />
