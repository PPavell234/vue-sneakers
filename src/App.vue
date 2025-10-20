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
  <div class="text-white bg-[#262423] h-120min-h-screen p-6 flex justify-center pl-25">
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

      <p>Introducing SoulSteel – an ever-expanding multiplayer dungeon crawler from Noxcrew where every corner holds a
        new
        adventure, available through the Minecraft Bedrock Edition server list – today! </p>

      <img src="/images/vi.png" alt="" class="w-full h-auto rounded-xl" />

      <h1>EXPLORE A DEEP DUNGEON</h1>
      <p>In SoulSteel, you assume the role of a daring, gear-craving relic hunter with the sole mission of exploring
        treacherous dungeons
        in the pursuit of glory and treasure. Your spoils give you resources and materials that allow you to evolve your
        character, unlock
        new abilities, grow in strength, and take on even tougher challenges. The more you extract, the better the
        rewards! </p>
      <p>Time is your greatest enemy. Or well, one of many enemies, actually! The undiscovered challenges held within
        these dungeons
        will test even the most seasoned adventurer with perplexing puzzles, treacherous traps, and mighty mobs hungry
        for a fight – all
        with the ability to end your journey suddenly and swiftly.   </p>

      <p>But with risk comes the promise of rewards! Fortune favours the bold – those that venture the deepest will get
        greater rewards,
        and more plentiful resources. And better gear is an absolute necessity if you plan on conquering the progressive
        challenges that
        lie deep within these winding halls and corridors. </p>
    </div>
  </div>

  <!-- 🔹 Слайдер -->
  <div class="flex justify-center items-center mt-10 mb-10 space-x-4">
    <!-- Кнопка влево -->
    <button @click="prevImage" class="hover:scale-110 transition-transform">
      <img src="/images/bt-l (2).png" alt="prev" class="w-12 h-auto" />
    </button>

    <!-- Блок с 3 изображениями -->
    <div class="flex justify-center items-center space-x-4">
      <!-- Левая картинка -->
      <div class="w-[384px] h-[384px] overflow-hidden rounded-xl">
        <img :src="images[(currentIndex + images.length - 1) % images.length]" alt="previous"
          class="w-full h-full object-cover opacity-70" />
      </div>

      <!-- Центральная (активная) картинка -->
      <div class="w-[384px] h-[384px] overflow-hidden rounded-xl shadow-lg">
        <img :src="images[currentIndex]" alt="active" class="w-full h-full object-cover transition-all duration-500" />
      </div>

      <!-- Правая картинка -->
      <div class="w-[384px] h-[384px] overflow-hidden rounded-xl">
        <img :src="images[(currentIndex + 1) % images.length]" alt="next"
          class="w-full h-full object-cover opacity-70" />
      </div>
    </div>

    <!-- Кнопка вправо -->
    <button @click="nextImage" class="hover:scale-110 transition-transform">
      <img src="/images/bt-r (1).png" alt="next" class="w-12 h-auto" />
    </button>
  </div>
</template>
