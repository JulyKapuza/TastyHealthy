import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useRecipeStore = defineStore('recipeStore', () => {
  const recipe = ref([])
  const APP_ID = '3b276331';
  const APP_KEY = 'bae8af78b98ebdc942515c5e2ae6d26b';

  const getRecipe = async (query) => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
   
      recipe.value = data.hits || []
      console.log(data.hits)
  }

  return { recipe, getRecipe }
})
