import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Register from '@/views/Register.vue'
import RegisterProf from '@/views/RegisterProf.vue'
import LoginProf from '@/views/LoginProf.vue'
import CoinHome from '@/views/Coin/CoinHome.vue'
import Error404 from '@/views/Error/Error404.vue'
import NoRegister from '@/views/Error/NoRegister.vue'

// Страницы, которые должны перенаправлять на 404
const emptyPages = ['/old-page', '/deprecated', '/under-construction']

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/register/registerProf',
    name: 'RegisterProf',
    component: RegisterProf,
  },
  {
    path: '/register/loginProf',
    name: 'LoginProf',
    component: LoginProf,
  },
  {
    path: '/coinHome',
    name: 'CoinHome',
    component: CoinHome,
  },
  {
    path: '/noRegister',
    name: 'noRegister',
    component: NoRegister,
  },
  {
    path: '/error404',
    name: 'Error404',
    component: Error404,
  },
  // Все остальные маршруты -> 404
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: Error404,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  // Если маршрут в списке пустых страниц - перенаправляем на 404
  if (emptyPages.includes(to.path)) {
    next('/error404')
    return
  }

  next()
})

export default router
