<template>
  <header class="main-header">
    <div class="container main-header__container">
      <div class="main-header__content">
        <h1 class="main-header__content-heading">
          {{ heading }}
        </h1>
      </div>
      
      <div class="main-header__info">

      </div>
    </div>

    <scroll-down />
  </header>
</template>

<script>
export default {
  name: 'MainHeader',
  props: {
    heading: {
      type: [Number, String],
      required: true,
    },
  },
};
</script>

<style lang="scss" src="./MainHeader.scss" />
