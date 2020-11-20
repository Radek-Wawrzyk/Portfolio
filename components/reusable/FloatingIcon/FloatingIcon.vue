<template>
  <div 
    class="floating-icon"
    :class="[
      hideOnMobiles ? 'floating-icon--hide-on-mobile' : false,
    ]"
    :style="{
      top: top,
      left: left,
      animationName: `floating-${randomAnimationType}`,
      animationDelay: `0.${randomAnimationType * 2}s`,
      width: size,
      height: size,
    }"
  >
    <ball-icon 
      v-if="icon === 'ball'"
      class="floating-icon__inner"
      :fill="fill"
      :stroke="stroke"
    />
    <music-icon 
      v-else-if="icon === 'music'"
      class="floating-icon__inner"
      :fill="fill"
      :stroke="stroke"
    />
    <grid-icon 
      v-else-if="icon === 'grid'"
      class="floating-icon__inner"
      :fill="fill"
      :stroke="stroke"
    />
    <pause-icon 
      v-else-if="icon === 'pause'"
      class="floating-icon__inner"
      :fill="fill"
      :stroke="stroke"
    />
    <plus-icon 
      v-else-if="icon === 'plus'"
      class="floating-icon__inner"
      :fill="fill"
      :stroke="stroke"
    />
    <polygon-icon 
      v-else
      class="floating-icon__inner"
      :fill="fill"
      :stroke="stroke"
      :width="size"
      :height="size"
    />
  </div>
</template>

<script>
import BallIcon from '~/assets/icons/ball.svg';
import MusicIcon from '~/assets/icons/music.svg';
import GridIcon from '~/assets/icons/grid.svg';
import PauseIcon from '~/assets/icons/pause.svg';
import PlusIcon from '~/assets/icons/plus.svg';
import PolygonIcon from '~/assets/icons/polygon.svg';
import TestIcon from '~/assets/icons/test.svg';

import { getRandom } from '~/helpers/index.js';

export default {
  name: 'FloatingIcon',
  components: {
    BallIcon,
    MusicIcon,
    GridIcon,
    PauseIcon,
    PlusIcon,
    PauseIcon,
    PolygonIcon,
    TestIcon,
  },
  props: {
    icon: {
      type: String,
      required: true,
      default: 'ball',
    },
    fill: {
      type: String,
      required: false,
      default: '#ffffff',
    },
    stroke: {
      type: String,
      required: false,
      default: '#ffffff',
    },
    left: {
      type: [Number, String],
      required: false,
      default: 0,
    },
    top: {
      type: [Number, String],
      required: false,
      default: 0,
    },
    size: {
      type: [Number, String],
      required: false,
      default: '64px'
    },
    hideOnMobiles: {
      type: Boolean,
      required: false,
      default: false,
    }
  },
  computed: {
    randomAnimationType() {
      return getRandom(1, 6);
    },
  },
};
</script>

<style lang="scss" src="./FloatingIcon.scss" />
