import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const isRegistered = ref(false)
  const email = ref('')

  // 💰 Добавляем кошелёк
  const wallet = ref({
    coins: 0,
  })

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

  // Сохранение кошелька
  const setWallet = (value) => {
    wallet.value = value
    localStorage.setItem('userWallet', JSON.stringify(value))
  }

  // Выход
  const logout = () => {
    isRegistered.value = false
    email.value = ''
    wallet.value = { coins: 0 }

    localStorage.removeItem('userRegistered')
    localStorage.removeItem('userEmail')
    localStorage.removeItem('userWallet')
  }

  // ---- Восстановление данных при загрузке ----

  if (localStorage.getItem('userRegistered') === 'true') {
    isRegistered.value = true
  }

  const savedEmail = localStorage.getItem('userEmail')
  if (savedEmail) {
    email.value = savedEmail
  }

  const savedWallet = localStorage.getItem('userWallet')
  if (savedWallet) {
    wallet.value = JSON.parse(savedWallet)
  }

  return {
    isRegistered,
    email,
    wallet,
    setRegistered,
    setEmail,
    setWallet,
    logout,
  }
})
