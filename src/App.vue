<script setup>
import { ref, onMounted, nextTick } from 'vue'
import Header from './components/Header.vue'

//-----------------------Слайдер
const images = [
  '/images/images1.png',
  '/images/images2.png',
  '/images/images3.png'
]
const currentIndex = ref(0)

const prevImage = () => {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length
}
const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length
}

//-----------------------Видео плеер
// refs для видео и кнопки
const video = ref(null)
const showButton = ref(false) // управление видимостью кнопки
const isPlaying = ref(false)  // отслеживаем состояние (play/pause)

onMounted(() => {
  const vid = video.value

  vid.addEventListener('play', () => (isPlaying.value = true))
  vid.addEventListener('pause', () => (isPlaying.value = false))
})

// клик по кнопке
const togglePlay = () => {
  if (!video.value) return

  if (video.value.paused) {
    video.value.play()
  } else {
    video.value.pause()
  }
}


// ---------------------- Реакции ----------------------
const icons = [
  { default: '/icons/image_icon1(1).png', active: '/icons/image_icon1.webp' },
  { default: '/icons/image_icon2(2).png', active: '/icons/image_icon2.webp' },
  { default: '/icons/image_icon3(3).png', active: '/icons/image_icon3.webp' },
  { default: '/icons/image_icon4(4).png', active: '/icons/image_icon4.webp' }
]

// состояния
const activeIndex = ref(null)
const counts = ref(icons.map(() => 0))
const showGif = ref(false)
const gifSrc = ref('')
let gifTimer = null

// список гифок (можно разные для разнообразия)
const gifFiles = [
  '/video/ednder2New1.gif',
  '/video/ednder2New2.gif',
  '/video/ednder2New3.gif'
]

// закрыть гифку
const closeGif = () => {
  showGif.value = false
  if (gifTimer) {
    clearTimeout(gifTimer)
    gifTimer = null
  }
}

// выбрать реакцию
const selectIcon = async (index) => {
  // если повторно нажали на ту же — сбросить
  if (activeIndex.value === index) {
    activeIndex.value = null
    counts.value[index] = 0
    closeGif()
    return
  }

  // сбросить другие реакции
  counts.value = counts.value.map(() => 0)
  activeIndex.value = index
  counts.value[index] = 1

  // показать гифку (перезапуск)
  closeGif()
  await nextTick()

  // выбираем случайную гифку и добавляем "?t=" чтобы перезапустить кэш
  const randomGif = gifFiles[Math.floor(Math.random() * gifFiles.length)]
  gifSrc.value = `${randomGif}?t=${Date.now()}`
  showGif.value = true

  // авто-закрытие через 5 секунд
  gifTimer = setTimeout(() => {
    closeGif()
  }, 5000)
}




</script>

<style scoped>
/* Плавное появление/исчезновение */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Адаптивность гифки */
@media (max-width: 768px) {
  img {
    width: 100%;
    height: auto;
  }
}
</style>



