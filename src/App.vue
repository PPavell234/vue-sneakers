<script setup>
import { ref, onMounted, nextTick, onBeforeUnmount } from 'vue'
import Header from './components/Header.vue'
import VideoPlayer from './components/VideoPlayer.vue'
import Reactions from './components/Reactions.vue'
import Slider from './components/Slider.vue'

const showMenu = ref(false)
const toggleMenu = () => {
  showMenu.value = !showMenu.value
}

// Клик вне меню — закрыть
const handleClickOutside = (event) => {
  const btn = document.getElementById('account-btn')
  const menu = document.getElementById('account-menu')
  if (btn && menu && !btn.contains(event.target) && !menu.contains(event.target)) {
    showMenu.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
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
  <header class="bg-[#262423] w-full h-10 flex items-center justify-between px-5 md:px-10">
    <img src="/images/logo.png" alt="logo" class="h-6 md:h-8" />

    <!-- Контейнер для ACCOUNT -->
    <div class="relative inline-block">
      <!-- Кнопка ACCOUNT -->
      <div id="account-btn" @click="toggleMenu"
        class="flex items-center gap-6 md:gap-10 lg:gap-3 text-white hover:text-green-500 group cursor-pointer transition-colors">
        <!-- Иконка профиля -->
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
          class="w-6 h-6 transition-colors duration-300">
          <path
            d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>

        <p class="transition-colors duration-300">ACCOUNT</p>

        <!-- Стрелка -->
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
          class="w-6 h-6 transition-transform duration-300" :class="{ 'rotate-180': showMenu }">
          <path d="M12 15.5l-8-8 1.41-1.41L12 12.67l6.59-6.58L20 7.5z" />
        </svg>
      </div>

      <!-- Меню -->
      <transition name="fade">
        <div v-if="showMenu" id="account-menu"
          class="absolute top-full mt-2 left-0 w-[182px] h-[131px] bg-[#262423] text-white p-3 rounded-lg shadow-lg z-50">
          <ul class="flex flex-col w-full text-sm">
            <li class="px-2 py-1 hover:text-green-500 cursor-pointer">SIGN IN</li>
            <hr class="border-t border-[#33302F] w-full" />
            <li class="px-2 py-1 hover:text-green-500 cursor-pointer">CREATE ACCOUNT</li>
            <hr class="border-t border-[#33302F] w-full" />
            <li class="px-2 py-1 hover:text-green-500 cursor-pointer">DOWNLOAD</li>
            <hr class="border-t border-[#33302F] w-full" />
            <li class="px-2 py-1 hover:text-green-500 cursor-pointer">REDEEM</li>
          </ul>
        </div>
      </transition>
    </div>

  </header>



  <!-- Заголовок -->
  <div class="flex justify-center items-center my-2 px-10">
    <img src="/images/Title1.png" alt="Title" class="w-[300px] md:w-[600px] lg:w-[1500px] h-auto" />
  </div>

  <!-- Основной контент -->
  <div
    class="text-white bg-[#262423] min-h-screen p-4 md:p-10 flex flex-col lg:flex-row justify-center items-start gap-8">
    <!-- Левая колонка -->
    <div class="flex flex-col items-center text-center bg-[#33302F] p-6 rounded-2xl shadow-md w-full  md:w-[250px]">
      <img src="/images/autor.png" alt="Автор" class="max-w-[50px] w-full h-auto rounded-xl" />
      <p class="font-semibold mt-2">Автор</p>
      <p>Per Landin</p>
      <p class="mt-2 text-sm opacity-80">Опубликовано</p>
      <p>16.10.2025</p>
    </div>

    <!-- Правая колонка -->
    <div class="space-y-4 max-w-[900px]">
      <h1 class="text-xl md:text-2xl font-semibold">SoulSteel – a new dungeoneering adventure</h1>
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

      <!-- Видео -->
      <VideoPlayer />

      <div class="bg-[#262423] py-1">
        <hr class="border-t-2 border-[#33302F] my-4 w-[100%] mx-auto" />
      </div>

      <!-- Реакции -->
      <Reactions />

      <div class="bg-[#262423] py-1">
        <hr class="border-t-2 border-[#33302F] my-1 w-[90%] mx-auto" />
      </div>

      <p>EXPLORE A DEEP DUNGEON</p>
      <p>
        In SoulSteel, you assume the role of a daring, gear-craving relic hunter with the sole mission of exploring
        treacherous dungeons in the pursuit of glory and treasure. Your spoils give you resources and materials that
        allow you to evolve your character, unlock new abilities, grow in strength, and take on even tougher challenges.
        The more you extract, the better the rewards!
      </p>

      <p>
        Time is your greatest enemy. Or well, one of many enemies, actually! The undiscovered challenges held within
        these dungeons will test even the most seasoned adventurer with perplexing puzzles, treacherous traps, and
        mighty mobs hungry for a fight – all with the ability to end your journey suddenly and swiftly.
      </p>

      <p>
        But with risk comes the promise of rewards! Fortune favours the bold – those that venture the deepest will get
        greater rewards, and more plentiful resources. And better gear is an absolute necessity if you plan on
        conquering the progressive challenges that lie deep within these winding halls and corridors.
      </p>
    </div>
  </div>

  <!-- Слайдер -->
  <Slider />

  <!-- Остальной контент -->
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
        and ideas for where we want to take the journey, and we can't wait to share them with you!” says Noxcrew’s Joe
        Arsenault.
      </p>

      <p>
        So who's ready for some dungeons? Personally, I'm souled! You can find SoulSteel in the Servers tab on Minecraft
        Bedrock Edition today!
      </p>

      <p>See you inside!</p>
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

  <!-- Нижний футер -->
  <footer
    class="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 text-white py-4 px-6 bg-[#262423]">
    <img src="/images/Component 2.png" alt="" class="h-6 md:h-8" />

    <div class="flex items-center space-x-2">
      <p>Русский</p>
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
        class="w-4 h-4 transition-transform duration-300 group-hover:rotate-180">
        <path d="M12 15.5l-8-8 1.41-1.41L12 12.67l6.59-6.58L20 7.5z" />
      </svg>
    </div>

    <ul class="flex flex-col md:flex-row gap-2 md:gap-4 text-sm">
      <li>Конфиденциальность и файлы cookie</li>
      <li>© 2025 Microsoft</li>
    </ul>
  </footer>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
