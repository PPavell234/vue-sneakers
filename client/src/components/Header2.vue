<script setup>
import { ref, onMounted, nextTick, onBeforeUnmount } from 'vue'
import { useUserStore } from '@/stores/user'


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


//Почта ---
const userStore = useUserStore()


//Функция выхода
const logout = () => {
    userStore.logout()
    router.push('/')    // отправляем на главную
}

</script>

//Если пользователь разегался

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
                    class="absolute top-full mt-2 right-2 w-[300px] bg-[#262423] text-white p-2 shadow-lg z-50 flex rounded-xl">
                    <!-- Левая колонка -->
                    <ul class="flex flex-col w-full text-sm flex-1">
                        <li class="flex items-center gap-2 px-2 py-1">
                            <img src="/images/ProfImage.png" alt="" class="w-6 h-6 rounded-full bg-gray-700" />
                            <!-- показываем email, если есть -->
                            <p>{{ userStore.email || 'NameProfile' }}</p>
                        </li>

                        <li class="px-2 py-1 hover:text-green-500 cursor-pointer">
                            <a href="http://localhost:5173/register" class="block w-full h-full">ПРОФИЛЬ</a>
                        </li>
                        <hr class="border-t border-[#33302F] w-full" />

                        <li class="px-2 py-1 hover:text-green-500 cursor-pointer">ЗАГРУЗИТЬ</li>
                        <hr class="border-t border-[#33302F] w-full" />

                        <li class="px-2 py-1 hover:text-green-500 cursor-pointer">АКТИВИРОВАТЬ</li>
                        <hr class="border-t border-[#33302F] w-full" />

                        <li class="px-2 py-1 hover:text-green-500 cursor-pointer" @click="logout">
                            <a href="http://localhost:5173/" class="block w-full h-full">ВЫЙТИ</a>
                        </li>
                        <hr class="border-t border-[#33302F] w-full" />


                        <li
                            class="flex flex-row items-center justify-center gap-2 py-4 transform scale-[1.3] origin-center">
                            <p class="text-white text-xs whitespace-nowrap">MINECOINS</p>

                            <div class="relative w-[110px] h-8 flex items-center justify-center">
                                <div class="absolute inset-0 bg-no-repeat bg-center bg-contain"
                                    style="background-image: url('/images/button2.svg');"></div>

                                <img src="/images/coin.svg" class="absolute left-1 top-1/2 -translate-y-1/2 w-4" />

                                <div class="absolute left-6 top-1/2 -translate-y-1/2 text-white font-bold text-xs">1
                                </div>
                            </div>

                            <img src="/images/add.png" class="size-5 w-5 cursor-pointer" />
                        </li>
                    </ul>

                    <!-- Правая вертикальная линия -->
                    <div class="border-l border-[#33302F] ml-2"></div>
                </div>
            </transition>
        </div>

    </header>

</template>
