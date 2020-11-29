<template>
  <div class="about-page">
    <main-header
      heading="Hi my name is Radek & I'm the Front End Enginner"
    />

    <div class="container">
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
    partners() {
      return [
        {
          name: 'HWM Montagen',
          url: 'https://hwmontagen.com/_nuxt/img/9fee611.svg',
        },
        {
          name: 'HWM Montagen',
          url: 'https://www.jimmylion.com/assets/icons/logo.svg',
        },
        {
          name: 'HWM Montagen',
          url: 'https://www.compactorstore.com/assets/logo-with-tagline.svg',
        },
        {
          name: 'HWM Montagen',
          url: 'https://www.gpmd.co.uk/assets/images/gpmd-logo--light.svg',
        },
        {
          name: 'HWM Montagen',
          url: 'https://hwmontagen.com/_nuxt/img/9fee611.svg',
        },
        {
          name: 'HWM Montagen',
          url: 'https://hwmontagen.com/_nuxt/img/9fee611.svg',
        },
      ]
    }
  },
};
</script>

<style lang='scss' src='./index.scss' />
