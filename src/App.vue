<script setup>
import { ref } from 'vue'   // ✅ нужно импортировать ref
import Header from './components/Header.vue'

// массив картинок
const images = [
  '/images/images1.png',
  '/images/images2.png',
  '/images/images3.png'
]

// текущий индекс
const currentIndex = ref(0)

// функция переключения влево
const prevImage = () => {
  currentIndex.value =
    (currentIndex.value - 1 + images.length) % images.length
}

// функция переключения вправо
const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length
}
</script>

<template>
  <Header />

  <div class="flex justify-center items-center">
    <img src="/images/Title1.png" alt="" class="h-150 w-auto" />
  </div>

  <!-- Основной контент -->
  <div class="text-white bg-[#262423] min-h-screen p-6 flex justify-center pl-25">
    <div class="pr-14">
      <ul class="flex flex-col items-start space-y-2">
        <img src="/images/autor.png" alt="" />
        <li>Автор</li>
        <li>Per Landin</li>
        <li>Опубликовано</li>
        <li>16.10.2025</li>
      </ul>
    </div>

    <div class="pr-1 pl-12 space-y-4 max-w-[900px]">
      <h1 class="text-2xl">SoulSteel – a new dungeoneering adventure</h1>
      <p>Evolve your arsenal and conquer the dungeon!</p>

      <p class="mt-10">
        Overworld caves are great and all with their stalagmites, stalactites, and occasional bats,
        but have you ever paid a visit to a dungeon? How about a time-based dungeon with foes and obstacles
        challenging you at every given opportunity? Did I get your attention! Woohoo!
      </p>

      <img src="/images/vi.png" alt="" class="w-full h-auto rounded-xl" />
    </div>
  </div>

  <!-- 👇 Слайдер -->
  <div class="flex justify-center items-center space-x-6 mt-10 mb-10">
    <!-- Кнопка влево -->
    <button @click="prevImage">
      <img src="/images/bt-l (2).png" alt="prev" class="w-16 h-auto hover:scale-110 transition-transform" />
    </button>

    <div class="w-[600px] h-[400px] overflow-hidden flex justify-center items-center rounded-xl bg-[#1f1f1f]">
      <img :src="images[currentIndex]" alt="slider image"
        class="w-full h-full object-cover transition-all duration-500" />
    </div>

    <!-- Кнопка вправо -->
    <button @click="nextImage">
      <img src="/images/bt-r (1).png" alt="next" class="w-16 h-auto hover:scale-110 transition-transform" />
    </button>
  </div>
</template>
