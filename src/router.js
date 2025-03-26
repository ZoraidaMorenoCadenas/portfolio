import { createRouter, createWebHistory } from 'vue-router';
import ContactView from '../src/views/ContactView.vue';
import AboutView from '../src/views/AboutView.vue';
import HomeView from './views/HomeView.vue';
import WorkView from '../src/views/WorkView.vue';


const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/work', component: WorkView },
  { path: '/contact', component: ContactView },
  

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
