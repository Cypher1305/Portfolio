import { createRouter, createWebHistory } from 'vue-router';

// Importation des composants de vos pages
import LandingPage from '../components/LandingPage.vue';
import ArchivePage from '../components/ArchivePage.vue';
import DesignPage from '../components/DesignPage.vue';
import Message from '@/components/Message.vue';

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage,
  },
  {
    path: '/ArchivePage',
    name: 'ArchivePage',
    component: ArchivePage,
  },
  {
    path: '/DesignPage',
    name: 'DesignPage',
    component: DesignPage,
  },
  {
    path: '/Message',
    name: 'Message',
    component: Message,
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
