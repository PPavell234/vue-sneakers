import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// 👉 1. Создаём приложение
const app = createApp(App)

// 👉 2. Подключаем плагины
app.use(createPinia())
app.use(router)

// 👉 3. Монтируем
app.mount('#app')

// 👉 4. Всё, дальше — можно безопасно добавлять свои обработчики DOM,
// но не создавать новое приложение!
document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('myVideo')
  const playButton = document.getElementById('playButton')

  if (!video || !playButton) {
    console.error('❌ Не найдены элементы video или playButton')
    return
  }

  playButton.addEventListener('click', async () => {
    try {
      await video.play()
    } catch (e) {
      console.error('Ошибка при запуске видео:', e)
    }
  })

  video.addEventListener('play', () => {
    playButton.style.opacity = '0'
    playButton.style.pointerEvents = 'none'
  })

  video.addEventListener('pause', () => {
    playButton.style.opacity = '1'
    playButton.style.pointerEvents = 'auto'
  })

  video.addEventListener('ended', () => {
    playButton.style.opacity = '1'
    playButton.style.pointerEvents = 'auto'
  })
})
