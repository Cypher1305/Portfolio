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
    path: '/archive',
    name: 'ArchivePage',
    component: ArchivePage,
  },
  {
    path: '/creas',
    name: 'DesignPage',
    component: DesignPage,
  },
  {
    path: '/message',
    name: 'Message',
    component: Message,
  },
  {
    path: '/oopsPage',
    name: 'OopsPage',
    component: OopsPage,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes,
});

export default router;
