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

const emit = defineEmits(["update:modelValue"]);

</script>

<template>
  <ModalWindow :isOpen="isOpen" title="recipe">
    <div v-for="item in selectedItem" :key="item.food" class="flex">
      {{ item.text }}
    </div>
  </ModalWindow>
</template>

<style lang="scss" scoped></style>
