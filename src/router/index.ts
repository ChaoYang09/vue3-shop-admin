import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'
import productRoutes from './modules/product'
import permissionRoutes from './modules/permission'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import { useCommonStore } from '@/store/common'
import pinia from '@/store/index'
const store = useCommonStore(pinia)
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: AppLayout,
    meta: {
      title: '首页',
    },
    children: [
      {
        path: '', //默认子路由
        name: 'home',
        component: () => import('../views/home/index.vue'),
      },
      ...productRoutes,
      ...permissionRoutes,
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from) => {
  nprogress.start()
  if (to.meta.requiresAuth && !store.user) {
    return {
      path: '/login',
      query: {
        redirect: to.fullPath,
      },
    }
  }
})

router.afterEach(() => {
  nprogress.done()
})

export default router
