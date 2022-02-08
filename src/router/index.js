import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import { importAll, setDocumentTitle } from '@/utils'
import { getLocalToken } from '@/utils/auth'

// Route Module
import Login from '@/views/login/index.vue'

export const defaultRoutes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
]

// 捕获所有的路由，和错误路由,放在最后添加
export const errorRoute = {
  path: '/:notFoundPath(.*)*',
  hidden: true,
  name: 'notFound',
  component: () => import(/* webpackChunkName: 'error' */ '@/views/error/404.vue'),
}

// 无须鉴权的白名单路由
const whiteListRoutes = ['/login']

// 自动导入modules文件夹下的路由并且注册
function generateAsyncRouteMap() {
  const modulesFiles = import.meta.globEager('./modules/*.js')
  const modules = importAll(modulesFiles)
  let asyncRouteMap = []
  for (const key in modules) {
    asyncRouteMap = asyncRouteMap.concat(modules[key])
  }
  return asyncRouteMap
}

const asyncRouteMap = generateAsyncRouteMap()

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: () => ({ top: 0, left: 0 }),
  routes: [...defaultRoutes, ...asyncRouteMap, errorRoute],
})

router.beforeEach((to) => {
  NProgress.start()
  if (getLocalToken()) {
    return true
  }
  if (whiteListRoutes.includes(to.path)) {
    return true
  }
  // 没token，又没在白名单路由里直接跳转到登录页
  return '/login'
})

router.afterEach((to) => {
  NProgress.done()
  setDocumentTitle(to.meta.title)
})

export default router
