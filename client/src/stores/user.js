import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const isRegistered = ref(false)
  const email = ref('') // добавляем email

  const setRegistered = (value) => {
    isRegistered.value = value
    localStorage.setItem('userRegistered', value ? 'true' : 'false')
  }

  const setEmail = (value) => {
    email.value = value
    localStorage.setItem('userEmail', value) // сохраняем email
  }

  // Восстанавливаем данные при инициализации стора
  if (localStorage.getItem('userRegistered') === 'true') {
    isRegistered.value = true
  }

  const savedEmail = localStorage.getItem('userEmail')
  if (savedEmail) {
    email.value = savedEmail
  }

  return { isRegistered, email, setRegistered, setEmail }
})
