export default [
  {
    path: '/index',
    title: '概览',
    icon: 'el-icon-s-home',
  },
  {
    path: null,
    title: '用户管理',
    icon: 'el-icon-user-solid',
    children: [
      {
        path: '/user',
        title: '用户',
        icon: null,
      },
      {
        path: '/role',
        title: '角色',
        icon: null,
      },
    ],
  },
];
