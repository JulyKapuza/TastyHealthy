<script setup>
import { RouterLink } from 'vue-router'
const props = defineProps({
  img: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  index: {
    type: Number
  },
  data: {
    type: Object
  },
  query: {
    type: String,
    default: ''
  }
})

const emits = defineEmits(['clickBtn'])
const savedQuery = localStorage.getItem('query')
const clickBtn = () => {
  emits('clickBtn')
}
</script>
<template>
  <div
    class="flex flex-col border bg-main/[.5] border-white/[.1] rounded-[20px] w-[300px] hover:scale-105 hover:text-dark"
  >
    <img :src="img" class="w-[300px] h-[300px] rounded-tl-[20px] rounded-tr-[20px]" />
    <div
      class="flex items-center py-2 px-4 border-t border-b border-white/[.1] grow text-sm text-lg font-semibold"
    >
      {{ title }}
    </div>
    <div class="flex">
      <div class="grow border-e border-white/[.1] p-4 text-white/[.3] text-sm">
        <RouterLink
          :to="`/recipe/${query ? query : savedQuery}/${index}`"
          class="p-3 text-white/[.3] text-[20px] hover:text-white cursor-pointer"
          >{{ $t('view_more') }}
        </RouterLink>
      </div>
      <button class="px-2 text-green text-lg cursor-pointer" @click="clickBtn(data)">
        {{ $t('short_info') }}
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
