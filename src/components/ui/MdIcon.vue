<script setup>
import * as mdijs from '@mdi/js'
import { computed } from 'vue'
const props = defineProps({
  size: {
    type: [Number, String],
    default: 24
  },
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: 'CurrentColor'
  }
})

const iconKey = computed(() => {
  const str = props.name.split('-')
  return (
    'mdi' +
    str
      .map((s) => {
        return s[0].toUpperCase() + s.slice(1)
      })
      .join('')
  )
})
</script>

<template>
  <svg viewBox="0 0 24 24" :width="size" :height="size">
    <path :d="mdijs[iconKey]" :fill="color" />
  </svg>
</template>

<style lang="scss" scoped></style>
