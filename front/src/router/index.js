import { createRouter, createWebHistory } from 'vue-router';

// Importation des composants de vos pages
import LandingPage from '@/components/LandingPage.vue';
import ArchivePage from '@/components/ArchivePage.vue';
import DesignPage from '@/components/DesignPage.vue';
import Message from '@/components/Message.vue';
import OopsPage from '@/components/OopsPage.vue';

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
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
});

export default router;
