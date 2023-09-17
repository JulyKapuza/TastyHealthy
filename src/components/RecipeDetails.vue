<script setup>
const props = defineProps({
  details: {
    type: Array,
  },
});
</script>
<template>
  <div class="3xl:container xl:px-4 grid grid-cols-2">
    <!-- <div class="w-[150px]">
      <img :src="details.recipe.image" class="w-[150px] h-[150px] " />
    </div> -->
    <div
      v-for="item in details.recipe.ingredients"
      :key="item.food"
      class="flex  items-center gap-5"
    >
      <img :src="item.image" class="w-[150px] h-[150px] me-5" />
      {{ item.text }}
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
