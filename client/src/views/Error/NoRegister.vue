<script setup>

import { useRouter } from 'vue-router'

const router = useRouter()

//Кнопка для возврата
const goRegister = () => {
    router.push('/register')
}


</script>





<template>
    <div>
        <div class="w-[938px] h-[437px] bg-[#4d4c4b] flex flex-col items-center rounded-lg shadow-lg">
            <h1 class="mb-12 mt-10 text-white p-14 text-6xl">Вы не авторизованы</h1>

            <!-- Разделитель -->
            <div class="py-3 w-full">
                <hr class="border-t-2 border-gray-400 my-1 w-[90%] mx-auto" />
            </div>
            <div class="w-[90%] ml-auto mr-auto pr-50">
                <p class="break-words text-white text-sm">By opting in, you agree to receive communications from
                    Minecraft. You can always unsubscribe.</p>
                <p class="break-words text-white text-sm mt-2">I will receive information, tips, and offers about
                    Minecraft. Privacy Statement.</p>
            </div>
            <div class="my-4">
                <button @click="goRegister"
                    class="flex items-center justify-center text-black py-4 px-15 hover:opacity-90 transition text-sm md:text-base filter grayscale"
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