<script setup>
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
    required: true,
  },
  title: {
    type: String,
    delault: "",
  },
});
const emits = defineEmits(["modalClose"]);
const modal = ref(null);

const closeModal = () => {
  emits("modalClose");
};
onClickOutside(modal, () => {
  emits("modalClose");
});
</script>

<template>
  <transition appear name="fade">
    <div
      v-if="isOpen"
      class="fixed top-0 left-0 w-full h-full z-50 min-h-screen p-3 flex items-center justify-center bg-white bg-opacity-30"
    >
      <div ref="modal" class="bg-gradient h-fit relative w-full rounded-[20px] md:w-auto">
        <div
          class="flex justify-center items-center gap-5 px-4 bg-panel border border-white/[.1]"
        >
          <span
            v-if="title"
            class="flex grow border-e border-white/[.1] py-4 text-base font-medium"
            >{{ title }}</span
          >
          <MdIcon
            name="window-close"
            width="26"
            height="26"
            class="cursor-pointer hover:text-main"
            @click="closeModal"
          />
        </div>
        <div class="px-4 py-4 sm:px-8 sm:pt-5 sm:pb-8">
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
