<script setup>
import { computed } from "vue";
import DefaultLayout from "../layouts/DefaultLayout.vue";
import RecipeDetails from "../components/RecipeDetails.vue";
import { useRecipeStore } from "../stores/recipe.js";
import { useRouter } from "vue-router";

const router = useRouter();
const recipeStore = useRecipeStore();
const query = router.currentRoute.value.params.query;
const id = router.currentRoute.value.params.id;

recipeStore.getRecipe(query);
const recipe = computed(() => {
  return recipeStore.recipe[id];
});
</script>
<template>
  <DefaultLayout>
    <RecipeDetails :details="recipe" />
  </DefaultLayout>
</template>

<style lang="scss" scoped></style>
