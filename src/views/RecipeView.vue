<script setup>
import { computed } from 'vue'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import RecipeDetails from '../components/RecipeDetails.vue'
import { useRecipeStore } from '../stores/recipe.js'
import { useRouter } from 'vue-router'
import Btn from '../components/ui/Btn.vue'
const router = useRouter()
const recipeStore = useRecipeStore()
const query = router.currentRoute.value.params.query
const id = router.currentRoute.value.params.id
localStorage.setItem('query', query)
recipeStore.getRecipe(query)

const recipe = computed(() => {
  return recipeStore.recipe[id]
})
const clickBtn = () => {
  recipeStore.getRecipe(query)
  router.go(-1)
}
</script>
<template>
  <DefaultLayout>
    <div class="3xl:container xl:px-4 mb-5">
      <Btn theme="border-accent" @click="clickBtn()">Go back</Btn>
    </div>
    <RecipeDetails :details="recipe" />
  </DefaultLayout>
</template>

<style lang="scss" scoped></style>
