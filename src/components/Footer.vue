<script setup>
import { computed } from 'vue'

const year = computed(() => {
  const date = new Date()
  return date.getFullYear()
})
</script>
<template>
  <footer>
    <div class="3xl:container xl:px-4 w-full mt-5">
      <div
        class="flex flex-col items-center rounded-tl-[20px] rounded-tr-[20px] md:flex-row bg-main py-4 px-4 border-t xl:border-x border-white/[.1]"
      >
        <div class="flex grow">{{ year }} - <span class="font-logo">Tasty&Healthy</span></div>

        <div class="flex flex-col flex-shrink-0 md:flex-row md:gap-5 items-center">
          <a href="#" target="blank" class="link">{{ $t('terms') }}</a>
          <a href="#" target="blank" class="link">{{ $t('privacy') }}</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
/* .link {
    @apply hover: underline text-xs;
} */
</style>
