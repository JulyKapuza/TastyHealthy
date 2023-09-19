import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/recipe/:query/:id',
      name: 'recipe',
      component: () => import('@/views/RecipeView.vue')
    }
  ]
})

export default router
