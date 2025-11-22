<script setup>
import { ref, nextTick, onMounted } from 'vue'
import { useUserStore } from "@/stores/user";



// список иконок реакций
const icons = [
    { default: '/icons/image_icon1(1).png', active: '/icons/image_icon1.webp' },
    { default: '/icons/image_icon2(2).png', active: '/icons/image_icon2.webp' },
    { default: '/icons/image_icon3(3).png', active: '/icons/image_icon3.webp' },
    { default: '/icons/image_icon4(4).png', active: '/icons/image_icon4.webp' }
]

const reactionNames = ["icon1", "icon2", "icon3", "icon4"]; // Названия реакций

// состояния
const activeIndex = ref(null)
const counts = ref(icons.map(() => 0))
const showGif = ref(false)
const gifSrc = ref('')
let gifTimer = null

//Сохкр

const userStore = useUserStore();

onMounted(async () => {
    const res = await fetch(`http://localhost:5000/api/reactions/user?username=${userStore.email}`);
    const data = await res.json();

    if (data.reaction) {
        const index = reactionNames.indexOf(data.reaction.reaction);
        if (index !== -1) {
            activeIndex.value = index;
            counts.value[index] = 1;
        }
    }
});



// список гифок
const gifFiles = [
    '/video/ender1Gif.gif',
    '/video/ender2Gif.gif',
    '/video/ender3Gif.gif'
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

    // Фиксированный запрос
    await fetch("http://localhost:5000/api/reactions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            username: userStore.email,
            reaction: reactionNames[index]
        })
    });

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
