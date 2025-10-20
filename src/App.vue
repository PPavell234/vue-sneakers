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


  <!-- Основной контент2 -->

  <div class="text-white bg-[#262423] h-120min-h-screen p-6 flex justify-center pl-25">

    <div class="p-6 pl-35"></div>


    <div class="pr-1 pl-12 space-y-4 max-w-[900px]">
      <h1 class="text-2xl">TIME IS OF THE ESSENCE </h1>
      <p>However, linger too long and you’ll have to deal with the consequences. If you don’t make it back in time, you
        will be trapped
        inside, losing a percentage of your hard-earned rewards in the process, all for naught! I know what you’re
        thinking: “How could
        Noxcrew design such a heinous-yet-challenging game mechanic?". Hey, don’t ask me, I’m just the messenger! </p>
      <p>Your dungeon starts with very little time available, meaning that short, cautious trips are a preferable
        approach. Luckily, there’s
        ‘Chrono Essence’ – a mysterious substance used to level up your Chrono Keeper lantern; an item that allows you
        to get more
        time in the dungeon when you level it up. </p>
      <p>Not all your time is spent spelunking those structures. Port Fortuna, a hub for both you and other fellow
        dungeoneers, is your
        go-to location for levelling up and evolving your weapons and abilities and interacting with vendors. And at the
        campsite, you’ll
        be able to add your own personal flair through customization based on level, progression, and past dungeon
        discoveries.
        Marshmallows may not be included, but we do recommend gathering your friends around the fire to trade stories of
        your
        exploits! </p>

      <img src="/images/images4.png" alt="" class="w-full h-auto rounded-xl" />

      <div class="flex justify-center items-center mb-15 gap-4">
        <p>IT'S A TRAP! Or well, it's a rock! Speed Forest Speed</p>
        <img src="/images/animation.gif" alt="loading animation" class="w-[30px] h-auto" />
      </div>


      <p>WHAT’S NEXT?</p>
      <p>SoulSteel is meant to be an evolving experience that will only grow over time. This means that more updates are
        on the horizon.
        New seasons will bring new regions, dungeons, weapons, armor sets, characters, enemies, and cosmetics. In short,
        Noxcrew has
        a lot in store!  </p>
      <p>“With SoulSteel, we've found gameplay that we find fun, and we can't stop playing! We have so many cool plans
        and ideas for
        where we want to take the journey, and we can't wait to share them with you!” says Noxcrew’s Joe Arsenault. </p>
      <p>
        So who's ready for some dungeons? Personally, I'm souled! You can find SoulSteel in the Servers tab on Minecraft
        Bedrock
        Edition today! And while you’re at it, make sure to connect with other fellow dungeoneers over at the SoulSteel
        Discord channel.
      </p>
      <p>See you inside! </p>


    </div>

  </div>

  <div class="bg-[#262423] py-1">
    <hr class="border-t-5 border-[#33302F] my-1 w-[1300px] mx-auto" />
  </div>

  <div class="bg-[#262423]">
    <ul class="flex justify-center items-center mt-0 mb-0 space-x-4 text-white h-[150px]">
      <li>Поделиться этой историей</li>
      <img src="/images/Item.png" alt="">
      <img src="/images/Item-1.png" alt="">
      <img src="/images/Item-2.png" alt="">
    </ul>

    <div class="bg-[#33302F] text-white py-6">
      <h1 class="flex justify-center text-lg mb-2">ПОДПИСАТЬСЯ НА MINECRAFT</h1>

      <ul class="flex justify-center items-center space-x-4">
        <li><img src="/images/Component 3.png" alt=""></li>
        <li><img src="/images/Component 3-1.png" alt=""></li>
        <li><img src="/images/Component 3-2.png" alt=""></li>
        <li><img src="/images/Component 5.png" alt=""></li>
        <li><img src="/images/Component 8.png" alt=""></li>
      </ul>
    </div>


  </div>








</template>
