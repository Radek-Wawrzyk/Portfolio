<template>
  <component
    :is="componentType"
    :disabled="disabled"
    :class="classes"
    :to="to ? to : false"
    :title="title"
    :aria-label="title"
    :type="nativeType"
    @click="$emit('click')"
    @focus="$emit('focus')"
    class="base-button"
  >
    <p
      class="base-button__text"
      :class="small ? 'base-button__text--small' : ''"
      v-if="type !== 'icon'"
    >
      <slot></slot>
    </p>
    <img v-if="type === 'text' && icon" class="base-button__icon-text" alt="" src="/assets/icons/arrow-right.svg" />
    <img v-if="icon && type === 'icon'" class="base-button__icon" alt="" :src="`/assets/icons/${icon}.svg`" />
  </component>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    to: {
      type: String,
      required: false,
      default: null,
    },
    nativeLink: {
      type: Boolean,
      required: false,
      default: false,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    icon: {
      type: [String],
      required: false,
      default: null,
    },
    type: {
      type: String,
      required: false,
      default: 'primary',
    },
    title: {
      type: String,
      required: false,
      default: '',
    },
    nativeType: {
      type: String,
      required: false,
      default: 'button',
    },
    small: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    componentType() {
      if (this.to && this.nativeLink) {
        return 'a';
      }

      if (this.to && !this.nativeLink) {
        return 'router-link';
      }

      if (!this.to && !this.nativeLink) {
        return 'button';
      }
    },
    classes() {
      return [
        this.type === 'primary' ? 'base-button--primary' : false,
        this.disabled ? 'base-button--disabled' : false,
      ];
    },
  },
};
</script>

<style lang="scss" src="./BaseButton.scss" />
