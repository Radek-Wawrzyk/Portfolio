<template>
  <nav
    class="main-navigation"
    :class="[
      !showNavbar ? 'main-navigation--hidden' : false,
      hasScrolled ? 'main-navigation--scrolled' : false,
    ]"
  >
    <div class="container main-navigation__container">
      <nuxt-link
        to="/"
        aria-label="Home"
        title="Home"
        class="main-navigation__logo"
      >
        <logo-icon />
      </nuxt-link>
        
      <ul class="main-navigation__menu">
        <li
          class="main-navigation__menu-item"
          v-for="item in menu"
          :key="item.name"
        >
          <nuxt-link
            class="main-navigation__menu-link"
            :class="[
              item.disabled ? 'main-navigation__menu-link--disabled' : false,
            ]"
            :aria-label="item.name"
            :title="item.name"
            :to="item.link"
          >
            {{ item.name }}
            <span 
              class="main-navigation__menu-label"
              v-if="item.label"
            >
              {{ item.label }}
            </span>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import throttle from 'lodash.throttle';
import logoIcon from '~/assets/logo.svg';

export default {
  name: 'MainNavigation',
  components: {
    logoIcon,
  },
  data: () => ({
    isLoaded: false,
    showNavbar: true,
    lastScrollPosition: 0,
    currentScrollPosition: 0,
    hasScrolled: false,
    menu: [
      {
        name: 'Work',
        link: '/work',
        disabled: false,
        label: null,
      },
      {
        name: 'About',
        link: '/about',
        disabled: false,
        label: null,
      },
      {
        name: 'Services',
        link: '/services',
        disabled: false,
        label: null,
      },
      {
        name: 'Blog',
        link: '/blog',
        disabled: true,
        label: 'soon',
      },
      {
        name: 'Contact',
        link: '/contact',
        disabled: false,
        label: null,
      },
    ],
  }),
  methods: {
    onScroll() {
      this.currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

      if (this.currentScrollPosition > 0) {
        this.hasScrolled = true
      } else {
        this.hasScrolled = false;
      }
      
      if (Math.abs(this.currentScrollPosition - this.lastScrollPosition) < 200) {
        return;
      }

      this.showNavbar = this.currentScrollPosition < this.lastScrollPosition;
      this.lastScrollPosition = this.currentScrollPosition;
    },
  },
  mounted() {
    document.addEventListener('scroll', throttle(this.onScroll, 300, {
      leading: true,
      trailing: true
    }), { passive: true });
  },
};
</script>

<style lang="scss" src="./MainNavigation.scss" />
