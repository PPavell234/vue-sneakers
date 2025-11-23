import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const isRegistered = ref(false)
  const email = ref('')

  const wallet = ref({
    coins: 0,
    history: [],
  })

  const setRegistered = (value) => {
    isRegistered.value = value
    localStorage.setItem('userRegistered', value ? 'true' : 'false')
  }

  const setEmail = (value) => {
    email.value = value
    localStorage.setItem('userEmail', value)
  }

  // Исправление — НЕ заменяем объект!
  const setWallet = (value) => {
    wallet.value.coins = value.coins
    wallet.value.history = value.history || []
    localStorage.setItem('userWallet', JSON.stringify(wallet.value))
  }

  const loadWallet = async () => {
    if (!email.value) return

    const res = await fetch(`http://localhost:5000/api/wallet/get?username=${email.value}`)
    const data = await res.json()

    wallet.value.coins = data.coins
    wallet.value.history = data.history

    localStorage.setItem('userWallet', JSON.stringify(wallet.value))
  }

  const logout = () => {
    isRegistered.value = false
    email.value = ''

    // ❗ НЕ заменяем объект
    wallet.value.coins = 0
    wallet.value.history = []

    localStorage.removeItem('userRegistered')
    localStorage.removeItem('userEmail')
    localStorage.removeItem('userWallet')
  }

  // --- ВОССТАНОВЛЕНИЕ ---
  if (localStorage.getItem('userRegistered') === 'true') {
    isRegistered.value = true
  }

  const savedEmail = localStorage.getItem('userEmail')
  if (savedEmail) {
    email.value = savedEmail
  }

  const savedWallet = localStorage.getItem('userWallet')
  if (savedWallet) {
    const parsed = JSON.parse(savedWallet)
    wallet.value.coins = parsed.coins
    wallet.value.history = parsed.history || []
  }

  return {
    isRegistered,
    email,
    wallet,
    setRegistered,
    setEmail,
    setWallet,
    logout,
    loadWallet,
  }
})
