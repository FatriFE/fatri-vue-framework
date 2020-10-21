import layoutHeaderAside from '@/layout/header-aside/index.vue';

// 懒加载页面
const _import = (file) => () => import(/* webpackChunkName: "[request]" */ '@/views/' + file);

const frameIn = [
  {
    path: '/',
    redirect: { name: 'index' },
    component: layoutHeaderAside,
    children: [
      {
        path: 'index',
        name: 'index',
        meta: {
          auth: true,
        },
        component: _import('business/helloPage'),
      },
      {
        path: 'user',
        name: 'user',
        meta: {
          auth: true,
        },
        component: _import('business/user'),
      },
      {
        path: 'role',
        name: 'role',
        meta: {
          auth: true,
        },
        component: _import('business/role'),
      },
      {
        path: 'test',
        name: 'test',
        meta: {
          auth: true,
        },
        component: _import('business/test'),
      },
      // 刷新页面 必须保留 勿删
      {
        path: 'refresh',
        name: 'refresh',
        hidden: true,
        component: _import('system/function/refresh'),
      },
      // 页面重定向 必须保留 勿删
      {
        path: 'redirect/:route*',
        name: 'redirect',
        hidden: true,
        component: _import('system/function/redirect'),
      },
    ],
  },
];

const frameOut = [
  {
    path: '/login',
    name: 'login',
    component: _import('system/login'),
  },
];

const errorPage = [
  {
    path: '*',
    name: '404',
    component: _import('system/error/404'),
  },
];

// 导出需要显示菜单的
export const frameInRoutes = frameIn;

// 重新组织后导出
export default [...frameIn, ...frameOut, ...errorPage];
