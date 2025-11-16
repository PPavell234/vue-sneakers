import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const isRegistered = ref(false)
  const email = ref('')

  // Установка статуса регистрации
  const setRegistered = (value) => {
    isRegistered.value = value
    localStorage.setItem('userRegistered', value ? 'true' : 'false')
  }

  // Сохранение email
  const setEmail = (value) => {
    email.value = value
    localStorage.setItem('userEmail', value)
  }

  // Функция выхода
  const logout = () => {
    isRegistered.value = false
    email.value = ''

    localStorage.removeItem('userRegistered')
    localStorage.removeItem('userEmail')
  }

  // --- Восстановление при загрузке ---
  if (localStorage.getItem('userRegistered') === 'true') {
    isRegistered.value = true
  }

  const savedEmail = localStorage.getItem('userEmail')
  if (savedEmail) {
    email.value = savedEmail
  }

  return { isRegistered, email, setRegistered, setEmail, logout }
})
