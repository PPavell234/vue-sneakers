<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Header from '@/components/Header.vue'
import VideoPlayer from '@/components/VideoPlayer.vue'
import Reactions from '@/components/Reactions.vue'
import Slider from '@/components/Slider.vue'

import '@/assets/main.css'

const showMenu = ref(false)
const scriptLoaded = ref(false)

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

    const script = document.createElement('script')
    script.type = 'module'
    script.src = 'https://unpkg.com/@splinetool/viewer@1.11.2/build/spline-viewer.js'
    script.onload = () => {
        removeSplineBranding()
    }
    document.head.appendChild(script)
})

function removeSplineBranding() {
    const observer = new MutationObserver(() => {
        const viewer = document.querySelector('spline-viewer')
        if (!viewer || !viewer.shadowRoot) return

        // Все возможные элементы брендинга
        const selectors = [
            '[data-label="branding"]',
            '[part="branding"]',
            '.branding',
            '.watermark',
            'a[href*="spline.design"]',
            'a[aria-label*="Spline"]'
        ]

        selectors.forEach((sel) => {
            const el = viewer.shadowRoot.querySelector(sel)
            if (el) {
                el.remove()
            }
        })
    })

    observer.observe(document.body, {
        childList: true,
        subtree: true
    })
}

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside)
})
</script>

<style>
spline-viewer::part(branding) {
    opacity: 0 !important;
}
</style>


<template>
    <div>
        <!-- Шапка -->
        <Header />

        <section>

        </section>

        <!-- Глобальный Spline слой (fixed) -->
        <div class="fixed inset-0 pointer-events-none" style="z-index:5;">
            <spline-viewer url="https://prod.spline.design/ziIbK-A1dXgwGdDS/scene.splinecode"
                style="width:100%; height:100%; pointer-events:none; background:transparent;"></spline-viewer>
        </div>


        <div
            class="text-white py-100 text-center bg-[url('/images/register_image.jpg')] bg-cover bg-center bg-no-repeat">
            <!-- Общий контейнер -->
            <div class="mx-auto w-full max-w-[800px] px-4">
                <!-- Заголовок -->
                <div class="bg-[#D0C5C0] py-2 text-black rounded-t-md">
                    <h1 class="text-xl font-semibold">ВОЙТИ ИЛИ ЗАРЕГИСТРИРОВАТЬСЯ</h1>
                </div>

                <!-- Основной контейнер -->
                <div class="flex flex-col md:flex-row justify-between items-stretch bg-black gap-4 md:gap-0">
                    <!-- Левый блок -->
                    <div class="bg-white text-black shadow-md p-6 md:p-8 w-full md:w-[400px] flex flex-col gap-6">
                        <a href="#"
                            class="flex items-center justify-center text-white py-4 px-4 hover:opacity-90 transition text-sm md:text-base"
                            style="
      background: url('/images/button1.svg') no-repeat bottom left / 100% auto;
   ">
                            ВОЙДИТЕ В УЧЕТНУЮ ЗАПИСЬ С ПОМОЩЬЮ
                        </a>

                        <a href="http://localhost:5173/register/registerProf"
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
                    <div class="bg-[#E9E1E1] text-left text-black p-6 md:p-8 w-full md:w-[400px]">
                        <p class="mb-3 text-sm md:text-base opacity-90">
                            Войдите или зарегистрируйтесь, чтобы без проблем управлять своими
                            играми и кошельком!
                        </p>

                        <ul class="list-disc list-inside text-sm md:text-base space-y-2">
                            <li>Покупайте игры Minecraft и Java Realms</li>
                            <li>Меняйте персонажей и имя профиля Java.</li>
                            <li>
                                Управляйте мирами Java и Bedrock Realms и приглашайте друзей.
                            </li>
                        </ul>
                    </div>
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
    </div>


</template>
