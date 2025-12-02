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
        <div
            class="w-[90vw] max-w-[938px] h-[80vh] max-h-[500px] bg-[#2f2d2c] flex flex-col items-center rounded-lg shadow-lg p-4 relative">

            <!-- Основное изображение (NoReg.png) -->
            <img src="/images/NoReg.png" alt="" class="absolute z-50" style="
                right: 33%;
                top: -55%;
                width: 30%;
                height: auto;
                pointer-events: none;
            ">

            <!-- Градиентные изображения с адаптивным позиционированием -->
            <img src="/images/Gradient.png" alt="" class="absolute z-40" style="
                left: -30%;
                top: 25%;
                width: 12%;
                height: auto;
                pointer-events: none;
                opacity: 0.3;
            ">

            <img src="/images/Gradient.png" alt="" class="absolute z-40" style="
                left: 12%;
                bottom: -12%;
                width: 12%;
                height: auto;
                pointer-events: none;
                opacity: 0.7;
            ">

            <img src="/images/Gradient.png" alt="" class="absolute z-40" style="
                right: 15%;
                top: 50%;
                width: 4%;
                height: auto;
                pointer-events: none;
                opacity: 0.7;
                transform: translateY(-50%);
            ">

            <img src="/images/Gradient.png" alt="" class="absolute z-40" style="
                right: 5%;
                bottom: 30%;
                width: 4%;
                height: auto;
                pointer-events: none;
                opacity: 0.7;
            ">

            <img src="/images/Gradient.png" alt="" class="absolute z-40" style="
                left: 20%;
                top: 10%;
                width: 4%;
                height: auto;
                pointer-events: none;
                opacity: 0.7;
            ">

            <!-- Кнопка закрытия -->
            <button @click="closeModal"
                class="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 transition z-[60]">
                ✕
            </button>

            <h1 class="mb-2 mt-4 md:mt-8 text-white p-5 md:p-8 text-3xl md:text-4xl lg:text-6xl text-center">Вы не
                авторизованы</h1>

            <!-- Разделитель -->
            <div class="py-2 md:py-3 w-full">
                <hr class="border-t-2 border-[#232221] my-1 w-[90%] mx-auto" />
            </div>

            <div class="w-[90%] mx-auto px-4 md:px-8 my-12">
                <p class="break-words text-gray-400 text-xs md:text-sm">
                    By opting in, you agree to receive communications from Minecraft. You can always unsubscribe.
                </p>
                <p class="break-words text-gray-400 text-xs md:text-sm mt-2">
                    I will receive information, tips, and offers about Minecraft. Privacy Statement.
                </p>
            </div>

            <div class="my-4">
                <button @click="goRegister"
                    class="flex items-center justify-center text-black py-3 px-8 md:py-4 md:px-15 hover:opacity-90 transition text-sm md:text-base"
                    style="
                        background-image: url('/images/CoinHome/button1.png');
                        background-repeat: no-repeat;
                        background-position: center;
                        background-size: contain;
                    ">
                    Авторизоваться
                </button>
            </div>
        </div>
    </div>
</template>