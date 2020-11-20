<template>
  <div 
    ref="cursor"
    class="base-cursor"
    :class="[
      isHovering ? 'base-cursor--hover' : false,
    ]"
    :style="{
      top: `${this.y}px`,
      left: `${this.x}px`,
    }"
  >

  </div>
</template>

<script>
export default {
  name: 'BaseCursor',
  data: () => ({
    y: 0,
    x: 0,
    isHovering: false,
  }),
  mounted() {
    let mouseCursor = this.$refs,cursor;
    const allLinks = document.querySelectorAll('a, button');

    window.addEventListener('mousemove', (event) => {
      this.x = event.pageX;
      this.y = event.pageY;
    }, { passive: true }); 

    allLinks.forEach((link) => {
      link.addEventListener('mouseleave', () => {
        this.isHovering = false;
      });

      link.addEventListener('mouseover', () => {
        this.isHovering = true;
      });
    });
  },
};
</script>

<style lang="scss" src="./BaseCursor.scss" />
