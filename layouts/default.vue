<template>
  <main class="app-layout">
    <main-navigation />
    <div class="app-layout__inner">
      <Nuxt />
    </div>

    <base-cursor />

    <main-footer />
  </main>
</template>

<script>
export default {
  name: 'AppLayout',
};
</script>