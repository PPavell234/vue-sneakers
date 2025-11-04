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
                        <li class="px-2 py-1 hover:text-green-500 cursor-pointer">SIGN IN</li>
                        <hr class="border-t border-[#33302F] w-full" />
                        <li class="px-2 py-1 hover:text-green-500 cursor-pointer">CREATE ACCOUNT</li>
                        <hr class="border-t border-[#33302F] w-full" />
                        <li class="px-2 py-1 hover:text-green-500 cursor-pointer">DOWNLOAD</li>
                        <hr class="border-t border-[#33302F] w-full" />
                        <li class="px-2 py-1 hover:text-green-500 cursor-pointer">REDEEM</li>
                    </ul>

                    <!-- Вертикальная линия справа -->
                    <div class="flex items-stretch ml-3">
                        <div class="border-l-9 border-[#33302F] h-full"></div>
                    </div>
                </div>
            </transition>
        </div>

    </header>

    <div class="bg-black text-white py-8 px-6 md:px-20 text-center">
        <!-- Заголовок -->
        <div class="bg-[#D0C5C0] py-2 mb-0 mx-auto w-fit px-53">
            <h1 class="text-xl font-semibold text-black">ВОЙТИ ИЛИ ЗАРЕГИСТРИРОВАТЬСЯ</h1>
        </div>

        <!-- Основной контейнер -->
        <div class="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-0">

            <!-- Левый блок -->
            <div class="bg-white text-black shadow-md p-5 w-full md:w-[350px] flex flex-col gap-7">
                <a href="#"
                    class="flex items-center justify-center text-white py-4 px-4 hover:opacity-90 transition text-sm md:text-base"
                    style="
           background-image: url('/images/button1.svg');
           background-repeat: no-repeat;
           background-position: center;
           background-size: cover;
         ">
                    ВОЙДИТЕ В УЧЕТНУЮ ЗАПИСЬ С ПОМОЩЬЮ
                </a>

                <a href="#"
                    class="flex items-center justify-center text-white py-4 px-4 hover:opacity-90 transition text-sm md:text-base"
                    style="
           background-image: url('/images/button2.svg');
           background-repeat: no-repeat;
           background-position: center;
           background-size: cover;
         ">
                    ЗАРЕГИСТРИРОВАТЬСЯ
                </a>
            </div>

            <!-- Правый блок -->
            <div class="bg-[#E9E1E1] text-left max-w-[420px] p-4 text-black">
                <p class="mb-3 text-sm md:text-base opacity-90">
                    Войдите или зарегистрируйтесь, чтобы без проблем управлять своими играми и кошельком!
                </p>

                <ul class="list-disc list-inside text-sm md:text-base space-y-2">
                    <li>Покупайте игры Minecraft и Java Realms</li>
                    <li>Меняйте персонажей и имя профиля Java.</li>
                    <li>Управляйте мирами Java и Bedrock Realms и приглашайте друзей.</li>
                </ul>
            </div>
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
