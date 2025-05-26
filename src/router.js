import { createRouter, createWebHistory } from 'vue-router';
import ContactView from '../src/views/ContactView.vue';
import AboutView from '../src/views/AboutView.vue';
import HomeView from './views/HomeView.vue';
import WorkView from '../src/views/WorkView.vue';
import DetailCard from '../src/views/DetailCard.vue';


const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/work', component: WorkView },
  { path: '/contact', component: ContactView },
  { path: '/detail', component: DetailCard },
  

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
