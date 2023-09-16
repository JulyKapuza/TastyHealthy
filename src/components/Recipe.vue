<script setup>
import Item from '../components/Item.vue'
import { useRecipeStore } from '../stores/recipe.js'

const recipeStore = useRecipeStore()
recipeStore.getRecipe('milk')

</script>

<template>
        <div class="3xl:container xl:px-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 gap-2">
                <div v-for="item in recipeStore.recipe" :key="item.recipe.yield" class="flex">
                    <Item :img="item.recipe.image" :title="item.recipe.label"  />   
                </div>  
            </div>
        </div>
</template>

<style lang="scss" scoped></style>