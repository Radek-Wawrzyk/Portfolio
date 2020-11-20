<template>
  <button class="scroll-down" @click="$emit('click')">
    <span class="scroll-down__line" />
    <p class="scroll-down__text">
      Scroll
    </p>
  </button>
</template>

<script>
export default {
  name: 'ScrollDown',
};
</script>

<style lang="scss" src="./ScrollDown.scss" />
