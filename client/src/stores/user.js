import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const isRegistered = ref(false)

  const setRegistered = (value) => {
    isRegistered.value = value
    localStorage.setItem('userRegistered', value ? 'true' : 'false')
  }

  // Проверка при инициализации стора
  if (localStorage.getItem('userRegistered') === 'true') {
    isRegistered.value = true
  }

  return { isRegistered, setRegistered }
})
