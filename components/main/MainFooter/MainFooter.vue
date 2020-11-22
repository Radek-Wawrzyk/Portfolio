<template>
  <footer class="main-footer">
    <div class="container">
      <h6 class="main-footer__heading">
        Don't be shy, <br/>
        Let's build the death star together!
      </h6>

      <ul class="main-footer__socials">
        <li
          class="main-footer__socials-item"
          v-for="(item, index) in socials"
          :key="`item-${item.name-index}`"
        >
          <a
            class="main-footer__socials-link"
            :href="item.link"
            :title="item.title"
            :aria-label="item.title"
          >
            <p class="main-footer__socials-text">
              {{ item.name }}
            </p>
            <share-arrow class="main-footer__socials-icon" />
          </a>
        </li>
      </ul>

      <p class="main-footer__copyright">
        Copyright © 2018 Radosław Wawrzyk
      </p>
    </div>
  </footer>
</template>

<script>
import ShareArrow from '~/assets/icons/share-arrow.svg';

export default {
  name: 'MainFooter',
  components: {
    ShareArrow,
  },
  data: () => ({
    socials: [
      {
        name: 'Email',
        link: 'mailto:radekwawrzyk@gmail.com',
        title: 'Send me an e-mail'
      },
      {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/radek-wawrzyk-211948158/',
        title: 'Reach me on Linkedin'
      },
      {
        name: 'GitHub',
        link: 'https://github.com/Radek-Wawrzyk',
        title: 'Check my projects on Github'
      },
      {
        name: 'Instagram',
        link: 'https://www.instagram.com/radziolada/',
        title: 'See my terrible pictures on Instagram'
      },
    ],
  }),
};
</script>

<style lang='scss' src='./MainFooter.scss' />