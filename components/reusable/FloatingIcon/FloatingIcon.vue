<template>
  <div class="floating-icon">
    xd
  </div>
</template>

<script>
export default {
  name: 'FloatingIcon',
  props: {
    icon: {
      type: String,
      required: false,
      default: 'ball',
    },
    fill: {
      type: String,
      required: false,
      default: '#ffffff',
    },
    stroke: {
      type: String,
      required: false,
      default: '#ffffff',
    },
  },
};
</script>

<style lang="scss" src="./FloatingIcon.scss" />
