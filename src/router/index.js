import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/views/HomePage';
import ControllerItem from '@/components/ControllerItem';

const router = createRouter({
  history: createWebHistory(),
  base: "/",
  routes: [
    {
      path: '/controllers',
      name: '/controllers',
      component: HomePage,
      alias: '/'
    },
    {
      path: '/controller/:id',
      name: 'controller',
      props: true,
      component: ControllerItem
    },
    {
      path: '/:notFound(.*)',
      redirect: '/'
    }
  ],
});

export default router;