import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useNotification } from '@kyvg/vue3-notification'
import { i18n } from '../../i18n'
export const useRecipeStore = defineStore('recipeStore', () => {
  const recipe = ref([])
  const APP_ID = '3b276331'
  const APP_KEY = 'bae8af78b98ebdc942515c5e2ae6d26b'
  const { notify } = useNotification()

  const getRecipe = async (query) => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
    const data = await response.json()

    recipe.value = data.hits || []
    if (!recipe.value.length) {
      notify({
        title: i18n.t('warning_not_dish'),
        type: 'warning',
        ignoreDuplicates: true
      })
    }
  }

  return { recipe, getRecipe }
})
