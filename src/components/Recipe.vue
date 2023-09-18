<script setup>
import { ref, watch } from "vue";
import Item from "../components/Item.vue";
import Field from "../components/ui/Field.vue";
import RecipeModal from "../components/RecipeModal.vue";
import { useRecipeStore } from "../stores/recipe.js";

let query = ref("");

const openModalKey = ref(false);
let selectedItem = ref([]);
const recipeStore = useRecipeStore();
if (query.value) {
  recipeStore.getRecipe(query.value);
}


const search = () => {
  if (query.value.trim() !== "") {
    recipeStore.getRecipe(query.value);
  }
};
const modalOpen = (data) => {
  selectedItem.value = data.recipe.ingredients;
  openModalKey.value = true;
};
watch(query, () => {
  if (query.value === "") {
  recipeStore.recipe = [];
  }
  
});
</script>

<template>
  <div class="3xl:container xl:px-4">
    <div class="relative">
      <Field v-model="query" @keydown.enter="search" label="Please" />
      <button @click="search">
        <div class="absolute top-1/4 -translate-y-1/3 end-40 text-white/[.3]">
          <MdIcon name="magnify" size="32" />
        </div>
      </button>
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 gap-3"
    >
      <div
        v-for="(item, i) in recipeStore.recipe"
        :key="item.recipe.yield"
        class="flex"
      >
        <Item
          :img="item.recipe.image"
          :title="item.recipe.label"
          :info-about-recipe="item.recipe.ingredients"
          :data="item"
          :query="query"
          :index="i"
          @click-btn="modalOpen(item)"
        />
      </div>
    </div>
    <RecipeModal
      :is-open="openModalKey"
      @modal-close="openModalKey = false"
      :selectedItem="selectedItem"
    />
  </div>
</template>

<style lang="scss" scoped></style>
