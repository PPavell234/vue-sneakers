import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Register from '@/views/Register.vue'
import RegisterProf from '@/views/RegisterProf.vue'

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
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
