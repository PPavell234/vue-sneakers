<template>
    <div class="relative inline-block group" @mouseenter="showButton = true" @mouseleave="showButton = false">
        <video ref="video" src="/video/videoplayback.mp4" class="w-[800px] h-[450px] rounded-xl object-cover"
            playsinline></video>

        <img v-show="showButton" :src="isPlaying ? '/images/Pause.png' : '/images/Group 1.png'" alt="Play/Pause"
            @click="togglePlay"
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-opacity duration-300 opacity-80 hover:opacity-100 z-10" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const video = ref(null)
const showButton = ref(false)
const isPlaying = ref(false)

onMounted(() => {
    const vid = video.value
    vid.addEventListener('play', () => (isPlaying.value = true))
    vid.addEventListener('pause', () => (isPlaying.value = false))
})

const togglePlay = () => {
    if (!video.value) return
    if (video.value.paused) video.value.play()
    else video.value.pause()
}
</script>
