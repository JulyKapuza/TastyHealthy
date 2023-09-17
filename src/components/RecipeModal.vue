<script setup>
import ModalWindow from "../components/ui/ModalWindow.vue";
const props = defineProps({
  keyModal: {
    type: String,
    required: true,
  },
  selectedItem: {
    type: [],
  },
});

const emit = defineEmits(["update:modelValue"]);

</script>

<template>
  <ModalWindow :isOpen="!!keyModal" title="recipe">
    <div v-for="item in selectedItem" :key="item.food" class="flex">
      {{ item.text }}
      <!-- <img :src="item.image" class="w-[50px] h-[50px]" /> -->
    </div>
  </ModalWindow>
</template>

<style lang="scss" scoped></style>
