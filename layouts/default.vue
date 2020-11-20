<template>
  <main class="app-layout">
    <main-navigation />
    <div class="app-layout__inner">
      <Nuxt />
    </div>

    <base-cursor />
  </main>
</template>

<script>
import BaseCursor from '~/components/base/BaseCursor/BaseCursor.vue';
export default {
  components: { BaseCursor },
  name: 'AppLayout',
};
</script>