<script setup>
import { ref, onMounted, nextTick, onBeforeUnmount } from 'vue'
import Header from '@/components/Header.vue'
import VideoPlayer from '@/components/VideoPlayer.vue'
import Reactions from '@/components/Reactions.vue'
import Slider from '@/components/Slider.vue'


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
                    class="absolute top-full mt-2 left-0 w-[182px] h-[131px] bg-[#262423] text-white p-1 shadow-lg z-50 flex">
                    <!-- Левый блок со списком -->
                    <ul class="flex flex-col w-full text-sm">
                        <li class="px-2 py-1 hover:text-green-500 cursor-pointer">
                            <a href="http://localhost:5173/register" class="block w-full h-full">SIGN IN</a>
                        </li>
                        <hr class="border-t border-[#33302F] w-full" />
                        <li class="px-2 py-1 hover:text-green-500 cursor-pointer">CREATE ACCOUNT</li>
                        <hr class="border-t border-[#33302F] w-full" />
                        <li class="px-2 py-1 hover:text-green-500 cursor-pointer">DOWNLOAD</li>
                        <hr class="border-t border-[#33302F] w-full" />
                        <li class="px-2 py-1 hover:text-green-500 cursor-pointer">
                            <a href="http://localhost:5173/" class="block w-full h-full">REDEEM</a>
                        </li>
                    </ul>

                    <!-- Вертикальная линия справа -->
                    <div class="flex items-stretch ml-3">
                        <div class="border-l-9 border-[#33302F] h-full"></div>
                    </div>
                </div>
            </transition>
        </div>

    </header>

</template>
