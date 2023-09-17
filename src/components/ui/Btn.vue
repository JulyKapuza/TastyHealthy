<script setup>
import { RouterLink } from "vue-router";
import VWave from "v-wave";
import { computed } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "button",
  },
  theme: {
    type: String,
    default: "main",
  },
  to: {
    type: [String, Object],
  },
  loading: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
const { vWave } = VWave.createLocalWaveDirective({
  duration: props.theme !== "link" ? 0.5 : 0,
});
const view = computed(() => {
  return props.to ? RouterLink : props.type;
});
</script>

<template>
  <component
    v-wave
    :is="view"
    :to="to"
    :type="type"
    :class="[
      theme,
      {
        'px-5 py-1 h-12': theme !== 'link',
        'opacity-50 pointer-events-none': disabled || loading,
      },
    ]"
    class="inline-flex items-center justify-center font-medium transition relative !outline-none"
  >
    <span :class="{ 'opacity-0': loading }">
      <slot />
    </span>
    <span
      v-if="loading"
      class="absolute top-1/2 start-1/2 -translate-y-1/2 -translate-x-1/2"
    >
      <MdIcon name="loading" class="animate-spin" />
    </span>
  </component>
</template>

<style lang="scss" scoped>
// .main {
//     @apply bg-main text-black hover: bg-main/[.9];
// }

// .link {
//     @apply text-main hover: brightness-125;
// }

// .green {
//     @apply bg-green text-black hover: brightness-90;
// }

// .red {
//     @apply bg-red text-white hover: brightness-90;
// }

// .transparent {
//     @apply text-white border border-white/[.1] hover: bg-main;
// }

// .border-accent {
//     @apply border border-main text-main hover: bg-main hover:text-black;
// }
</style>
