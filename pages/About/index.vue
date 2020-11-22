<template>
  <div class="about-page">
    <main-header
      heading="Hi my name is Radek & I'm the Front End Enginner"
    />

    <div class="container container--medium">
      <about-text-section 
        :data="intruductionSection"
        class="about-page__section"
      />
      <about-listing-section
        :data="journeySection"
        class="about-page__section"
      />
      <about-text-section 
        :data="motivationSection"
        class="about-page__section"
      />
      <about-list-section 
        :data="focusSection"
        class="about-page__section"
      />
    </div>
  </div>
</template>

<script>

export default {
  name: 'AboutPage',
  data: () => ({
    aboutPage: null,
    error: null,
  }),
  async asyncData({ $prismic }) {
    try {
      const { data } = await $prismic.api.getSingle('about');
      
      return {
        aboutPage: data,
        sections: data.body,
      };
    } catch (err) {
      return {
        error: err,
      };
    }
  },
  computed: {
    intruductionSection() {
      return this.sections.find((section) =>
        section.primary.key[0].text === 'introduction'
      );
    },
    journeySection() {
      return this.sections.find((section) =>
        section.primary.key[0].text === 'journey'
      );
    },
    motivationSection() {
      return this.sections.find((section) =>
        section.primary.key[0].text === 'motivation'
      );
    },
    focusSection() {
      return this.sections.find((section) =>
        section.primary.key[0].text === 'focus'
      );
    },
  },
};
</script>

<style lang='scss' src='./index.scss' />
