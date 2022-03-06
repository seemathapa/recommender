import { lazy } from 'react';

const routes = {
  home: {
    path: '/',
    component: lazy(() => import('../pages/home')),
    name: 'Home',
  },
  blog: {
    path: '/blog',
    component: lazy(() => import('../pages/blog')),
    name: 'Blog',
  },
  blogDetail: {
    path: '/detail',
    component: lazy(() => import('../pages/blog/detail')),
    name: 'Blog Detail',
  },
  quotes: {
    path: '/quotes',
    component: lazy(() => import('../pages/quotes')),
    name: 'Quotes',
  }
};

export default routes;

