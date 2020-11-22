<template>
  <section class="about-list-section">
    <h3 class="about-list-section__heading">
      {{ data.primary.title[0].text }}
    </h3>

    <ul class="about-list-section__content">
      <li
        class="about-list-section__content-item"
        v-for="(item, index) in data.items"
        :key="`item-${index}`"
      >
        <h4 class="about-list-section__content-heading">
          {{ item.title[0].text }}
        </h4>
        
        <prismic-rich-text 
          :field="item.content"
          class="about-list-section__content-list"
        />
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'AboutListSection',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang='scss' src='./AboutListSection.scss' />
