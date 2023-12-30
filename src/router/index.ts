import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'
// import ComunicacionView from '../views/ComunicacionView.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: InicioView,
    },
    // {
    //   path: '/comunicacion',
    //   name: 'comunicacion',
    //   component: ComunicacionView,
    // },
    {
      path: '/:notFound',
      component: NotFound,
    }
  ]
})

export default router
