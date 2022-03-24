import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '@/views/HomePage';
import SettingsPage from '@/views/SettingsPage';
import ControllerItem from '@/components/ControllerItem';
import ParamsValues from '@/components/ui/ParamsValues';

const router = createRouter({
  history: createWebHistory(),
  base: "/",
  routes: [
    {
      path: '/controllers',
      name: 'controllers',
      component: HomePage,
      alias: '/'
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsPage,
    },
    {
      path: '/controller/:id',
      name: 'controller',
      props: true,
      component: ControllerItem,
      children: [
        {
          path: 'params/:value',
          name: 'controller/params',
          component: ParamsValues,
          props: true
        }
      ]
    },
    {
      path: '/:notFound(.*)',
      redirect: '/'
    }
  ],
});

export default router;