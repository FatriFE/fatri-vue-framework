import layoutHeaderAside from '@/layout/header-aside/index.vue';

const frameIn = [
  {
    path: '/',
    redirect: {
      name: 'index',
    },
    component: layoutHeaderAside,
    children: [
      {
        path: 'index',
        name: 'index',
        meta: {
          auth: true,
        },
        component: () => import(/* webpackChunkName: "helloPage" */ '@/views/business/helloPage/index.vue'),
      },
      {
        path: 'user',
        name: 'user',
        meta: {
          auth: true,
        },
        component: () => import(/* webpackChunkName: "user" */ '@/views/business/user/index.vue'),
      },
      {
        path: 'role',
        name: 'role',
        meta: {
          auth: true,
        },
        component: () => import(/* webpackChunkName: "role" */ '@/views/business/role/index.vue'),
      },
    ],
  },
];

const frameOut = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/system/login/index.vue'),
  },
];

const errorPage = [
  {
    path: '*',
    name: '404',
    component: () => import(/* webpackChunkName: "pageNotFound" */ '@/views/system/pageNotFound/index.vue'),
  },
];

export default [...frameIn, ...frameOut, ...errorPage];
