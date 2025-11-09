<script setup>
import { ref } from 'vue'

const email = ref('')
const handleNext = () => {
    alert(`Введённый email: ${email.value}`)
}
</script>

<template>
    <div class="text-white py-100 text-center bg-[url('/images/register_image.jpg')] bg-cover bg-center bg-no-repeat">
        <div class="bg-white text-black rounded-t-md md:p-10 max-w-[600px] mx-auto my-10 px-4">
            <div>
                <img src="" alt="">
                <p class="font-bold text-2xl mb-5">Укажите слой адрес электронной почты</p>
                <input type="text" id="userInput" placeholder="someone@example.com"
                    class=" my-5 w-full mt-5 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition" />
            </div>
            <div class="flex flex-col md:flex-row items-center  justify-end gap-4">
                <div class="bg-[#cccccc]">
                    <button class="p-3">Назад</button>
                </div>
                <div class="text-white bg-[#107c10]">
                    <button class="p-3">Вперед</button>
                </div>

            </div>
        </div>

    </div>
</template>
