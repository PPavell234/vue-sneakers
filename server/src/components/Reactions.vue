<template>
    <div class="mt-6">
        <!-- Реакции -->
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

        <!-- Гифка -->
        <transition name="fade">
            <div v-if="showGif" class="fixed inset-0 bg-black/95 flex justify-center items-center z-[9999]"
                @click.self="closeGif">
                <img :src="gifSrc" alt="Reaction" class="absolute inset-0 w-full h-full object-cover" />
            </div>
        </transition>
    </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'

// список иконок реакций
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

// список гифок
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
    // если повторно нажали — сбросить
    if (activeIndex.value === index) {
        activeIndex.value = null
        counts.value[index] = 0
        closeGif()
        return
    }

    // сбросить другие
    counts.value = counts.value.map(() => 0)
    activeIndex.value = index
    counts.value[index] = 1

    // показать гифку
    closeGif()
    await nextTick()

    // случайная гифка
    const randomGif = gifFiles[Math.floor(Math.random() * gifFiles.length)]
    gifSrc.value = `${randomGif}?t=${Date.now()}`
    showGif.value = true

    // автозакрытие через 5 секунд
    gifTimer = setTimeout(() => closeGif(), 5000)
}
</script>

<style scoped>
/* Плавное появление/исчезновение гифки */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.6s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