<template>



  <!-- Шапка -->
  <header class="bg-[#262423] w-full h-10 flex items-center px-4 md:px-10">
    <img src="/images/logo.png" alt="logo" class="h-6 md:h-8" />

  </header>

  <!-- Заголовок -->
  <div class="flex justify-center items-center my-6 px-4">
    <img src="/images/Title1.png" alt="Title" class="max-w-full h-auto md:w-[600px] lg:w-[800px]" />
  </div>

  <!-- Основной контент -->
  <div
    class="text-white bg-[#262423] min-h-screen p-4 md:p-10 flex flex-col lg:flex-row justify-center items-start gap-8">
    <!-- Левая колонка -->
    <div class="flex flex-col items-center text-center bg-[#33302F] p-6 rounded-2xl shadow-md w-full md:w-[250px]">
      <img src="/images/autor.png" alt="" class="" />
      <p class="font-semibold mt-2">Автор</p>
      <p>Per Landin</p>
      <p class="mt-2 text-sm opacity-80">Опубликовано</p>
      <p>16.10.2025</p>
    </div>

    <!-- Правая колонка -->
    <div class="space-y-4 max-w-[900px]">
      <h1 class="text-xl md:text-2xl font-semibold">
        SoulSteel – a new dungeoneering adventure
      </h1>
      <p>Evolve your arsenal and conquer the dungeon!</p>

      <p class="mt-10">
        Overworld caves are great and all with their stalagmites, stalactites, and occasional bats,
        but have you ever paid a visit to a dungeon? How about a time-based dungeon with foes and obstacles
        challenging you at every given opportunity? Did I get your attention! Woohoo!
      </p>

      <p>
        Introducing SoulSteel – an ever-expanding multiplayer dungeon crawler from Noxcrew where every corner holds a
        new adventure, available through the Minecraft Bedrock Edition server list – today!
      </p>
      <div class="relative inline-block group" @mouseenter="showButton = true" @mouseleave="showButton = false">
        <!-- видео -->
        <video ref="video" src="/video/videoplayback.mp4 " class="w-[800px] h-[450px] rounded-xl object-cover"
          playsinline></video>

        <!-- кнопка поверх видео -->
        <img v-show="showButton" :src="isPlaying ? '/images/Pause.png' : '/images/Group 1.png'" alt="Play/Pause"
          @click="togglePlay"
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-opacity duration-300 opacity-80 hover:opacity-100 z-10" />
      </div>

      <div class="bg-[#262423] py-1">
        <hr class="border-t-2 border-[#33302F] my-4 w-[100%] mx-auto" />
      </div>

      <!--Реакции -->
      <ul class="flex justify-center items-end gap-6 md:gap-10 lg:gap-16 text-white">
        <li v-for="(icon, index) in icons" :key="index"
          class="flex flex-col items-center cursor-pointer transition-transform duration-300"
          @click="selectIcon(index)">
          <img :src="activeIndex === index ? icon.active : icon.default" alt=""
            class="w-10 h-10 transition-all duration-200"
            :class="activeIndex === index ? 'scale-125' : 'opacity-80 hover:opacity-100'" />
          <span class="mt-2 text-lg">{{ counts[index] }}</span>
        </li>
      </ul>

      <!--Гифка-->
      <transition name="fade">
        <div v-if="showGif" class="fixed inset-0 bg-black/95 flex justify-center items-center z-[9999]"
          @click.self="closeGif">
          <img :src="gifSrc" alt="Reaction" class="absolute inset-0 w-full h-full object-cover" />
        </div>
      </transition>


      <div class="bg-[#262423] py-1">
        <hr class="border-t-2 border-[#33302F] my-1 w-[90%] mx-auto" />
      </div>



      <p>EXPLORE A DEEP DUNGEON</p>
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
        with the ability to end your journey suddenly and swiftly.  </p>
      <p>But with risk comes the promise of rewards! Fortune favours the bold – those that venture the deepest will get
        greater rewards,
        and more plentiful resources. And better gear is an absolute necessity if you plan on conquering the progressive
        challenges that
        lie deep within these winding halls and corridors. </p>
    </div>
  </div>

  <!-- Слайдер -->
  <div class="flex flex-col md:flex-row justify-center items-center mt-10 mb-10 gap-4 px-4">
    <!-- Кнопка влево -->
    <button @click="prevImage" class="hover:scale-110 transition-transform flex-shrink-0">
      <img src="/images/bt-l (2).png" alt="prev" class="w-8 md:w-12 h-auto" />
    </button>

    <!-- Изображения -->
    <div class="flex justify-center items-center gap-2 md:gap-4 flex-wrap">
      <!-- Левая (серая) -->
      <div
        class="w-[120px] md:w-[250px] lg:w-[384px] h-[120px] md:h-[250px] lg:h-[384px] overflow-hidden rounded-xl grayscale opacity-60 hover:opacity-80 transition-all duration-300">
        <img :src="images[(currentIndex + images.length - 1) % images.length]" alt="previous"
          class="w-full h-full object-cover" />
      </div>

      <!-- Центральная (яркая) -->
      <div
        class="w-[150px] md:w-[300px] lg:w-[384px] h-[150px] md:h-[300px] lg:h-[384px] overflow-hidden rounded-xl shadow-lg transition-all duration-500">
        <img :src="images[currentIndex]" alt="active" class="w-full h-full object-cover" />
      </div>

      <!-- Правая (серая) -->
      <div
        class="w-[120px] md:w-[250px] lg:w-[384px] h-[120px] md:h-[250px] lg:h-[384px] overflow-hidden rounded-xl grayscale opacity-60 hover:opacity-80 transition-all duration-300">
        <img :src="images[(currentIndex + 1) % images.length]" alt="next" class="w-full h-full object-cover" />
      </div>
    </div>

    <!-- Кнопка вправо -->
    <button @click="nextImage" class="hover:scale-110 transition-transform flex-shrink-0">
      <img src="/images/bt-r (1).png" alt="next" class="w-8 md:w-12 h-auto" />
    </button>
  </div>

  <!--Второй контент -->
  <div class="text-white bg-[#262423] min-h-screen p-4 md:p-10 flex justify-center">
    <div class="max-w-[900px] space-y-4">
      <h1 class="text-xl md:text-2xl font-semibold">TIME IS OF THE ESSENCE</h1>

      <p>
        However, linger too long and you’ll have to deal with the consequences. If you don’t make it back in time, you
        will be trapped inside, losing a percentage of your hard-earned rewards in the process, all for naught!
      </p>

      <p>
        Your dungeon starts with very little time available, meaning that short, cautious trips are a preferable
        approach. Luckily, there’s ‘Chrono Essence’ – a mysterious substance used to level up your Chrono Keeper
        lantern.
      </p>

      <p>
        Not all your time is spent spelunking those structures. Port Fortuna, a hub for both you and other fellow
        dungeoneers, is your go-to location for levelling up and evolving your weapons and abilities.
      </p>

      <img src="/images/images4.png" alt="" class="w-full h-auto rounded-xl" />

      <div class="flex justify-center items-center mb-6 gap-2">
        <p>IT'S A TRAP! Or well, it's a rock! Speed Forest Speed</p>
        <img src="/images/animation.gif" alt="gif" class="w-[30px] h-auto" />
      </div>

      <p>WHAT’S NEXT?</p>
      <p>
        SoulSteel is meant to be an evolving experience that will only grow over time. This means that more updates are
        on the horizon.
      </p>

      <p>
        “With SoulSteel, we've found gameplay that we find fun, and we can't stop playing! We have so many cool plans
        and
        ideas for where we want to take the journey, and we can't wait to share them with you!” says Noxcrew’s Joe
        Arsenault.
      </p>

      <p>
        So who's ready for some dungeons? Personally, I'm souled! You can find SoulSteel in the Servers tab on Minecraft
        Bedrock Edition today!
      </p>

      <p>See you inside! </p>
    </div>
  </div>

  <!-- Разделитель -->
  <div class="bg-[#262423] py-1">
    <hr class="border-t-2 border-[#33302F] my-1 w-[90%] mx-auto" />
  </div>

  <!-- Блок “Поделиться” -->
  <div class="bg-[#33302F] text-white py-6">
    <ul class="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 text-sm">
      <li>Поделиться этой историей</li>
      <img src="/images/Item.png" alt="" class="w-5 h-auto" />
      <img src="/images/Item-1.png" alt="" class="w-5 h-auto" />
      <img src="/images/Item-2.png" alt="" class="w-5 h-auto" />
    </ul>
  </div>

  <!-- Подписка -->
  <div class="bg-black text-white py-6 text-center">
    <h1 class="text-lg font-semibold mb-3">ПОДПИСАТЬСЯ НА MINECRAFT</h1>
    <ul class="flex flex-wrap justify-center items-center gap-3 md:gap-6 px-4 md:px-0">
      <li><img src="/images/Component 3.png" alt="" class="h-6 md:h-8" /></li>
      <li><img src="/images/Component 3-1.png" alt="" class="h-6 md:h-8" /></li>
      <li><img src="/images/Component 3-2.png" alt="" class="h-6 md:h-8" /></li>
      <li><img src="/images/Component 5.png" alt="" class="h-6 md:h-8" /></li>
      <li><img src="/images/Component 8.png" alt="" class="h-6 md:h-8" /></li>
      <li><img src="/images/Component 6.png" alt="" class="h-6 md:h-8" /></li>
      <li><img src="/images/Component 4.png" alt="" class="h-6 md:h-8" /></li>
      <li><img src="/images/7.png" alt="" class="h-6 md:h-8" /></li>
    </ul>
  </div>

  <!-- Футер -->
  <div class="text-white bg-[#33302F] px-6 md:px-20 py-10 space-y-6">
    <div class="flex flex-col md:flex-row justify-between items-center gap-6">
      <div class="flex items-center gap-8">
        <img src="/images/Container.png" alt="" class="h-8 md:h-10" />
        <img src="/images/Логотип Xbox Game Studios.png" alt="" class="h-8 md:h-10" />
      </div>

      <img src="/images/EA.png" alt="" class="h-8 md:h-10" />
    </div>

    <div class="flex flex-col md:flex-row justify-between items-center text-sm">
      <p>© 2025 Mojang AB. TM Microsoft Corporation.</p>
      <ul class="flex space-x-2 mt-2 md:mt-0">
        <li>Правила использования Minecraft</li>
        <li>--</li>
        <li>Политика конфиденциальности</li>
      </ul>
    </div>
  </div>

  <!-- Самый нижний футер -->
  <footer
    class="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 text-white py-4 px-6 bg-[#262423]">
    <img src="/images/Component 2.png" alt="" class="h-6 md:h-8" />

    <div class="flex items-center space-x-2">
      <p>Русский</p>
      <img src="/images/UP2.png" alt="" class="w-4 h-4" />
    </div>

    <ul class="flex flex-col md:flex-row gap-2 md:gap-4 text-sm">
      <li>Конфиденциальность и файлы cookie</li>
      <li>© 2025 Microsoft</li>
    </ul>
  </footer>
</template>
