import {cerateRouter, createWebHistory} from "vue-router"

const router = cerateRouter({
  history:createWebHistory(),
  routes:[
    {
      path: '/',
      name: 'home',
      component: ()=>import('../views/HomeView.vue')
    }
  ]
})
export default router
