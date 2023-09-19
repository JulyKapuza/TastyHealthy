<script setup>
import ModalWindow from '@/components/ui/Modal.vue'
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  },
  selectedItem: {
    type: Array,
    default: () => []
  },
  title: {
    type: String
  }
})
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <ModalWindow :isOpen="isOpen" :title="title">
    <div class="flex mb-4 text-white/[.3] text-lg">
      <div class="flex w-1/3 items-center justify-center">{{ $t('name') }}</div>
      <div class="flex w-1/3 items-center justify-center">{{ $t('quantity') }}</div>
      <div class="flex w-1/3 items-center justify-center">{{ $t('weight') }}</div>
    </div>
    <div v-for="item in selectedItem" :key="item.food" class="flex w-[500px] text-[20px]">
      <div class="flex w-1/3 items-center justify-start capitalize">{{ item.food }}</div>
      <div class="flex w-1/3 items-center justify-center text-green">{{ item.quantity }}</div>
      <div class="flex w-1/3 items-center justify-center text-blue">
        {{ item.weight.toFixed() }}
      </div>
    </div>
  </ModalWindow>
</template>

<style lang="scss" scoped></style>
