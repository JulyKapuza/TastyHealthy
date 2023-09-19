<script setup>
import VWave from 'v-wave'

const props = defineProps({
  theme: {
    type: String,
    default: 'main'
  },
  loading: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
})
const { vWave } = VWave.createLocalWaveDirective({
  duration: 0.5
})
</script>

<template>
  <button
    v-wave
    :class="[
      theme,
      {
        'opacity-50 pointer-events-none': disabled || loading
      }
    ]"
    class="inline-flex items-center justify-center font-medium transition relative !outline-none"
  >
    <span :class="{ 'opacity-0': loading }">
      <slot />
    </span>
    <span v-if="loading" class="absolute top-1/2 start-1/2 -translate-y-1/2 -translate-x-1/2">
      <MdIcon name="loading" class="animate-spin" />
    </span>
  </button>
</template>

<style lang="scss" scoped>
.main {
  @apply rounded-[20px] bg-main text-black hover:bg-main/[.9];
}
.border-accent {
  @apply border border-main text-main w-[150px] h-[50px] hover:bg-main hover:text-black rounded-[20px];
}
</style>
