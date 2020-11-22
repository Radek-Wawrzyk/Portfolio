<template>
  <section class="about-listing-section">
    <h3 class="about-listing-section__heading">
      {{ data.primary.title[0].text }}
    </h3>

    <ul class="about-listing-section__content">
      <li
        class="about-listing-section__content-item"
        v-for="(item, index) in data.items"
        :key="`item-${index}`"
      >
        <prismic-rich-text 
          :field="item.label"
          class="about-listing-section__content-label"
        />
        <prismic-rich-text 
          :field="item.value"
          class="about-listing-section__content-value"
        />
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'AboutListingSection',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang='scss' src='./AboutListingSection.scss' />
