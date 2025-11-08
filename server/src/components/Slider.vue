<template>
    <div class="flex flex-col md:flex-row justify-center items-center mt-10 mb-10 gap-4 px-4">
        <button @click="prevImage" class="hover:scale-110 transition-transform flex-shrink-0">
            <img src="/images/bt-l (2).png" alt="prev" class="w-8 md:w-12 h-auto" />
        </button>

        <div class="flex justify-center items-center gap-2 md:gap-4 flex-wrap">
            <div
                class="w-[120px] md:w-[250px] lg:w-[384px] h-[120px] md:h-[250px] lg:h-[384px] overflow-hidden rounded-xl grayscale opacity-60 hover:opacity-80 transition-all duration-300">
                <img :src="images[(currentIndex + images.length - 1) % images.length]"
                    class="w-full h-full object-cover" />
            </div>

            <div
                class="w-[150px] md:w-[300px] lg:w-[384px] h-[150px] md:h-[300px] lg:h-[384px] overflow-hidden rounded-xl shadow-lg transition-all duration-500">
                <img :src="images[currentIndex]" class="w-full h-full object-cover" />
            </div>

            <div
                class="w-[120px] md:w-[250px] lg:w-[384px] h-[120px] md:h-[250px] lg:h-[384px] overflow-hidden rounded-xl grayscale opacity-60 hover:opacity-80 transition-all duration-300">
                <img :src="images[(currentIndex + 1) % images.length]" class="w-full h-full object-cover" />
            </div>
        </div>

        <button @click="nextImage" class="hover:scale-110 transition-transform flex-shrink-0">
            <img src="/images/bt-r (1).png" alt="next" class="w-8 md:w-12 h-auto" />
        </button>
    </div>
</template>

<script setup>
import { ref } from 'vue'

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
</script>
