<script setup>
import ModalWindow from "../components/ui/ModalWindow.vue";
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  selectedItem: {
    type: [],
  },
});
console.log('selectedItem', props.selectedItem)
const emit = defineEmits(["update:modelValue"]);

</script>

<template>
  <ModalWindow :isOpen="isOpen" title="recipe">
      <div class="flex mb-4 text-white/[.3] text-sm">
        <div class="flex w-1/3 items-center justify-center">{{ $t('name') }}</div>
        <div class="flex w-1/3 items-center justify-center">{{ $t('quantity') }}</div>
        <div class="flex w-1/3 items-center justify-center">{{ $t('weight') }}</div>
      </div>
    <div v-for="item in selectedItem" :key="item.food" class="flex w-[500px] text-[20px]">
      
        <div class="flex w-1/3 items-center justify-center">{{ item.food }}</div>
        <div class="flex w-1/3 items-center justify-center text-green">{{ item.quantity }}</div>
        <div class="flex w-1/3 items-center justify-center text-blue">{{ item.weight.toFixed() }}</div>
    </div>
  </ModalWindow>
</template>

<style lang="scss" scoped></style>
