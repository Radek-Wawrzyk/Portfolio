<template>
  <section class="about-text-section">
    <h3 class="about-text-section__heading">
      {{ data.primary.title[0].text }}
    </h3>

    <prismic-rich-text 
      :field="data.primary.text"
      class="about-text-section__content"
    />
  </section>
</template>

<script>
export default {
  name: 'AboutTextSection',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang='scss' src='./AboutTextSection.scss' />
