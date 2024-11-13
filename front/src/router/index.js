import { createRouter, createWebHistory } from 'vue-router';

// Importation des composants de vos pages
import LandingPage from '@LandingPage.vue';
import ArchivePage from '@ArchivePage.vue';
import DesignPage from '@DesignPage.vue';
import Message from '@Message.vue';
import OopsPage from '@OopsPage.vue';

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
  },
  {
    path: '/OopsPage',
    name: 'OopsPage',
    component: OopsPage,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
