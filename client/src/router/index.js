import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Register from '@/views/Register.vue'
import RegisterProf from '@/views/RegisterProf.vue'
import LoginProf from '@/views/LoginProf.vue'
import CoinHome from '@/views/Coin/CoinHome.vue'
import Error404 from '@/views/Error/Error404.vue'

//  Каждый раз при создании страницы регистрации ее тут

const routes = [
  {
    path: '/', // главная страница
    name: 'Home',
    component: Home,
  },
  {
    path: '/register', // страница регистрации
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
    name: 'coinHome',
    component: CoinHome,
  },
  {
    path: '/error404',
    name: 'error404',
    component: Error404,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
