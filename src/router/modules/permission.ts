import { RouteRecordRaw, RouterView } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: 'permission',
    name: 'permission',
    component: RouterView,
    children: [
      {
        path: 'admin',
        name: 'permission_admin',
        meta: {
          title: '权限管理',
          requiresAuth: true,
        },
        component: () => import('@/views/permission/admin/index.vue'),
      },
      {
        path: 'role',
        name: 'permission_role',
        meta: {
          title: '角色管理',
          requiresAuth: true,
        },
        component: () => import('@/views/permission/role/index.vue'),
      },
      {
        path: 'rule',
        name: 'permission_rule',
        meta: {
          title: '规则管理',
          requiresAuth: true,
        },
        component: () => import('@/views/permission/rule/index.vue'),
      },
    ],
  },
]
export default routes
