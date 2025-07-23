import { createRouter, createWebHistory } from 'vue-router';
import ContactView from '../src/views/ContactView.vue';
import AboutView from '../src/views/AboutView.vue';
import HomeView from './views/HomeView.vue';
import WorkView from '../src/views/WorkView.vue';
import DetailCard from '../src/views/DetailCard.vue';
import DetailFastmoto from '../src/views/DetailFastmoto.vue'


const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/work', component: WorkView },
  { path: '/contact', component: ContactView },
  { path: '/detail/1', component: DetailCard },
  { path: '/detail/2', component: DetailFastmoto},

];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Si hay una posición guardada (ej. al volver atrás), ir allí
    if (savedPosition) {
      return savedPosition;
    }
    // Si la ruta tiene un hash (ej. /detail/1#section2), ir al elemento
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    // Por defecto, ir al top
    return { top: 0 }
  }
});

export default router;
