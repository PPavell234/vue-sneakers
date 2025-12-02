<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps({
    show: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['close'])

// Кнопка для перехода к регистрации
const goRegister = () => {
    router.push('/register')
    emit('close')
}

// Закрыть окно
const closeModal = () => {
    emit('close')
}

// Закрытие по клику на фон
const handleBackdropClick = (event) => {
    if (event.target.classList.contains('no-register-backdrop')) {
        closeModal()
    }
}
</script>

<template>
    <!-- Фон окна -->
    <div v-if="show" class="fixed inset-0 bg-black/70 flex justify-center items-center z-[10000] no-register-backdrop"
        @click="handleBackdropClick">
        <!-- Окно -->
        <div class="w-[938px] h-[437px] bg-[#2f2d2c] flex flex-col items-center rounded-lg shadow-lg p-4 relative">
            <!-- Кнопка закрытия -->
            <button @click="closeModal"
                class="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 transition">
                ✕
            </button>

            <h1 class="mb-12 mt-10 text-white p-14 text-6xl">Вы не авторизованы</h1>

            <!-- Разделитель -->
            <div class="py-3 w-full">
                <hr class="border-t-2 border-gray-400 my-1 w-[90%] mx-auto" />
            </div>

            <div class="w-[90%] ml-auto mr-auto pr-50">
                <p class="break-words text-white text-sm">
                    By opting in, you agree to receive communications from Minecraft. You can always unsubscribe.
                </p>
                <p class="break-words text-white text-sm mt-2">
                    I will receive information, tips, and offers about Minecraft. Privacy Statement.
                </p>
            </div>

            <div class="my-4">
                <button @click="goRegister"
                    class="flex items-center justify-center text-black py-4 px-15 hover:opacity-90 transition text-sm md:text-base"
                    style="
            background-image: url('/images/CoinHome/button1.png');
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
          ">
                    Авторизоваться
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Анимация для окна */
.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}
</style>